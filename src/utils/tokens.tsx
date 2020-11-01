import * as BufferLayout from 'buffer-layout';
import bs58 from 'bs58';
import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';
import { WRAPPED_SOL_MINT } from '@project-serum/serum/lib/token-instructions';
import { TokenAccount } from './types';
import { TOKEN_MINTS } from '@project-serum/serum';
import { useAllMarkets, useMarket, useTokenAccounts } from './markets';
import { getMultipleSolanaAccounts } from './send';
import { useConnection } from './connection';
import { useAsyncData } from './fetch-loop';
import tuple from 'immutable-tuple';
import BN from 'bn.js';

export const ACCOUNT_LAYOUT = BufferLayout.struct([
  BufferLayout.blob(32, 'mint'),
  BufferLayout.blob(32, 'owner'),
  BufferLayout.nu64('amount'),
  BufferLayout.blob(93),
]);

export const MINT_LAYOUT = BufferLayout.struct([
  BufferLayout.blob(36),
  BufferLayout.blob(8, 'supply'),
  BufferLayout.u8('decimals'),
  BufferLayout.u8('initialized'),
  BufferLayout.blob(36),
]);

export function parseTokenAccountData(
  data: Buffer,
): { mint: PublicKey; owner: PublicKey; amount: number } {
  let { mint, owner, amount } = ACCOUNT_LAYOUT.decode(data);
  return {
    mint: new PublicKey(mint),
    owner: new PublicKey(owner),
    amount,
  };
}

export interface MintInfo {
  decimals: number;
  initialized: boolean;
  supply: BN;
}

export function parseTokenMintData(data): MintInfo {
  let { decimals, initialized, supply } = MINT_LAYOUT.decode(data);
  return {
    decimals,
    initialized: !!initialized,
    supply: new BN(supply, 10, 'le'),
  };
}

export function getOwnedAccountsFilters(publicKey: PublicKey) {
  return [
    {
      memcmp: {
        offset: ACCOUNT_LAYOUT.offsetOf('owner'),
        bytes: publicKey.toBase58(),
      },
    },
    {
      dataSize: ACCOUNT_LAYOUT.span,
    },
  ];
}

export const TOKEN_PROGRAM_ID = new PublicKey(
  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
);

export async function getOwnedTokenAccounts(
  connection: Connection,
  publicKey: PublicKey,
): Promise<Array<{ publicKey: PublicKey; accountInfo: AccountInfo<Buffer> }>> {
  let filters = getOwnedAccountsFilters(publicKey);
  // @ts-ignore
  let resp = await connection._rpcRequest('getProgramAccounts', [
    TOKEN_PROGRAM_ID.toBase58(),
    {
      commitment: connection.commitment,
      filters,
    },
  ]);
  if (resp.error) {
    throw new Error(
      'failed to get token accounts owned by ' +
        publicKey.toBase58() +
        ': ' +
        resp.error.message,
    );
  }
  return resp.result
    .map(({ pubkey, account: { data, executable, owner, lamports } }) => ({
      publicKey: new PublicKey(pubkey),
      accountInfo: {
        data: bs58.decode(data),
        executable,
        owner: new PublicKey(owner),
        lamports,
      },
    }))
    .filter(({ accountInfo }) => {
      // TODO: remove this check once mainnet is updated
      return filters.every((filter) => {
        if (filter.dataSize) {
          return accountInfo.data.length === filter.dataSize;
        } else if (filter.memcmp) {
          let filterBytes = bs58.decode(filter.memcmp.bytes);
          return accountInfo.data
            .slice(
              filter.memcmp.offset,
              filter.memcmp.offset + filterBytes.length,
            )
            .equals(filterBytes);
        }
        return false;
      });
    });
}

export async function getTokenAccountInfo(
  connection: Connection,
  ownerAddress: PublicKey,
) {
  let [splAccounts, account] = await Promise.all([
    getOwnedTokenAccounts(connection, ownerAddress),
    connection.getAccountInfo(ownerAddress),
  ]);
  const parsedSplAccounts: TokenAccount[] = splAccounts.map(
    ({ publicKey, accountInfo }) => {
      return {
        pubkey: publicKey,
        account: accountInfo,
        effectiveMint: parseTokenAccountData(accountInfo.data).mint,
      };
    },
  );
  return parsedSplAccounts.concat({
    pubkey: ownerAddress,
    account,
    effectiveMint: WRAPPED_SOL_MINT,
  });
}

export function useMintToTickers(): { [mint: string]: string } {
  const { customMarkets } = useMarket();
  const [markets] = useAllMarkets(customMarkets);
  const mintsToTickers = Object.fromEntries(
    TOKEN_MINTS.map((mint) => [mint.address.toBase58(), mint.name]),
  );
  for (let market of markets || []) {
    const customMarketInfo = customMarkets.find(
      (customMarket) =>
        customMarket.address === market.market.address.toBase58(),
    );
    if (!(market.market.baseMintAddress.toBase58() in mintsToTickers)) {
      if (customMarketInfo) {
        mintsToTickers[market.market.baseMintAddress.toBase58()] =
          customMarketInfo.baseLabel || `${customMarketInfo.name}_BASE`;
      }
    }
    if (!(market.market.quoteMintAddress.toBase58() in mintsToTickers)) {
      if (customMarketInfo) {
        mintsToTickers[market.market.quoteMintAddress.toBase58()] =
          customMarketInfo.quoteLabel || `${customMarketInfo.name}_QUOTE`;
      }
    }
  }
  return mintsToTickers;
}

const _VERY_SLOW_REFRESH_INTERVAL = 5000 * 1000;

export function useMintInfos(): [
  (
    | {
        [mintAddress: string]: {
          decimals: number;
          initialized: boolean;
        } | null;
      }
    | null
    | undefined
  ),
  boolean,
] {
  const connection = useConnection();
  const { customMarkets } = useMarket();
  const [tokenAccounts] = useTokenAccounts();
  const [allMarkets] = useAllMarkets(customMarkets);

  const allMints = (tokenAccounts || [])
    .map((account) => account.effectiveMint)
    .concat(
      (allMarkets || []).map((marketInfo) => marketInfo.market.baseMintAddress),
    )
    .concat(
      (allMarkets || []).map(
        (marketInfo) => marketInfo.market.quoteMintAddress,
      ),
    );
  const uniqueMints = [...new Set(allMints.map((mint) => mint.toBase58()))].map(
    (stringMint) => new PublicKey(stringMint),
  );

  const getAllMintInfo = async () => {
    const mintInfos = await getMultipleSolanaAccounts(connection, uniqueMints);
    return Object.fromEntries(
      Object.entries(mintInfos.value).map(([key, accountInfo]) => [
        key,
        accountInfo && parseTokenMintData(accountInfo.data),
      ]),
    );
  };

  return useAsyncData(
    getAllMintInfo,
    tuple(
      'getAllMintInfo',
      connection,
      (tokenAccounts || []).length,
      (allMarkets || []).length,
    ),
    { refreshInterval: _VERY_SLOW_REFRESH_INTERVAL },
  );
}
