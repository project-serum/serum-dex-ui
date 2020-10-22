import React, { useState } from 'react';
import { Card } from 'antd';
import { TradeEntry } from '../components/swap/TradeEntry';
import { AddToLiquidity } from '../components/swap/AddToLiquidity';
import {UserAccountsProvider} from "../utils/swapAccounts";
import {SwapProvider} from "../utils/swap";

export const SwapView = (props: {}) => {
  const tabStyle: React.CSSProperties = { width: 120, textAlign: "center"};
  const tabList = [
    {
      key: 'trade',
      tab: <div style={tabStyle}>Trade</div>,
      render: () => {
        return <TradeEntry />;
      },
    },
    {
      key: 'pool',
      tab: <div style={tabStyle}>Pool</div>,
      render: () => {
        return <AddToLiquidity />;
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(tabList[0].key);

  return (
    <SwapProvider>
      <UserAccountsProvider>
        <Card
          className="exchange-card"
          headStyle={{ padding: 0 }}
          tabList={tabList}
          tabProps={{
            tabBarGutter: 0,
          }}
          activeTabKey={activeTab}
          onTabChange={(key) => {
            setActiveTab(key);
          }}
        >
          {tabList.find((t) => t.key === activeTab)?.render()}
        </Card>
      </UserAccountsProvider>
    </SwapProvider>
  );
};
