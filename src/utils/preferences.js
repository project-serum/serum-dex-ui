import React, { useContext } from 'react';
import { useLocalStorageState } from './utils';
import { useInterval } from './useInterval';
import { useConnection } from './connection';
import { useWallet } from './wallet';
import { useAllMarkets, useTokenAccounts, useMarket } from './markets';
import { settleAllFunds } from './send';

const ConnectionContext = React.createContext(null);

export function PreferencesProvider({ children }) {
  const [autoSettleEnabled, setAutoSettleEnabled] = useLocalStorageState(
    'autoSettleEnabled',
    false,
  );

  const [tokenAccounts] = useTokenAccounts();
  const { connected, wallet } = useWallet();
  const { customMarkets } = useMarket();
  const marketList = useAllMarkets(customMarkets);
  const connection = useConnection();

  useInterval(() => {
    if (connected && wallet?.autoApprove && autoSettleEnabled) {
      console.log('Auto settling');
      const markets = marketList.map((m) => m.market);
      settleAllFunds({ connection, wallet, tokenAccounts, markets });
    }
  }, 10000);

  return (
    <ConnectionContext.Provider
      value={{
        autoSettleEnabled,
        setAutoSettleEnabled,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(ConnectionContext);
  return {
    autoSettleEnabled: context.autoSettleEnabled,
    setAutoSettleEnabled: context.setAutoSettleEnabled,
  };
}
