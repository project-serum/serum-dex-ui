import { notify } from './notifications';
import { getDecimalCount, sleep } from './utils';
import { getSelectedTokenAccountForMint } from './markets';
import {
  Account, AccountInfo, Connection,
  PublicKey, RpcResponseAndContext,
  SystemProgram,
  Transaction, TransactionSignature,
} from '@solana/web3.js';
import { BN } from 'bn.js';
import {
  DexInstructions,
  Market,
  TOKEN_MINTS,
  TokenInstructions,
  OpenOrders,
} from '@project-serum/serum';
import Wallet from "@project-serum/sol-wallet-adapter";
import {SelectedTokenAccounts, TokenAccount} from "./types";
import {Order} from "@project-serum/serum/lib/market";
import {Buffer} from "buffer";
import assert from "assert";
import { struct } from "superstruct";

export async function createTokenAccountTransaction({
  connection,
  wallet,
  mintPublicKey,
} : {
  connection: Connection;
  wallet: Wallet;
  mintPublicKey: PublicKey;
}): Promise<{
  transaction: Transaction;
  signer: Account;
  newAccountPubkey: PublicKey;
}> {
  const newAccount = new Account();
  const transaction = SystemProgram.createAccount({
    fromPubkey: wallet.publicKey,
    newAccountPubkey: newAccount.publicKey,
    lamports: await connection.getMinimumBalanceForRentExemption(165),
    space: 165,
    programId: TokenInstructions.TOKEN_PROGRAM_ID,
  });
  transaction.add(
    TokenInstructions.initializeAccount({
      account: newAccount.publicKey,
      mint: mintPublicKey,
      owner: wallet.publicKey,
    }),
  );
  return {
    transaction,
    signer: newAccount,
    newAccountPubkey: newAccount.publicKey,
  };
}

export async function settleFunds({
  market,
  openOrders,
  connection,
  wallet,
  baseCurrencyAccount,
  quoteCurrencyAccount,
} : {
  market: Market;
  openOrders: OpenOrders;
  connection: Connection;
  wallet: Wallet;
  baseCurrencyAccount: TokenAccount;
  quoteCurrencyAccount: TokenAccount;
}): Promise<string | undefined> {
  if (
    !market ||
    !wallet ||
    !connection ||
    !openOrders ||
    (!baseCurrencyAccount && !quoteCurrencyAccount)
  ) {
    notify({ message: 'Not connected' });
    return;
  }

  let createAccountTransaction: Transaction | undefined;
  let createAccountSigner: Account | undefined;
  let baseCurrencyAccountPubkey = baseCurrencyAccount?.pubkey;
  let quoteCurrencyAccountPubkey = quoteCurrencyAccount?.pubkey;

  if (!baseCurrencyAccountPubkey) {
    const result = await createTokenAccountTransaction({
      connection,
      wallet,
      mintPublicKey: market.baseMintAddress,
    });
    baseCurrencyAccountPubkey = result?.newAccountPubkey;
    createAccountTransaction = result?.transaction;
    createAccountSigner = result?.signer;
  }
  if (!quoteCurrencyAccountPubkey) {
    const result = await createTokenAccountTransaction({
      connection,
      wallet,
      mintPublicKey: market.quoteMintAddress,
    });
    quoteCurrencyAccountPubkey = result?.newAccountPubkey;
    createAccountTransaction = result?.transaction;
    createAccountSigner = result?.signer;
  }
  let referrerQuoteWallet: PublicKey | null = null;
  if (market.supportsReferralFees) {
    const usdt = TOKEN_MINTS.find(({ name }) => name === 'USDT')
    const usdc = TOKEN_MINTS.find(({ name }) => name === 'USDC')
    if (
      process.env.REACT_APP_USDT_REFERRAL_FEES_ADDRESS &&
      usdt &&
      market.quoteMintAddress.equals(usdt.address)
    ) {
      referrerQuoteWallet = new PublicKey(
        process.env.REACT_APP_USDT_REFERRAL_FEES_ADDRESS,
      );
    } else if (
      process.env.REACT_APP_USDC_REFERRAL_FEES_ADDRESS &&
      usdc &&
      market.quoteMintAddress.equals(usdc.address)
    ) {
      referrerQuoteWallet = new PublicKey(
        process.env.REACT_APP_USDC_REFERRAL_FEES_ADDRESS,
      );
    }
  }
  const {
    transaction: settleFundsTransaction,
    signers: settleFundsSigners,
  } = await market.makeSettleFundsTransaction(
    connection,
    openOrders,
    baseCurrencyAccountPubkey,
    quoteCurrencyAccountPubkey,
    referrerQuoteWallet,
  );

  let transaction = mergeTransactions([
    createAccountTransaction,
    settleFundsTransaction,
  ]);
  let signers = createAccountSigner
    ? [...settleFundsSigners, createAccountSigner]
    : settleFundsSigners;

  return await sendTransaction({
    transaction,
    signers,
    wallet,
    connection,
    sendingMessage: 'Settling funds...',
  });
}

