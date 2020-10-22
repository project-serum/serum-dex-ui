import { SwapContextValues } from './types';
import React, { useContext, useEffect, useState } from 'react';
import { useLocalStorageState } from './utils';
import {
  Account,
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import {ENDPOINTS, ENV, useConnection} from './connection';
import * as BufferLayout from 'buffer-layout';
import { AccountLayout, MintInfo, MintLayout, Token } from '@solana/spl-token';
import { TokenSwap, TokenSwapLayout } from '@solana/spl-token-swap';
import { notify } from './notifications';
import {
  cache,
  getCachedAccount,
  useCachedPool,
  useUserAccounts,
} from './swapAccounts';
import { LiquidityComponent, PoolInfo, SwapTokenAccount } from './swapTypes';
import PopularTokens from './swap-token-list.json';
import { sendTransaction } from "./send"
import {WRAPPED_SOL_MINT} from "@project-serum/serum/lib/token-instructions";

const DEFAULT_SLIPPAGE = 1.0; // TODO: set to lower value
export const PROGRAM_IDS = [
  {
    name: 'mainnet-beta',
    id: 'HYv7pNgHkkBGxfrnCre2pMgLpWm7LJPKxiyZVytN5HrM',
  },
  {
    name: 'testnet',
    id: 'CrRvVBS4Hmj47TPU3cMukurpmCUYUrdHYxTQBxncBGqw',
  },
  {
    name: 'devnet',
    id: 'EEuPz4iZA5reBUeZj6x1VzoiHfYeHMppSCnHZasRFhYo',
  },
  {
    name: 'localnet',
    id: 'AA6zS5gndVnu2SJ7PYFJpj9UaEU7kGfE8Rhcwju27HdF',
  },
];

const SwapContext: React.Context<
  undefined | SwapContextValues
> = React.createContext<SwapContextValues | undefined>(undefined);

export function SwapProvider({ children }) {
  const [endpoint] = useLocalStorageState<string>(
    'connectionEndpts',
    ENDPOINTS[0].endpoint,
  );
  const envName =
    ENDPOINTS.find((end) => end.endpoint === endpoint)?.name ||
    ENDPOINTS[0].name;
  const swapProgramIdString = PROGRAM_IDS.find((env) => env.name === envName);
  const swapProgramId = swapProgramIdString
    ? new PublicKey(swapProgramIdString.id)
    : new PublicKey('HYv7pNgHkkBGxfrnCre2pMgLpWm7LJPKxiyZVytN5HrM');
  const tokenProgramId = new PublicKey(
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  );

  const [slippage, setSlippage] = useLocalStorageState(
    'slippage',
    DEFAULT_SLIPPAGE.toString(),
  );

  const programIds = (): { token: PublicKey; swap: PublicKey } => {
    return {
      token: tokenProgramId,
      swap: swapProgramId,
    };
  };

  return (
    <SwapContext.Provider
      value={{
        slippage: parseFloat(slippage),
        setSlippage: (newSlippageNumber) => {
          setSlippage(newSlippageNumber.toString());
        },
        tokenProgramId: tokenProgramId,
        swapProgramId,
        programIds,
      }}
    >
      {children}
    </SwapContext.Provider>
  );
}

export function useSwapContext() {
  const context = useContext(SwapContext);
  if (!context) {
    throw new Error('Missing swap context');
  }
  return context;
}

export function useSlippageConfig() {
  const context = useContext(SwapContext);
  if (!context) {
    throw new Error('Missing swap context');
  }
  const { slippage, setSlippage } = context;
  return { slippage, setSlippage };
}

const LIQUIDITY_TOKEN_PRECISION = 8;

const createInitSwapInstruction = (
  tokenSwapAccount: Account,
  authority: PublicKey,
  nonce: number,
  SwapTokenAccountA: PublicKey,
  SwapTokenAccountB: PublicKey,
  tokenPool: PublicKey,
  SwapTokenAccountPool: PublicKey,
  tokenProgramId: PublicKey,
  swapProgramId: PublicKey,
  feeNumerator: number,
  feeDenominator: number,
) => {
  const keys = [
    { pubkey: tokenSwapAccount.publicKey, isSigner: false, isWritable: true },
    { pubkey: authority, isSigner: false, isWritable: false },
    { pubkey: SwapTokenAccountA, isSigner: false, isWritable: false },
    { pubkey: SwapTokenAccountB, isSigner: false, isWritable: false },
    { pubkey: tokenPool, isSigner: false, isWritable: true },
    { pubkey: SwapTokenAccountPool, isSigner: false, isWritable: true },
    { pubkey: tokenProgramId, isSigner: false, isWritable: false },
  ];
  const commandDataLayout = BufferLayout.struct([
    BufferLayout.u8('instruction'),
    BufferLayout.nu64('feeNumerator'),
    BufferLayout.nu64('feeDenominator'),
    BufferLayout.u8('nonce'),
  ]);
  let data = Buffer.alloc(1024);
  {
    const encodeLength = commandDataLayout.encode(
      {
        instruction: 0, // InitializeSwap instruction
        feeNumerator,
        feeDenominator,
        nonce,
      },
      data,
    );
    data = data.slice(0, encodeLength);
  }
  return new TransactionInstruction({
    keys,
    programId: swapProgramId,
    data,
  });
};

export const sendTransactionFromInstructions = async (
  connection: any,
  wallet: any,
  instructions: TransactionInstruction[],
  signers: Account[],

) => {
  let transaction = new Transaction();
  instructions.forEach((instruction) => transaction.add(instruction));
  sendTransaction({transaction, wallet, signers, connection})
};

export const removeLiquidity = async (
  connection: Connection,
  wallet: any,
  liquidityAmount: number,
  account: SwapTokenAccount,
  swapProgramId: PublicKey,
  tokenProgramId: PublicKey,
  pool?: PoolInfo
) => {
  if (!pool) {
    return;
  }

  notify({
    message: 'Removing Liquidity...',
    description: 'Please review transactions to approve.',
    type: 'warn',
  });

  // TODO get min amounts based on total supply and liquidity
  const minAmount0 = 0;
  const minAmount1 = 0;

  const poolMint = await cache.getMint(connection, pool.pubkeys.mint);
  const accountA = await cache.getAccount(connection, pool.pubkeys.accounts[0]);
  const accountB = await cache.getAccount(connection, pool.pubkeys.accounts[1]);
  if (!poolMint.mintAuthority) {
    throw new Error('Mint doesnt have authority');
  }
  const authority = poolMint.mintAuthority;

  const signers: Account[] = [];
  const instructions: TransactionInstruction[] = [];
  const cleanupInstructions: TransactionInstruction[] = [];

  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(
    AccountLayout.span,
  );

  // TODO: check if one of to accounts needs to be native sol ... if yes unwrap it ...
  const toAccounts: PublicKey[] = [
    await findOrCreateAccountByMint(
      connection,
      wallet.publicKey,
      wallet.publicKey,
      instructions,
      cleanupInstructions,
      accountRentExempt,
      accountA.info.mint,
      signers,
      tokenProgramId
    ),
    await findOrCreateAccountByMint(
      connection,
      wallet.publicKey,
      wallet.publicKey,
      instructions,
      cleanupInstructions,
      accountRentExempt,
      accountB.info.mint,
      signers,
      tokenProgramId
    ),
  ];

  instructions.push(
    Token.createApproveInstruction(
      tokenProgramId,
      account.pubkey,
      authority,
      wallet.publicKey,
      [],
      liquidityAmount,
    ),
  );

  // withdraw
  instructions.push(
    TokenSwap.withdrawInstruction(
      pool.pubkeys.program,
      authority,
      pool.pubkeys.mint,
      account.pubkey,
      pool.pubkeys.accounts[0],
      pool.pubkeys.accounts[1],
      toAccounts[0],
      toAccounts[1],
      swapProgramId,
      tokenProgramId,
      liquidityAmount,
      minAmount0,
      minAmount1,
    ),
  );

  let tx = await sendTransactionFromInstructions(
    connection,
    wallet,
    instructions.concat(cleanupInstructions),
    signers,
  );

  notify({
    message: 'Liquidity Returned. Thank you for your support.',
    type: 'success',
    description: `Transaction - ${tx}`,
  });
};

export const swap = async (
  connection: Connection,
  wallet: any,
  components: LiquidityComponent[],
  SLIPPAGE: number,
  swapProgramId: PublicKey,
  tokenProgramId: PublicKey,
  pool?: PoolInfo,
) => {
  if (!pool) {
    notify({
      type: 'error',
      message: `Pool doesn't exsist.`,
      description: `Swap trade cancelled`,
    });
    return;
  }

  // Uniswap whitepaper: https://uniswap.org/whitepaper.pdf
  // see: https://uniswap.org/docs/v2/advanced-topics/pricing/
  // as well as native uniswap v2 oracle: https://uniswap.org/docs/v2/core-concepts/oracles/
  const amountIn = components[0].amount; // these two should include slippage
  const minAmountOut = components[1].amount * (1 - SLIPPAGE);
  const holdingA =
    pool.pubkeys.accountMints[0].toBase58() ===
    components[0].account.info.mint.toBase58()
      ? pool.pubkeys.accounts[0]
      : pool.pubkeys.accounts[1];
  const holdingB =
    holdingA === pool.pubkeys.accounts[0]
      ? pool.pubkeys.accounts[1]
      : pool.pubkeys.accounts[0];

  const poolMint = await cache.getMint(connection, pool.pubkeys.mint);
  if (!poolMint.mintAuthority) {
    throw new Error('Mint doesnt have authority');
  }
  const authority = poolMint.mintAuthority;

  const instructions: TransactionInstruction[] = [];
  const cleanupInstructions: TransactionInstruction[] = [];
  const signers: Account[] = [];

  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(
    AccountLayout.span,
  );

  const fromAccount = getWrappedAccount(
    instructions,
    cleanupInstructions,
    components[0].account,
    wallet.publicKey,
    amountIn + accountRentExempt,
    signers,
    tokenProgramId
  );

  let toAccount = findOrCreateAccountByMint(
    connection,
    wallet.publicKey,
    wallet.publicKey,
    instructions,
    cleanupInstructions,
    accountRentExempt,
    components[1].account.info.mint,
    signers,
    tokenProgramId
  );

  // create approval for transfer transactions
  instructions.push(
    Token.createApproveInstruction(
      tokenProgramId,
      fromAccount,
      authority,
      wallet.publicKey,
      [],
      amountIn,
    ),
  );

  // TODO: check order of the accounts
  // swap
  instructions.push(
    TokenSwap.swapInstruction(
      pool.pubkeys.program,
      authority,
      fromAccount,
      holdingA,
      holdingB,
      toAccount,
      swapProgramId,
      tokenProgramId,
      amountIn,
      minAmountOut,
    ),
  );

  let tx = await sendTransactionFromInstructions(
    connection,
    wallet,
    instructions.concat(cleanupInstructions),
    signers,
  );

  notify({
    message: 'Trade executed.',
    type: 'success',
    description: `Transaction - ${tx}`,
  });
};

export const addLiquidity = async (
  connection: Connection,
  wallet: any,
  components: LiquidityComponent[],
  slippage: number,
  swapProgramId: PublicKey,
  tokenProgramId: PublicKey,
  pool?: PoolInfo,
) => {
  if (!pool) {
    await _addLiquidityNewPool(wallet, connection, components, swapProgramId, tokenProgramId);
  } else {
    await _addLiquidityExistingPool(
      pool,
      components,
      connection,
      wallet,
      slippage,
      swapProgramId,
      tokenProgramId
    );
  }
};

export const usePools = () => {
  const connection = useConnection();
  const [pools, setPools] = useState<PoolInfo[]>([]);
  const {swapProgramId} = useSwapContext();


  const getHoldings = (accounts: string[]) => {
    return accounts.map((acc) =>
      cache.getAccount(connection, new PublicKey(acc)),
    );
  };

  useEffect(() => {
    const toPoolInfo = (item: any, toMerge?: PoolInfo) => {
      const mint = new PublicKey(item.data.tokenPool);
      return ({
        pubkeys: {
          program: item.pubkey,
          mint,
          accounts: [item.data.tokenAccountA, item.data.tokenAccountB].map(
            (a) => new PublicKey(a),
          ),
        },
        raw: item,
      } as any) as PoolInfo;
    };

    const queryPools = async () => {
      const swapAccounts = (
        await connection.getProgramAccounts(swapProgramId)
      )
        .filter((item) => item.account.data.length === TokenSwapLayout.span)
        .map((item) => {
          return {
            data: TokenSwapLayout.decode(item.account.data),
            account: item.account,
            pubkey: item.pubkey,
          };
        });
      let result: PoolInfo[] = [];
      for (let i = 0; i < swapAccounts.length; i++) {
        const acc = swapAccounts[i];
        try {
          // TODO: this is not great
          // Ideally SwapLayout stores hash of all the mints to make finding of pool for a pair easier
          const holdings = await Promise.all(
            getHoldings([acc.data.tokenAccountA, acc.data.tokenAccountB]),
          );

          if (holdings[0].info.amount.eqn(0)) {
            continue;
          }

          let pool = toPoolInfo(acc);
          pool.pubkeys.accountMints = [
            holdings[0].info.mint,
            holdings[1].info.mint,
          ] as PublicKey[];
          result.push(pool);

          await new Promise((resolve) => setTimeout(resolve, 500));
        } catch (err) {
          console.log(err);
        }
      }

      setPools(result);
    };

    queryPools();

    const subID = connection.onProgramAccountChange(
      swapProgramId,
      async (info) => {
        const id = (info.accountId as unknown) as string;
        if (info.accountInfo.data.length === TokenSwapLayout.span) {
          const account = info.accountInfo;
          const updated = {
            data: TokenSwapLayout.decode(account.data),
            account: account,
            pubkey: new PublicKey(id),
          };

          const index = pools.findIndex(
            (p) => p.pubkeys.program.toBase58() === id,
          );
          if (index >= 0) {
            // TODO: check if account is empty?

            setPools([
              ...pools.filter((p, i) => i !== index),
              toPoolInfo(updated),
            ]);
          } else {
            let pool = toPoolInfo(updated);

            const holdings = await Promise.all(
              getHoldings([
                updated.data.tokenAccountA,
                updated.data.tokenAccountB,
              ]),
            );
            pool.pubkeys.accountMints = [
              holdings[0].info.mint,
              holdings[1].info.mint,
            ] as PublicKey[];

            setPools([...pools, pool]);
          }
        }
      },
      'singleGossip',
    );

    return () => {
      connection.removeProgramAccountChangeListener(subID);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection]);

  return { pools };
};

export const usePoolForBasket = (mints: (string | undefined)[]) => {
  const { pools } = useCachedPool();
  const sortedMints = [...mints].sort();

  return pools.find((p) =>
    p.pubkeys.accountMints
      .map((a) => a.toBase58())
      .sort()
      .every((address, i) => address === sortedMints[i]),
  );
};

export const useOwnedPools = () => {
  const { pools } = useCachedPool();
  const { userAccounts } = useUserAccounts();

  const map = userAccounts.reduce((acc, item) => {
    const key = item.info.mint.toBase58();
    acc.set(key, item);
    return acc;
  }, new Map<string, SwapTokenAccount>());

  return pools
    .filter((p) => map.has(p.pubkeys.mint.toBase58()))
    .map((item) => {
      return {
        account: map.get(item.pubkeys.mint.toBase58()) as SwapTokenAccount,
        pool: item,
      };
    });
};

async function _addLiquidityExistingPool(
  pool: PoolInfo,
  components: LiquidityComponent[],
  connection: Connection,
  wallet: any,
  SLIPPAGE: number,
  swapProgramId: PublicKey,
  tokenProgramId: PublicKey,
) {
  notify({
    message: 'Adding Liquidity...',
    description: 'Please review transactions to approve.',
    type: 'warn',
  });

  const poolMint = await cache.getMint(connection, pool.pubkeys.mint);
  if (!poolMint.mintAuthority) {
    throw new Error('Mint doesnt have authority');
  }

  const accountA = await cache.getAccount(connection, pool.pubkeys.accounts[0]);
  const accountB = await cache.getAccount(connection, pool.pubkeys.accounts[1]);

  const reserve0 = accountA.info.amount.toNumber();
  const reserve1 = accountB.info.amount.toNumber();
  const fromA =
    accountA.info.mint.toBase58() === components[0].account.info.mint.toBase58()
      ? components[0]
      : components[1];
  const fromB = fromA === components[0] ? components[1] : components[0];

  const supply = poolMint.supply.toNumber();
  const authority = poolMint.mintAuthority;

  // Uniswap whitepaper: https://uniswap.org/whitepaper.pdf
  // see: https://uniswap.org/docs/v2/advanced-topics/pricing/
  // as well as native uniswap v2 oracle: https://uniswap.org/docs/v2/core-concepts/oracles/
  const amount0 = fromA.amount; // these two should include slippage
  const amount1 = fromB.amount;

  // TODO:  calculate max slippage based on the serum dex price
  const liquidity = Math.min(
    (amount0 * (1 - SLIPPAGE) * supply) / reserve0,
    (amount1 * (1 - SLIPPAGE) * supply) / reserve1,
  );
  const instructions: TransactionInstruction[] = [];
  const cleanupInstructions: TransactionInstruction[] = [];

  const signers: Account[] = [];

  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(
    AccountLayout.span,
  );
  const fromKeyA = getWrappedAccount(
    instructions,
    cleanupInstructions,
    fromA.account,
    wallet.publicKey,
    amount0 + accountRentExempt,
    signers,
    tokenProgramId
  );
  const fromKeyB = getWrappedAccount(
    instructions,
    cleanupInstructions,
    fromB.account,
    wallet.publicKey,
    amount1 + accountRentExempt,
    signers,
    tokenProgramId
  );

  let toAccount = findOrCreateAccountByMint(
    connection,
    wallet.publicKey,
    wallet.publicKey,
    instructions,
    [],
    accountRentExempt,
    pool.pubkeys.mint,
    signers,
    tokenProgramId
  );

  // create approval for transfer transactions
  instructions.push(
    Token.createApproveInstruction(
      tokenProgramId,
      fromKeyA,
      authority,
      wallet.publicKey,
      [],
      amount0,
    ),
  );

  instructions.push(
    Token.createApproveInstruction(
      tokenProgramId,
      fromKeyB,
      authority,
      wallet.publicKey,
      [],
      amount1,
    ),
  );

  // depoist
  instructions.push(
    TokenSwap.depositInstruction(
      pool.pubkeys.program,
      authority,
      fromKeyA,
      fromKeyB,
      pool.pubkeys.accounts[0],
      pool.pubkeys.accounts[1],
      pool.pubkeys.mint,
      toAccount,
      swapProgramId,
      tokenProgramId,
      liquidity,
      amount0,
      amount1,
    ),
  );

  let tx = await sendTransactionFromInstructions(
    connection,
    wallet,
    instructions.concat(cleanupInstructions),
    signers,
  );

  notify({
    message: 'Pool Funded. Happy trading.',
    type: 'success',
    description: `Transaction - ${tx}`,
  });
}

function findOrCreateAccountByMint(
  connection: Connection,
  payer: PublicKey,
  owner: PublicKey,
  instructions: TransactionInstruction[],
  cleanupInstructions: TransactionInstruction[],
  accountRentExempt: number,
  mint: PublicKey, // use to identify same type
  signers: Account[],
  tokenProgramId: PublicKey,
): PublicKey {
  const accountToFind = mint.toBase58();
  const account = getCachedAccount(
    (acc) =>
      acc.info.mint.toBase58() === accountToFind &&
      acc.info.owner.toBase58() === owner.toBase58(),
  );
  const isWrappedSol = accountToFind === WRAPPED_SOL_MINT.toBase58();

  let toAccount: PublicKey;
  if (account && !isWrappedSol) {
    toAccount = account.pubkey;
  } else {
    // creating depositor pool account
    const newToAccount = createSplAccount(
      instructions,
      payer,
      accountRentExempt,
      mint,
      owner,
      AccountLayout.span,
      tokenProgramId
    );

    toAccount = newToAccount.publicKey;
    signers.push(newToAccount);

    if (isWrappedSol) {
      cleanupInstructions.push(
        Token.createCloseAccountInstruction(
          tokenProgramId,
          toAccount,
          payer,
          payer,
          [],
        ),
      );
    }
  }

  return toAccount;
}

export async function calculateDependentAmount(
  connection: Connection,
  independent: string,
  amount: number,
  pool: PoolInfo,
): Promise<number | undefined> {
  const poolMint = await cache.getMint(connection, pool.pubkeys.mint);
  const accountA = await cache.getAccount(connection, pool.pubkeys.accounts[0]);
  const accountB = await cache.getAccount(connection, pool.pubkeys.accounts[1]);
  if (!poolMint.mintAuthority) {
    throw new Error('Mint doesnt have authority');
  }

  if (poolMint.supply.eqn(0)) {
    return;
  }

  const mintA = await cache.getMint(connection, accountA.info.mint);
  const mintB = await cache.getMint(connection, accountB.info.mint);

  if (!mintA || !mintB) {
    return;
  }

  const isFirstIndependent = accountA.info.mint.toBase58() === independent;
  const depPrecision = Math.pow(
    10,
    isFirstIndependent ? mintB.decimals : mintA.decimals,
  );
  const indPrecision = Math.pow(
    10,
    isFirstIndependent ? mintA.decimals : mintB.decimals,
  );
  const adjAmount = amount * indPrecision;

  const dependentTokenAmount = isFirstIndependent
    ? (accountB.info.amount.toNumber() / accountA.info.amount.toNumber()) *
      adjAmount
    : (accountA.info.amount.toNumber() / accountB.info.amount.toNumber()) *
      adjAmount;

  return dependentTokenAmount / depPrecision;
}

async function _addLiquidityNewPool(
  wallet: any,
  connection: Connection,
  components: LiquidityComponent[],
  swapProgramId: PublicKey,
  tokenProgramId: PublicKey,
) {
  notify({
    message: 'Creating new pool...',
    description: 'Please review transactions to approve.',
    type: 'warn',
  });

  // sets fee in the pool to 0.3%
  // see for fees details: https://uniswap.org/docs/v2/advanced-topics/fees/
  const feeNumerator = 3;
  const feeDenominator = 1000;

  let instructions: TransactionInstruction[] = [];
  let cleanupInstructions: TransactionInstruction[] = [];

  const liquidityTokenAccount = new Account();
  // Create account for pool liquidity token
  const createPoolTokenTransaction = SystemProgram.createAccount({
    fromPubkey: wallet.publicKey,
    newAccountPubkey: liquidityTokenAccount.publicKey,
    lamports: await connection.getMinimumBalanceForRentExemption(
      MintLayout.span,
    ),
    space: MintLayout.span,
    programId: tokenProgramId,
  })
  instructions.concat(createPoolTokenTransaction.instructions);

  const tokenSwapAccount = new Account();

  const [authority, nonce] = await PublicKey.findProgramAddress(
    [tokenSwapAccount.publicKey.toBuffer()],
    swapProgramId,
  );

  // create mint for pool liquidity token
  instructions.push(
    Token.createInitMintInstruction(
      tokenProgramId,
      liquidityTokenAccount.publicKey,
      LIQUIDITY_TOKEN_PRECISION,
      // pass control of liquidity mint to swap program
      authority,
      // swap program can freeze liquidity token mint
      authority,
    ),
  );

  // Create holding accounts for
  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(
    AccountLayout.span,
  );
  const holdingAccounts: Account[] = [];
  let signers: Account[] = [];

  components.forEach((leg) => {
    const mintPublicKey = leg.account.info.mint;
    // component account to store tokens I of N in liquidity poll
    holdingAccounts.push(
      createSplAccount(
        instructions,
        wallet.publicKey,
        accountRentExempt,
        mintPublicKey,
        authority,
        AccountLayout.span,
        tokenProgramId
      ),
    );
  });

  // create all accounts in one transaction
  let tx = await sendTransactionFromInstructions(connection, wallet, instructions, [
    liquidityTokenAccount,
    ...holdingAccounts,
    ...signers,
  ]);

  notify({
    message: 'Accounts created',
    description: `Transaction ${tx}`,
    type: 'success',
  });

  notify({
    message: 'Adding Liquidity...',
    description: 'Please review transactions to approve.',
    type: 'warn',
  });

  signers = [];
  instructions = [];
  cleanupInstructions = [];

  const transaction = SystemProgram.createAccount({
    fromPubkey: wallet.publicKey,
    newAccountPubkey: tokenSwapAccount.publicKey,
    lamports: await connection.getMinimumBalanceForRentExemption(
      TokenSwapLayout.span,
    ),
    space: TokenSwapLayout.span,
    programId: swapProgramId,
  })
  instructions.concat(transaction.instructions);

  components.forEach((leg, i) => {
    // create temporary account for wrapped sol to perform transfer
    const from = getWrappedAccount(
      instructions,
      cleanupInstructions,
      leg.account,
      wallet.publicKey,
      leg.amount + accountRentExempt,
      signers,
      tokenProgramId
    );

    instructions.push(
      Token.createTransferInstruction(
        tokenProgramId,
        from,
        holdingAccounts[i].publicKey,
        wallet.publicKey,
        [],
        leg.amount,
      ),
    );
  });

  // creating depositor pool account
  const depositorAccount = createSplAccount(
    instructions,
    wallet.publicKey,
    accountRentExempt,
    liquidityTokenAccount.publicKey,
    wallet.publicKey,
    AccountLayout.span,
    tokenProgramId
  );

  instructions.push(
    createInitSwapInstruction(
      tokenSwapAccount,
      authority,
      nonce,
      holdingAccounts[0].publicKey,
      holdingAccounts[1].publicKey,
      liquidityTokenAccount.publicKey,
      depositorAccount.publicKey,
      tokenProgramId,
      swapProgramId,
      feeNumerator,
      feeDenominator,
    ),
  );

  // All instructions didn't fit in single transaction
  // initialize and provide inital liquidity to swap in 2nd (this prevents loss of funds)
  tx = await sendTransactionFromInstructions(
    connection,
    wallet,
    instructions.concat(cleanupInstructions),
    [tokenSwapAccount, depositorAccount, ...signers],
  );

  notify({
    message: 'Pool Funded. Happy trading.',
    type: 'success',
    description: `Transaction - ${tx}`,
  });
}

function getWrappedAccount(
  instructions: TransactionInstruction[],
  cleanupInstructions: TransactionInstruction[],
  toCheck: SwapTokenAccount,
  payer: PublicKey,
  amount: number,
  signers: Account[],
  tokenProgramId: PublicKey,
) {
  if (!toCheck.info.isNative) {
    return toCheck.pubkey;
  }

  const account = new Account();
  const transactions = SystemProgram.createAccount({
    fromPubkey: payer,
    newAccountPubkey: account.publicKey,
    lamports: amount,
    space: AccountLayout.span,
    programId: tokenProgramId,
  })
  instructions.concat(transactions.instructions);

  instructions.push(
    Token.createInitAccountInstruction(
      tokenProgramId,
      WRAPPED_SOL_MINT,
      account.publicKey,
      payer,
    ),
  );

  cleanupInstructions.push(
    Token.createCloseAccountInstruction(
      tokenProgramId,
      account.publicKey,
      payer,
      payer,
      [],
    ),
  );

  signers.push(account);

  return account.publicKey;
}

function createSplAccount(
  instructions: TransactionInstruction[],
  payer: PublicKey,
  accountRentExempt: number,
  mint: PublicKey,
  owner: PublicKey,
  space: number,
  tokenProgramId: PublicKey
) {
  const account = new Account();
  const transaction = SystemProgram.createAccount({
    fromPubkey: payer,
    newAccountPubkey: account.publicKey,
    lamports: accountRentExempt,
    space,
    programId: tokenProgramId,
  })
  instructions.concat(transaction.instructions);

  instructions.push(
    Token.createInitAccountInstruction(
      tokenProgramId,
      mint,
      account.publicKey,
      owner,
    ),
  );

  return account;
}

export interface KnownToken {
  tokenSymbol: string;
  tokenName: string;
  icon: string;
  mintAddress: string;
}

const AddressToToken = Object.keys(PopularTokens).reduce((map, key) => {
  const tokens = PopularTokens[key as ENV] as KnownToken[];
  const knownMints = tokens.reduce((map, item) => {
    map.set(item.mintAddress, item);
    return map;
  }, new Map<string, KnownToken>());

  map.set(key as ENV, knownMints);

  return map;
}, new Map<ENV, Map<string, KnownToken>>());

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  return `0x${address.substring(0, chars)}...${address.substring(44 - chars)}`;
}

export function getTokenName(env: ENV, mintAddress: string): string {
  const knownSymbol = AddressToToken.get(env)?.get(mintAddress)?.tokenSymbol;
  if (knownSymbol) {
    return knownSymbol;
  }

  return shortenAddress(mintAddress).substring(10).toUpperCase();
}

export function getTokenIcon(
  env: ENV,
  mintAddress: string,
): string | undefined {
  return AddressToToken.get(env)?.get(mintAddress)?.icon;
}

export function getPoolName(env: ENV, pool: PoolInfo) {
  const sorted = pool.pubkeys.accountMints.map((a) => a.toBase58()).sort();
  return sorted.map((item) => getTokenName(env, item)).join('/');
}

export function isKnownMint(env: ENV, mintAddress: string) {
  return !!AddressToToken.get(env)?.get(mintAddress);
}

export function formatTokenAmount(
  account?: SwapTokenAccount,
  mint?: MintInfo,
): string {
  if (!account) {
    return '';
  }

  const precision = Math.pow(10, mint?.decimals || 0);
  return (account.info.amount?.toNumber() / precision)?.toFixed(2);
}
