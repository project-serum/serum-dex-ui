import React from 'react';
import { useBalances } from '../utils/markets';
import FloatingElement from '../components/layout/FloatingElement';
import BalancesTable from '../components/UserInfoTable/BalancesTable';

export default function BalancesPage() {
  const balances = useBalances();
  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <BalancesTable balances={balances} />
    </FloatingElement>
  );
}