export async function settleAllFunds({
  connection,
  wallet,
  tokenAccounts,
  markets,
  selectedTokenAccounts,
} : {
  connection: Connection;
  wallet: Wallet;
  tokenAccounts: TokenAccount[];
  markets: Market[];
  selectedTokenAccounts?: SelectedTokenAccounts;
}) {
  if (!markets || !wallet || !connection || !tokenAccounts) {
    return;
  }

  const programIds: PublicKey[] = [];
  markets
    .reduce((cumulative, m) => {
      // @ts-ignore
      cumulative.push(m._programId);
      return cumulative;
    }, [])
    .forEach((programId) => {
      if (!programIds.find((p) => p.equals(programId))) {
        programIds.push(programId);
      }
    });

  const getOpenOrdersAccountsForProgramId = async (programId) => {
    const openOrdersAccounts = await OpenOrders.findForOwner(
      connection,
      wallet.publicKey,
      programId,
    );
    return openOrdersAccounts.filter(
      (openOrders) =>
        openOrders.baseTokenFree.toNumber() ||
        openOrders.quoteTokenFree.toNumber(),
    );
  };

  const openOrdersAccountsForProgramIds = await Promise.all(
    programIds.map((programId) => getOpenOrdersAccountsForProgramId(programId)),
  );
  const openOrdersAccounts = openOrdersAccountsForProgramIds.reduce(
    (accounts, current) => accounts.concat(current),
    [],
  );

  const settleTransactions = (await Promise.all(
    openOrdersAccounts.map((openOrdersAccount) => {
      const market = markets.find((m) =>
        // @ts-ignore
        m._decoded?.ownAddress?.equals(openOrdersAccount.market),
      );
      const baseMint = market?.baseMintAddress;
      const quoteMint = market?.quoteMintAddress;

      const selectedBaseTokenAccount = getSelectedTokenAccountForMint(
        tokenAccounts,
        baseMint,
        baseMint && selectedTokenAccounts && selectedTokenAccounts[baseMint.toBase58()]
      )?.pubkey;
      const selectedQuoteTokenAccount = getSelectedTokenAccountForMint(
        tokenAccounts,
        quoteMint,
        quoteMint && selectedTokenAccounts && selectedTokenAccounts[quoteMint.toBase58()]
      )?.pubkey;
      if (!selectedBaseTokenAccount || !selectedQuoteTokenAccount) {
        return null;
      }
      return (
        market &&
        market.makeSettleFundsTransaction(
          connection,
          openOrdersAccount,
          selectedBaseTokenAccount,
          selectedQuoteTokenAccount,
        )
      );
    }),
  )).filter((x): x is {signers: [PublicKey | Account]; transaction: Transaction} => !!x);
  if (!settleTransactions || settleTransactions.length === 0) return;

  const transactions = settleTransactions.slice(0, 4).map((t) => t.transaction);
  const signers: Array<Account | PublicKey> = [];
  settleTransactions
    .reduce((cumulative: Array<Account | PublicKey>, t) => cumulative.concat(t.signers), [])
    .forEach((signer) => {
      if (!signers.find((s) => {
        if (s.constructor.name !== signer.constructor.name) {
          return false;
        } else if (s.constructor.name === 'PublicKey') {
          // @ts-ignore
          return s.equals(signer);
        } else {
          // @ts-ignore
          return s.publicKey.equals(signer.publicKey);
        }
      })) {
        signers.push(signer);
      }
    });

  const transaction = mergeTransactions(transactions);

  return await sendTransaction({
    transaction,
    signers,
    wallet,
    connection,
  });
}

export async function cancelOrder(params: {market: Market; connection: Connection; wallet: Wallet; order: Order;}) {
  return cancelOrders({ ...params, orders: [params.order] });
}

export async function cancelOrders({ market, wallet, connection, orders }: {
  market: Market;
  wallet: Wallet;
  connection: Connection;
  orders: Order[];
}) {
  const transaction = market.makeMatchOrdersTransaction(5);
  orders.forEach((order) => {
    transaction.add(
      market.makeCancelOrderInstruction(connection, wallet.publicKey, order),
    );
  });
  transaction.add(market.makeMatchOrdersTransaction(5));
  return await sendTransaction({
    transaction,
    wallet,
    connection,
    sendingMessage: 'Sending cancel...',
  });
}

