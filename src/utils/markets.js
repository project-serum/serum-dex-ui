import {
  Market,
  Orderbook,
  decodeEventQueue,
  TokenInstructions,
  MARKETS,
  TOKEN_MINTS,
  OpenOrders,
} from '@project-serum/serum';
import { PublicKey } from '@solana/web3.js';
import React, { useContext, useEffect, useState } from 'react';
import { useLocalStorageState } from './utils';
import { useAsyncData } from './fetch-loop';
import { useAccountData, useAccountInfo, useConnection } from './connection';
import { useWallet } from './wallet';
import tuple from 'immutable-tuple';
import { notify } from './notifications';
import { BN } from 'bn.js';

// Used in debugging, should be false in production
const _IGNORE_DEPRECATED = false;

const USE_MARKETS = _IGNORE_DEPRECATED
  ? MARKETS.map((m) => ({ ...m, deprecated: false }))
  : MARKETS;

export function useMarketsList() {
  return USE_MARKETS.filter(({ deprecated }) => !deprecated);
}

export function useAllMarkets() {
  const connection = useConnection();
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const getAllMarkets = async () => {
      const markets = [];
      let marketInfo;
      for (marketInfo of USE_MARKETS) {
        try {
          const market = await Market.load(
            connection,
            marketInfo.address,
            {},
            marketInfo.programId,
          );
          markets.push({ market, marketName: marketInfo.name });
        } catch (e) {
          notify({
            message: 'Error loading market',
            description: e.message,
            type: 'error',
          });
        }
      }
      setMarkets(markets);
    };

    getAllMarkets();
  }, [connection]);

  return markets;
}

export function useUnmigratedDeprecatedMarketsList() {
  const connection = useConnection();
  const { wallet } = useWallet();

  async function getUnmigratedDeprecatedMarkets() {
    if (!wallet || !connection || !wallet.publicKey) {
      return [];
    }
    let marketAddresses = [];
    const deprecatedProgramIds = Array.from(
      new Set(
        USE_MARKETS.filter(({ deprecated }) => deprecated).map(
          ({ programId }) => programId,
        ),
      ),
    );
    let programId;
    for (programId of deprecatedProgramIds) {
      try {
        const openOrdersAccounts = await OpenOrders.findForOwner(
          connection,
          wallet.publicKey,
          programId,
        );
        marketAddresses = marketAddresses.concat(
          Array.from(
            new Set(
              openOrdersAccounts
                .filter(
                  (openOrders) =>
                    openOrders.baseTokenTotal.toNumber() ||
                    openOrders.quoteTokenTotal.toNumber(),
                )
                .map((openOrders) => openOrders.market),
            ),
          ).filter((address) =>
            USE_MARKETS.some(
              (market) => market.deprecated && market.address.equals(address),
            ),
          ),
        );
      } catch (e) {
        console.log(
          'Error loading deprecated markets',
          programId?.toBase58(),
          e.message,
        );
      }
    }
    return USE_MARKETS.filter((market) =>
      marketAddresses.some((address) => address.equals(market.address)),
    );
  }

  const [markets] = useAsyncData(
    getUnmigratedDeprecatedMarkets,
    tuple(
      'useUnmigratedDeprecatedMarketsList',
      connection,
      wallet?.publicKey?.toBase58(),
    ),
    { refreshInterval: _SLOW_REFRESH_INTERVAL },
  );

  return markets;
}

const MarketContext = React.createContext(null);

// For things that don't really change
const _SLOW_REFRESH_INTERVAL = 5 * 1000;

// For things that change frequently
const _FAST_REFRESH_INTERVAL = 1000;

export const DEFAULT_MARKET = USE_MARKETS.find(
  ({ name }) => name === 'SRM/USDT',
);

