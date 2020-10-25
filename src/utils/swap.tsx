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
import { ENDPOINTS, ENV, useConnection } from './connection';
import { AccountLayout, MintInfo, MintLayout, Token } from '@solana/spl-token';
import { notify } from './notifications';
import {
  cache,
  getCachedAccount,
  useCachedPool,
  useUserAccounts,
} from './swapAccounts';
import {
  createInitSwapInstruction,
  depositInstruction,
  LiquidityComponent,
  PoolConfig,
  PoolInfo,
  swapInstruction,
  SwapTokenAccount, TokenSwapLayout,
  TokenSwapLayoutLegacyV0,
  withdrawInstruction,
} from './swapTypes';
import PopularTokens from './swap-token-list.json';
import { sendTransaction } from './send';
import { WRAPPED_SOL_MINT } from '@project-serum/serum/lib/token-instructions';
import Wallet from '@project-serum/sol-wallet-adapter';

const DEFAULT_SLIPPAGE = 0.25; // TODO: set to lower value
export const PROGRAM_IDS = [
  {
    name: 'mainnet-beta',
    id: 'DnXyn8dAR5fJdqfBQciQ6gPSDNMQSTkQrPsR65ZF5qoW',
    legacy: ['HYv7pNgHkkBGxfrnCre2pMgLpWm7LJPKxiyZVytN5HrM'],
  },
  {
    name: 'testnet',
    id: '9tdctNJuFsYZ6VrKfKEuwwbPp4SFdFw3jYBZU8QUtzeX',
    legacy: ['CrRvVBS4Hmj47TPU3cMukurpmCUYUrdHYxTQBxncBGqw'],
  },
  {
    name: 'devnet',
    id: 'H1E1G7eD5Rrcy43xvDxXCsjkRggz7MWNMLGJ8YNzJ8PM',
    legacy: [
      'CMoteLxSPVPoc7Drcggf3QPg3ue8WPpxYyZTg77UGqHo',
      'EEuPz4iZA5reBUeZj6x1VzoiHfYeHMppSCnHZasRFhYo'
    ],
  },
  {
    name: 'localnet',
    id: '5rdpyt5iGfr68qt28hkefcFyF4WtyhTwqKDmHSBG8GZx',
    legacy: [],
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
    : new PublicKey('DnXyn8dAR5fJdqfBQciQ6gPSDNMQSTkQrPsR65ZF5qoW');
  const legacySwapProgramIds = swapProgramIdString
    ? swapProgramIdString.legacy.map(
        (legacyString) => new PublicKey(legacyString),
      )
    : [];
  const tokenProgramId = new PublicKey(
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  );

  const [slippage, setSlippage] = useLocalStorageState(
    'slippage',
    DEFAULT_SLIPPAGE.toString(),
  );

  const programIds = (): {
    token: PublicKey;
    swap: PublicKey;
    swap_legacy: PublicKey[];
  } => {
    return {
      token: tokenProgramId,
      swap: swapProgramId,
      swap_legacy: legacySwapProgramIds,
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
        legacySwapProgramIds,
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

export const sendTransactionFromInstructions = async (
  connection: any,
  wallet: Wallet,
  instructions: TransactionInstruction[],
  signers: Account[],
) => {
  let transaction = new Transaction();
  instructions.forEach((instruction) => transaction.add(instruction));
  return sendTransaction({ transaction, wallet, signers, connection });
};

export const removeLiquidity = async (
  connection: Connection,
  wallet: any,
  liquidityAmount: number,
  account: SwapTokenAccount,
  swapProgramId: PublicKey,
  tokenProgramId: PublicKey,
  pool?: PoolInfo,
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
  const accountA = await cache.getAccount(
    connection,
    pool.pubkeys.holdingAccounts[0],
  );
  const accountB = await cache.getAccount(
    connection,
    pool.pubkeys.holdingAccounts[1],
  );
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
      tokenProgramId,
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
      tokenProgramId,
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
    withdrawInstruction(
      pool.pubkeys.account,
      authority,
      pool.pubkeys.mint,
      pool.pubkeys.feeAccount,
      account.pubkey,
      pool.pubkeys.holdingAccounts[0],
      pool.pubkeys.holdingAccounts[1],
      toAccounts[0],
      toAccounts[1],
      pool.pubkeys.program,
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
    pool.pubkeys.holdingMints[0].toBase58() ===
    components[0].account.info.mint.toBase58()
      ? pool.pubkeys.holdingAccounts[0]
      : pool.pubkeys.holdingAccounts[1];
  const holdingB =
    holdingA === pool.pubkeys.holdingAccounts[0]
      ? pool.pubkeys.holdingAccounts[1]
      : pool.pubkeys.holdingAccounts[0];

  const poolMint = await cache.getMint(connection, pool.pubkeys.mint);
  if (!poolMint.mintAuthority || !pool.pubkeys.feeAccount) {
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
    tokenProgramId,
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
    tokenProgramId,
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
    swapInstruction(
      pool.pubkeys.account,
      authority,
      fromAccount,
      holdingA,
      holdingB,
      toAccount,
      pool.pubkeys.mint,
      pool.pubkeys.feeAccount,
      pool.pubkeys.program,
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
  legacySwapProgramIds: PublicKey[],
  tokenProgramId: PublicKey,
  pool?: PoolInfo,
  options?: PoolConfig,
) => {
  if (!pool) {
    if (!options) {
      throw new Error('Options are required to create new pool.');
    }

    console.log(options);

    await _addLiquidityNewPool(
      wallet,
      connection,
      components,
      options,
      swapProgramId,
      tokenProgramId,
    );
  } else {
    await _addLiquidityExistingPool(
      pool,
      components,
      connection,
      wallet,
      slippage,
      swapProgramId,
      tokenProgramId,
    );
  }
};

export const usePools = () => {
  const connection = useConnection();
  const [pools, setPools] = useState<PoolInfo[]>([]);
  const { swapProgramId, legacySwapProgramIds } = useSwapContext();

  const getHoldings = (accounts: string[]) => {
    return accounts.map((acc) =>
      cache.getAccount(connection, new PublicKey(acc)),
    );
  };

  useEffect(() => {
    const toPoolInfo = (item: any, program: PublicKey, toMerge?: PoolInfo) => {
      const mint = new PublicKey(item.data.tokenPool);
      return {
        pubkeys: {
          account: item.pubkey,
          program: program,
          mint,
          holdingMints: [] as PublicKey[],
          holdingAccounts: [
            item.data.tokenAccountA,
            item.data.tokenAccountB,
          ].map((a) => new PublicKey(a)),
        },
        legacy: false,
        raw: item,
      } as PoolInfo;
    };

    const queryPools = async (swapId: PublicKey) => {
      let poolsArray: PoolInfo[] = [];
      const results = await connection.getProgramAccounts(swapId)
      const swapAccounts = (results)
        .filter(
          (item) =>
            item.account.data.length === TokenSwapLayout.span ||
            item.account.data.length === TokenSwapLayoutLegacyV0.span,
        )
        .map((item) => {
          let result = {
            data: undefined as any,
            account: item.account,
            pubkey: item.pubkey,
            init: async () => {},
          };

          if (item.account.data.length === TokenSwapLayoutLegacyV0.span) {
            result.data = TokenSwapLayoutLegacyV0.decode(item.account.data);
            let pool = toPoolInfo(result, swapId);
            pool.legacy = true;
            poolsArray.push(pool as PoolInfo);

            result.init = async () => {
              try {
                // TODO: this is not great
                // Ideally SwapLayout stores hash of all the mints to make finding of pool for a pair easier
                const holdings = await Promise.all(
                  getHoldings([
                    result.data.tokenAccountA,
                    result.data.tokenAccountB,
                  ]),
                );

                pool.pubkeys.holdingMints = [
                  holdings[0].info.mint,
                  holdings[1].info.mint,
                ] as PublicKey[];
              } catch (err) {
                console.log(err);
              }
            };
          } else {
            result.data = TokenSwapLayout.decode(item.account.data);
            let pool = toPoolInfo(result, swapId);
            pool.pubkeys.feeAccount = new PublicKey(result.data.feeAccount);
            pool.pubkeys.holdingMints = [
              new PublicKey(result.data.mintA),
              new PublicKey(result.data.mintB),
            ] as PublicKey[];

            poolsArray.push(pool as PoolInfo);
          }

          return result;
        });

      return poolsArray;
    };

    Promise.all([
      queryPools(swapProgramId),
      ...legacySwapProgramIds.map((leg) => queryPools(leg)),
    ]).then((all) => {
      setPools(all.flat());
    });

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
            (p) => p.pubkeys.account.toBase58() === id,
          );
          if (index >= 0) {
            // TODO: check if account is empty?

            setPools([
              ...pools.filter((p, i) => i !== index),
              toPoolInfo(updated, swapProgramId),
            ]);
          } else {
            let pool = toPoolInfo(updated, swapProgramId);

            const holdings = await Promise.all(
              getHoldings([
                updated.data.tokenAccountA,
                updated.data.tokenAccountB,
              ]),
            );
            pool.pubkeys.holdingMints = [
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
  }, [connection, swapProgramId]);

  return { pools };
};

export const usePoolForBasket = (mints: (string | undefined)[]) => {
  const connection = useConnection();
  const { pools } = useCachedPool();
  const [pool, setPool] = useState<PoolInfo>();
  const sortedMints = [...mints].sort();

  useEffect(() => {
    (async () => {
      let matchingPool = pools
        .filter((p) => !p.legacy)
        .filter((p) =>
          p.pubkeys.holdingMints
            .map((a) => a.toBase58())
            .sort()
            .every((address, i) => address === sortedMints[i]),
        );

      for (let i = 0; i < matchingPool.length; i++) {
        const p = matchingPool[i];

        const account = await cache.getAccount(
          connection,
          p.pubkeys.holdingAccounts[0],
        );

        if (!account.info.amount.eqn(0)) {
          setPool(p);
          return;
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...sortedMints]);

  return pool;
};

export const useOwnedPools = () => {
  const { pools } = useCachedPool();
  const { userAccounts } = useUserAccounts();

  const map = userAccounts.reduce((acc, item) => {
    const key = item.info.mint.toBase58();
    acc.set(key, [...(acc.get(key) || []), item]);
    return acc;
  }, new Map<string, SwapTokenAccount[]>());

  return pools
    .filter((p) => map.has(p.pubkeys.mint.toBase58()))
    .map((item) => {
      let feeAccount = item.pubkeys.feeAccount?.toBase58();
      return map.get(item.pubkeys.mint.toBase58())?.map((a) => {
        return {
          account: a as SwapTokenAccount,
          isFeeAccount: feeAccount === a.pubkey.toBase58(),
          pool: item,
        };
      });
    })
    .flat();
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

  const accountA = await cache.getAccount(
    connection,
    pool.pubkeys.holdingAccounts[0],
  );
  const accountB = await cache.getAccount(
    connection,
    pool.pubkeys.holdingAccounts[1],
  );

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
    tokenProgramId,
  );
  const fromKeyB = getWrappedAccount(
    instructions,
    cleanupInstructions,
    fromB.account,
    wallet.publicKey,
    amount1 + accountRentExempt,
    signers,
    tokenProgramId,
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
    tokenProgramId,
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
    depositInstruction(
      pool.pubkeys.account,
      authority,
      fromKeyA,
      fromKeyB,
      pool.pubkeys.holdingAccounts[0],
      pool.pubkeys.holdingAccounts[1],
      pool.pubkeys.mint,
      toAccount,
      pool.pubkeys.program,
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
      tokenProgramId,
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
  const accountA = await cache.getAccount(
    connection,
    pool.pubkeys.holdingAccounts[0],
  );
  const accountB = await cache.getAccount(
    connection,
    pool.pubkeys.holdingAccounts[1],
  );
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

// TODO: add ui to customize curve type
async function _addLiquidityNewPool(
  wallet: any,
  connection: Connection,
  components: LiquidityComponent[],
  options: PoolConfig,
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
  // const feeNumerator = 25;
  // const feeDenominator = 10000;

  // additional fees fwd to owner account on every trade
  const tradeFeeNumerator = 5;
  const tradeFeeDenominator = 10000;

  let instructions: TransactionInstruction[] = [];
  let cleanupInstructions: TransactionInstruction[] = [];

  const liquidityTokenAccount = new Account();
  // Create account for pool liquidity token
  instructions.push(
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: liquidityTokenAccount.publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(
        MintLayout.span,
      ),
      space: MintLayout.span,
      programId: tokenProgramId,
    }),
  );

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
      null,
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
        tokenProgramId,
      ),
    );
  });

  // create all accounts in one transaction
  let tx = await sendTransactionFromInstructions(
    connection,
    wallet,
    instructions,
    [liquidityTokenAccount, ...holdingAccounts, ...signers],
  );

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

  instructions.push(
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: tokenSwapAccount.publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(
        TokenSwapLayout.span,
      ),
      space: TokenSwapLayout.span,
      programId: swapProgramId,
    }),
  );

  components.forEach((leg, i) => {
    // create temporary account for wrapped sol to perform transfer
    const from = getWrappedAccount(
      instructions,
      cleanupInstructions,
      leg.account,
      wallet.publicKey,
      leg.amount + accountRentExempt,
      signers,
      tokenProgramId,
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
    tokenProgramId,
  );

  // creating depositor pool account
  const feeAccount = createSplAccount(
    instructions,
    wallet.publicKey,
    accountRentExempt,
    liquidityTokenAccount.publicKey,
    wallet.publicKey,
    AccountLayout.span,
    tokenProgramId,
  );

  instructions.push(
    createInitSwapInstruction(
      tokenSwapAccount,
      authority,
      holdingAccounts[0].publicKey,
      holdingAccounts[1].publicKey,
      liquidityTokenAccount.publicKey,
      feeAccount.publicKey,
      depositorAccount.publicKey,
      tokenProgramId,
      swapProgramId,
      nonce,
      options.curveType,
      options.tradeFeeNumerator,
      options.tradeFeeDenominator,
      tradeFeeNumerator,
      tradeFeeDenominator,
      0,
      0,
    ),
  );

  // All instructions didn't fit in single transaction
  // initialize and provide inital liquidity to swap in 2nd (this prevents loss of funds)
  tx = await sendTransactionFromInstructions(
    connection,
    wallet,
    instructions.concat(cleanupInstructions),
    [tokenSwapAccount, depositorAccount, feeAccount, ...signers],
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
  instructions.push(
    SystemProgram.createAccount({
      fromPubkey: payer,
      newAccountPubkey: account.publicKey,
      lamports: amount,
      space: AccountLayout.span,
      programId: tokenProgramId,
    }),
  );

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
  tokenProgramId: PublicKey,
) {
  const account = new Account();
  instructions.push(
    SystemProgram.createAccount({
      fromPubkey: payer,
      newAccountPubkey: account.publicKey,
      lamports: accountRentExempt,
      space,
      programId: tokenProgramId,
    }),
  );

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
  const sorted = pool.pubkeys.holdingMints.map((a) => a.toBase58()).sort();
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
