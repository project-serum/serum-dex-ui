import React from 'react';
import {Tabs} from 'antd';
import {useAllOpenOrdersAccounts, useWalletBalancesForAllMarkets,} from '../utils/markets';
import FloatingElement from '../components/layout/FloatingElement';
import WalletBalancesTable from '../components/UserInfoTable/WalletBalancesTable';
import {useMintToTickers} from "../utils/tokens";

const { TabPane } = Tabs;

export default function BalancesPage() {
  const [
    walletBalances,
    loadedWalletBalances,
  ] = useWalletBalancesForAllMarkets();
  const mintToTickers = useMintToTickers();
  const data = (walletBalances || []).map(balance => {return {coin: mintToTickers[balance.mint], balance: balance.balance}})
  const [
    openOrdersAccounts,
    loadedOpenOrdersAccounts
  ] = useAllOpenOrdersAccounts();
  // const [
  //   accountBalances,
  //   accountBalancesLoaded,
  // ] = useOpenOrderAccountBalancesForAllMarkets();

  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <Tabs defaultActiveKey="walletBalances">
        <TabPane tab="Wallet Balances" key="walletBalances">
          <WalletBalancesTable
            loaded={loadedWalletBalances}
            walletBalances={data}
          />
        </TabPane>
        {/*<TabPane tab="Market balances" key="marketBalances">*/}
        {/*  <AccountsTable*/}
        {/*    loaded={accountBalancesLoaded}*/}
        {/*    accountBalances={accountBalances}*/}
        {/*  />*/}
        {/*</TabPane>*/}
      </Tabs>
    </FloatingElement>
  );
}