export function MarketProvider({ children }) {
  const [marketAddress, setMarketAddress] = useLocalStorageState(
    'marketAddress',
    DEFAULT_MARKET.address.toBase58(),
  );

  const connection = useConnection();
  const marketInfo = USE_MARKETS.find((market) =>
    market.address.equals(new PublicKey(marketAddress)),
  );

  // Replace existing market with a non-deprecated one on first load
  useEffect(() => {
    if (marketInfo && marketInfo.deprecated) {
      console.log('Switching markets from deprecated', marketInfo);
      setMarketAddress(DEFAULT_MARKET.address.toBase58());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [market, setMarket] = useState();
  useEffect(() => {
    setMarket(null);
    if (!marketInfo || !marketInfo.address) {
      notify({
        message: 'Error loading market',
        description: 'Please select a market from the dropdown',
        type: 'error',
      });
      return;
    }
    Market.load(connection, marketInfo.address, {}, marketInfo.programId)
      .then(setMarket)
      .catch((e) =>
        notify({
          message: 'Error loading market',
          description: e.message,
          type: 'error',
        }),
      );
  }, [connection, marketInfo]);

  const baseCurrency =
    (market?.baseMintAddress &&
      TOKEN_MINTS.find((token) => token.address.equals(market.baseMintAddress))
        ?.name) ||
    'UNKNOWN';
  const quoteCurrency =
    (market?.quoteMintAddress &&
      TOKEN_MINTS.find((token) => token.address.equals(market.quoteMintAddress))
        ?.name) ||
    'UNKNOWN';
  return (
    <MarketContext.Provider
      value={{
        market,
        marketName: marketInfo?.name,
        setMarketAddress,
        ...marketInfo,
        baseCurrency,
        quoteCurrency,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
}

export function useMarket() {
  return useContext(MarketContext);
}

export function useMarkPrice() {
  const [markPrice, setMarkPrice] = useState(null);

  const [orderbook] = useOrderbook();
  const trades = useTrades();

  useEffect(() => {
    let bb = orderbook?.bids?.length > 0 && Number(orderbook.bids[0][0]);
    let ba = orderbook?.asks?.length > 0 && Number(orderbook.asks[0][0]);
    let last = trades?.length > 0 && trades[0].price;

    let markPrice =
      bb && ba
        ? last
          ? [bb, ba, last].sort((a, b) => a - b)[1]
          : (bb + ba) / 2
        : null;

    setMarkPrice(markPrice);
  }, [orderbook, trades]);

  return markPrice;
}

export function _useUnfilteredTrades(limit = 10000) {
  const { market } = useMarket();
  const connection = useConnection();
  async function getUnfilteredTrades() {
    if (!market || !connection) {
      return null;
    }
    return await market.loadFills(connection, limit);
  }
  const [trades] = useAsyncData(
    getUnfilteredTrades,
    tuple('getUnfilteredTrades', market, connection),
    { refreshInterval: _SLOW_REFRESH_INTERVAL },
  );
  return trades;
  // NOTE: For now, websocket is too expensive since the event queue is large
  // and updates very frequently

  // let data = useAccountData(market && market._decoded.eventQueue);
  // if (!data) {
  //   return null;
  // }
  // const events = decodeEventQueue(data, limit);
  // return events
  //   .filter((event) => event.eventFlags.fill && event.nativeQuantityPaid.gtn(0))
  //   .map(market.parseFillEvent.bind(market));
}

export function useOrderbookAccounts() {
  const { market } = useMarket();
  let bidData = useAccountData(market && market._decoded.bids);
  let askData = useAccountData(market && market._decoded.asks);
  return {
    bidOrderbook: bidData ? Orderbook.decode(market, bidData) : null,
    askOrderbook: askData ? Orderbook.decode(market, askData) : null,
  };
}

export function useOrderbook(depth = 20) {
  const { bidOrderbook, askOrderbook } = useOrderbookAccounts();
  const { market } = useMarket();
  const bids =
    !bidOrderbook || !market
      ? []
      : bidOrderbook.getL2(depth).map(([price, size]) => [price, size]);
  const asks =
    !askOrderbook || !market
      ? []
      : askOrderbook.getL2(depth).map(([price, size]) => [price, size]);
  return [{ bids, asks }, !!bids || !!asks];
}

// Want the balances table to be fast-updating, dont want open orders to flicker
// TODO: Update to use websocket
export function useOpenOrdersAccounts(fast = false) {
  const { market } = useMarket();
  const { connected, wallet } = useWallet();
  const connection = useConnection();
  async function getTokenAccounts() {
    if (!connected) {
      return null;
    }
    if (!market) {
      return null;
    }
    return await market.findOpenOrdersAccountsForOwner(
      connection,
      wallet.publicKey,
    );
  }
  return useAsyncData(
    getTokenAccounts,
    tuple('openOrdersAccounts', wallet, market, connected),
    { refreshInterval: fast ? _FAST_REFRESH_INTERVAL : _SLOW_REFRESH_INTERVAL },
  );
}

export function useSelectedOpenOrdersAccount(fast = false) {
  const [accounts] = useOpenOrdersAccounts(fast);
  if (!accounts) {
    return null;
  }
  return accounts[0];
}

export function useOpenOrdersAddresses() {
  const [openOrdersAccounts] = useOpenOrdersAccounts();
  if (!openOrdersAccounts) {
    return null;
  }
  return openOrdersAccounts.map(({ publicKey }) => publicKey);
}

// This is okay to poll
export function useBaseCurrencyAccounts() {
  const { market } = useMarket();
  const { connected, wallet } = useWallet();
  const connection = useConnection();
  async function getTokenAccounts() {
    if (!connected) {
      return null;
    }
    if (!market) {
      return null;
    }
    return await market.findBaseTokenAccountsForOwner(
      connection,
      wallet.publicKey,
      true,
    );
  }
  return useAsyncData(
    getTokenAccounts,
    tuple('getTokenAccounts', wallet, market, connected),
    { refreshInterval: _SLOW_REFRESH_INTERVAL },
  );
}

// This is okay to poll
export function useQuoteCurrencyAccounts() {
  const { market } = useMarket();
  const { connected, wallet } = useWallet();
  const connection = useConnection();
  async function getTokenAccounts() {
    if (!connected) {
      return null;
    }
    if (!market) {
      return null;
    }
    return await market.findQuoteTokenAccountsForOwner(
      connection,
      wallet.publicKey,
      true,
    );
  }
  return useAsyncData(
    getTokenAccounts,
    tuple('useQuoteCurrencyAccounts', wallet, market, connected),
    { refreshInterval: _SLOW_REFRESH_INTERVAL },
  );
}

export function useSelectedQuoteCurrencyAccount() {
  const [accounts] = useQuoteCurrencyAccounts();
  if (!accounts) {
    return null;
  }
  return accounts[0];
}

export function useSelectedBaseCurrencyAccount() {
  const [accounts] = useBaseCurrencyAccounts();
  if (!accounts) {
    return null;
  }
  return accounts[0];
}

// TODO: Update to use websocket
export function useQuoteCurrencyBalances() {
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
  const { market } = useMarket();
  const [accountInfo, loaded] = useAccountInfo(quoteCurrencyAccount?.pubkey);
  if (!market || !quoteCurrencyAccount || !loaded) {
    return null;
  }
  if (market.quoteMintAddress.equals(TokenInstructions.WRAPPED_SOL_MINT)) {
    return accountInfo?.lamports / 1e9 ?? 0;
  }
  return market.quoteSplSizeToNumber(
    new BN(accountInfo.data.slice(64, 72), 10, 'le'),
  );
}

// TODO: Update to use websocket
export function useBaseCurrencyBalances() {
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const { market } = useMarket();
  const [accountInfo, loaded] = useAccountInfo(baseCurrencyAccount?.pubkey);
  if (!market || !baseCurrencyAccount || !loaded) {
    return null;
  }
  if (market.baseMintAddress.equals(TokenInstructions.WRAPPED_SOL_MINT)) {
    return accountInfo?.lamports / 1e9 ?? 0;
  }
  return market.baseSplSizeToNumber(
    new BN(accountInfo.data.slice(64, 72), 10, 'le'),
  );
}

export function useOpenOrders() {
  const { market, marketName } = useMarket();
  const openOrdersAccount = useSelectedOpenOrdersAccount();
  const { bidOrderbook, askOrderbook } = useOrderbookAccounts();
  if (!market || !openOrdersAccount || !bidOrderbook || !askOrderbook) {
    return null;
  }
  return market
    .filterForOpenOrders(bidOrderbook, askOrderbook, [openOrdersAccount])
    .map((order) => ({ ...order, marketName }));
}

export function useTrades(limit = 100) {
  const trades = _useUnfilteredTrades(limit);
  if (!trades) {
    return null;
  }
  // Until partial fills are each given their own fill, use maker fills
  return trades
    .filter(({ eventFlags }) => eventFlags.maker)
    .map((trade) => ({
      ...trade,
      side: trade.side === 'buy' ? 'sell' : 'buy',
    }));
}

export function useFeeDiscountKeys() {
  const { market } = useMarket();
  const { connected, wallet } = useWallet();
  const connection = useConnection();
  async function getFeeDiscountKeys() {
    if (!connected) {
      return null;
    }
    if (!market) {
      return null;
    }
    return await market.findFeeDiscountKeys(connection, wallet.publicKey);
  }
  return useAsyncData(
    getFeeDiscountKeys,
    tuple('getFeeDiscountKeys', wallet, market, connected),
    { refreshInterval: _SLOW_REFRESH_INTERVAL },
  );
}

export function useFills(limit = 100) {
  const { marketName } = useMarket();
  const fills = _useUnfilteredTrades(limit);
  const [openOrdersAccounts] = useOpenOrdersAccounts();
  if (!openOrdersAccounts || openOrdersAccounts.length === 0) {
    return null;
  }
  if (!fills) {
    return null;
  }
  return fills
    .filter((fill) =>
      openOrdersAccounts.some((openOrdersAccount) =>
        fill.openOrders.equals(openOrdersAccount.publicKey),
      ),
    )
    .map((fill) => ({ ...fill, marketName }));
}

// TODO: Update to use websocket
export function useFillsForAllMarkets(limit = 100) {
  const { connected, wallet } = useWallet();

  const connection = useConnection();
  const allMarkets = useAllMarkets();

  async function getFillsForAllMarkets() {
    let fills = [];
    if (!connected) {
      return fills;
    }

    let marketData;
    for (marketData of allMarkets) {
      const { market, marketName } = marketData;
      if (!market) {
        return fills;
      }
      const openOrdersAccounts = await market.findOpenOrdersAccountsForOwner(
        connection,
        wallet.publicKey,
      );
      const openOrdersAccount = openOrdersAccounts && openOrdersAccounts[0];
      if (!openOrdersAccount) {
        return fills;
      }
      const eventQueueData = await connection.getAccountInfo(
        market && market._decoded.eventQueue,
      );
      let data = eventQueueData?.data;
      if (!data) {
        return fills;
      }
      const events = decodeEventQueue(data, limit);
      const fillsForMarket = events
        .filter(
          (event) => event.eventFlags.fill && event.nativeQuantityPaid.gtn(0),
        )
        .map(market.parseFillEvent.bind(market));
      const ownFillsForMarket = fillsForMarket
        .filter((fill) => fill.openOrders.equals(openOrdersAccount.publicKey))
        .map((fill) => ({ ...fill, marketName }));
      fills = fills.concat(ownFillsForMarket);
    }

    console.log(JSON.stringify(fills));
    return fills;
  }

  return useAsyncData(
    getFillsForAllMarkets,
    tuple('getFillsForAllMarkets', connected, connection, allMarkets, wallet),
    { refreshInterval: _FAST_REFRESH_INTERVAL },
  );
}

// TODO: Update to use websocket
export function useOpenOrdersForAllMarkets() {
  const { connected, wallet } = useWallet();

  const connection = useConnection();
  const allMarkets = useAllMarkets();

  async function getOpenOrdersForAllMarkets() {
    let orders = [];
    if (!connected) {
      return orders;
    }

    let marketData;
    for (marketData of allMarkets) {
      const { market, marketName } = marketData;
      if (!market) {
        return orders;
      }
      const openOrdersAccounts = await market.findOpenOrdersAccountsForOwner(
        connection,
        wallet.publicKey,
      );
      const openOrdersAccount = openOrdersAccounts && openOrdersAccounts[0];
      if (!openOrdersAccount) {
        return orders;
      }
      const [bids, asks] = await Promise.all([
        market.loadBids(connection),
        market.loadAsks(connection),
      ]);
      const ordersForMarket = [...bids, ...asks]
        .filter((order) => {
          return order.openOrdersAddress.equals(openOrdersAccount.publicKey);
        })
        .map((order) => {
          return { ...order, marketName };
        });
      orders = orders.concat(ordersForMarket);
    }

    return orders;
  }

  return useAsyncData(
    getOpenOrdersForAllMarkets,
    tuple(
      'getOpenOrdersForAllMarkets',
      connected,
      connection,
      wallet,
      allMarkets,
    ),
    { refreshInterval: _SLOW_REFRESH_INTERVAL },
  );
}

export function useBalances() {
  const baseCurrencyBalances = useBaseCurrencyBalances();
  const quoteCurrencyBalances = useQuoteCurrencyBalances();
  const openOrdersAccount = useSelectedOpenOrdersAccount(true);
  const { baseCurrency, quoteCurrency, market } = useMarket();
  const baseExists =
    openOrdersAccount &&
    openOrdersAccount.baseTokenTotal &&
    openOrdersAccount.baseTokenFree;
  const quoteExists =
    openOrdersAccount &&
    openOrdersAccount.quoteTokenTotal &&
    openOrdersAccount.quoteTokenFree;
  if (baseCurrency === 'UNKNOWN' || quoteCurrency === 'UNKNOWN') {
    return [];
  }
  return [
    {
      key: `${baseCurrency}${quoteCurrency}${baseCurrency}`,
      coin: baseCurrency,
      wallet: baseCurrencyBalances,
      orders:
        baseExists && market
          ? market.baseSplSizeToNumber(
              openOrdersAccount.baseTokenTotal.sub(
                openOrdersAccount.baseTokenFree,
              ),
            )
          : null,
      unsettled:
        baseExists && market
          ? market.baseSplSizeToNumber(openOrdersAccount.baseTokenFree)
          : null,
    },
    {
      key: `${quoteCurrency}${baseCurrency}${quoteCurrency}`,
      coin: quoteCurrency,
      wallet: quoteCurrencyBalances,
      orders:
        quoteExists && market
          ? market.quoteSplSizeToNumber(
              openOrdersAccount.quoteTokenTotal.sub(
                openOrdersAccount.quoteTokenFree,
              ),
            )
          : null,
      unsettled:
        quoteExists && market
          ? market.quoteSplSizeToNumber(openOrdersAccount.quoteTokenFree)
          : null,
    },
  ];
}

export function useWalletBalancesForAllMarkets() {
  const { connected, wallet } = useWallet();

  const connection = useConnection();
  const allMarkets = useAllMarkets();

  async function getWalletBalancesForAllMarkets() {
    let balances = [];
    if (!connected) {
      return balances;
    }

    let marketData;
    for (marketData of allMarkets) {
      const { market, marketName } = marketData;
      if (!market) {
        return balances;
      }
      const baseCurrency = marketName.includes('/') && marketName.split('/')[0];
      if (!balances.find((balance) => balance.coin === baseCurrency)) {
        const baseBalance = await getCurrencyBalance(
          market,
          connection,
          wallet,
          true,
        );
        balances.push({
          key: baseCurrency,
          coin: baseCurrency,
          wallet: baseBalance,
        });
      }
      const quoteCurrency =
        marketName.includes('/') && marketName.split('/')[1];
      if (!balances.find((balance) => balance.coin === quoteCurrency)) {
        const quoteBalance = await getCurrencyBalance(
          market,
          connection,
          wallet,
          false,
        );
        balances.push({
          key: quoteCurrency,
          coin: quoteCurrency,
          wallet: quoteBalance,
        });
      }
    }

    return balances;
  }

  return useAsyncData(
    getWalletBalancesForAllMarkets,
    tuple(
      'getWalletBalancesForAllMarkets',
      connected,
      connection,
      wallet,
      allMarkets,
    ),
    { refreshInterval: _SLOW_REFRESH_INTERVAL },
  );
}

async function getCurrencyBalance(market, connection, wallet, base = true) {
  const currencyAccounts = base
    ? await market.findBaseTokenAccountsForOwner(connection, wallet.publicKey)
    : await market.findQuoteTokenAccountsForOwner(connection, wallet.publicKey);
  const currencyAccount = currencyAccounts && currencyAccounts[0];
  const tokenAccountBalances = await connection.getTokenAccountBalance(
    currencyAccount.pubkey,
  );
  return tokenAccountBalances?.value?.uiAmount;
}

export function useOpenOrderAccountBalancesForAllMarkets() {
  const { connected, wallet } = useWallet();

  const connection = useConnection();
  const allMarkets = useAllMarkets();

  async function getOpenOrderAccountsForAllMarkets() {
    let accounts = [];
    if (!connected) {
      return accounts;
    }

    let marketData;
    for (marketData of allMarkets) {
      const { market, marketName } = marketData;
      if (!market) {
        return accounts;
      }
      const openOrderAccounts = await market.findOpenOrdersAccountsForOwner(
        connection,
        wallet.publicKey,
      );
      if (!openOrderAccounts) {
        continue;
      }
      const baseCurrencyAccounts = await market.findBaseTokenAccountsForOwner(
        connection,
        wallet.publicKey,
      );
      const quoteCurrencyAccounts = await market.findQuoteTokenAccountsForOwner(
        connection,
        wallet.publicKey,
      );

      const baseCurrency = marketName.includes('/') && marketName.split('/')[0];
      const quoteCurrency =
        marketName.includes('/') && marketName.split('/')[1];

      const openOrderAccountBalances = [];
      openOrderAccounts.forEach((openOrdersAccount) => {
        const inOrdersBase =
          openOrdersAccount?.baseTokenTotal &&
          openOrdersAccount?.baseTokenFree &&
          market.baseSplSizeToNumber(
            openOrdersAccount.baseTokenTotal.sub(
              openOrdersAccount.baseTokenFree,
            ),
          );
        const inOrdersQuote =
          openOrdersAccount?.quoteTokenTotal &&
          openOrdersAccount?.quoteTokenFree &&
          market.baseSplSizeToNumber(
            openOrdersAccount.quoteTokenTotal.sub(
              openOrdersAccount.quoteTokenFree,
            ),
          );
        const unsettledBase =
          openOrdersAccount?.baseTokenFree &&
          market.baseSplSizeToNumber(openOrdersAccount.baseTokenFree);
        const unsettledQuote =
          openOrdersAccount?.quoteTokenFree &&
          market.baseSplSizeToNumber(openOrdersAccount.quoteTokenFree);
        openOrderAccountBalances.push({
          market: marketName,
          coin: baseCurrency,
          key: baseCurrency,
          orders: inOrdersBase,
          unsettled: unsettledBase,
          openOrdersAccount: openOrdersAccount,
          baseCurrencyAccount: baseCurrencyAccounts && baseCurrencyAccounts[0],
          quoteCurrencyAccount:
            quoteCurrencyAccounts && quoteCurrencyAccounts[0],
        });
        openOrderAccountBalances.push({
          market: marketName,
          coin: quoteCurrency,
          key: quoteCurrency,
          orders: inOrdersQuote,
          unsettled: unsettledQuote,
          openOrdersAccount: openOrdersAccount,
          baseCurrencyAccount: baseCurrencyAccounts && baseCurrencyAccounts[0],
          quoteCurrencyAccount:
            quoteCurrencyAccounts && quoteCurrencyAccounts[0],
        });
      });
      accounts = accounts.concat(openOrderAccountBalances);
    }

    return accounts;
  }

  return useAsyncData(
    getOpenOrderAccountsForAllMarkets,
    tuple(
      'getOpenOrderAccountsForAllMarkets',
      connected,
      connection,
      wallet,
      allMarkets,
    ),
    { refreshInterval: _SLOW_REFRESH_INTERVAL },
  );
}
