import React, { Suspense } from 'react';
import { WalletKitProvider } from '@gokiprotocol/walletkit';
import './App.less';
import { ConnectionProvider } from './utils/connection';
import { WalletProvider } from './utils/wallet';
import { GlobalStyle } from './global_style';
import { Spin } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes } from './routes';
import { PreferencesProvider } from './utils/preferences';
import { ReferrerProvider } from './utils/referrer';

export default function App() {
  return (
    <Suspense fallback={() => <Spin size="large" />}>
      <GlobalStyle />
      <ErrorBoundary>
        <WalletKitProvider
          app={{
            name: 'Fabric x Serum DEX',
          }}
        >
          <ConnectionProvider>
            <ReferrerProvider>
              <WalletProvider>
                <PreferencesProvider>
                  <Suspense fallback={() => <Spin size="large" />}>
                    <Routes />
                  </Suspense>
                </PreferencesProvider>
              </WalletProvider>
            </ReferrerProvider>
          </ConnectionProvider>
        </WalletKitProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
