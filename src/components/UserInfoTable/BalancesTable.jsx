import { Button } from 'antd';
import React from 'react';
import {
  useBaseCurrencyBalances,
  useQuoteCurrencyBalances,
  useSelectedOpenOrdersAccount,
  useMarket,
  useSelectedBaseCurrencyAccount,
  useSelectedQuoteCurrencyAccount,
} from '../../utils/markets';
import DataTable from '../layout/DataTable';
import { useConnection } from '../../utils/connection';
import { useWallet } from '../../utils/wallet';
import { settleFunds } from '../../utils/send';

export default function BalancesTable() {
  const [baseCurrencyBalances] = useBaseCurrencyBalances();
  const [quoteCurrencyBalances] = useQuoteCurrencyBalances();
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
  const connection = useConnection();
  const [, wallet] = useWallet();
  const openOrdersAccount = useSelectedOpenOrdersAccount(true);
  const { baseCurrency, quoteCurrency, market } = useMarket();
  const baseExists =
    openOrdersAccount &&
    openOrdersAccount.baseTokenTotal &&
    openOrdersAccount.baseTokenFree;
  const quoteExists =
    openOrdersAccount &&
    openOrdersAccount.quoteTokenTotal &&
    openOrdersAccount.quoteTokenFree;
  const dataSource = [
    {
      key: baseCurrency,
      coin: baseCurrency,
      wallet: baseCurrencyBalances,
      orders:
        baseExists && market
          ? market.baseSplSizeToNumber(
              openOrdersAccount.baseTokenTotal.sub(
                openOrdersAccount.baseTokenFree,
              ),
            )
          : null,
      unsettled:
        baseExists && market
          ? market.baseSplSizeToNumber(openOrdersAccount.baseTokenFree)
          : null,
    },
    {
      key: quoteCurrency,
      coin: quoteCurrency,
      wallet: quoteCurrencyBalances,
      orders:
        quoteExists && market
          ? market.quoteSplSizeToNumber(
              openOrdersAccount.quoteTokenTotal.sub(
                openOrdersAccount.quoteTokenFree,
              ),
            )
          : null,
      unsettled:
        quoteExists && market
          ? market.quoteSplSizeToNumber(openOrdersAccount.quoteTokenFree)
          : null,
    },
  ];

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
      dataSource={dataSource}
      columns={columns}
      pagination={false}
    />
  );
}
