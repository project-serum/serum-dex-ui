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
          message: 'Кошелек не подключен',
          description: 'Wallet not connected',
          type: 'error',
        });
        return;
      }

      if (!tokenAccounts || !tokenAccountsConnected) {
        notify({
          message: 'Ошибка при зачислении средств',
          description: 'TokenAccounts not connected',
          type: 'error',
        });
        return;
      }
      if (!allMarkets || !allMarketsConnected) {
        notify({
          message: 'Ошибка при зачислении средств',
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
        message: 'Ошибка при зачислении средств',
        description: e.message,
        type: 'error',
      });
    } finally {
      setSettlingFunds(false);
    }
  }

  const columns = [
    {
      title: 'Коин',
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
      title: 'Баланс кошелька',
      dataIndex: 'walletBalance',
      key: 'walletBalance',
      width: '20%',
    },
    {
      title: 'Итоговые остатки откр. ордеров',
      dataIndex: 'openOrdersTotal',
      key: 'openOrdersTotal',
      width: '20%',
    },
    {
      title: 'Невыведенный остаток',
      dataIndex: 'openOrdersFree',
      key: 'openOrdersFree',
      width: '20%',
    },
    {
      title: 'Выбранная учетная запись токена',
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
          Рассчитать все средства
        </Button>
      )}
    </React.Fragment>
  );
}
