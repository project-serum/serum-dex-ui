import {
  Connection,
  Keypair,
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import BN from "bn.js";
import { expect } from "@jest/globals";
import { AccountTag, UserAccount } from "../src/state";
import { createContext, initializeTraders } from "./utils/context";
import { signAndSendInstructions } from "@bonfida/utils";
import { Market } from "../src/market";
import { placeOrder, cancelOrder, settle } from "../src/bindings";
import { Side } from "@bonfida/aaob";
import { computeFp32Price } from "../src/utils";
import { DEX_ID } from "../src/ids";
import { OrderType, SelfTradeBehavior } from "../src/types";
import { AccountLayout } from "@solana/spl-token";

export const orderbookTest = async (
  connection: Connection,
  feePayer: Keypair,
  baseDecimals: number,
  quoteDecimals: number
) => {
  const tokenAmount = 100_000_000 * Math.pow(10, 6);
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
  let market = await Market.load(connection, marketKey);
  const { bobBaseAta, bobQuoteAta } = await initializeTraders(
    connection,
    base,
    quote,
    Alice,
    Bob,
    feePayer,
    marketKey,
    tokenAmount
  );

  /**
   * Building the following orderbook
   *
   * Bids:
   *     - bids_1 @ bidPrice_1
   *     - bids_2 @ bidPrice_2
   *     - bids_3 @ bidPrice_3
   *
   * With bidsPrice_1 < bidPrice_2 < bidPrice_3
   *
   * Asks:
   *     - asks_1 @ askPrice_1
   *     - asks_2 @ askPrice_2
   *     - asks_3 @ askPrice_3
   *
   * With askPrice_1 < askPrice_2 < askPrice_3
   *
   */

  const minBid = Math.random() * 100_000;
  const maxBid = minBid + 40_000 * Math.random();

  const minAsk = maxBid + 10_000 * Math.random();
  const maxAsk = minAsk + 100_000 * Math.random();

  const bidPrices = [
    minBid,
    minBid + (maxBid - minBid) * Math.random(),
    maxBid,
  ];
  const bidSizes = new Array(3)
    .fill(0)
    .map((e) => Math.floor(Math.random() * Math.pow(10, 8)));

  const askPrices = [
    minAsk,
    minAsk + (maxAsk - minAsk) * Math.random(),
    maxAsk,
  ];
  const askSizes = new Array(3)
    .fill(0)
    .map((e) => Math.floor(Math.random() * Math.pow(10, 8)));

  /**
   * Place orders
   */

  let ixs: TransactionInstruction[] = [];
  for (let i = 0; i < 3; i++) {
    ixs.push(
      await placeOrder(
        market,
        Side.Bid,
        bidPrices[i],
        bidSizes[i],
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
        Side.Ask,
        askPrices[i],
        askSizes[i],
        OrderType.Limit,
        SelfTradeBehavior.AbortTransaction,
        bobBaseAta,
        Bob.publicKey
      )
    );
  }
  let tx = await signAndSendInstructions(connection, [Bob], feePayer, ixs);
  console.log(`Order placed ${tx}`);

  let asksSlab = await market.loadAsks(connection);
  let bidsSlab = await market.loadBids(connection);

  let asks = asksSlab.getL2DepthJS(3, true);
  let bids = bidsSlab.getL2DepthJS(3, false);
  console.log(asks, askPrices, askSizes);
  console.log(bids, bidPrices, bidSizes);

  let totalBase = new BN(0);
  let totalQuote = new BN(0);

  for (let i = 0; i < 3; i++) {
    const bidFp32 = computeFp32Price(market, bidPrices[2 - i]);
    const askFp3 = computeFp32Price(market, askPrices[i]);

    expect(bids[i].price).toBe(bidFp32.toNumber());
    expect(bids[i].size).toBe(Math.floor(bidSizes[2 - i]));

    expect(asks[i].price).toBe(askFp3.toNumber());
    expect(asks[i].size).toBe(Math.floor(askSizes[i]));

    totalBase = totalBase.add(new BN(askSizes[i]));
    totalQuote = totalQuote.add(bidFp32.mul(new BN(bids[i].size)).shrn(32));
  }

  /**
   * Check user account
   */

  const [bobUa] = await PublicKey.findProgramAddress(
    [marketKey.toBuffer(), Bob.publicKey.toBuffer()],
    DEX_ID
  );
  let bobUserAccount = await UserAccount.retrieve(connection, bobUa);
  expect(bobUserAccount.tag).toBe(AccountTag.UserAccount);
  expect(bobUserAccount.market.toBase58()).toBe(marketKey.toBase58());
  expect(bobUserAccount.owner.toBase58()).toBe(Bob.publicKey.toBase58());
  expect(bobUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(bobUserAccount.baseTokenLocked.toNumber()).toBe(totalBase.toNumber());
  expect(bobUserAccount.quoteTokenFree.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenLocked.toNumber()).toBe(
    totalQuote.toNumber()
  );
  expect(bobUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(0);
  expect(bobUserAccount.orders.length).toBe(bidSizes.length + askSizes.length);

  /**
   * Cancel order
   */

  ixs = [];

  let index = 0;
  for (let order of bobUserAccount.orders) {
    ixs.push(await cancelOrder(market, Bob.publicKey, order.id, new BN(index)));
    index++;
  }
  ixs.reverse();
  tx = await signAndSendInstructions(connection, [Bob], feePayer, ixs);
  console.log(`Orders cancelled ${tx}`);

  asksSlab = await market.loadAsks(connection);
  bidsSlab = await market.loadBids(connection);

  asks = asksSlab.getL2DepthJS(3, true);
  bids = bidsSlab.getL2DepthJS(3, false);

  expect(asks.length).toBe(0);
  expect(bids.length).toBe(0);

  /**
   * Check user account
   */

  bobUserAccount = await UserAccount.retrieve(connection, bobUa);
  expect(bobUserAccount.tag).toBe(AccountTag.UserAccount);
  expect(bobUserAccount.market.toBase58()).toBe(marketKey.toBase58());
  expect(bobUserAccount.owner.toBase58()).toBe(Bob.publicKey.toBase58());
  expect(bobUserAccount.baseTokenFree.toNumber()).toBe(totalBase.toNumber());
  expect(bobUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenFree.toNumber()).toBe(totalQuote.toNumber());
  expect(bobUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(0);
  expect(bobUserAccount.orders.length).toBe(0);

  /**
   * Settle
   */
  tx = await signAndSendInstructions(connection, [Bob], feePayer, [
    await settle(market, Bob.publicKey, bobBaseAta, bobQuoteAta),
  ]);
  console.log(`Settled ${tx}`);

  bobUserAccount = await UserAccount.retrieve(connection, bobUa);
  expect(bobUserAccount.tag).toBe(AccountTag.UserAccount);
  expect(bobUserAccount.market.toBase58()).toBe(marketKey.toBase58());
  expect(bobUserAccount.owner.toBase58()).toBe(Bob.publicKey.toBase58());
  expect(bobUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(bobUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenFree.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(0);
  expect(bobUserAccount.orders.length).toBe(0);

  /**
   * Check token accounts
   */
  const bobQuoteRaw = await connection.getAccountInfo(bobQuoteAta);
  const bobBaseRaw = await connection.getAccountInfo(bobBaseAta);

  if (!bobQuoteRaw || !bobBaseRaw) {
    throw new Error("Bob accounts not found");
  }
  const bobQuoteAccount = AccountLayout.decode(bobQuoteRaw.data);
  const bobBaseAccount = AccountLayout.decode(bobBaseRaw.data);

  expect(bobQuoteAccount.amount.toString()).toBe(tokenAmount.toString());
  expect(bobBaseAccount.amount.toString()).toBe(tokenAmount.toString());
};
