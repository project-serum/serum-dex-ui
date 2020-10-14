import React from 'react';
import DataTable from '../layout/DataTable';

export default function WalletBalancesTable({
  walletBalances,
}) {
  const columns = [
    {
      title: 'Coin',
      dataIndex: 'coin',
      key: 'coin',
    },
    {
      title: 'Wallet Balance',
      dataIndex: 'walletBalance',
      key: 'walletBalance',
    },
    {
      title: 'Open orders total',
      dataIndex: 'openOrdersTotal',
      key: 'openOrdersTotal',
    },
    {
      title: 'Unsettled',
      dataIndex: 'openOrdersFree',
      key: 'openOrdersFree',
    },
  ];
  return (
    <DataTable
      emptyLabel="No balances"
      dataSource={walletBalances}
      columns={columns}
      pagination={false}
    />
  );
}
