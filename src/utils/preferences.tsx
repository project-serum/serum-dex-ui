import React, {useContext, useState} from 'react';
import {sleep, useLocalStorageState} from './utils';
import {useInterval} from './useInterval';
import {useConnection} from './connection';
import {useWallet} from './wallet';
import {
  useMarketInfos,
  useTokenAccounts,
} from './markets';
import {settleAllFunds} from './send';
import {PreferencesContextValues} from './types';
import {Market} from "@project-serum/serum";

export const AUTO_SETTLE_DISABLED_OVERRIDE = true;

const PreferencesContext = React.createContext<PreferencesContextValues | null>(
  null,
);

export function PreferencesProvider({ children }) {
  const [autoSettleEnabled, setAutoSettleEnabled] = useLocalStorageState(
    'autoSettleEnabled',
    true,
  );

  const [tokenAccounts] = useTokenAccounts();
  const { connected, wallet } = useWallet();
  const marketInfoList = useMarketInfos();
  const [currentlyFetchingMarkets, setCurrentlyFetchingMarkets] = useState<boolean>(false);
  const [markets, setMarkets] = useState<Map<string, Market>>(new Map())
  const addToMarketsMap = (marketId, market) => {
    setMarkets(prev => new Map(prev).set(marketId, market));
  }
  const connection = useConnection();

  useInterval(() => {
    const autoSettle = async () => {
			if (AUTO_SETTLE_DISABLED_OVERRIDE) {
				return;
			}
      if (!wallet) {
        return;
      }
      try {
        console.log('Settling funds...');
        await settleAllFunds({
          connection,
          wallet,
          tokenAccounts: tokenAccounts || [],
          markets: [...markets.values()],
        });
      } catch (e) {
        console.log('Error auto settling funds: ' + e.message);
        return;
      }
      console.log('Finished settling funds.');
    };
    (
      connected &&
      wallet?.autoApprove &&
      autoSettleEnabled &&
      autoSettle()
    );
  }, 20000);

  // warms up the market and open orders cache for auto-settlement
  useInterval(() => {
    const fetchMarkets = async () => {
      if (!wallet) {
        // only need these markets for auto-settlement, so don't fetch unless we are connected.
        return;
      }
      setCurrentlyFetchingMarkets(true);
      for (const marketInfo of marketInfoList) {
        if (markets.has(marketInfo.address.toString())) {
          continue;
        }
        try {
          const market = await Market.load(connection, marketInfo.address, {}, marketInfo.programId)
          addToMarketsMap(marketInfo.address.toString(), market);
          await sleep(1000);
        } catch (e) {
          console.log('Error fetching market: ' + e.message);
        }
      }
      setCurrentlyFetchingMarkets(false);
    }
    (
      connected &&
      wallet?.autoApprove &&
      autoSettleEnabled &&
      !currentlyFetchingMarkets &&
      fetchMarkets()
    );
  }, 60000)

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
  if (!context) {
    throw new Error('Missing preferences context');
  }
  return {
    autoSettleEnabled: context.autoSettleEnabled,
    setAutoSettleEnabled: context.setAutoSettleEnabled,
  };
}
