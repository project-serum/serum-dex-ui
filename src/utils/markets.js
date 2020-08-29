import {
  Market,
  Orderbook,
  decodeEventQueue,
  DEX_PROGRAM_ID,
} from '@project-serum/serum';
import React, { useContext, useEffect, useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useLocalStorageState } from './utils';
import { useAsyncData } from './fetch-loop';
import { useAccountData, useConnection } from './connection';
import { useWallet } from './wallet';
import tuple from 'immutable-tuple';
import { notify } from './notifications';

const DEFAULT_MARKET_NAME = 'BASE/QUOTE';

export const COIN_MINTS = {
  EQePeYJUV9dQd5PWrPzgWMYvqaok8R8s5Cpa16VDPZxw: 'BASE',
  Ff7neGEVckMNcvhnazvWZ41TJoNmwXS4xz1XDNd46s22: 'QUOTE',
};

export const MARKET_INFO_BY_NAME = {
  'BASE/QUOTE': {
    name: 'BASE/QUOTE',
    address: '6ibUz1BqSD3f8XP4wEGwoRH4YbYRZ1KDZBeXmrp3KosD',
  },
};

export function useMarketsList() {
  return Object.values(MARKET_INFO_BY_NAME);
}

export function useAllMarkets() {
  const [selectedDexProgramID] = useLocalStorageState(
    'selectedDexProgramID',
    DEX_PROGRAM_ID.toBase58(),
  );

  const connection = useConnection();
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const getAllMarkets = async () => {
      const markets = [];
      const marketList = Object.values(MARKET_INFO_BY_NAME);
      let marketInfo;
      for (marketInfo of marketList) {
        const market = await Market.load(
          connection,
          new PublicKey(marketInfo.address),
          {},
          new PublicKey(selectedDexProgramID),
        );
        markets.push({ market, marketName: marketInfo.name });
      }
      setMarkets(markets);
    };

    getAllMarkets();
  }, [connection, selectedDexProgramID]);

  return markets;
}

const MarketContext = React.createContext(null);

// For things that don't really change
const _SLOW_REFRESH_INTERVAL = 1000 * 1000;

// For things that change frequently
const _FAST_REFRESH_INTERVAL = 5 * 1000;

export function MarketProvider({ children }) {
  const [marketName, setMarketName] = useLocalStorageState(
    'marketName',
    DEFAULT_MARKET_NAME,
  );
  const [selectedDexProgramID, setSelectedDexProgramID] = useLocalStorageState(
    'selectedDexProgramID',
    DEX_PROGRAM_ID.toBase58(),
  );

  const connection = useConnection();
  const marketInfo = MARKET_INFO_BY_NAME[marketName];
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
    Market.load(
      connection,
      new PublicKey(marketInfo.address),
      {},
      new PublicKey(selectedDexProgramID),
    )
      .then(setMarket)
      .catch((e) =>
        notify({
          message: 'Error loading market',
          description: e.message,
          type: 'error',
        }),
      );
  }, [connection, marketName, marketInfo, selectedDexProgramID]);

  const baseCurrency =
    COIN_MINTS[market?.baseMintAddress?.toBase58()] || 'UNKNOWN';
  const quoteCurrency =
    COIN_MINTS[market?.quoteMintAddress?.toBase58()] || 'UNKNOWN';
  return (
    <MarketContext.Provider
      value={{
        market,
        marketName,
        setMarketName,
        ...marketInfo,
        baseCurrency,
        quoteCurrency,
        selectedDexProgramID,
        setSelectedDexProgramID,
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

export function _useUnfilteredTrades(limit = 100000) {
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
      : bidOrderbook
          .getL2(depth)
          .map(([price, size]) => [price.toFixed(2), size]);
  const asks =
    !askOrderbook || !market
      ? []
      : askOrderbook
          .getL2(depth)
          .map(([price, size]) => [price.toFixed(2), size]);
  return [{ bids, asks }, !!bids || !!asks];
}

// Want the balances table to be fast-updating, dont want open orders to flicker
// TODO: Update to use websocket
export function useOpenOrdersAccounts(fast = false) {
  const { market } = useMarket();
  const [connected, wallet] = useWallet();
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
  const [connected, wallet] = useWallet();
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
  const [connected, wallet] = useWallet();
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
  const connection = useConnection();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
  async function getBalance() {
    if (!quoteCurrencyAccount) {
      return null;
    }
    const balances = await connection.getTokenAccountBalance(
      quoteCurrencyAccount.pubkey,
    );
    return balances && balances.value && balances.value.uiAmount;
  }
  return useAsyncData(
    getBalance,
    tuple(
      'useQuoteCurrencyBalances',
      connection,
      quoteCurrencyAccount && quoteCurrencyAccount.pubkey.toBase58(),
    ),
    { refreshInterval: _FAST_REFRESH_INTERVAL },
  );
}

// TODO: Update to use websocket
export function useBaseCurrencyBalances() {
  const connection = useConnection();
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  async function getBalance() {
    if (!baseCurrencyAccount) {
      return null;
    }
    const balances = await connection.getTokenAccountBalance(
      baseCurrencyAccount.pubkey,
    );
    return balances && balances.value && balances.value.uiAmount;
  }
  return useAsyncData(
    getBalance,
    tuple(
      'useBaseCurrencyBalances',
      connection,
      baseCurrencyAccount && baseCurrencyAccount.pubkey.toBase58(),
    ),
    { refreshInterval: _FAST_REFRESH_INTERVAL },
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
  const openOrdersAccount = openOrdersAccounts[0];
  return fills
    .filter((fill) => fill.openOrders.equals(openOrdersAccount.publicKey))
    .map((fill) => ({ ...fill, marketName }));
}

// TODO: Update to use websocket
export function useFillsForAllMarkets(limit = 100) {
  const [connected, wallet] = useWallet();

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
  const [connected, wallet] = useWallet();

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
