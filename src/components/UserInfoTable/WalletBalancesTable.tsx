import React, { useState } from 'react';
import DataTable from '../layout/DataTable';
import { Button, Row } from 'antd';
import { settleAllFunds } from '../../utils/send';
import { notify } from '../../utils/notifications';
import { useConnection } from '../../utils/connection';
import { useWallet } from '../../utils/wallet';
import {
  useAllMarkets,
  useSelectedTokenAccounts,
  useTokenAccounts,
} from '../../utils/markets';
import StandaloneTokenAccountsSelect from '../StandaloneTokenAccountSelect';
import { abbreviateAddress } from '../../utils/utils';
import { PublicKey } from '@solana/web3.js';

export default function WalletBalancesTable({
  walletBalances,
}: {
  walletBalances: {
    coin: string;
    mint: string;
    walletBalance: number;
    openOrdersFree: number;
    openOrdersTotal: number;
  }[];
}) {
  const connection = useConnection();
  const { wallet, connected } = useWallet();
  const [selectedTokenAccounts] = useSelectedTokenAccounts();
  const [tokenAccounts, tokenAccountsConnected] = useTokenAccounts();
  const [allMarkets, allMarketsConnected] = useAllMarkets();
  const [settlingFunds, setSettlingFunds] = useState(false);

  async function onSettleFunds() {
    setSettlingFunds(true);
    try {
      if (!wallet) {
        notify({
          message: 'Wallet not connected',
          description: 'Wallet not connected',
          type: 'error',
        });
        return;
      }

      if (!tokenAccounts || !tokenAccountsConnected) {
        notify({
          message: 'Error settling funds',
          description: 'TokenAccounts not connected',
          type: 'error',
        });
        return;
      }
      if (!allMarkets || !allMarketsConnected) {
        notify({
          message: 'Error settling funds',
          description: 'Markets not connected',
          type: 'error',
        });
        return;
      }
      await settleAllFunds({
        connection,
        tokenAccounts,
        selectedTokenAccounts,
        wallet,
        markets: allMarkets.map((marketInfo) => marketInfo.market),
      });
    } catch (e) {
      notify({
        message: 'Error settling funds',
        description: e.message,
        type: 'error',
      });
    } finally {
      setSettlingFunds(false);
    }
  }

  const columns = [
    {
      title: 'Coin',
      key: 'coin',
      width: '20%',
      render: (walletBalance) => (
        <Row align="middle">
          <a
            href={`https://solscan.io/address/${walletBalance.mint}`}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            {walletBalance.coin ||
              abbreviateAddress(new PublicKey(walletBalance.mint))}
          </a>
        </Row>
      ),
    },
    {
      title: 'Wallet Balance',
      dataIndex: 'walletBalance',
      key: 'walletBalance',
      width: '20%',
    },
    {
      title: 'Open orders total balances',
      dataIndex: 'openOrdersTotal',
      key: 'openOrdersTotal',
      width: '20%',
    },
    {
      title: 'Unsettled balances',
      dataIndex: 'openOrdersFree',
      key: 'openOrdersFree',
      width: '20%',
    },
    {
      title: 'Selected token account',
      key: 'selectTokenAccount',
      width: '20%',
      render: (walletBalance) => (
        <Row align="middle" style={{ width: '430px' }}>
          <StandaloneTokenAccountsSelect
            accounts={tokenAccounts?.filter(
              (t) => t.effectiveMint.toBase58() === walletBalance.mint,
            )}
            mint={walletBalance.mint}
          />
        </Row>
      ),
    },
  ];
  return (
    <React.Fragment>
      <DataTable
        emptyLabel="No balances"
        dataSource={walletBalances}
        columns={columns}
        pagination={false}
      />
      {connected && (
        <Button onClick={onSettleFunds} loading={settlingFunds}>
          Settle all funds
        </Button>
      )}
    </React.Fragment>
  );
}
