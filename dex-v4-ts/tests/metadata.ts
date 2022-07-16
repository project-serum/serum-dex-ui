import { signAndSendInstructions } from "@bonfida/utils";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { placeOrder, settle, consumeEvents, sweepFees } from "../src/bindings";
import BN from "bn.js";
import { expect } from "@jest/globals";
import { MarketState } from "../src/state";
import { DEX_ID } from "../src/ids";
import { Side } from "@bonfida/aaob";
import { OrderType, SelfTradeBehavior } from "../src/types";
import { Market } from "../src/market";
import { createContext, initializeTraders } from "./utils/context";
import { computeTakerFee, computeRoyalties } from "./utils/fee";
import { computeFp32Price } from "../src/utils";
import { random } from "./utils/random";
import { SWEEP_AUTH } from "../src/ids";
import { checkTokenBalances } from "./utils/token-balances";

export const metadataTest = async (
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
    quoteCurrencyMultiplier,
    [{ key: feePayer, share: 100 }],
    500 // 5%
  );
  let marketState = await MarketState.retrieve(connection, marketKey);
  const { aliceBaseAta, aliceQuoteAta, bobBaseAta, bobQuoteAta } =
    await initializeTraders(
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

  /**
   * Check market state
   */
  expect(marketState.accumulatedFees.toNumber()).toBeCloseTo(0);
  expect(marketState.accumulatedRoyalties.toNumber()).toBe(0);
  expect(marketState.baseVolume.toNumber()).toBe(0);
  expect(marketState.quoteVolume.toNumber()).toBe(0);
  expect(marketState.royaltiesBps.toNumber()).toBe(500);

  /**
   * Place order
   */
  const [bobUa] = await PublicKey.findProgramAddress(
    [marketKey.toBuffer(), Bob.publicKey.toBuffer()],
    DEX_ID
  );
  const [aliceUa] = await PublicKey.findProgramAddress(
    [marketKey.toBuffer(), Alice.publicKey.toBuffer()],
    DEX_ID
  );

  let market = await Market.load(connection, marketKey);

  // Bid
  const aliceSize =
    Math.pow(10, baseDecimals) * random(minUiTradeSize, maxUiTradeSize, true);
  const alicePrice = random(minPrice, maxPrice);

  // Ask
  const bobSize = Math.floor(aliceSize / 2);
  const bobPrice = alicePrice / 2;

  console.log(`aliceSize: ${aliceSize} - alicePrice: ${alicePrice}`);
  console.log(`bobSize: ${bobSize} - bobPrice: ${bobPrice}`);

  let tx = await signAndSendInstructions(connection, [Alice, Bob], feePayer, [
    await placeOrder(
      market,
      Side.Ask,
      bobPrice,
      bobSize,
      OrderType.Limit,
      SelfTradeBehavior.AbortTransaction,
      bobBaseAta,
      Bob.publicKey
    ),
    await placeOrder(
      market,
      Side.Bid,
      alicePrice,
      aliceSize,
      OrderType.Limit,
      SelfTradeBehavior.AbortTransaction,
      aliceQuoteAta,
      Alice.publicKey
    ),
    await consumeEvents(
      market,
      feePayer.publicKey,
      [aliceUa, bobUa],
      new BN(10),
      new BN(1)
    ),
    await settle(market, Alice.publicKey, aliceBaseAta, aliceQuoteAta),
    await settle(market, Bob.publicKey, bobBaseAta, bobQuoteAta),
  ]);
  console.log(`Transaction ${tx}`);

  const executionPrice = computeFp32Price(market, bobPrice);
  const takerFee = computeTakerFee(new BN(bobSize).mul(executionPrice).shrn(32))
    .mul(market.quoteCurrencyMultiplier)
    .div(market.baseCurrencyMultiplier);

  const royalties = computeRoyalties(
    new BN(bobSize).mul(executionPrice).shrn(32),
    marketState.royaltiesBps
  );

  marketState = await MarketState.retrieve(connection, marketKey);

  console.log(`Taker fee ${takerFee.toNumber()}`);
  console.log(marketState.accumulatedFees.toNumber());

  console.log("royalties", royalties.toNumber());
  console.log(marketState.accumulatedRoyalties.toNumber());

  expect(marketState.accumulatedFees.toNumber()).toBeCloseTo(
    takerFee.toNumber()
  );
  expect(marketState.accumulatedRoyalties.toNumber()).toBeCloseTo(
    royalties.toNumber(),
    -2
  );

  /**
   * Sweep fees
   */
  const sweepDestination = await quote.getAssociatedTokenAccount(SWEEP_AUTH);
  const creatorDestination = await quote.getAssociatedTokenAccount(
    feePayer.publicKey
  );
  tx = await signAndSendInstructions(
    connection,
    [],
    feePayer,
    await sweepFees(connection, market, sweepDestination, feePayer.publicKey)
  );
  console.log(`Sweep fees ${tx}`);
  await checkTokenBalances(connection, sweepDestination, takerFee);
  await checkTokenBalances(
    connection,
    creatorDestination,
    marketState.accumulatedRoyalties
  );
};