export async function placeOrder({
  side,
  price,
  size,
  orderType,
  market,
  connection,
  wallet,
  baseCurrencyAccount,
  quoteCurrencyAccount,
}: {
  side: "buy" | "sell";
  price: number;
  size: number;
  orderType: "ioc" | "postOnly" | "limit";
  market: Market | undefined | null;
  connection: Connection;
  wallet: Wallet;
  baseCurrencyAccount: PublicKey | undefined;
  quoteCurrencyAccount: PublicKey | undefined;
}) {
  let formattedMinOrderSize =
    market?.minOrderSize?.toFixed(getDecimalCount(market.minOrderSize)) ||
    market?.minOrderSize;
  let formattedTickSize =
    market?.tickSize?.toFixed(getDecimalCount(market.tickSize)) ||
    market?.tickSize;
  const isIncrement = (num, step) =>
    Math.abs((num / step) % 1) < 1e-5 ||
    Math.abs(((num / step) % 1) - 1) < 1e-5;
  if (isNaN(price)) {
    notify({ message: 'Invalid price', type: 'error' });
    return;
  }
  if (isNaN(size)) {
    notify({ message: 'Invalid size', type: 'error' });
    return;
  }
  if (!wallet || !wallet.publicKey) {
    notify({ message: 'Connect wallet', type: 'error' });
    return;
  }
  if (!market) {
    notify({ message: 'Invalid  market', type: 'error' });
    return;
  }
  if (!isIncrement(size, market.minOrderSize)) {
    notify({
      message: `Size must be an increment of ${formattedMinOrderSize}`,
      type: 'error',
    });
    return;
  }
  if (size < market.minOrderSize) {
    notify({ message: 'Size too small', type: 'error' });
    return;
  }
  if (!isIncrement(price, market.tickSize)) {
    notify({
      message: `Price must be an increment of ${formattedTickSize}`,
      type: 'error',
    });
    return;
  }
  if (price < market.tickSize) {
    notify({ message: 'Price under tick size', type: 'error' });
    return;
  }
  const owner = wallet.publicKey;

  const payer = side === 'sell' ? baseCurrencyAccount : quoteCurrencyAccount;
  if (!payer) {
    notify({
      message: 'Need an SPL token account for cost currency',
      type: 'error',
    });
    return;
  }
  const params = {
    owner,
    payer,
    side,
    price,
    size,
    orderType,
  };
  console.log(params);

  const transaction = market.makeMatchOrdersTransaction(5);
  let {
    transaction: placeOrderTx,
    signers,
  } = await market.makePlaceOrderTransaction(
    connection,
    params,
    10_000,
    10_000,
  );
  transaction.add(placeOrderTx);
  transaction.add(market.makeMatchOrdersTransaction(5));

  return await sendTransaction({
    transaction,
    wallet,
    connection,
    signers,
    sendingMessage: 'Sending order...',
  });
}

