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

const accountChangeListeners = new Map();

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
    if (accountChangeListeners.has(cacheKey)) {
      return () => {};
    }
    let previousData = null;
    // TODO: Just pipe the websocket data instead of re-fetching over REST
    const id = connection.onAccountChange(publicKey, (e) => {
      if (e.data) {
        if (previousData && !previousData.equals(e.data)) {
          setCache(cacheKey, e);
        }
        previousData = e.data;
      }
    });
    accountChangeListeners.set(cacheKey, id);
    return () => {
      connection.removeAccountChangeListener(id);
      accountChangeListeners.delete(cacheKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection, publicKey?.toBase58(), cacheKey]);
  return [accountInfo, loaded];
}

export function useAccountData(publicKey) {
  const [accountInfo] = useAccountInfo(publicKey);
  return accountInfo && accountInfo.data;
}
