import { signAndSendInstructions } from "@bonfida/utils";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import {
  placeOrder,
  settle,
  consumeEvents,
  cancelOrder,
  closeMarket,
  sweepFees,
  closeAccount,
} from "../src/bindings";
import BN from "bn.js";
import { expect } from "@jest/globals";
import { AccountTag, UserAccount, MarketState } from "../src/state";
import { DEX_ID } from "../src/ids";
import { AccountLayout } from "@solana/spl-token";
import { Side } from "@bonfida/aaob";
import { OrderType, SelfTradeBehavior } from "../src/types";
import { Market } from "../src/market";
import { createContext, initializeTraders } from "./utils/context";
import { computeTakerFee } from "./utils/fee";
import { SWEEP_AUTH } from "../src/ids";
import { computeFp32Price } from "../src/utils";

export const simpleTrade = async (
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

  const { aliceBaseAta, aliceQuoteAta, bobBaseAta, bobQuoteAta } =
    await initializeTraders(
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
   * Check
   */

  const [aliceUa] = await PublicKey.findProgramAddress(
    [marketKey.toBuffer(), Alice.publicKey.toBuffer()],
    DEX_ID
  );
  let aliceUserAccount = await UserAccount.retrieve(connection, aliceUa);

  expect(aliceUserAccount.tag).toBe(AccountTag.UserAccount);
  expect(aliceUserAccount.market.toBase58()).toBe(marketKey.toBase58());
  expect(aliceUserAccount.owner.toBase58()).toBe(Alice.publicKey.toBase58());
  expect(aliceUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.quoteTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.orders.length).toBe(0);

  const [bobUa] = await PublicKey.findProgramAddress(
    [marketKey.toBuffer(), Bob.publicKey.toBuffer()],
    DEX_ID
  );
  let bobUserAccount = await UserAccount.retrieve(connection, bobUa);
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
   * Place order
   */

  // Bid
  const aliceSize = Math.floor(Math.random() * Math.pow(10, 8));
  const alicePrice = 100_000 * Math.random();

  // Ask
  const bobSize = Math.floor((Math.random() * aliceSize) / 2);
  const bobPrice = (alicePrice * Math.random()) / 2;

  let market = await Market.load(connection, marketKey);

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
      Alice.publicKey,
      undefined,
      undefined,
      undefined,
      new BN(Number.MAX_SAFE_INTEGER)
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

  console.log(tx);
  const executionPrice = computeFp32Price(market, bobPrice).shrn(32);
  const takerFee = computeTakerFee(new BN(bobSize).mul(executionPrice));
  const orderPrice = computeFp32Price(market, alicePrice);

  /**
   * Check market state
   */

  let marketState = await MarketState.retrieve(connection, marketKey);
  expect(marketState.accumulatedFees.toNumber()).toBeCloseTo(
    takerFee.toNumber(),
    -1
  );
  expect(marketState.accumulatedRoyalties.toNumber()).toBe(0);
  expect(marketState.baseVolume.toNumber()).toBe(bobSize);
  expect(marketState.quoteVolume.toNumber()).toBe(
    new BN(bobSize).mul(executionPrice).toNumber()
  );

  /**
   * Check user accounts
   */

  aliceUserAccount = await UserAccount.retrieve(connection, aliceUa);
  expect(aliceUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.quoteTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.quoteTokenLocked.toNumber()).toBe(
    (aliceSize - bobSize) * orderPrice.shrn(32).toNumber()
  );
  expect(aliceUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(
    new BN(bobSize).mul(executionPrice).add(takerFee).toNumber()
  );
  expect(aliceUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(bobSize);
  expect(aliceUserAccount.orders.length).toBe(1);

  bobUserAccount = await UserAccount.retrieve(connection, bobUa);
  expect(bobUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(bobUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenFree.toNumber()).toBe(0);
  expect(bobUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(
    new BN(bobSize).mul(executionPrice).toNumber()
  );
  expect(bobUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(bobSize);
  expect(bobUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(0);
  expect(bobUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(0);
  expect(bobUserAccount.orders.length).toBe(0);

  /**
   * Check token accounts
   */
  let aliceQuoteRaw = await connection.getAccountInfo(aliceQuoteAta);
  const aliceBaseRaw = await connection.getAccountInfo(aliceBaseAta);

  if (!aliceQuoteRaw || !aliceBaseRaw) {
    throw new Error("Alice accounts not found");
  }

  let aliceQuoteAccount = AccountLayout.decode(aliceQuoteRaw.data);
  let aliceBaseAccount = AccountLayout.decode(aliceBaseRaw.data);

  expect(aliceBaseAccount.amount.toString()).toBe(
    (tokenAmount + bobSize).toString()
  );
  expect(aliceQuoteAccount.amount.toString()).toBe(
    new BN(tokenAmount)
      .sub(executionPrice.mul(new BN(bobSize)))
      .sub(orderPrice.mul(new BN(aliceSize - bobSize)).shrn(32))
      .sub(takerFee)
      .toString()
  );

  const bobQuoteRaw = await connection.getAccountInfo(bobQuoteAta);
  const bobBaseRaw = await connection.getAccountInfo(bobBaseAta);

  if (!bobQuoteRaw || !bobBaseRaw) {
    throw new Error("Bob accounts not found");
  }
  const bobQuoteAccount = AccountLayout.decode(bobQuoteRaw.data);
  const bobBaseAccount = AccountLayout.decode(bobBaseRaw.data);

  expect(bobQuoteAccount.amount.toString()).toBe(
    (tokenAmount + bobSize * executionPrice.toNumber()).toString()
  );
  expect(bobBaseAccount.amount.toString()).toBe(
    (tokenAmount - bobSize).toString()
  );

  /**
   * Alice cancels the order
   */

  tx = await signAndSendInstructions(connection, [Alice], feePayer, [
    await cancelOrder(market, Alice.publicKey, aliceUserAccount.orders[0].id),
  ]);
  console.log(`Canceled order ${tx}`);

  aliceUserAccount = await UserAccount.retrieve(connection, aliceUa);

  expect(aliceUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.quoteTokenFree.toNumber()).toBe(
    (aliceSize - bobSize) * orderPrice.shrn(32).toNumber()
  );
  expect(aliceUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(
    new BN(bobSize).mul(executionPrice).add(takerFee).toNumber()
  );
  expect(aliceUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(bobSize);
  expect(aliceUserAccount.orders.length).toBe(0);

  /**
   * Alice settles
   */

  tx = await signAndSendInstructions(connection, [Alice], feePayer, [
    await settle(market, Alice.publicKey, aliceBaseAta, aliceQuoteAta),
  ]);
  console.log(`Settle order ${tx}`);

  aliceUserAccount = await UserAccount.retrieve(connection, aliceUa);

  expect(aliceUserAccount.baseTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.baseTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.quoteTokenFree.toNumber()).toBe(0);
  expect(aliceUserAccount.quoteTokenLocked.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedRebates.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerQuoteVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedMakerBaseVolume.toNumber()).toBe(0);
  expect(aliceUserAccount.accumulatedTakerQuoteVolume.toNumber()).toBe(
    new BN(bobSize).mul(executionPrice).add(takerFee).toNumber()
  );
  expect(aliceUserAccount.accumulatedTakerBaseVolume.toNumber()).toBe(bobSize);
  expect(aliceUserAccount.orders.length).toBe(0);

  /**
   * Verify Alice token account
   */
  aliceQuoteRaw = await connection.getAccountInfo(aliceQuoteAta);
  if (!aliceQuoteRaw) {
    throw new Error("Could not retrieve aliceQuoteRaw");
  }
  aliceQuoteAccount = AccountLayout.decode(aliceQuoteRaw.data);

  expect(aliceQuoteAccount.amount.toString()).toBe(
    new BN(tokenAmount)
      .sub(executionPrice.mul(new BN(bobSize)))
      .sub(takerFee)
      .toString()
  );

  /**
   * Sweep fees
   */
  const sweepDestination = await quote.getAssociatedTokenAccount(SWEEP_AUTH);
  tx = await signAndSendInstructions(connection, [], feePayer, [
    await sweepFees(connection, market, sweepDestination),
  ]);
  console.log(`Sweep fees ${tx}`);

  const sweepRaw = await connection.getAccountInfo(sweepDestination);
  if (!sweepRaw) {
    throw new Error("Could not retrieve sweep auth account");
  }
  const sweepTokenAccount = AccountLayout.decode(sweepRaw.data);
  expect(sweepTokenAccount.amount.toString()).toBe(takerFee.toString());

  /**
   * Verify market state
   */
  marketState = await MarketState.retrieve(connection, marketKey);
  expect(marketState.accumulatedFees.toNumber()).toBe(0);
  expect(marketState.accumulatedRoyalties.toNumber()).toBe(0);

  /**
   * Check vaults
   */
  const baseVaultRaw = await connection.getAccountInfo(marketState.baseVault);
  const quoteVaultRaw = await connection.getAccountInfo(marketState.quoteVault);

  if (!baseVaultRaw || !quoteVaultRaw) {
    throw new Error("Could not retrieve vaults");
  }

  const baseVault = AccountLayout.decode(baseVaultRaw.data);
  const quoteVault = AccountLayout.decode(quoteVaultRaw.data);

  expect(baseVault.amount.toString()).toBe("0");
  expect(quoteVault.amount.toString()).toBe("0");

  /**
   * Close user accounts
   */
  tx = await signAndSendInstructions(connection, [Alice, Bob], feePayer, [
    await closeAccount(market.address, Alice.publicKey),
    await closeAccount(market.address, Bob.publicKey),
  ]);
  console.log(`Closed user account ${tx}`);

  /**
   * Close market
   */

  tx = await signAndSendInstructions(connection, [], feePayer, [
    await closeMarket(market, feePayer.publicKey),
  ]);
  console.log(`Market closed ${tx}`);
};
