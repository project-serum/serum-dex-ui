import React, { useState, useEffect } from 'react';
import { Typography, Select, Button, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { Market, Orderbook } from '@project-serum/serum';
import {
  getTradeAccountsForMarket,
  getSelectedTokenAccountForMint,
  getCurrencyBalance,
  getOpenOrdersAccountsBalance,
  useMarket,
  getMarketInfos,
  getMarketDetails,
  useTokenAccounts,
} from '../utils/markets';
import { notify } from '../utils/notifications';
import { useWallet } from '../utils/wallet';
import { useConnection, useSendConnection } from '../utils/connection';
import { placeOrder } from '../utils/send';
import { getDecimalCount, floorToDecimal } from '../utils/utils';
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
  const { connected, wallet } = useWallet();
  const { customMarkets } = useMarket();

  const [accounts] = useTokenAccounts();

  const connection = useConnection();
  const sendConnection = useSendConnection();

  const [isConverting, setIsConverting] = useState(false);
  const [market, setMarket] = useState(null);
  const [balance, setBalance] = useState(null);
  const [tokenMap, setTokenMap] = useState(null);
  const [fromToken, setFromToken] = useState(null);
  const [toToken, setToToken] = useState(null);
  const [size, setSize] = useState(null);

  const marketInfos = getMarketInfos(customMarkets);

  useEffect(() => {
    const tokenMap = new Map();
    marketInfos.forEach((market) => {
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
    if (!fromToken || !toToken) {
      setMarket(null);
      return;
    }

    const marketInfo = marketInfos.find(
      ({ name }) =>
        name === `${fromToken}/${toToken}` ||
        name === `${toToken}/${fromToken}`,
    );
    marketInfo &&
      Market.load(connection, marketInfo.address, {}, marketInfo.programId)
        .then(setMarket)
        .catch((e) =>
          notify({
            message: 'Error loading market',
            description: e.message,
            type: 'error',
          }),
        );
  }, [connection, fromToken, toToken]);

  useEffect(() => {
    const fetchBalance = async () => {
      const openOrdersAccountBalance = await getOpenOrdersAccountsBalance(
        connection,
        wallet,
        market,
        isFromTokenBaseOfMarket(market),
      );
      const currenyAccount = getSelectedTokenAccountForMint(
        accounts,
        isFromTokenBaseOfMarket(market)
          ? market?.baseMintAddress
          : market?.quoteMintAddress,
      );
      const currencyBalance = await getCurrencyBalance(
        connection,
        market,
        currenyAccount,
      );
      setBalance(openOrdersAccountBalance + currencyBalance);
    };

    market && fetchBalance();
  }, [market]);

  const isFromTokenBaseOfMarket = (market) => {
    const { marketName } = getMarketDetails(market, customMarkets);
    const [base] = marketName.split('/');
    return fromToken === base;
  };

  const onConvert = async () => {
    // get accounts
    const baseCurrencyAccount = getSelectedTokenAccountForMint(
      accounts,
      market?.baseMintAddress,
    );
    const quoteCurrencyAccount = getSelectedTokenAccountForMint(
      accounts,
      market?.quoteMintAddress,
    );

    // get approximate price
    const side = isFromTokenBaseOfMarket(market) ? 'sell' : 'buy';
    const orderbookMarket =
      side === 'buy' ? market._decoded.asks : market._decoded.bids;
    const orderbookData = await connection.getAccountInfo(orderbookMarket);
    if (!orderbookData?.data) {
      notify({ message: 'Invalid orderbook data', type: 'error' });
      return;
    }
    const decodedOrderbookData = Orderbook.decode(market, orderbookData?.data);
    const [bbo] =
      decodedOrderbookData &&
      decodedOrderbookData.getL2(1).map(([price]) => price);
    if (!bbo) {
      notify({ message: 'No best price found', type: 'error' });
      return;
    }
    const parsedPrice =
      bbo + 100 * (side === 'buy' ? market.tickSize : -market.tickSize);

    // round size
    const sizeDecimalCount =
      market?.minOrderSize && getDecimalCount(market.minOrderSize);
    const parsedSize = floorToDecimal(size, sizeDecimalCount);

    !(await placeOrder({
      side,
      price: parsedPrice,
      size: parsedSize,
      orderType: 'ioc',
      market,
      connection: sendConnection,
      wallet,
      baseCurrencyAccount: baseCurrencyAccount?.pubkey,
      quoteCurrencyAccount: quoteCurrencyAccount?.pubkey,
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

  const canConvert = market && size > 0;

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
                {Array.from(tokenMap.keys()).map((token) => (
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
                <Col span={12}>
                  <ConvertButton
                    block
                    type="primary"
                    size="large"
                    loading={isConverting}
                    onClick={onConvert}
                    disabled={!canConvert}
                  >
                    Convert
                  </ConvertButton>
                </Col>
              </Row>
            </>
          )}
        </>
      )}
    </FloatingElement>
  );
}
