import {
  Connection,
  Keypair,
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import BN from "bn.js";
import { expect } from "@jest/globals";
import { AccountTag, UserAccount, MarketState } from "../src/state";
import { createContext, initializeTraders } from "./utils/context";
import { signAndSendInstructions } from "@bonfida/utils";
import { Market } from "../src/market";
import { placeOrder, cancelOrder, settle } from "../src/bindings";
import { Side } from "@bonfida/aaob";
import { computeFp32Price } from "../src/utils";
import { DEX_ID } from "../src/ids";
import { OrderType, SelfTradeBehavior } from "../src/types";
import { AccountLayout } from "@solana/spl-token";
import { random } from "./utils/random";
import { checkTokenBalances } from "./utils/token-balances";

export const orderbookTest = async (
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
    random(maxUiTradeSize, 10 * maxUiTradeSize, true) *
    Math.pow(10, baseDecimals);
  const quoteTokenAmount =
    random(10 * maxUiTradeSize, maxPrice * (10 * maxUiTradeSize), true) *
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
  const marketState = await MarketState.retrieve(connection, marketKey);
  let market = await Market.load(connection, marketKey);
  const { bobBaseAta, bobQuoteAta } = await initializeTraders(
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

  const bidPrices = [minPrice / 2, random(minPrice / 2, minPrice), minPrice];

  const bidSizes = new Array(3)
    .fill(0)
    .map(() => random(minUiTradeSize, maxUiTradeSize, true));

  const askPrices = [minPrice * 2, random(2 * minPrice, maxPrice), maxPrice];

  const askSizes = new Array(3)
    .fill(0)
    .map(() => random(minUiTradeSize, maxUiTradeSize, true));

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
        Bob.publicKey
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

  let bids = market.parseBidsSlab(bidsSlab, 3);
  let asks = market.parseAsksSlab(asksSlab, 3);

  let totalBase = new BN(0);
  let totalQuote = new BN(0);

  for (let i = 0; i < 3; i++) {
    const bidFp32 = computeFp32Price(market, bidPrices[2 - i]);
    const askFp3 = computeFp32Price(market, askPrices[i]);

    expect(bids[i].priceRaw.toString()).toBe(bidFp32.toString());
    expect(bids[i].size.toString()).toBe(
      Math.floor(bidSizes[2 - i]).toString()
    );

    expect(asks[i].priceRaw.toString()).toBe(askFp3.toString());
    expect(asks[i].size.toString()).toBe(Math.floor(askSizes[i]).toString());

    totalBase = totalBase.add(new BN(askSizes[i]));
    totalQuote = totalQuote.add(
      bidFp32
        .mul(bids[i].size)
        .shrn(32)
        .mul(market.quoteCurrencyMultiplier)
        .div(market.baseCurrencyMultiplier)
    );
  }

  /**
   * Check user account
   */

  const [bobUa] = await PublicKey.findProgramAddress(
    [marketKey.toBuffer(), Bob.publicKey.toBuffer()],
    DEX_ID
  );
  let bobUserAccount = await UserAccount.retrieve(
    connection,
    bobUa,
    marketState
  );
  expect(bobUserAccount.tag).toBe(AccountTag.UserAccount);
  expect(bobUserAccount.market.toBase58()).toBe(marketKey.toBase58());
  expect(bobUserAccount.owner.toBase58()).toBe(Bob.publicKey.toBase58());
  expect(bobUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(bobUserAccount.baseTokenLocked.toNumber()).toBe(totalBase.toNumber());
  expect(bobUserAccount.quoteTokenFree.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenLocked.toString()).toBe(
    totalQuote.toString()
  );
  expect(bobUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(0);
  expect(bobUserAccount.orders.length).toBe(bidSizes.length + askSizes.length);

  /**
   * Check token accounts
   */

  checkTokenBalances(
    connection,
    bobBaseAta,
    new BN(baseTokenAmount).sub(totalBase)
  );
  checkTokenBalances(
    connection,
    bobQuoteAta,
    new BN(quoteTokenAmount).sub(totalQuote)
  );

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

  bids = market.parseBidsSlab(bidsSlab, 3);
  asks = market.parseAsksSlab(asksSlab, 3);

  expect(asks.length).toBe(0);
  expect(bids.length).toBe(0);

  /**
   * Check user account
   */

  bobUserAccount = await UserAccount.retrieve(connection, bobUa, marketState);
  expect(bobUserAccount.tag).toBe(AccountTag.UserAccount);
  expect(bobUserAccount.market.toBase58()).toBe(marketKey.toBase58());
  expect(bobUserAccount.owner.toBase58()).toBe(Bob.publicKey.toBase58());
  expect(bobUserAccount.baseTokenFree.toNumber()).toBe(totalBase.toNumber());
  expect(bobUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenFree.toString()).toBe(totalQuote.toString());
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

  bobUserAccount = await UserAccount.retrieve(connection, bobUa, marketState);
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

  expect(bobQuoteAccount.amount.toString()).toBe(quoteTokenAmount.toString());
  expect(bobBaseAccount.amount.toString()).toBe(baseTokenAmount.toString());
};
