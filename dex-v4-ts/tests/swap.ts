import { signAndSendInstructions } from "@bonfida/utils";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { placeOrder, consumeEvents, swap } from "../src/bindings";
import BN from "bn.js";
import { expect } from "@jest/globals";
import { UserAccount, MarketState } from "../src/state";
import { DEX_ID } from "../src/ids";
import { AccountLayout } from "@solana/spl-token";
import { Side } from "@bonfida/aaob";
import { OrderType, SelfTradeBehavior } from "../src/types";
import { Market } from "../src/market";
import { createContext, initializeTraders } from "./utils/context";
import { computeTakerFee } from "./utils/fee";
import { random } from "./utils/random";
import { computeFp32Price } from "../src/utils";
import { checkTokenBalances } from "./utils/token-balances";

export const swapTest = async (
  connection: Connection,
  feePayer: Keypair,
  baseDecimals: number,
  quoteDecimals: number,
  minPrice: number,
  maxPrice: number,
  minUiTradeSize: number,
  maxUiTradeSize: number,
  maxTickSize: number,
  baseCurrencyMultiplier?: BN,
  quoteCurrencyMultiplier?: BN
) => {
  const baseTokenAmount =
    random(maxUiTradeSize, 2 * maxUiTradeSize, true) *
    Math.pow(10, baseDecimals);
  const quoteTokenAmount =
    random(2 * maxUiTradeSize, maxPrice * (2 * maxUiTradeSize), true) *
    Math.pow(10, quoteDecimals);
  /**
   * Initialize market and traders
   */
  const tickSize = new BN(random(0, maxTickSize) * 2 ** 32);
  const minBaseOrderSize = new BN(1);
  const { marketKey, base, quote, Alice, Bob } = await createContext(
    connection,
    feePayer,
    tickSize,
    minBaseOrderSize,
    baseDecimals,
    quoteDecimals,
    baseCurrencyMultiplier,
    quoteCurrencyMultiplier
  );
  let marketState = await MarketState.retrieve(connection, marketKey);
  const { aliceBaseAta, bobBaseAta, bobQuoteAta } = await initializeTraders(
    connection,
    base,
    quote,
    Alice,
    Bob,
    feePayer,
    marketKey,
    baseTokenAmount,
    quoteTokenAmount
  );

  let market = await Market.load(connection, marketKey);

  /**
   * Alice places an ask
   */
  const swapSize =
    Math.pow(10, baseDecimals) * random(minUiTradeSize, maxUiTradeSize, true);
  const swapPrice = random(minPrice, maxPrice);
  console.log(swapSize, swapPrice);
  let tx = await signAndSendInstructions(connection, [Alice], feePayer, [
    await placeOrder(
      market,
      Side.Ask,
      swapPrice,
      swapSize,
      OrderType.Limit,
      SelfTradeBehavior.AbortTransaction,
      aliceBaseAta,
      Alice.publicKey
    ),
  ]);
  console.log(`Alice placed order ${tx}`);

  /**
   * Check user account
   */
  const [bobUa] = await PublicKey.findProgramAddress(
    [marketKey.toBuffer(), Bob.publicKey.toBuffer()],
    DEX_ID
  );
  const [aliceUa] = await PublicKey.findProgramAddress(
    [marketKey.toBuffer(), Alice.publicKey.toBuffer()],
    DEX_ID
  );
  let aliceUserAccount = await UserAccount.retrieve(
    connection,
    aliceUa,
    marketState
  );
  expect(aliceUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.baseTokenLocked.toNumber()).toBe(swapSize);
  expect(aliceUserAccount.quoteTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.orders.length).toBe(1);

  /**
   * Check token account
   */
  checkTokenBalances(
    connection,
    aliceBaseAta,
    new BN(baseTokenAmount - swapSize)
  );

  /**
   * Bob swaps against Alice
   */
  console.log("swap size", swapSize);
  tx = await signAndSendInstructions(connection, [Bob], feePayer, [
    await swap(
      market,
      Side.Bid,
      swapSize,
      quoteTokenAmount,
      SelfTradeBehavior.AbortTransaction,
      bobBaseAta,
      bobQuoteAta,
      Bob.publicKey
    ),
    await consumeEvents(
      market,
      feePayer.publicKey,
      [aliceUa, bobUa],
      new BN(10),
      new BN(1)
    ),
  ]);
  console.log(`Bob swapped ${tx}`);

  const executionPrice = computeFp32Price(market, swapPrice);
  const takerFees = computeTakerFee(
    new BN(swapSize).mul(executionPrice).shrn(32)
  )
    .mul(market.quoteCurrencyMultiplier)
    .div(market.baseCurrencyMultiplier);

  /**
   * Check market state
   */

  marketState = await MarketState.retrieve(connection, marketKey);
  expect(marketState.accumulatedFees.toNumber()).toBe(takerFees.toNumber());
  expect(marketState.accumulatedRoyalties.toNumber()).toBe(0);
  expect(marketState.baseVolume.toNumber()).toBe(swapSize);
  expect(marketState.quoteVolume.toNumber()).toBe(
    new BN(swapSize)
      .mul(executionPrice)
      .shrn(32)
      .mul(market.quoteCurrencyMultiplier)
      .div(market.baseCurrencyMultiplier)
      .toNumber()
  );

  /**
   * Verify Bob token accounts
   */
  const bobQuoteRaw = await connection.getAccountInfo(bobQuoteAta);
  const bobBaseRaw = await connection.getAccountInfo(bobBaseAta);

  if (!bobQuoteRaw || !bobBaseRaw) {
    throw new Error("Bob accounts not found");
  }
  const bobQuoteAccount = AccountLayout.decode(bobQuoteRaw.data);
  const bobBaseAccount = AccountLayout.decode(bobBaseRaw.data);

  expect(bobQuoteAccount.amount.toString()).toBe(
    new BN(quoteTokenAmount)
      .sub(
        new BN(swapSize)
          .mul(executionPrice)
          .shrn(32)
          .mul(market.quoteCurrencyMultiplier)
          .div(market.baseCurrencyMultiplier)
      )
      .sub(takerFees)
      .toString()
  );
  expect(bobBaseAccount.amount.toString()).toBe(
    (baseTokenAmount + swapSize).toString()
  );

  /**
   * Verify Alice user account
   */
  aliceUserAccount = await UserAccount.retrieve(
    connection,
    aliceUa,
    marketState
  );
  expect(aliceUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.quoteTokenFree.toNumber()).toBe(
    new BN(swapSize)
      .mul(executionPrice)
      .shrn(32)
      .mul(market.quoteCurrencyMultiplier)
      .div(market.baseCurrencyMultiplier)
      .toNumber()
  );
  expect(aliceUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(
    new BN(swapSize)
      .mul(executionPrice)
      .shrn(32)
      .mul(market.quoteCurrencyMultiplier)
      .div(market.baseCurrencyMultiplier)
      .toNumber()
  );
  expect(aliceUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(
    new BN(swapSize).toNumber()
  );
  expect(aliceUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.orders.length).toBe(0);
};
