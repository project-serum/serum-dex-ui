import React, { useContext } from 'react';
import { useLocalStorageState } from './utils';
import { useInterval } from './useInterval';
import { useConnection } from './connection';
import { useWallet } from './wallet';
import { useAllMarkets, useTokenAccounts, useMarket } from './markets';
import { settleAllFunds } from './send';

const PreferencesContext = React.createContext(null);

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
    const autoSettle = async () => {
      const markets = marketList.map((m) => m.market);
      try {
        console.log('Auto settling');
        await settleAllFunds({ connection, wallet, tokenAccounts, markets });
      } catch (e) {
        console.log('Error auto settling funds: ' + e.message);
      }
    };

    connected && wallet?.autoApprove && autoSettleEnabled && autoSettle();
  }, 10000);

  return (
    <PreferencesContext.Provider
      value={{
        autoSettleEnabled,
        setAutoSettleEnabled,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  return {
    autoSettleEnabled: context.autoSettleEnabled,
    setAutoSettleEnabled: context.setAutoSettleEnabled,
  };
}
