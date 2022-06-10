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

// Global state initialized once in test startup and cleaned up at test
// teardown.
let connection: Connection;
let feePayer: Keypair;
let payerKeyFile: string;
let programId: PublicKey;

beforeAll(async () => {
  connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  [feePayer, payerKeyFile] = await initializePayer(connection);
  console.log("Fee payer", feePayer.publicKey.toBase58());
  programId = new PublicKey("5Zbg3ZtBTUbNqeKecuXwd1sk5kQXk3J3WmJcnzTuYUTc");
});

jest.setTimeout(50_000_000);

test("Create market", async () => {
  await createMarketTest(connection, feePayer);
});

test("Simple trade", async () => {
  await simpleTrade(connection, feePayer, 6, 6);
});

// test("Simple trade (NFT case)", async () => {
//   await simpleTrade(connection, feePayer, 0, 9);
// });

test("Orderbook (6, 6)", async () => {
  await orderbookTest(connection, feePayer, 6, 6);
});

// test("Orderbook (4, 9)", async () => {
//   await orderbookTest(connection, feePayer, 4, 9);
// });

test("Errors", async () => {
  await error(connection, feePayer);
});

test("Swap", async () => {
  await swapTest(connection, feePayer, 6, 6);
});

test("Self trade", async () => {
  await selfTradeTest(connection, feePayer, 6, 6);
});
