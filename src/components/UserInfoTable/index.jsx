import BalancesTable from './BalancesTable';
import OpenOrderTable from './OpenOrderTable';
import React from 'react';
import { Tabs, Typography } from 'antd';
import FillsTable from './FillsTable';
import FloatingElement from '../layout/FloatingElement';
import FeesTable from './FeesTable';
import { useOpenOrders, useBalances, useMarket } from '../../utils/markets';

const { Paragraph } = Typography;
const { TabPane } = Tabs;

export default function Index() {
  const { market } = useMarket();
  return (
    <FloatingElement style={{ flex: 1, paddingTop: 20 }}>
      <Typography>
        <Paragraph style={{ color: 'rgba(255,255,255,0.5)' }}>
          Make sure to go to Balances and click Settle to send out your funds.
        </Paragraph>
        <Paragraph style={{ color: 'rgba(255,255,255,0.5)' }}>
          To fund your wallet, <a href="https://www.sollet.io">sollet.io</a>.
          You can get SOL from FTX, Binance, BitMax, and others. You can get
          other tokens from FTX.{' '}
        </Paragraph>
      </Typography>
      <Tabs defaultActiveKey="orders">
        <TabPane tab="Open Orders" key="orders">
          <OpenOrdersTab />
        </TabPane>
        <TabPane tab="Recent Trade History" key="fills">
          <FillsTable />
        </TabPane>
        <TabPane tab="Balances" key="balances">
          <BalancesTab />
        </TabPane>
        {market && market.supportsSrmFeeDiscounts ? (
          <TabPane tab="Fee discounts" key="fees">
            <FeesTable />
          </TabPane>
        ) : null}
      </Tabs>
    </FloatingElement>
  );
}

const OpenOrdersTab = () => {
  const openOrders = useOpenOrders();

  return <OpenOrderTable openOrders={openOrders} />;
};

const BalancesTab = () => {
  const balances = useBalances();

  return <BalancesTable balances={balances} />;
};
