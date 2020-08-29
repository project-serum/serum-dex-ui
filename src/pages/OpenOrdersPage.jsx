import React from 'react';
import { useOpenOrdersForAllMarkets } from '../utils/markets';
import FloatingElement from '../components/layout/FloatingElement';
import OpenOrderTable from '../components/UserInfoTable/OpenOrderTable';

export default function OpenOrdersPage() {
  const [openOrders] = useOpenOrdersForAllMarkets();
  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <OpenOrderTable openOrders={openOrders} />
    </FloatingElement>
  );
}
