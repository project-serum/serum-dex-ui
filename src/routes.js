import { HashRouter, Route } from 'react-router-dom';
import TradePage from './pages/TradePage';
import OpenOrdersPage from './pages/OpenOrdersPage';
import React from 'react';
import BalancesPage from './pages/BalancesPage';
import ConvertPage from './pages/ConvertPage';
import BasicLayout from './components/BasicLayout';

const { Header, Content } = Layout;

export function Routes() {
  return (
    <HashRouter basename={'/'}>
      <Route exact path="/" component={TradePageContents} />
      <Route exact path="/orders" component={OpenOrdersPageContents} />
      <Route exact path="/balances" component={BalancesPageContents} />
      <Route exact path="/convert" component={ConvertPageContents} />
    </HashRouter>
  );
}

function TradePageContents() {
  return (
    <BasicLayout>
      <TradePage />
    </BasicLayout>
  );
}

function OpenOrdersPageContents() {
  return (
    <BasicLayout>
      <OpenOrdersPage />
    </BasicLayout>
  );
}

function BalancesPageContents() {
  return (
    <BasicLayout>
      <BalancesPage />
    </BasicLayout>
  );
}

function ConvertPageContents() {
  return (
    <React.Fragment>
      <Layout
        style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
      >
        <Header style={{ padding: 0 }}>
          <TopBar />
        </Header>
        <Content style={{ flex: 1 }}>
          <ConvertPage />
        </Content>
        <CustomFooter />
      </Layout>
    </React.Fragment>
  );
}
