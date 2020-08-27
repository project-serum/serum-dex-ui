import { Button, Col, Row, Divider } from 'antd';
import React, { useState } from 'react';
import FloatingElement from './layout/FloatingElement';
import styled from 'styled-components';
import {
  useBaseCurrencyBalances,
  useQuoteCurrencyBalances,
  useMarket,
} from '../utils/markets';
import DepositDialog from './DepositDialog';
import { useWallet, WALLET_PROVIDERS } from '../utils/wallet';

const RowBox = styled(Row)`
  padding-bottom: 20px;
`;

const Tip = styled.p`
  font-size: 12px;
  color: #2abdd2;
  padding-top: 6px;
`;

const ActionButton = styled(Button)`
  color: #2abdd2;
  background-color: #212734;
  border-width: 0px;
`;

export default function StandaloneBalancesDisplay() {
  const { baseCurrency, quoteCurrency } = useMarket();

  const [baseCurrencyBalances] = useBaseCurrencyBalances();
  const [quoteCurrencyBalances] = useQuoteCurrencyBalances();
  let [, , providerUrl] = useWallet();
  const [depositCoin, setDepositCoin] = useState('');
  const providerName = WALLET_PROVIDERS.find(({ url }) => url === providerUrl)
    ?.name;
  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <Divider style={{ borderColor: 'white' }}>{baseCurrency}</Divider>
      <RowBox
        align="middle"
        justify="space-between"
        style={{ paddingBottom: 12 }}
      >
        <Col>{baseCurrency} wallet balance:</Col>
        <Col>{baseCurrencyBalances}</Col>
      </RowBox>
      <RowBox align="middle" justify="space-around">
        <Col style={{ width: 150 }}>
          <ActionButton
            block
            size="large"
            onClick={() => setDepositCoin(baseCurrency)}
          >
            Deposit
          </ActionButton>
        </Col>
        {/*<Col style={{ width: 150 }}>*/}
        {/*  <ActionButton block size="large">*/}
        {/*    Send*/}
        {/*  </ActionButton>*/}
        {/*</Col>*/}
      </RowBox>
      <Tip>All deposits go to your {providerName} wallet</Tip>
      <Divider>{quoteCurrency}</Divider>
      <RowBox
        align="middle"
        justify="space-between"
        style={{ paddingBottom: 12 }}
      >
        <Col>{quoteCurrency} wallet balance:</Col>
        <Col>{quoteCurrencyBalances}</Col>
      </RowBox>
      <RowBox align="middle" justify="space-around">
        <Col style={{ width: 150 }}>
          <ActionButton
            block
            size="large"
            onClick={() => setDepositCoin(quoteCurrency)}
          >
            Deposit
          </ActionButton>
        </Col>
        {/*<Col style={{ width: 150 }}>*/}
        {/*  <ActionButton block size="large">*/}
        {/*    Send*/}
        {/*  </ActionButton>*/}
        {/*</Col>*/}
      </RowBox>
      <Tip>All deposits go to your {providerName} wallet</Tip>
      <DepositDialog
        depositCoin={depositCoin}
        onClose={() => setDepositCoin('')}
      />
    </FloatingElement>
  );
}
