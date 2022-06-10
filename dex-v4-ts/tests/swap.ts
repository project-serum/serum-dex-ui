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

export const swapTest = async (
  connection: Connection,
  feePayer: Keypair,
  baseDecimals: number,
  quoteDecimals: number
) => {
  const tokenAmount = 10_000_000 * Math.pow(10, 6);
  /**
   * Initialize market and traders
   */
  const tickSize = new BN(2 ** 32);
  const minBaseOrderSize = new BN(1);
  const { marketKey, base, quote, Alice, Bob } = await createContext(
    connection,
    feePayer,
    tickSize,
    minBaseOrderSize,
    baseDecimals,
    quoteDecimals
  );

  const { aliceBaseAta, bobBaseAta, bobQuoteAta } = await initializeTraders(
    connection,
    base,
    quote,
    Alice,
    Bob,
    feePayer,
    marketKey,
    tokenAmount
  );

  let market = await Market.load(connection, marketKey);

  /**
   * Alice places an ask
   */
  const swapSize = Math.floor(Math.random() * Math.pow(10, 8));
  const swapPrice = 100_000 * Math.random();

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
  let aliceUserAccount = await UserAccount.retrieve(connection, aliceUa);
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
   * Bob swaps against Alice
   */
  tx = await signAndSendInstructions(connection, [Bob], feePayer, [
    await swap(
      market,
      Side.Bid,
      swapSize,
      tokenAmount,
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

  const executionPrice = new BN(swapPrice).mul(new BN(Math.pow(2, 32)));
  const takerFees = computeTakerFee(
    new BN(swapSize).mul(executionPrice.shrn(32))
  );

  /**
   * Check market state
   */

  const marketState = await MarketState.retrieve(connection, marketKey);
  expect(marketState.accumulatedFees.toNumber()).toBe(takerFees.toNumber());
  expect(marketState.accumulatedRoyalties.toNumber()).toBe(0);
  expect(marketState.baseVolume.toNumber()).toBe(swapSize);
  expect(marketState.quoteVolume.toNumber()).toBe(
    new BN(swapSize).mul(executionPrice.shrn(32)).toNumber()
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
    new BN(tokenAmount)
      .sub(new BN(swapSize).mul(executionPrice).shrn(32))
      .sub(takerFees)
      .toString()
  );
  expect(bobBaseAccount.amount.toString()).toBe(
    (tokenAmount + swapSize).toString()
  );

  /**
   * Verify Alice user account
   */
  aliceUserAccount = await UserAccount.retrieve(connection, aliceUa);
  expect(aliceUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.quoteTokenFree.toNumber()).toBe(
    new BN(swapSize).mul(executionPrice).shrn(32).toNumber()
  );
  expect(aliceUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(
    new BN(swapSize).mul(executionPrice).shrn(32).toNumber()
  );
  expect(aliceUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(
    new BN(swapSize).toNumber()
  );
  expect(aliceUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.orders.length).toBe(0);
};
