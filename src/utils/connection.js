import { useLocalStorageState } from './utils';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import React, { useContext, useMemo, useEffect } from 'react';
import { setCache, useAsyncData } from './fetch-loop';
import tuple from 'immutable-tuple';

export const ENDPOINTS = [
  {
    name: 'mainnet-beta',
    endpoint: clusterApiUrl('mainnet-beta'),
  },
  { name: 'testnet', endpoint: clusterApiUrl('testnet') },
  { name: 'devnet', endpoint: clusterApiUrl('devnet') },
  { name: 'localnet', endpoint: 'http://127.0.0.1:8899' },
];

const accountListenerCount = new Map();

const ConnectionContext = React.createContext(null);

export function ConnectionProvider({ children }) {
  const [endpoint, setEndpoint] = useLocalStorageState(
    'connectionEndpts',
    clusterApiUrl('mainnet-beta'),
  );

  const connection = useMemo(() => new Connection(endpoint, 'recent'), [
    endpoint,
  ]);
  const sendConnection = useMemo(() => new Connection(endpoint, 'recent'), [
    endpoint,
  ]);

  // The websocket library solana/web3.js uses closes its websocket connection when the subscription list
  // is empty after opening its first time, preventing subsequent subscriptions from receiving responses.
  // This is a hack to prevent the list from every getting empty
  useEffect(() => {
    const id = connection.onSignature(
      'do not worry, this is expected to yield warning logs',
      (result) => {
        console.log(
          'Received onSignature responses from does-not-exist',
          result,
        );
      },
    );
    return () => connection.removeSignatureListener(id);
  }, [connection]);
  useEffect(() => {
    const id = sendConnection.onSignature(
      'do not worry, this is expected to yield warning logs',
      (result) => {
        console.log(
          'Received onSignature responses from does-not-exist',
          result,
        );
      },
    );
    return () => sendConnection.removeSignatureListener(id);
  }, [sendConnection]);

  return (
    <ConnectionContext.Provider
      value={{ endpoint, setEndpoint, connection, sendConnection }}
    >
      {children}
    </ConnectionContext.Provider>
  );
}

export function useConnection() {
  return useContext(ConnectionContext).connection;
}

export function useSendConnection() {
  return useContext(ConnectionContext).sendConnection;
}

export function useConnectionConfig() {
  const context = useContext(ConnectionContext);
  return { endpoint: context.endpoint, setEndpoint: context.setEndpoint };
}

export function useAccountInfo(publicKey) {
  const connection = useConnection();
  const cacheKey = tuple(connection, publicKey?.toBase58());
  const [accountInfo, loaded] = useAsyncData(
    async () => (publicKey ? connection.getAccountInfo(publicKey) : null),
    cacheKey,
    { refreshInterval: 60000000 },
  );
  useEffect(() => {
    if (!publicKey) {
      return () => {};
    }
    if (accountListenerCount.has(cacheKey)) {
      let currentCount = accountListenerCount.get(cacheKey);
      accountListenerCount.set(cacheKey, currentCount + 1);
      return () => {};
    }
    let previousData = null;
    const id = connection.onAccountChange(publicKey, (e) => {
      if (e.data) {
        if (previousData && !previousData.equals(e.data)) {
          setCache(cacheKey, e);
        }
        previousData = e.data;
      }
    });
    accountListenerCount.set(cacheKey, 1);
    return () => {
      let currentCount = accountListenerCount.get(cacheKey);
      if (currentCount === 1) {
        // last listener, safe to unsubscribe
        connection.removeAccountChangeListener(id);
        accountListenerCount.delete(cacheKey);
      } else {
        accountListenerCount.set(cacheKey, currentCount - 1);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection, publicKey?.toBase58(), cacheKey]);
  return [accountInfo, loaded];
}

export function useAccountData(publicKey) {
  const [accountInfo] = useAccountInfo(publicKey);
  return accountInfo && accountInfo.data;
}
