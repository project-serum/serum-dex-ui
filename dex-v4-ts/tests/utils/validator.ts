import {
  Keypair,
  PublicKey,
  Connection,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";
import * as path from "path";
import { readFileSync, writeFileSync } from "fs";
import { ChildProcess, spawn, execSync } from "child_process";
import tmp from "tmp";
import { sleep } from "@bonfida/utils";

const programName = "dex_v4";
export const DEVNET_URL = clusterApiUrl("devnet");

// Spawns a local solana test validator. Caller is responsible for killing the
// process.
export async function spawnLocalSolana(): Promise<ChildProcess> {
  const ledger = tmp.dirSync();
  return spawn("solana-test-validator", ["-l", ledger.name]);
}

// Returns a keypair and key file name.
export async function initializePayer(
  connection: Connection
): Promise<[Keypair, string]> {
  const name = "wallet.json";
  const currentWallet = Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(readFileSync(name, "utf-8")))
  );
  const lamports = await connection.getBalance(currentWallet.publicKey);
  if (lamports > 0) {
    console.log(`Existing wallet with ${lamports}`);
    return [currentWallet, name];
  }
  console.log(`Creating new wallet`);
  const key = new Keypair();
  writeFileSync(name, JSON.stringify(Array.from(key.secretKey)));
  return [key, name];
}

// Deploys the agnostic order book program. Fees are paid with the fee payer
// whose key is in the given key file.
export function deployProgram(
  payerKeyFile: string,
  compile: boolean,
  compileFlag?: string,
  testBpf?: boolean
): PublicKey {
  const programDirectory = path.join(
    path.dirname(__filename),
    "../../../program"
  );
  const programSo = path.join(
    programDirectory,
    `target/deploy/${programName}.so`
  );
  const keyfile = path.join(
    path.dirname(programSo),
    `${programName}-keypair.json`
  );
  let compileCmd = "cargo build-bpf";
  if (compileFlag) {
    compileCmd += ` --features ${compileFlag}`;
  }
  if (compile) {
    execSync(compileCmd, {
      cwd: programDirectory,
    });
  }
  if (testBpf) {
    execSync("cargo test-bpf", {
      cwd: programDirectory,
    });
  }

  const bytes = readFileSync(keyfile, "utf-8");
  const keypair = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(bytes)));
  execSync(
    [
      "solana program deploy",
      programSo,
      "--program-id",
      keyfile,
      `-u ${DEVNET_URL}`,
      "-k",
      payerKeyFile,
      "--commitment finalized",
    ].join(" ")
  );
  return keypair.publicKey;
}

// Funds the given account. Sleeps until the connection is ready.
export async function airdropPayer(
  connection: Connection,
  key: PublicKey,
  loop = 5
) {
  let c = 0;
  let balance = await connection.getBalance(key);
  console.log(`Fee payer SOL balance ${balance / LAMPORTS_PER_SOL}`);
  if (balance > 9 * LAMPORTS_PER_SOL) return;
  while (c < loop) {
    try {
      const signature = await connection.requestAirdrop(
        key,
        1 * LAMPORTS_PER_SOL
      );
      console.log(`Airdrop signature ${signature}`);
      await connection.confirmTransaction(signature, "confirmed");
      c++;
      await sleep(10_000);
      continue;
    } catch (e) {
      console.log(`Error airdropping ${e}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      continue;
    }
  }
  console.log(`Finished airdropping`);
}
