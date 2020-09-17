import { Button, Input, Radio, Switch, Slider } from 'antd';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  useBaseCurrencyBalances,
  useQuoteCurrencyBalances,
  useMarket,
  useMarkPrice,
  useSelectedOpenOrdersAccount,
  useSelectedBaseCurrencyAccount,
  useSelectedQuoteCurrencyAccount,
} from '../utils/markets';
import { useWallet } from '../utils/wallet';
import { notify } from '../utils/notifications';
import { getDecimalCount } from '../utils/utils';
import { useSendConnection } from '../utils/connection';
import FloatingElement from './layout/FloatingElement';
import { placeOrder } from '../utils/send';

const InputBox = styled(Input)`
  text-align: right;
  padding-bottom: 16px;
`;

const SellButton = styled(Button)`
  margin: 20px 0px 0px 0px;
  background: #f23b69;
  border-color: #f23b69;
`;

const BuyButton = styled(Button)`
  margin: 20px 0px 0px 0px;
  background: #02bf76;
  border-color: #02bf76;
`;

const sliderMarks = {
  0: '0%',
  25: '25%',
  50: '50%',
  75: '75%',
  100: '100%',
};

export default function TradeForm({ style, setChangeOrderRef }) {
  const [side, setSide] = useState('buy');
  const { baseCurrency, quoteCurrency, market } = useMarket();
  const baseCurrencyBalances = useBaseCurrencyBalances();
  const quoteCurrencyBalances = useQuoteCurrencyBalances();
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
  const openOrdersAccount = useSelectedOpenOrdersAccount(true);
  const { wallet } = useWallet();
  const sendConnection = useSendConnection();
  const markPrice = useMarkPrice();

  const [postOnly, setPostOnly] = useState(false);
  const [ioc, setIoc] = useState(false);
  const [size, setSize] = useState(null);
  const [price, setPrice] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [sizeFraction, setSizeFraction] = useState(0);

  const availableQuote = openOrdersAccount
    ? market.quoteSplSizeToNumber(openOrdersAccount.quoteTokenFree)
    : 0;

  let quoteBalance = (quoteCurrencyBalances || 0) + (availableQuote || 0);
  let baseBalance = baseCurrencyBalances || 0;
  let sizeDecimalCount =
    market?.minOrderSize && getDecimalCount(market.minOrderSize);
  let priceDecimalCount = market?.tickSize && getDecimalCount(market.tickSize);

  useEffect(() => {
    setChangeOrderRef && setChangeOrderRef(doChangeOrder);
  }, [setChangeOrderRef]);

  useEffect(() => {
    onSliderChange(sizeFraction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [side]);

  useEffect(() => {
    updateSizeFraction();
  }, [price, size]);

  const doChangeOrder = ({ size, price }) => {
    size && setSize(size);
    price && setPrice(price);
  };

  const updateSizeFraction = () => {
    const rawMaxSize = side === 'buy' ? quoteBalance / price : baseBalance;
    const maxSize = sizeDecimalCount
      ? Math.floor(rawMaxSize * 10 ** sizeDecimalCount) / 10 ** sizeDecimalCount
      : rawMaxSize;
    const sizeFraction = Math.min((size / maxSize) * 100, 100);
    setSizeFraction(sizeFraction);
  };

  const onSliderChange = (value) => {
    if (!price && markPrice) {
      let formattedMarkPrice = priceDecimalCount
        ? markPrice.toFixed(priceDecimalCount)
        : markPrice;
      setPrice(formattedMarkPrice);
    }

    let newSize;
    if (side === 'buy') {
      if (price || markPrice) {
        newSize = ((quoteBalance / (price || markPrice)) * value) / 100;
      }
    } else {
      newSize = (baseBalance * value) / 100;
    }

    // round down to minOrderSize increment
    let formatted = sizeDecimalCount
      ? Math.floor(newSize * 10 ** sizeDecimalCount) / 10 ** sizeDecimalCount
      : newSize;

    setSize(formatted);
  };

  const postOnChange = (checked) => {
    if (checked) {
      setIoc(false);
    }
    setPostOnly(checked);
  };
  const iocOnChange = (checked) => {
    if (checked) {
      setPostOnly(false);
    }
    setIoc(checked);
  };

  async function onSubmit() {
    const parsedPrice = parseFloat(price);
    const parsedSize = parseFloat(size);

    setSubmitting(true);
    try {
      await placeOrder({
        side,
        price: parsedPrice,
        size: parsedSize,
        orderType: ioc ? 'ioc' : postOnly ? 'postOnly' : 'limit',
        market,
        connection: sendConnection,
        wallet,
        baseCurrencyAccount: baseCurrencyAccount?.pubkey,
        quoteCurrencyAccount: quoteCurrencyAccount?.pubkey,
      });
    } catch (e) {
      console.warn(e);
      notify({ message: 'Error placing order: ' + e.message, type: 'error' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <FloatingElement
      style={{ display: 'flex', flexDirection: 'column', ...style }}
    >
      <div style={{ flex: 1 }}>
        <Radio.Group
          onChange={(e) => setSide(e.target.value)}
          value={side}
          buttonStyle="solid"
          style={{
            marginBottom: 8,
            width: '100%',
          }}
        >
          <Radio.Button
            value="buy"
            style={{
              width: '50%',
              textAlign: 'center',
              background: side === 'buy' ? '#02bf76' : '',
              borderColor: side === 'buy' ? '#02bf76' : '',
            }}
          >
            BUY
          </Radio.Button>
          <Radio.Button
            value="sell"
            style={{
              width: '50%',
              textAlign: 'center',
              background: side === 'sell' ? '#F23B69' : '',
              borderColor: side === 'sell' ? '#F23B69' : '',
            }}
          >
            SELL
          </Radio.Button>
        </Radio.Group>
        <InputBox
          addonBefore={`Price (${quoteCurrency})`}
          placeholder="Price"
          value={price}
          type="number"
          step={market?.tickSize || 1}
          onChange={(e) => setPrice(e.target.value)}
        />
        <InputBox
          addonBefore={`Size (${baseCurrency})`}
          placeholder="Size"
          value={size}
          type="number"
          step={market?.minOrderSize || 1}
          onChange={(e) => setSize(e.target.value)}
        />
        <Slider
          value={sizeFraction}
          tipFormatter={(value) => `${value}%`}
          marks={sliderMarks}
          onChange={onSliderChange}
        />
        <div style={{ paddingTop: 18 }}>
          {'POST '}
          <Switch
            checked={postOnly}
            onChange={postOnChange}
            style={{ marginRight: 40 }}
          />
          {'IOC '}
          <Switch checked={ioc} onChange={iocOnChange} />
        </div>
      </div>
      {side === 'buy' ? (
        <BuyButton
          disabled={!price || !size}
          onClick={onSubmit}
          block
          type="primary"
          size="large"
          loading={submitting}
        >
          Buy {baseCurrency}
        </BuyButton>
      ) : (
        <SellButton
          disabled={!price || !size}
          onClick={onSubmit}
          block
          type="primary"
          size="large"
          loading={submitting}
        >
          Sell {baseCurrency}
        </SellButton>
      )}
    </FloatingElement>
  );
}
