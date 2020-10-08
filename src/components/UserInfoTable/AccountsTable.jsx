import { Button } from 'antd';
import React from 'react';
import DataTable from '../layout/DataTable';
import { useConnection } from '../../utils/connection';
import { useWallet } from '../../utils/wallet';
import { settleFunds } from '../../utils/send';
import { notify } from '../../utils/notifications';

export default function AccountsTable({ accountBalances }) {
  const connection = useConnection();
  const { wallet } = useWallet();

  async function onSettleFunds(account) {
    try {
      const {
        market,
        openOrders,
        baseCurrencyAccount,
        quoteCurrencyAccount,
      } = account;
      return await settleFunds({
        market,
        openOrders,
        connection,
        wallet,
        baseCurrencyAccount,
        quoteCurrencyAccount,
      });
    } catch (e) {
      notify({
        message: 'Error settling funds',
        description: e.message,
        type: 'error',
      });
    }
  }

  const columns = [
    {
      title: 'Market',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Orders',
      dataIndex: 'orders',
      key: 'orders',
    },
    {
      title: 'Unsettled',
      dataIndex: 'unsettled',
      key: 'unsettled',
    },
    {
      key: 'action',
      render: (account) => (
        <div style={{ textAlign: 'right' }}>
          <Button
            ghost
            style={{ marginRight: 12 }}
            onClick={() => onSettleFunds(account)}
          >
            Settle
          </Button>
        </div>
      ),
    },
  ];
  return (
    <DataTable
      emptyLabel="No balances"
      dataSource={accountBalances}
      columns={columns.map((data) => ({
        ...data,
        key: `${data.market}${data.coin}`,
      }))}
      pagination={false}
    />
  );
}
