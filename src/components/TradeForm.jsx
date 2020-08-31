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
  const [baseCurrencyBalances] = useBaseCurrencyBalances();
  const [quoteCurrencyBalances] = useQuoteCurrencyBalances();
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

  const availableQuote = openOrdersAccount
    ? market.quoteSplSizeToNumber(openOrdersAccount.quoteTokenFree)
    : 0;

  const maxQuoteSize = quoteCurrencyBalances + availableQuote;

  const sizeFraction =
    (price && size && maxQuoteSize && baseCurrencyBalances && side === 'buy'
      ? ((price * size) / Math.floor(maxQuoteSize)) * 100
      : (size / baseCurrencyBalances) * 100) || 0;

  useEffect(() => {
    setChangeOrderRef && setChangeOrderRef(doChangeOrder);
  }, [setChangeOrderRef]);

  // useEffect(() => {
  //   sizeFraction && onSliderChange(sizeFraction);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [side, sizeFraction]);

  const doChangeOrder = ({ size, price }) => {
    size && setSize(size);
    price && setPrice(price);
  };

  const onSliderChange = (value) => {
    if (!maxQuoteSize || !baseCurrencyBalances) {
      return;
    }

    if (!price) {
      markPrice && setPrice(markPrice);
    }

    let newSize;
    if (side === 'buy') {
      if (price || markPrice) {
        newSize =
          ((Math.floor(maxQuoteSize) / (price || markPrice)) * value) / 100;
      }
    } else {
      newSize = (Math.floor(baseCurrencyBalances) * value) / 100;
    }

    setSize(
      market?.minOrderSize
        ? newSize.toFixed(getDecimalCount(market.minOrderSize))
        : newSize,
    );
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
      !(await placeOrder({
        side,
        price: parsedPrice,
        size: parsedSize,
        orderType: ioc ? 'ioc' : postOnly ? 'postOnly' : 'limit',
        market,
        connection: sendConnection,
        wallet,
        baseCurrencyAccount: baseCurrencyAccount?.pubkey?.toBase58(),
        quoteCurrencyAccount: quoteCurrencyAccount?.pubkey?.toBase58(),
        openOrdersAccount: openOrdersAccount?.pubkey?.toBase58(),
        onBeforeSendCallBack: () => setSubmitting(true),
        onConfirmCallBack: () => setSubmitting(false),
      })) && setSubmitting(false);
    } catch (e) {
      notify({ message: 'Error placing order: ' + e.message, type: 'error' });
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
        {/*<Slider*/}
        {/*  value={sizeFraction}*/}
        {/*  tipFormatter={(value) => `${value}%`}*/}
        {/*  marks={sliderMarks}*/}
        {/*  onChange={onSliderChange}*/}
        {/*/>*/}
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
