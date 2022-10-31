import React, { Suspense, useMemo } from 'react';
import './App.less';
import { ConnectionProvider, useConnectionConfig } from './utils/connection';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { GlobalStyle } from './global_style';
import { Spin } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes } from './routes';
import { PreferencesProvider } from './utils/preferences';
import { ReferrerProvider } from './utils/referrer';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { LedgerWalletAdapter } from '@solana/wallet-adapter-ledger';
import {
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
} from '@solana/wallet-adapter-sollet';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { MathWalletAdapter } from '@solana/wallet-adapter-mathwallet';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

function AppImpl() {
  const { endpoint } = useConnectionConfig();
  const network = useMemo(() => endpoint as WalletAdapterNetwork, [endpoint]);
  const wallets = useMemo(
    () => [
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
      new LedgerWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new PhantomWalletAdapter(),
      new MathWalletAdapter(),
    ],
    [network],
  );
  return (
    <ReferrerProvider>
      <WalletProvider autoConnect wallets={wallets}>
        <PreferencesProvider>
          <Suspense fallback={() => <Spin size="large" />}>
            <Routes />
          </Suspense>
        </PreferencesProvider>
      </WalletProvider>
    </ReferrerProvider>
  );
}

export default function App() {
  return (
    <Suspense fallback={() => <Spin size="large" />}>
      <GlobalStyle />
      <ErrorBoundary>
        <ConnectionProvider>
          <AppImpl />
        </ConnectionProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
