import { TokenMint, signAndSendInstructions } from "@bonfida/utils";
import {
  Connection,
  Keypair,
  SystemProgram,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import { createMarket, initializeAccount } from "../../src/bindings";
import BN from "bn.js";
import { DEX_ID } from "../../src/ids";
import {
  createCreateMetadataAccountV2Instruction,
  CreateMetadataAccountArgsV2,
  CreateMetadataAccountV2InstructionAccounts,
  DataV2,
  Creator,
} from "@metaplex-foundation/mpl-token-metadata";
import { getMetadataKeyFromMint } from "../../src/metadata";

export const createContext = async (
  connection: Connection,
  feePayer: Keypair,
  tickSize: BN,
  minBaseOrderSize: BN,
  baseDecimals: number,
  quoteDecimals: number,
  baseCurrencyMultiplier?: BN,
  quoteCurrencyMultiplier?: BN,
  creators?: { key: Keypair; share: number }[],
  sellerFeeBasisPoints?: number
) => {
  /**
   * Base and quote
   */
  const base = await TokenMint.init(connection, feePayer, baseDecimals);
  const quote = await TokenMint.init(connection, feePayer, quoteDecimals);

  /**
   * Create metadata
   */
  if (creators && sellerFeeBasisPoints) {
    const accounts: CreateMetadataAccountV2InstructionAccounts = {
      metadata: await getMetadataKeyFromMint(base.token),
      mint: base.token,
      mintAuthority: base.signer.publicKey,
      payer: feePayer.publicKey,
      updateAuthority: feePayer.publicKey,
    };
    const creators_: Creator[] = creators.map((e) => {
      return {
        address: e.key.publicKey,
        verified: false,
        share: e.share,
      };
    });
    const data: DataV2 = {
      name: "Test base",
      symbol: "BASE",
      uri: "https://google.com",
      creators: creators_,
      sellerFeeBasisPoints,
      collection: null,
      uses: null,
    };
    const args: CreateMetadataAccountArgsV2 = { data, isMutable: false };
    const ix = createCreateMetadataAccountV2Instruction(accounts, {
      createMetadataAccountArgsV2: args,
    });
    const tx = await signAndSendInstructions(
      connection,
      [base.signer],
      feePayer,
      [ix]
    );
    console.log(`Created metadata ${tx}`);
  }

  /**
   * Create market
   */
  let ixs = await createMarket(
    connection,
    base.token,
    quote.token,
    new BN(minBaseOrderSize),
    feePayer.publicKey,
    feePayer.publicKey,
    tickSize,
    baseCurrencyMultiplier,
    quoteCurrencyMultiplier
  );

  for (let ix of ixs) {
    let tx = await signAndSendInstructions(connection, ix[0], feePayer, ix[1]);
    console.log(tx);
  }
  const marketKey = ixs[0][0][0].publicKey;

  /**
   * Users
   */
  const Alice = Keypair.generate();
  const Bob = Keypair.generate();

  /**
   * Transfer 0.5 SOL to each user
   */
  await signAndSendInstructions(connection, [], feePayer, [
    SystemProgram.transfer({
      fromPubkey: feePayer.publicKey,
      toPubkey: Alice.publicKey,
      lamports: LAMPORTS_PER_SOL / 10,
    }),
    SystemProgram.transfer({
      fromPubkey: feePayer.publicKey,
      toPubkey: Bob.publicKey,
      lamports: LAMPORTS_PER_SOL / 10,
    }),
  ]);

  return { marketKey, base, quote, Alice, Bob };
};

export const initializeTraders = async (
  connection: Connection,
  base: TokenMint,
  quote: TokenMint,
  Alice: Keypair,
  Bob: Keypair,
  feePayer: Keypair,
  marketKey: PublicKey,
  baseTokenAmount: number,
  quoteTokenAmount: number
) => {
  const aliceBaseAta = await base.getAssociatedTokenAccount(Alice.publicKey);
  const aliceQuoteAta = await quote.getAssociatedTokenAccount(Alice.publicKey);

  const bobBaseAta = await base.getAssociatedTokenAccount(Bob.publicKey);
  const bobQuoteAta = await quote.getAssociatedTokenAccount(Bob.publicKey);

  base.mintInto(aliceBaseAta, baseTokenAmount);
  quote.mintInto(aliceQuoteAta, quoteTokenAmount);

  base.mintInto(bobBaseAta, baseTokenAmount);
  quote.mintInto(bobQuoteAta, quoteTokenAmount);

  // Create user accounts
  let tx = await signAndSendInstructions(connection, [Alice, Bob], feePayer, [
    await initializeAccount(marketKey, Alice.publicKey, 20, feePayer.publicKey),
    await initializeAccount(marketKey, Bob.publicKey, 20, feePayer.publicKey),
  ]);

  console.log(`Initialized traders ${tx}`);

  const [aliceUa] = await PublicKey.findProgramAddress(
    [marketKey.toBuffer(), Alice.publicKey.toBuffer()],
    DEX_ID
  );
  const [bobUa] = await PublicKey.findProgramAddress(
    [marketKey.toBuffer(), Bob.publicKey.toBuffer()],
    DEX_ID
  );

  return {
    aliceBaseAta,
    aliceQuoteAta,
    bobBaseAta,
    bobQuoteAta,
    aliceUa,
    bobUa,
  };
};
