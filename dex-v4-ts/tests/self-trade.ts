import { signAndSendInstructions } from "@bonfida/utils";
import {
  Connection,
  Keypair,
  TransactionInstruction,
  SendTransactionError,
} from "@solana/web3.js";
import { placeOrder, settle, consumeEvents } from "../src/bindings";
import BN from "bn.js";
import { expect } from "@jest/globals";
import { AccountTag, UserAccount } from "../src/state";
import { Side } from "@bonfida/aaob";
import { OrderType, SelfTradeBehavior } from "../src/types";
import { Market } from "../src/market";
import { createContext, initializeTraders } from "./utils/context";
import { computeFp32Price } from "../src/utils";
import { computeTakerFee } from "./utils/fee";

export const selfTradeTest = async (
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

  const {
    aliceBaseAta,
    aliceQuoteAta,
    bobBaseAta,
    bobQuoteAta,
    bobUa,
    aliceUa,
  } = await initializeTraders(
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
   * Building the following orderbook
   *
   * Bids:
   *     - bids_1 @ bidPrice_1 (by Bob)
   *     - bids_2 @ bidPrice_2 (by Alice)
   *     - bids_3 @ bidPrice_3 (by Bob)
   *
   * With bidsPrice_1 < bidPrice_2 < bidPrice_3
   */

  const minBid = Math.random() * 100_000;
  const maxBid = minBid + 40_000 * Math.random();

  const bidPrices = [
    minBid,
    minBid + (maxBid - minBid) * Math.random(),
    maxBid,
  ];
  const bidSizes = new Array(3)
    .fill(0)
    .map((e) => Math.floor(Math.random() * Math.pow(10, 8)));

  /**
   * Place orders
   */

  let ixs: TransactionInstruction[] = [];

  ixs.push(
    await placeOrder(
      market,
      Side.Bid,
      bidPrices[0],
      bidSizes[0],
      OrderType.Limit,
      SelfTradeBehavior.AbortTransaction,
      bobQuoteAta,
      Bob.publicKey,
      undefined,
      undefined,
      undefined,
      new BN(Number.MAX_SAFE_INTEGER)
    ),
    await placeOrder(
      market,
      Side.Bid,
      bidPrices[1],
      bidSizes[1],
      OrderType.Limit,
      SelfTradeBehavior.AbortTransaction,
      aliceQuoteAta,
      Alice.publicKey,
      undefined,
      undefined,
      undefined,
      new BN(Number.MAX_SAFE_INTEGER)
    ),
    await placeOrder(
      market,
      Side.Bid,
      bidPrices[2],
      bidSizes[2],
      OrderType.Limit,
      SelfTradeBehavior.AbortTransaction,
      bobQuoteAta,
      Bob.publicKey,
      undefined,
      undefined,
      undefined,
      new BN(Number.MAX_SAFE_INTEGER)
    )
  );

  let tx = await signAndSendInstructions(
    connection,
    [Bob, Alice],
    feePayer,
    ixs
  );
  console.log(`Orders placed ${tx}`);

  /**
   * SelfTradeBehavior.AbortTransaction
   */
  const askSize = bidSizes.reduce((acc, x) => acc + x, 0);
  const abortTx = async () => {
    return await signAndSendInstructions(connection, [Alice], feePayer, [
      await placeOrder(
        market,
        Side.Ask,
        1,
        askSize,
        OrderType.Limit,
        SelfTradeBehavior.AbortTransaction,
        aliceBaseAta,
        Alice.publicKey,
        undefined,
        undefined,
        undefined,
        new BN(Number.MAX_SAFE_INTEGER)
      ),
    ]);
  };

  await expect(abortTx()).rejects.toThrow(SendTransactionError);
  console.log(`Abort tx success`);

  /**
   * SelfTradeBehavior.CancelProvide
   */
  tx = await signAndSendInstructions(connection, [Alice], feePayer, [
    await placeOrder(
      market,
      Side.Ask,
      1,
      askSize,
      OrderType.Limit,
      SelfTradeBehavior.CancelProvide,
      aliceBaseAta,
      Alice.publicKey,
      undefined,
      undefined,
      undefined,
      new BN(Number.MAX_SAFE_INTEGER)
    ),
    await consumeEvents(
      market,
      feePayer.publicKey,
      [bobUa, aliceUa],
      new BN(10),
      new BN(1)
    ),
  ]);

  const executionPrice1 = computeFp32Price(market, bidPrices[0]);
  const executionPrice2 = computeFp32Price(market, bidPrices[1]);
  const executionPrice3 = computeFp32Price(market, bidPrices[2]);

  /**
   * Verify orderbook
   */
  let bidsSlab = await market.loadBids(connection);
  let asksSlab = await market.loadAsks(connection);

  let bids = bidsSlab.getL2DepthJS(3, false);
  let asks = asksSlab.getL2DepthJS(3, true);

  expect(bids.length).toBe(0);
  expect(asks.length).toBe(1);
  expect(asks[0].price).toBe(computeFp32Price(market, 1).toNumber());
  expect(asks[0].size).toBeCloseTo(bidSizes[1], -1);

  /**
   * Verify user account
   */

  // Alice
  let aliceUserAccount = await UserAccount.retrieve(connection, aliceUa);
  const quoteTokenFree = new BN(bidSizes[0])
    .mul(executionPrice1)
    .add(new BN(bidSizes[2]).mul(executionPrice3))
    .add(new BN(bidSizes[1]).mul(executionPrice2))
    .shrn(32);

  expect(aliceUserAccount.tag).toBe(AccountTag.UserAccount);
  expect(aliceUserAccount.market.toBase58()).toBe(marketKey.toBase58());
  expect(aliceUserAccount.owner.toBase58()).toBe(Alice.publicKey.toBase58());
  expect(aliceUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.baseTokenLocked.toNumber()).toBeCloseTo(
    bidSizes[1],
    -1
  );
  expect(aliceUserAccount.quoteTokenFree.toNumber()).toBeCloseTo(
    quoteTokenFree
      .sub(computeTakerFee(quoteTokenFree))
      // Fees not charged on the order canceled
      .add(computeTakerFee(new BN(bidSizes[1]).mul(executionPrice2).shrn(32)))
      .toNumber(),
    -1
  );
  expect(aliceUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(
    new BN(bidSizes[0]).mul(executionPrice1).shrn(32).toNumber() +
      new BN(bidSizes[2]).mul(executionPrice3).shrn(32).toNumber()
  );
  expect(aliceUserAccount.accumulatedTakerBaseVolume.toNumber()).toBeCloseTo(
    bidSizes[0] + bidSizes[2],
    -1
  );
  expect(aliceUserAccount.orders.length).toBe(1);

  // Bob

  let bobUserAccount = await UserAccount.retrieve(connection, bobUa);

  expect(bobUserAccount.tag).toBe(AccountTag.UserAccount);
  expect(bobUserAccount.market.toBase58()).toBe(marketKey.toBase58());
  expect(bobUserAccount.owner.toBase58()).toBe(Bob.publicKey.toBase58());
  expect(bobUserAccount.baseTokenFree.toNumber()).toBeCloseTo(
    bidSizes[0] + bidSizes[2],
    -1
  );
  expect(bobUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenFree.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(
    new BN(bidSizes[0]).mul(executionPrice1).shrn(32).toNumber() +
      new BN(bidSizes[2]).mul(executionPrice3).shrn(32).toNumber()
  );
  expect(bobUserAccount.accumulatedMakerBaseVolume.toNumber()).toBeCloseTo(
    bidSizes[0] + bidSizes[2],
    -1
  );
  expect(bobUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(0);
  expect(bobUserAccount.orders.length).toBe(0);

  // Settle everything
  tx = await signAndSendInstructions(connection, [Alice, Bob], feePayer, [
    await settle(market, Alice.publicKey, aliceBaseAta, aliceQuoteAta),
    await settle(market, Bob.publicKey, bobBaseAta, bobQuoteAta),
  ]);
  console.log(`Settle ${tx}`);

  /**
   * SelfTradeBehavior.DecrementTake
   *
   * (The orderbook is now only made of Bob's ask of bids_2 @ 1)
   * Alice will place an additional order at the same price
   * Then Bob takes 2 * bids_2 @ 2
   */

  tx = await signAndSendInstructions(connection, [Alice], feePayer, [
    await placeOrder(
      market,
      Side.Ask,
      1,
      bidSizes[1],
      OrderType.Limit,
      SelfTradeBehavior.AbortTransaction,
      aliceBaseAta,
      Alice.publicKey
    ),
  ]);
  console.log(`Alice added ask ${tx}`);

  bidsSlab = await market.loadBids(connection);
  asksSlab = await market.loadAsks(connection);

  bids = bidsSlab.getL2DepthJS(3, false);
  asks = asksSlab.getL2DepthJS(3, true);

  tx = await signAndSendInstructions(connection, [Bob], feePayer, [
    await placeOrder(
      market,
      Side.Bid,
      2,
      bidSizes[1] * 2,
      OrderType.Limit,
      SelfTradeBehavior.DecrementTake,
      bobQuoteAta,
      Bob.publicKey
    ),
  ]);
  console.log(tx);

  bidsSlab = await market.loadBids(connection);
  asksSlab = await market.loadAsks(connection);

  bids = bidsSlab.getL2DepthJS(3, false);
  asks = asksSlab.getL2DepthJS(3, true);

  expect(bids.length).toBe(0);
  expect(asks.length).toBe(0);

  /**
   * Verify user account
   */

  // Bob
  bobUserAccount = await UserAccount.retrieve(connection, bobUa);
  const takerVolume = new BN(2 * bidSizes[1]).mul(
    computeFp32Price(market, 1).shrn(32)
  );

  expect(bobUserAccount.baseTokenFree.toNumber()).toBeCloseTo(
    2 * bidSizes[1],
    -1
  );
  expect(bobUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenFree.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(
    new BN(bidSizes[0]).mul(executionPrice1).shrn(32).toNumber() +
      new BN(bidSizes[2]).mul(executionPrice3).shrn(32).toNumber()
  );
  expect(bobUserAccount.accumulatedMakerBaseVolume.toNumber()).toBeCloseTo(
    bidSizes[0] + bidSizes[2],
    -1
  );
  expect(bobUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(
    bidSizes[1] * 2
  );
  expect(bobUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(
    takerVolume.add(computeTakerFee(takerVolume)).toNumber()
  );
  expect(bobUserAccount.orders.length).toBe(0);
};
