import React, { useContext } from 'react';
import { useWalletKit } from '@gokiprotocol/walletkit';
import { useConnectedWallet, useSolana } from '@saberhq/use-solana';
import { WalletContextValues } from './types';

const WalletContext = React.createContext<null | WalletContextValues>(null);

export function WalletProvider({ children }) {
  const { walletProviderInfo } = useSolana();
  const wallet = useConnectedWallet();

  return (
    <WalletContext.Provider
      value={{
        wallet,
        providerUrl: walletProviderInfo?.url ?? 'walletProvider',
        providerName: walletProviderInfo?.name ?? 'walletProvider',
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const { connect } = useWalletKit();
  const { disconnect } = useSolana();
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('Missing wallet context');
  }

  const wallet = context.wallet;
  return {
    connected: wallet !== null,
    wallet: wallet,
    providerUrl: context.providerUrl,
    providerName: context.providerName,
    connect,
    disconnect,
    select: () => {
      disconnect();
      connect();
    },
  };
}
