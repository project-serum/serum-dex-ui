import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Button, Input } from 'antd';
import {
  COIN_MINTS,
  MARKET_INFO_BY_NAME,
  useAllMarkets,
  getTradeAccountsForMarket,
} from '../utils/markets';
import { notify } from '../utils/notifications';
import { useWallet } from '../utils/wallet';
import { useConnection, useSendConnection } from '../utils/connection';
import { placeOrder } from '../utils/send';

const { Option } = Select;

export default function ConvertForm({}) {
  const [connected, wallet] = useWallet();
  const allMarkets = useAllMarkets();
  const connection = useConnection();
  const sendConnection = useSendConnection();

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

    await placeOrder({
      side: base === fromToken ? 'sell' : 'buy',
      price: base === fromToken ? 0 : 100_000,
      size,
      orderType: 'ioc',
      market,
      connection: sendConnection,
      wallet,
      baseCurrencyAccount: baseCurrencyAccount?.pubkey?.toBase58(),
      quoteCurrencyAccount: quoteCurrencyAccount?.pubkey?.toBase58(),
      openOrdersAccount: openOrdersAccount?.pubkey?.toBase58(),
      onConfirmCallBack: () =>
        notify({ message: 'Convert successfull', type: 'success' }),
    });
  };

  return (
    <Row>
      <Col>
        {tokenMap && (
          <>
            <Select
              style={{ minWidth: 200 }}
              value={fromToken}
              onChange={setFromToken}
            >
              {tokenList.map((token) => (
                <Option value={token} key={token}>
                  {token}
                </Option>
              ))}
            </Select>
            {fromToken && (
              <Select
                style={{ minWidth: 200 }}
                value={toToken}
                onChange={setToToken}
              >
                {(tokenMap.get(fromToken) || []).map((token) => (
                  <Option value={token} key={token}>
                    {token}
                  </Option>
                ))}
              </Select>
            )}
            {fromToken && toToken && (
              <>
                <Input
                  addonBefore={`Size (${fromToken})`}
                  placeholder="Size"
                  value={size}
                  type="number"
                  onChange={(e) => setSize(e.target.value)}
                />
                {size && <Button onClick={onConvert}>Convert</Button>}
              </>
            )}
          </>
        )}
      </Col>
    </Row>
  );
}
