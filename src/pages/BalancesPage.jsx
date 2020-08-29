import React from 'react';
import { useBalancesForAllMarkets } from '../utils/markets';
import FloatingElement from '../components/layout/FloatingElement';
import BalancesTable from '../components/UserInfoTable/BalancesTable';

export default function BalancesPage() {
  const [balances] = useBalancesForAllMarkets();
  console.log(JSON.stringify(balances));
  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <BalancesTable balances={balances} />
    </FloatingElement>
  );
}
