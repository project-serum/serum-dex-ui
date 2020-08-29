import React from 'react';
import DataTable from '../layout/DataTable';

export default function WalletBalancesTable({
  loaded = false,
  walletBalances,
}) {
  const columns = [
    {
      title: 'Coin',
<<<<<<< HEAD
      dataIndex: 'coin',
      key: 'coin',
=======
      dataIndex: 'key',
      key: 'key',
>>>>>>> Fix balance page settle
    },
    {
      title: 'Wallet Balance',
      dataIndex: 'wallet',
      key: 'wallet',
    },
  ];
  return (
    <DataTable
      emptyLabel="No balances"
      dataSource={walletBalances}
      columns={columns}
      pagination={false}
      loading={!loaded}
    />
  );
}
