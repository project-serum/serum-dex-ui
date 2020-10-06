import { Button, Input, Radio, Switch, Slider, Select } from 'antd';
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
  useOrderbook,
  useFeeDiscountKeys,
  calculateBestPrice,
} from '../utils/markets';
import { getFeeRates } from '@project-serum/serum';
import { useWallet } from '../utils/wallet';
import { notify } from '../utils/notifications';
import {
  getDecimalCount,
  roundToDecimal,
  floorToDecimal,
  isIncrement,
} from '../utils/utils';
import { useSendConnection } from '../utils/connection';
import FloatingElement from './layout/FloatingElement';
import { placeOrder } from '../utils/send';

const DEFAULT_ORDER_TYPE = 'limit';
const ORDER_TYPES = [
  { label: 'Limit', value: 'limit' },
  { label: 'Market', value: 'market' },
];

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
  const { baseCurrency, quoteCurrency, market } = useMarket();
  const baseCurrencyBalances = useBaseCurrencyBalances();
  const quoteCurrencyBalances = useQuoteCurrencyBalances();
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
  const openOrdersAccount = useSelectedOpenOrdersAccount(true);
  const { wallet } = useWallet();
  const sendConnection = useSendConnection();
  const markPrice = useMarkPrice();
  const [orderbook] = useOrderbook();
  const [feeAccounts] = useFeeDiscountKeys();

  const [side, setSide] = useState('buy');
  const [orderType, setOrderType] = useState(DEFAULT_ORDER_TYPE);
  const [postOnly, setPostOnly] = useState(false);
  const [ioc, setIoc] = useState(false);
  const [baseSize, setBaseSize] = useState(null);
  const [quoteSize, setQuoteSize] = useState(null);
  const [price, setPrice] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [sizeFraction, setSizeFraction] = useState(0);

  const availableQuote = openOrdersAccount
    ? market.quoteSplSizeToNumber(openOrdersAccount.quoteTokenFree)
    : 0;

  let feeRates = getFeeRates(feeAccounts && feeAccounts[0]?.feeTier);
  let quoteBalance = (quoteCurrencyBalances || 0) + (availableQuote || 0);
  let baseBalance = baseCurrencyBalances || 0;
  let sizeDecimalCount =
    market?.minOrderSize && getDecimalCount(market.minOrderSize);
  let priceDecimalCount = market?.tickSize && getDecimalCount(market.tickSize);

  useEffect(() => {
    setChangeOrderRef && setChangeOrderRef(doChangeOrder);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setChangeOrderRef]);

  useEffect(() => {
    baseSize && price && onSliderChange(sizeFraction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [side]);

  useEffect(() => {
    updateSizeFraction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, baseSize]);

  const onSetPrice = (price) => {
    const formattedPrice = isIncrement(price, market?.tickSize)
      ? price
      : floorToDecimal(price, priceDecimalCount);
    setPrice(formattedPrice);
  };

  const onSetBaseSize = (baseSize) => {
    const formattedBaseSize = isIncrement(baseSize, market?.minOrderSize)
      ? baseSize
      : floorToDecimal(baseSize, sizeDecimalCount);
    setBaseSize(formattedBaseSize);
    const rawQuoteSize = formattedBaseSize * (price || markPrice);
    const quoteSize =
      formattedBaseSize && roundToDecimal(rawQuoteSize, sizeDecimalCount);
    setQuoteSize(quoteSize);
  };

  const onSetQuoteSize = (quoteSize) => {
    setQuoteSize(quoteSize);
    const rawBaseSize = quoteSize / price;
    const baseSize = quoteSize && roundToDecimal(rawBaseSize, sizeDecimalCount);
    setBaseSize(baseSize);
  };

  const doChangeOrder = ({ size, price }) => {
    const formattedSize = size && roundToDecimal(size, sizeDecimalCount);
    const formattedPrice = price && roundToDecimal(price, priceDecimalCount);
    formattedSize && onSetBaseSize(formattedSize);
    formattedPrice && onSetPrice(formattedPrice);
  };

  const updateSizeFraction = () => {
    let rawMaxSize;
    if (side === 'sell') {
      rawMaxSize = baseBalance;
    } else {
      let maxQuoteBalance =
        orderType === 'market' || price >= orderbook?.asks[0]?.[0]
          ? (1 - feeRates.taker) * quoteBalance
          : quoteBalance;
      rawMaxSize = maxQuoteBalance / price;
    }
    const maxSize = floorToDecimal(rawMaxSize, sizeDecimalCount);
    const sizeFraction = Math.min((baseSize / maxSize) * 100, 100);
    setSizeFraction(sizeFraction);
  };

  const onSliderChange = (value) => {
    if (!price && markPrice) {
      let formattedMarkPrice = priceDecimalCount
        ? markPrice.toFixed(priceDecimalCount)
        : markPrice;
      onSetPrice(formattedMarkPrice);
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
    let formatted = floorToDecimal(newSize, sizeDecimalCount);

    onSetBaseSize(formatted);
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
    let parsedSize = parseFloat(baseSize);
    let parsedPrice;
    if (orderType === 'market') {
      parsedPrice =
        side === 'buy'
          ? calculateBestPrice(orderbook, parsedSize)
          : market?.tickSize;
    } else {
      parsedPrice = parseFloat(price);
    }

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
      onSetPrice(null);
      onSetBaseSize(null);
    } catch (e) {
      console.warn(e);
      notify({
        message: 'Error placing order',
        description: e.message,
        type: 'error',
      });
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
        <div style={{ display: 'flex', paddingBottom: 8 }}>
          <span
            className="ant-input-group-addon"
            style={{ width: '53px', display: 'flex', alignItems: 'center' }}
          >
            Type
          </span>
          <Select
            style={{ flex: 1, textAlign: 'center' }}
            defaultValue={DEFAULT_ORDER_TYPE}
            value={orderType}
            options={ORDER_TYPES}
            onSelect={setOrderType}
          />
        </div>
        <Input
          style={{ textAlign: 'right', paddingBottom: 8 }}
          addonBefore={<div style={{ width: '30px' }}>Price</div>}
          suffix={
            <span style={{ fontSize: 10, opacity: 0.5 }}>{quoteCurrency}</span>
          }
          value={orderType === 'market' ? 'MARKET' : price}
          type={orderType === 'market' ? 'text' : 'number'}
          step={market?.tickSize || 1}
          disabled={orderType === 'market'}
          onChange={(e) => onSetPrice(e.target.value)}
        />
        <Input.Group compact style={{ paddingBottom: 8 }}>
          <Input
            style={{ width: 'calc(50% + 30px)', textAlign: 'right' }}
            addonBefore={<div style={{ width: '30px' }}>Size</div>}
            suffix={
              <span style={{ fontSize: 10, opacity: 0.5 }}>{baseCurrency}</span>
            }
            value={baseSize}
            type="number"
            step={market?.minOrderSize || 1}
            onChange={(e) => onSetBaseSize(e.target.value)}
          />
          <Input
            style={{ width: 'calc(50% - 30px)', textAlign: 'right' }}
            suffix={
              <span style={{ fontSize: 10, opacity: 0.5 }}>
                {quoteCurrency}
              </span>
            }
            value={quoteSize}
            type="number"
            step={market?.minOrderSize || 1}
            onChange={(e) => onSetQuoteSize(e.target.value)}
          />
        </Input.Group>
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
          disabled={(orderType !== 'market' && !price) || !baseSize}
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
          disabled={(orderType !== 'market' && !price) || !baseSize}
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
