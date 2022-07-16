// Test a few things that should error
import { expect } from "@jest/globals";
import { createContext } from "./utils/context";
import { signAndSendInstructions } from "@bonfida/utils";
import { Connection, Keypair, SendTransactionError } from "@solana/web3.js";
import BN from "bn.js";
import {
  initializeAccount,
  placeOrder,
  consumeEvents,
  closeAccount,
} from "../src/bindings";
import { Market } from "../src/market";
import { OrderType, SelfTradeBehavior } from "../src/types";
import { Side } from "@bonfida/aaob";
import { random } from "./utils/random";

export const error = async (connection: Connection, feePayer: Keypair) => {
  const tickSize = new BN(random(0, 5) * 2 ** 32);
  const minBaseOrderSize = new BN(1);
  const { marketKey, base, quote, Alice, Bob } = await createContext(
    connection,
    feePayer,
    tickSize,
    minBaseOrderSize,
    6,
    6
  );
  let market = await Market.load(connection, marketKey);

  const tokenAmount = 10_000 * Math.pow(10, 6);

  const aliceBaseAta = await base.getAssociatedTokenAccount(Alice.publicKey);
  const aliceQuoteAta = await quote.getAssociatedTokenAccount(Alice.publicKey);

  const bobBaseAta = await base.getAssociatedTokenAccount(Bob.publicKey);
  const bobQuoteAta = await quote.getAssociatedTokenAccount(Bob.publicKey);

  base.mintInto(aliceBaseAta, tokenAmount);
  quote.mintInto(aliceQuoteAta, tokenAmount);

  base.mintInto(bobBaseAta, tokenAmount);
  quote.mintInto(bobQuoteAta, tokenAmount);

  // Create user accounts with 1 capacity
  await signAndSendInstructions(connection, [Alice], feePayer, [
    await initializeAccount(marketKey, Alice.publicKey, 1, feePayer.publicKey),
  ]);

  const failOrder = async () => {
    return await signAndSendInstructions(connection, [Alice], feePayer, [
      await placeOrder(
        market,
        Side.Ask,
        10_000,
        Math.random() * Math.pow(10, 5),
        OrderType.Limit,
        SelfTradeBehavior.AbortTransaction,
        aliceBaseAta,
        Alice.publicKey
      ),
      await placeOrder(
        market,
        Side.Ask,
        10_000,
        Math.random() * Math.pow(10, 5),
        OrderType.Limit,
        SelfTradeBehavior.AbortTransaction,
        aliceBaseAta,
        Alice.publicKey
      ),
    ]);
  };
  await expect(failOrder()).rejects.toThrow(SendTransactionError);

  // Consume 0 events
  const failConsumeEvent = async () => {
    return await signAndSendInstructions(connection, [], feePayer, [
      await consumeEvents(
        market,
        feePayer.publicKey,
        [Bob.publicKey],
        new BN(10),
        new BN(1)
      ),
    ]);
  };
  await expect(failConsumeEvent()).rejects.toThrow(SendTransactionError);

  // Post only
  await signAndSendInstructions(connection, [Bob, Alice], feePayer, [
    await initializeAccount(marketKey, Bob.publicKey, 20, feePayer.publicKey),
    await placeOrder(
      market,
      Side.Ask,
      10_000,
      Math.random() * Math.pow(10, 5),
      OrderType.Limit,
      SelfTradeBehavior.AbortTransaction,
      aliceBaseAta,
      Alice.publicKey
    ),
  ]);

  const failPostOnly = async () => {
    await signAndSendInstructions(connection, [Bob], feePayer, [
      await placeOrder(
        market,
        Side.Bid,
        2 * 10_000,
        Math.random() * Math.pow(10, 5),
        OrderType.PostOnly,
        SelfTradeBehavior.AbortTransaction,
        bobQuoteAta,
        Bob.publicKey
      ),
    ]);
  };
  await expect(failPostOnly()).rejects.toThrow(SendTransactionError);

  // Close account
  const failCloseAccount = async () => {
    return await signAndSendInstructions(connection, [Alice], feePayer, [
      await closeAccount(market.address, Alice.publicKey),
    ]);
  };
  await expect(failCloseAccount()).rejects.toThrow(SendTransactionError);
};
