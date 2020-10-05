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
import TransferDialog from './TransferDialog';
import { useWallet } from '../utils/wallet';
import Link from './Link';
import { settleFunds } from '../utils/send';
import { useSendConnection } from '../utils/connection';
import WalletConnect from './WalletConnect';
import { notify } from '../utils/notifications';

const RowBox = styled(Row)`
  padding-bottom: 20px;
`;

const Tip = styled.p`
  font-size: 12px;
  padding-top: 6px;
`;

const Label = styled.span`
  color: rgba(255, 255, 255, 0.5);
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
  const { providerUrl, providerName, wallet, connected } = useWallet();
  const [baseOrQuote, setBaseOrQuote] = useState('');
  const [transferCoin, setTransferCoin] = useState(null);

  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
  const baseCurrencyBalances =
    balances && balances.find((b) => b.coin === baseCurrency);
  const quoteCurrencyBalances =
    balances && balances.find((b) => b.coin === quoteCurrency);

  async function onSettleFunds() {
    try {
      await settleFunds({
        market,
        openOrders: openOrdersAccount,
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

  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      {[
        [
          market?.baseMintAddress,
          baseCurrency,
          baseCurrencyAccount,
          baseCurrencyBalances,
          'base',
        ],
        [
          market?.quoteMintAddress,
          quoteCurrency,
          quoteCurrencyAccount,
          quoteCurrencyBalances,
          'quote',
        ],
      ].map(([mint, currency, account, balances, baseOrQuote], index) => (
        <React.Fragment key={index}>
          <Divider style={{ borderColor: 'white' }}>{currency}</Divider>
          {connected ? (
            <>
              <RowBox
                align="middle"
                justify="space-between"
                style={{ paddingBottom: 12 }}
              >
                <Col>
                  <Label>Wallet balance:</Label>
                </Col>
                <Col>{balances && balances.wallet}</Col>
              </RowBox>
              <RowBox
                align="middle"
                justify="space-between"
                style={{ paddingBottom: 12 }}
              >
                <Col>
                  <Label>Unsettled balance:</Label>
                </Col>
                <Col>{balances && balances.unsettled}</Col>
              </RowBox>
            </>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: 12,
              }}
            >
              <WalletConnect />
            </div>
          )}
          <RowBox align="middle" justify="space-around">
            <Col style={{ width: 100 }}>
              <ActionButton
                block
                size="large"
                disabled={!connected}
                onClick={() => setBaseOrQuote(baseOrQuote)}
              >
                Deposit
              </ActionButton>
            </Col>
            <Col style={{ width: 100 }}>
              <ActionButton
                block
                size="large"
                disabled={!connected || !account?.pubkey}
                onClick={() =>
                  setTransferCoin({
                    coin: currency,
                    source: account?.pubkey,
                    mint,
                  })
                }
              >
                Transfer
              </ActionButton>
            </Col>
            <Col style={{ width: 100 }}>
              <ActionButton
                block
                size="large"
                disabled={!connected || !openOrdersAccount}
                onClick={onSettleFunds}
              >
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
        baseOrQuote={baseOrQuote}
        onClose={() => setBaseOrQuote('')}
      />
      <TransferDialog
        transferCoin={transferCoin}
        onClose={() => setTransferCoin(null)}
      />
    </FloatingElement>
  );
}
