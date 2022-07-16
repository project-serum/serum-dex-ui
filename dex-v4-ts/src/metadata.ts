import { PublicKey } from "@solana/web3.js";
import { Buffer } from "buffer";

const PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

const PREFIX = Buffer.from("metadata");

export const getMetadataKeyFromMint = async (mint: PublicKey) => {
  const [key] = await PublicKey.findProgramAddress(
    [PREFIX, PROGRAM_ID.toBuffer(), mint.toBuffer()],
    PROGRAM_ID
  );
  return key;
};
