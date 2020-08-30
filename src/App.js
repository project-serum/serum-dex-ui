import React, { Suspense } from 'react';
import './App.less';
import { ConnectionProvider } from './utils/connection';
import { MarketProvider } from './utils/markets';
import { WalletProvider } from './utils/wallet';
import { GlobalStyle } from './global_style';
import { Spin } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes } from './routes';

export default function App() {
  return (
    <Suspense fallback={() => <Spin size="large" />}>
      <GlobalStyle />
      <ErrorBoundary>
        <ConnectionProvider>
          <MarketProvider>
            <WalletProvider>
              <Suspense fallback={() => <Spin size="large" />}>
                <Routes />
              </Suspense>
            </WalletProvider>
          </MarketProvider>
        </ConnectionProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
