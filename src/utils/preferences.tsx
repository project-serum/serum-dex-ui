import React, {useContext} from 'react';
import {sleep, useLocalStorageState} from './utils';
import {useInterval} from './useInterval';
import {useConnection} from './connection';
import {useWallet} from './wallet';
import {
  getCachedMarket,
  getCachedOpenOrderAccounts,
  getSelectedTokenAccountForMint,
  useCurrentlyAutoSettling,
  useMarketInfos,
  useTokenAccounts,
} from './markets';
import {settleFunds} from './send';
import {PreferencesContextValues} from './types';
import {getAssociatedTokenAddress} from "@project-serum/associated-token";

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
  const [currentlyAutoSettling, setCurrentlyAutoSettling] = useCurrentlyAutoSettling();
  const connection = useConnection();

  useInterval(() => {
    const autoSettle = async () => {
      if (!wallet) {
        return;
      }
      setCurrentlyAutoSettling(true);
      for (const marketInfo of marketInfoList) {
        try {
          console.log(`Autosettling ${marketInfo.name} ${marketInfo.address.toString()}`);
          const market = await getCachedMarket(connection, marketInfo.address, marketInfo.programId);
          const openOrderAccounts = await getCachedOpenOrderAccounts(connection, market, wallet.publicKey);
          // settle funds into selected token wallets
          const [baseAssocTokenAddress, quoteAssocTokenAddress] = await Promise.all([
            getAssociatedTokenAddress(wallet.publicKey, market.baseMintAddress),
            getAssociatedTokenAddress(wallet.publicKey, market.quoteMintAddress)
          ]);
          const baseCurrencyAccount = getSelectedTokenAccountForMint(
            tokenAccounts, market.baseMintAddress, baseAssocTokenAddress);
          const quoteCurrencyAccount = getSelectedTokenAccountForMint(
            tokenAccounts, market.quoteMintAddress, quoteAssocTokenAddress);
          const openOrders = openOrderAccounts.find(oo => oo.market.equals(marketInfo.address));
          if (baseCurrencyAccount && quoteCurrencyAccount && openOrders) {
            await settleFunds({
              market, openOrders, connection, wallet, baseCurrencyAccount, quoteCurrencyAccount
            });
            await sleep(1000);
          }
        } catch (e) {
          console.log('Error auto settling funds: ' + e.message);
        }
      }
      setCurrentlyAutoSettling(false);
    };
    (
      connected &&
      wallet?.autoApprove &&
      autoSettleEnabled &&
      !currentlyAutoSettling &&
      autoSettle()
    );
  }, 60000);

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
