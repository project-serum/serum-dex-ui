import React, { useState, useEffect } from 'react';
import { Typography, Select, Button, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import {
  COIN_MINTS,
  MARKET_INFO_BY_NAME,
  useAllMarkets,
  getTradeAccountsForMarket,
  getCurrencyBalance,
} from '../utils/markets';
import { notify } from '../utils/notifications';
import { useWallet } from '../utils/wallet';
import { useConnection, useSendConnection } from '../utils/connection';
import { placeOrder } from '../utils/send';
import FloatingElement from './layout/FloatingElement';
import WalletConnect from './WalletConnect';

const { Option } = Select;
const { Title } = Typography;

const ActionButton = styled(Button)`
  color: #2abdd2;
  background-color: #212734;
  border-width: 0px;
`;

const ConvertButton = styled(Button)`
  background: #02bf76;
  border-color: #02bf76;
`;

export default function ConvertForm({}) {
  const [connected, wallet] = useWallet();
  const allMarkets = useAllMarkets();
  const connection = useConnection();
  const sendConnection = useSendConnection();

  const [isConverting, setIsConverting] = useState(false);
  const [balance, setBalance] = useState(null);
  const [tokenMap, setTokenMap] = useState(null);
  const [fromToken, setFromToken] = useState(null);
  const [toToken, setToToken] = useState(null);
  const [size, setSize] = useState(null);

  const tokenList = Object.values(COIN_MINTS);

  useEffect(() => {
    const tokenMap = new Map();
    Object.values(MARKET_INFO_BY_NAME).forEach((market) => {
      let [base, quote] = market.name.split('/');
      !tokenMap.has(base)
        ? tokenMap.set(base, [quote])
        : tokenMap.set(base, [...tokenMap.get(base), quote]);
      !tokenMap.has(quote)
        ? tokenMap.set(quote, [base])
        : tokenMap.set(quote, [...tokenMap.get(quote), base]);
    });
    setTokenMap(tokenMap);
  }, []);

  useEffect(() => {
    if (!connected || !fromToken) {
      return;
    }
    // find market
    const targetMarket = allMarkets.find(
      ({ marketName }) =>
        marketName.includes(`${fromToken}/`) ||
        marketName.includes(`/${fromToken}`),
    );
    if (!targetMarket) {
      notify({ message: 'Invalid market', type: 'error' });
      return;
    }
    const { market, marketName } = targetMarket;
    const [base] = marketName.split('/');
    getCurrencyBalance(market, connection, wallet, base === fromToken).then(
      setBalance,
    );
  }, [fromToken]);

  const onConvert = async () => {
    if (!connected) {
      notify({ message: 'Not connected', type: 'error' });
      return;
    }

    // find market
    const targetMarket = allMarkets.find(({ marketName }) =>
      [`${fromToken}/${toToken}`, `${toToken}/${fromToken}`].includes(
        marketName,
      ),
    );
    if (!targetMarket) {
      notify({ message: 'Invalid market', type: 'error' });
      return;
    }

    const { market, marketName } = targetMarket;
    const [base] = marketName.split('/');

    const accounts = await getTradeAccountsForMarket(
      connection,
      wallet,
      market,
    );

    const {
      baseCurrencyAccount,
      quoteCurrencyAccount,
      openOrdersAccount,
    } = accounts;

    !(await placeOrder({
      side: base === fromToken ? 'sell' : 'buy',
      price: base === fromToken ? market.tickSize : 100_000,
      size,
      orderType: 'ioc',
      market,
      connection: sendConnection,
      wallet,
      baseCurrencyAccount: baseCurrencyAccount?.pubkey?.toBase58(),
      quoteCurrencyAccount: quoteCurrencyAccount?.pubkey?.toBase58(),
      openOrdersAccount: openOrdersAccount?.pubkey?.toBase58(),
      onBeforeSendCallBack: () => setIsConverting(true),
      onConfirmCallBack: (error) => {
        notify({
          message: error ? 'Convert failed' : 'Convert successfull',
          type: error ? 'error' : 'success',
        });
        reset();
        setIsConverting(false);
      },
    })) && setIsConverting(false);
  };

  const reset = () => {
    setFromToken(null);
    setToToken(null);
    setBalance(null);
    setSize(null);
  };

  return (
    <FloatingElement style={{ maxWidth: 500 }}>
      <Title level={3}>Convert</Title>
      {!connected && (
        <Row justify="center">
          <Col>
            <WalletConnect />
          </Col>
        </Row>
      )}
      {tokenMap && connected && (
        <>
          <Row style={{ marginBottom: 8 }}>
            <Col>
              <Select
                style={{ minWidth: 300 }}
                placeholder="Select a token"
                value={fromToken}
                onChange={setFromToken}
              >
                {tokenList.map((token) => (
                  <Option value={token} key={token}>
                    {token}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
          {fromToken && (
            <Row style={{ marginBottom: 8 }}>
              <Col>
                <Select
                  style={{ minWidth: 300 }}
                  value={toToken}
                  onChange={setToToken}
                >
                  {(tokenMap.get(fromToken) || []).map((token) => (
                    <Option value={token} key={token}>
                      {token}
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>
          )}
          {fromToken && toToken && (
            <>
              <Row style={{ marginBottom: 8 }}>
                <Col>
                  <Input
                    style={{ minWidth: 300 }}
                    addonBefore={`Size (${fromToken})`}
                    placeholder="Size"
                    value={size}
                    type="number"
                    onChange={(e) => setSize(e.target.value)}
                  />
                </Col>
              </Row>
              <Row gutter={[12]} style={{ marginBottom: 8 }}>
                <Col span={12}>
                  <ActionButton
                    block
                    size="large"
                    onClick={() => setSize(balance)}
                  >
                    Max: {balance}
                  </ActionButton>
                </Col>
                {size && (
                  <Col span={12}>
                    <ConvertButton
                      block
                      type="primary"
                      size="large"
                      loading={isConverting}
                      onClick={onConvert}
                    >
                      Convert
                    </ConvertButton>
                  </Col>
                )}
              </Row>
            </>
          )}
        </>
      )}
    </FloatingElement>
  );
}
