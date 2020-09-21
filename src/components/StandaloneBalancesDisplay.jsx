import { Button, Col, Divider, Row } from 'antd';
import React, { useState } from 'react';
import FloatingElement from './layout/FloatingElement';
import styled from 'styled-components';
import {
  useBalances,
  useMarket,
  useSelectedBaseCurrencyAccount,
  useSelectedOpenOrdersAccount,
  useSelectedQuoteCurrencyAccount,
} from '../utils/markets';
import DepositDialog from './DepositDialog';
import { useWallet } from '../utils/wallet';
import Link from './Link';
import { settleFunds } from '../utils/send';
import { useSendConnection } from '../utils/connection';

const RowBox = styled(Row)`
  padding-bottom: 20px;
`;

const Tip = styled.p`
  font-size: 12px;
  padding-top: 6px;
`;

const ActionButton = styled(Button)`
  color: #2abdd2;
  background-color: #212734;
  border-width: 0px;
`;

export default function StandaloneBalancesDisplay() {
  const { baseCurrency, quoteCurrency, market } = useMarket();
  const balances = useBalances();
  const openOrdersAccount = useSelectedOpenOrdersAccount(true);
  const connection = useSendConnection();
  const { providerUrl, providerName, wallet } = useWallet();
  const [depositCoin, setDepositCoin] = useState('');
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
  const baseCurrencyBalances =
    balances && balances.find((b) => b.coin === baseCurrency);
  const quoteCurrencyBalances =
    balances && balances.find((b) => b.coin === quoteCurrency);

  async function onSettleFunds() {
    return await settleFunds({
      market,
      openOrders: openOrdersAccount,
      connection,
      wallet,
      baseCurrencyPubkey: baseCurrencyAccount?.pubkey,
      quoteCurrencyPubkey: quoteCurrencyAccount?.pubkey,
    });
  }

  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      {[
        [baseCurrency, baseCurrencyBalances],
        [quoteCurrency, quoteCurrencyBalances],
      ].map(([currency, balances], index) => (
        <React.Fragment key={index}>
          <Divider style={{ borderColor: 'white' }}>{currency}</Divider>
          <RowBox
            align="middle"
            justify="space-between"
            style={{ paddingBottom: 12 }}
          >
            <Col>Wallet balance:</Col>
            <Col>{balances && balances.wallet}</Col>
          </RowBox>
          <RowBox
            align="middle"
            justify="space-between"
            style={{ paddingBottom: 12 }}
          >
            <Col>Unsettled balance:</Col>
            <Col>{balances && balances.unsettled}</Col>
          </RowBox>
          <RowBox align="middle" justify="space-around">
            <Col style={{ width: 150 }}>
              <ActionButton
                block
                size="large"
                onClick={() => setDepositCoin(currency)}
              >
                Deposit
              </ActionButton>
            </Col>
            <Col style={{ width: 150 }}>
              <ActionButton block size="large" onClick={onSettleFunds}>
                Settle
              </ActionButton>
            </Col>
          </RowBox>
          <Tip>
            All deposits go to your{' '}
            <Link external to={providerUrl}>
              {providerName}
            </Link>{' '}
            wallet
          </Tip>
        </React.Fragment>
      ))}
      <DepositDialog
        depositCoin={depositCoin}
        onClose={() => setDepositCoin('')}
      />
    </FloatingElement>
  );
}
