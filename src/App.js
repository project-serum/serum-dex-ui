import React, { Suspense } from 'react';
import './App.less';
import { ConnectionProvider } from './utils/connection';
import { MarketProvider } from './utils/markets';
import { WalletProvider } from './utils/wallet';
import TradePage from './pages/TradePage';
import BasicLayout from './components/BasicLayout';
import { GlobalStyle } from './global_style';
import { Spin } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <Suspense fallback={() => <Spin size="large" />}>
      <GlobalStyle />
      <ErrorBoundary>
        <ConnectionProvider>
          <MarketProvider>
            <WalletProvider>
              <BasicLayout>
                <Suspense fallback={() => <Spin size="large" />}>
                  <TradePage />
                </Suspense>
              </BasicLayout>
            </WalletProvider>
          </MarketProvider>
        </ConnectionProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
