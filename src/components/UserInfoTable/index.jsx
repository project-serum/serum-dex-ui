import BalancesTable from './BalancesTable';
import OpenOrderTable from './OpenOrderTable';
import React from 'react';
import { Tabs } from 'antd';
import FillsTable from './FillsTable';
import FloatingElement from '../layout/FloatingElement';

const { TabPane } = Tabs;

export default function Index() {
  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <Tabs defaultActiveKey="orders">
        <TabPane tab="Open Orders" key="orders">
          <OpenOrderTable />
        </TabPane>
        <TabPane tab="Trade History" key="fills">
          <FillsTable />
        </TabPane>
        <TabPane tab="Balances" key="balances">
          <BalancesTable />
        </TabPane>
      </Tabs>
    </FloatingElement>
  );
}
