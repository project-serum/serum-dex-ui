import { expect } from "@jest/globals";
import { Connection, PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { AccountLayout } from "@solana/spl-token";

export const checkTokenBalances = async (
  connection: Connection,
  tokenAccount: PublicKey,
  expected: BN
) => {
  const raw = await connection.getAccountInfo(tokenAccount);
  if (!raw) {
    throw new Error(
      `Account ${tokenAccount.toBase58()} could not be retrieved`
    );
  }
  const des = AccountLayout.decode(raw.data);
  expect(des.amount.toString()).toBe(expected.toString());
};
