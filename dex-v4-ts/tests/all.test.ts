/**
 * Running all the tests requires quite a lot of SOL
 */

import { beforeAll, jest, test } from "@jest/globals";
import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { initializePayer } from "./utils/validator";
import { createMarketTest } from "./create-market";
import { simpleTrade } from "./simple-trade";
import { error } from "./error";
import { swapTest } from "./swap";
import { orderbookTest } from "./orderbook";
import { selfTradeTest } from "./self-trade";
import BN from "bn.js";
import { metadataTest } from "./metadata";

// Global state initialized once in test startup and cleaned up at test
// teardown.
let connection: Connection;
let feePayer: Keypair;
let payerKeyFile: string;

beforeAll(async () => {
  connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  [feePayer, payerKeyFile] = await initializePayer(connection);
  console.log("Fee payer", feePayer.publicKey.toBase58());
});

jest.setTimeout(50_000_000);

// test("Create market", async () => {
//   await createMarketTest(connection, feePayer);
// });

// test("Simple trade", async () => {
//   await simpleTrade(connection, feePayer, 6, 6, 20_000, 30_000, 1, 6, 2);
// });

// test("Simple trade (price < 1)", async () => {
//   await simpleTrade(connection, feePayer, 6, 6, 0.01, 1, 1_000, 10_000, 0.0001);
// });

// test("Simple trade (NFT case)", async () => {
//   await simpleTrade(
//     connection,
//     feePayer,
//     0,
//     9,
//     1,
//     10_000,
//     1,
//     20,
//     1,
//     undefined,
//     new BN(Math.pow(10, 6))
//   );
// });

// test("Simple trade (NFT case & price < 1)", async () => {
//   await simpleTrade(
//     connection,
//     feePayer,
//     0,
//     9,
//     0.01,
//     1,
//     1,
//     20,
//     0.0001,
//     undefined,
//     new BN(Math.pow(10, 3))
//   );
// });

// test("Orderbook (6, 6)", async () => {
//   await orderbookTest(connection, feePayer, 6, 6, 100, 1_000, 1, 100, 2);
// });

// test("Orderbook (6, 6) & price < 1", async () => {
//   await orderbookTest(connection, feePayer, 6, 6, 0.01, 1, 1, 100, 0.001);
// });

// test("Orderbook (0, 9)", async () => {
//   await orderbookTest(
//     connection,
//     feePayer,
//     0,
//     9,
//     10,
//     100,
//     1,
//     100,
//     2,
//     undefined,
//     new BN(Math.pow(10, 6))
//   );
// });

// test("Errors", async () => {
//   await error(connection, feePayer);
// });

// test("Swap", async () => {
//   await swapTest(connection, feePayer, 6, 6, 100, 1_000, 10, 100, 2);
// });

// test("Swap (price < 1)", async () => {
//   await swapTest(connection, feePayer, 6, 6, 0, 1, 100, 1_000, 0.0001);
// });

// test("Swap (NFT)", async () => {
//   await swapTest(
//     connection,
//     feePayer,
//     0,
//     9,
//     100,
//     5_000,
//     10,
//     400,
//     2,
//     undefined,
//     new BN(Math.pow(10, 6))
//   );
// });

// test("Swap (NFT & price < 1)", async () => {
//   await swapTest(
//     connection,
//     feePayer,
//     0,
//     9,
//     0.01,
//     1,
//     100,
//     1_000,
//     0.001,
//     undefined,
//     new BN(Math.pow(10, 3))
//   );
// });

// test("Self trade", async () => {
//   await selfTradeTest(connection, feePayer, 6, 6, 10, 1_000, 1, 30);
// });

test("Metadata", async () => {
  await metadataTest(connection, feePayer, 6, 6, 20_000, 30_000, 1, 6, 2);
});
