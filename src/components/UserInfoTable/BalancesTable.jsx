import { Button } from 'antd';
import React from 'react';
import {
  useSelectedOpenOrdersAccount,
  useMarket,
  useSelectedBaseCurrencyAccount,
  useSelectedQuoteCurrencyAccount,
} from '../../utils/markets';
import DataTable from '../layout/DataTable';
import { useConnection } from '../../utils/connection';
import { useWallet } from '../../utils/wallet';
import { settleFunds } from '../../utils/send';

export default function BalancesTable({ balances }) {
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
  const connection = useConnection();
  const [, wallet] = useWallet();
  const openOrdersAccount = useSelectedOpenOrdersAccount(true);
  const { market } = useMarket();

  async function onSettleFunds() {
    return await settleFunds({
      market,
      openOrders: openOrdersAccount,
      connection,
      wallet,
      baseCurrencyAccount,
      quoteCurrencyAccount,
    });
  }

  const columns = [
    {
      title: 'Coin',
      dataIndex: 'coin',
      key: 'coin',
    },
    {
      title: 'Wallet Balance',
      dataIndex: 'wallet',
      key: 'wallet',
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
      render: () => (
        <div style={{ textAlign: 'right' }}>
          <Button ghost style={{ marginRight: 12 }} onClick={onSettleFunds}>
            Settle
          </Button>
        </div>
      ),
    },
  ];
  return (
    <DataTable
      emptyLabel="No balances"
      dataSource={balances}
      columns={columns}
      pagination={false}
    />
  );
}
