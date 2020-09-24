import React, { useContext, useEffect, useMemo, useState } from 'react';
import Wallet from '@project-serum/sol-wallet-adapter';
import { notify } from './notifications';
import { useConnectionConfig, useConnection } from './connection';
import { useLocalStorageState } from './utils';
import { useAllMarkets } from './markets';
import { useInterval } from './useInterval';

export const WALLET_PROVIDERS = [
  { name: 'sollet.io', url: 'https://www.sollet.io' },
];

const WalletContext = React.createContext(null);

export function WalletProvider({ children }) {
  const { endpoint } = useConnectionConfig();
  const connection = useConnection();
  const markets = useAllMarkets();

  const [providerUrl, setProviderUrl] = useLocalStorageState(
    'walletProvider',
    'https://www.sollet.io',
  );
  const [autoSettleEnabled, setAutoSettleEnabled] = useLocalStorageState(
    'autoSettleEnabled',
    false,
  );
  const wallet = useMemo(() => new Wallet(providerUrl, endpoint), [
    providerUrl,
    endpoint,
  ]);

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    console.log('trying to connect');
    wallet.on('connect', () => {
      console.log('connected');
      setConnected(true);
      let walletPublicKey = wallet.publicKey.toBase58();
      let keyToDisplay =
        walletPublicKey.length > 20
          ? `${walletPublicKey.substring(0, 7)}.....${walletPublicKey.substring(
              walletPublicKey.length - 7,
              walletPublicKey.length,
            )}`
          : walletPublicKey;
      notify({
        message: 'Wallet update',
        description: 'Connected to wallet ' + keyToDisplay,
      });
    });
    wallet.on('disconnect', () => {
      setConnected(false);
      notify({
        message: 'Wallet update',
        description: 'Disconnected from wallet',
      });
    });
    return () => {
      wallet.disconnect();
      setConnected(false);
    };
  }, [wallet]);

  useInterval(() => {
    if (wallet?.autoApprove && autoSettleEnabled) {
    }
  }, [10000]);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        connected,
        autoSettleEnabled,
        setAutoSettleEnabled,
        providerUrl,
        setProviderUrl,
        providerName:
          WALLET_PROVIDERS.find(({ url }) => url === providerUrl)?.name ??
          providerUrl,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  return {
    connected: context.connected,
    wallet: context.wallet,
    providerUrl: context.providerUrl,
    setProvider: context.setProviderUrl,
    providerName: context.providerName,
    autoSettleEnabled: context.autoSettleEnabled,
    setAutoSettleEnabled: context.setAutoSettleEnabled,
  };
}

async function autoSettleFunds(connection, wallet, markets) {
  const getAccountsToSettle = async (market) => {
    const [accounts] = await market.findOpenOrdersAccountsForOwner(
      connection,
      wallet.publicKey,
    );
    const account = accounts && accounts[0];
    return {
      baseTokenFree:
        account?.baseTokenFree &&
        market.baseSplSizeToNumber(account.baseTokenFree),
      quoteTokenFree:
        account?.quoteTokenFree &&
        market.baseSplSizeToNumber(account.quoteTokenFree),
      account,
      market,
    };
  };
}
