import React from 'react';
import {Tabs} from 'antd';
import {
  useAllOpenOrdersBalances,
  useSelectedTokenAccounts,
  useTokenAccounts,
  useWalletBalancesForAllMarkets,
} from '../utils/markets';
import FloatingElement from '../components/layout/FloatingElement';
import WalletBalancesTable from '../components/UserInfoTable/WalletBalancesTable';
import {useMintToTickers} from "../utils/tokens";
import AccountsTable from "../components/UserInfoTable/AccountsTable";

const { TabPane } = Tabs;

export default function BalancesPage() {
  const walletBalances = useWalletBalancesForAllMarkets();
  const mintToTickers = useMintToTickers();
  const openOrdersBalances = useAllOpenOrdersBalances();
  const [selectedTokenAccounts, setSelectedTokenAccounts] = useSelectedTokenAccounts();
  const [tokenAccounts] = useTokenAccounts();

  const data = (walletBalances || []).map(balance => {
    const balances = {
      coin: mintToTickers[balance.mint],
      walletBalance: balance.balance,
      openOrdersFree: 0.,
      openOrdersTotal: 0.,
    }
    for (let openOrdersAccount of (openOrdersBalances[balance.mint] || [])) {
      balances['openOrdersFree'] += openOrdersAccount.free;
      balances['openOrdersTotal'] += openOrdersAccount.total;
    }
    return balances
  });
  // const [
  //   accountBalances,
  //   accountBalancesLoaded,
  // ] = useOpenOrderAccountBalancesForAllMarkets();

  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <Tabs defaultActiveKey="walletBalances">
        <TabPane tab="Wallet Balances" key="walletBalances">
          <WalletBalancesTable
            walletBalances={data}
          />
        </TabPane>
        <TabPane tab="Market balances" key="marketBalances">
          {/*<AccountsTable*/}
          {/*  loaded={accountBalancesLoaded}*/}
          {/*  accountBalances={accountBalances}*/}
          {/*/>*/}
        </TabPane>
      </Tabs>
    </FloatingElement>
  );
}