export async function listMarket({
  connection,
  wallet,
  baseMint,
  quoteMint,
  baseLotSize,
  quoteLotSize,
  dexProgramId,
} : {
  connection: Connection;
  wallet: Wallet;
  baseMint: PublicKey;
  quoteMint: PublicKey;
  baseLotSize: number;
  quoteLotSize: number;
  dexProgramId: PublicKey;
}) {
  const market = new Account();
  const requestQueue = new Account();
  const eventQueue = new Account();
  const bids = new Account();
  const asks = new Account();
  const baseVault = new Account();
  const quoteVault = new Account();
  const feeRateBps = 0;
  const quoteDustThreshold = new BN(100);

  async function getVaultOwnerAndNonce() {
    const nonce = new BN(0);
    while (true) {
      try {
        const vaultOwner = await PublicKey.createProgramAddress(
          [market.publicKey.toBuffer(), nonce.toArrayLike(Buffer, 'le', 8)],
          dexProgramId,
        );
        return [vaultOwner, nonce];
      } catch (e) {
        nonce.iaddn(1);
      }
    }
  }
  const [vaultOwner, vaultSignerNonce] = await getVaultOwnerAndNonce();

  const tx1 = new Transaction();
  tx1.add(
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: baseVault.publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(165),
      space: 165,
      programId: TokenInstructions.TOKEN_PROGRAM_ID,
    }),
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: quoteVault.publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(165),
      space: 165,
      programId: TokenInstructions.TOKEN_PROGRAM_ID,
    }),
    TokenInstructions.initializeAccount({
      account: baseVault.publicKey,
      mint: baseMint,
      owner: vaultOwner,
    }),
    TokenInstructions.initializeAccount({
      account: quoteVault.publicKey,
      mint: quoteMint,
      owner: vaultOwner,
    }),
  );

  const tx2 = new Transaction();
  tx2.add(
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: market.publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(
        Market.getLayout(dexProgramId).span,
      ),
      space: Market.getLayout(dexProgramId).span,
      programId: dexProgramId,
    }),
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: requestQueue.publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(5120 + 12),
      space: 5120 + 12,
      programId: dexProgramId,
    }),
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: eventQueue.publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(262144 + 12),
      space: 262144 + 12,
      programId: dexProgramId,
    }),
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: bids.publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(65536 + 12),
      space: 65536 + 12,
      programId: dexProgramId,
    }),
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: asks.publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(65536 + 12),
      space: 65536 + 12,
      programId: dexProgramId,
    }),
    DexInstructions.initializeMarket({
      market: market.publicKey,
      requestQueue: requestQueue.publicKey,
      eventQueue: eventQueue.publicKey,
      bids: bids.publicKey,
      asks: asks.publicKey,
      baseVault: baseVault.publicKey,
      quoteVault: quoteVault.publicKey,
      baseMint,
      quoteMint,
      baseLotSize: new BN(baseLotSize),
      quoteLotSize: new BN(quoteLotSize),
      feeRateBps,
      vaultSignerNonce,
      quoteDustThreshold,
      programId: dexProgramId,
    }),
  );

  const signedTransactions = await Promise.all([
    signTransaction({
      transaction: tx1,
      wallet,
      connection,
      signers: [wallet.publicKey, baseVault, quoteVault],
    }),
    signTransaction({
      transaction: tx2,
      wallet,
      connection,
      signers: [wallet.publicKey, market, requestQueue, eventQueue, bids, asks],
    }),
  ]);
  for (let signedTransaction of signedTransactions) {
    await sendSignedTransaction({
      signedTransaction,
      connection,
    });
  }

  return market.publicKey;
}

const getUnixTs = () => {
  return new Date().getTime() / 1000;
};

const DEFAULT_TIMEOUT = 15000;

async function sendTransaction({
  transaction,
  wallet,
  signers = [wallet.publicKey],
  connection,
  sendingMessage = 'Sending transaction...',
  sentMessage = 'Transaction sent',
  successMessage = 'Transaction confirmed',
  timeout = DEFAULT_TIMEOUT,
} : {
  transaction: Transaction;
  wallet: Wallet;
  signers?: Array<PublicKey | Account>;
  connection: Connection;
  sendingMessage?: string;
  sentMessage?: string;
  successMessage?: string;
  timeout?: number;
}): Promise<string> {
  const signedTransaction = await signTransaction({
    transaction,
    wallet,
    signers,
    connection,
  });
  return await sendSignedTransaction({
    signedTransaction,
    connection,
    sendingMessage,
    sentMessage,
    successMessage,
    timeout,
  });
}

async function signTransaction({
  transaction,
  wallet,
  signers = [wallet.publicKey],
  connection,
} : {
  transaction: Transaction;
  wallet: Wallet;
  signers: Array<Account | PublicKey>;
  connection: Connection;
}) {
  transaction.recentBlockhash = (
    await connection.getRecentBlockhash('max')
  ).blockhash;
  transaction.signPartial(...signers);
  return await wallet.signTransaction(transaction);
}

async function sendSignedTransaction({
  signedTransaction,
  connection,
  sendingMessage = 'Sending transaction...',
  sentMessage = 'Transaction sent',
  successMessage = 'Transaction confirmed',
  timeout = DEFAULT_TIMEOUT,
} : {
  signedTransaction: Transaction;
  connection: Connection;
  sendingMessage?: string;
  sentMessage?: string;
  successMessage?: string;
  timeout?: number;
}): Promise<string> {
  const rawTransaction = signedTransaction.serialize();
  const startTime = getUnixTs();
  notify({ message: sendingMessage });
  const txid: TransactionSignature = await connection.sendRawTransaction(rawTransaction, {
    skipPreflight: true,
  });
  notify({ message: sentMessage, type: 'success', txid });

  console.log('Started awaiting confirmation for', txid);

  let done = false;
  (async () => {
    while (!done && getUnixTs() - startTime < timeout) {
      connection.sendRawTransaction(rawTransaction, {
        skipPreflight: true,
      });
      await sleep(300);
    }
  })();
  try {
    await awaitTransactionSignatureConfirmation(txid, timeout, connection);
  } catch (err) {
    if (err.timeout) {
      throw new Error('Timed out awaiting confirmation on transaction');
    }
    throw new Error('Transaction failed');
  } finally {
    done = true;
  }
  notify({ message: successMessage, type: 'success', txid });

  console.log('Latency', txid, getUnixTs() - startTime);
  return txid;
}

async function awaitTransactionSignatureConfirmation(
  txid: TransactionSignature,
  timeout: number,
  connection: Connection,
) {
  let done = false;
  const result = await new Promise((resolve, reject) => {
    (async () => {
      setTimeout(() => {
        if (done) {
          return;
        }
        done = true;
        console.log('Timed out for txid', txid);
        reject({ timeout: true });
      }, timeout);
      try {
        connection.onSignature(
          txid,
          (result) => {
            console.log('WS confirmed', txid, result);
            done = true;
            if (result.err) {
              reject(result.err);
            } else {
              resolve(result);
            }
          },
          'recent',
        );
        console.log('Set up WS connection', txid);
      } catch (e) {
        done = true;
        console.log('WS error in setup', txid, e);
      }
      while (!done) {
        // eslint-disable-next-line no-loop-func
        (async () => {
          try {
            const signatureStatuses = await connection.getSignatureStatuses([
              txid,
            ]);
            const result = signatureStatuses && signatureStatuses.value[0];
            if (!done) {
              if (!result) {
                console.log('REST null result for', txid, result);
              } else if (result.err) {
                console.log('REST error for', txid, result);
                done = true;
                reject(result.err);
              } else if (!result.confirmations) {
                console.log('REST no confirmations for', txid, result);
              } else {
                console.log('REST confirmation for', txid, result);
                done = true;
                resolve(result);
              }
            }
          } catch (e) {
            if (!done) {
              console.log('REST connection error: txid', txid, e);
            }
          }
        })();
        await sleep(300);
      }
    })();
  });
  done = true;
  return result;
}

function mergeTransactions(transactions: (Transaction | undefined)[]) {
  const transaction = new Transaction();
  transactions
    .filter((t): t is Transaction => t !== undefined)
    .forEach((t) => {
      transaction.add(t);
    });
  return transaction;
}

function jsonRpcResult(resultDescription: any) {
  const jsonRpcVersion = struct.literal("2.0");
  return struct.union([
    struct({
      jsonrpc: jsonRpcVersion,
      id: "string",
      error: "any",
    }),
    struct({
      jsonrpc: jsonRpcVersion,
      id: "string",
      error: "null?",
      result: resultDescription,
    }),
  ]);
}

function jsonRpcResultAndContext(resultDescription: any) {
  return jsonRpcResult({
    context: struct({
      slot: "number",
    }),
    value: resultDescription,
  });
}

const AccountInfoResult = struct({
  executable: "boolean",
  owner: "string",
  lamports: "number",
  data: "any",
  rentEpoch: "number?",
});

export const GetMultipleAccountsAndContextRpcResult = jsonRpcResultAndContext(
  struct.array([struct.union(["null", AccountInfoResult])])
);

export async function getMultipleSolanaAccounts(
  connection: Connection,
  publicKeys: PublicKey[]
): Promise<
  RpcResponseAndContext<{ [key: string]: AccountInfo<Buffer> | null }>
> {
  const args = [
    publicKeys.map((k) => k.toBase58()),
    { commitment: "recent" },
  ];
  // @ts-ignore
  const unsafeRes = await connection._rpcRequest("getMultipleAccounts", args);
  const res = GetMultipleAccountsAndContextRpcResult(unsafeRes);
  if (res.error) {
    throw new Error(
      "failed to get info about accounts " +
        publicKeys.map((k) => k.toBase58()).join(", ") +
        ": " +
        res.error.message
    );
  }
  assert(typeof res.result !== "undefined");
  const accounts: Array<{
    executable: any;
    owner: PublicKey;
    lamports: any;
    data: Buffer;
  } | null> = [];
  for (const account of res.result.value) {
    let value: {
      executable: any;
      owner: PublicKey;
      lamports: any;
      data: Buffer;
    } | null = null;
    if (res.result.value) {
      const { executable, owner, lamports, data } = account;
      assert(data[1] === "base64");
      value = {
        executable,
        owner: new PublicKey(owner),
        lamports,
        data: Buffer.from(data[0], "base64"),
      };
    }
    accounts.push(value);
  }
  return {
    context: {
      slot: res.result.context.slot,
    },
    value: Object.fromEntries(
      accounts.map((account, i) => [publicKeys[i].toBase58(), account])
    ),
  };
}
