import { Col, Row } from 'antd';
import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useMarket, useOrderbook, useMarkPrice } from '../utils/markets';
import { isEqual, getDecimalCount } from '../utils/utils';
import FloatingElement from './layout/FloatingElement';
import usePrevious from '../utils/usePrevious';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const Title = styled.div`
  color: rgba(255, 255, 255, 1);
`;

const SizeTitle = styled(Row)`
  padding: 20px 0 14px;
  color: #434a59;
`;

const MarkPriceTitle = styled(Row)`
  padding: 20px 0 14px;
  font-weight: 700;
`;

const Line = styled.div`
  text-align: right;
  float: right;
  height: 100%;
  ${(props) =>
    props['data-width'] &&
    css`
      width: ${props['data-width']};
    `}
  ${(props) =>
    props['data-bgcolor'] &&
    css`
      background-color: ${props['data-bgcolor']};
    `}
`;

const Price = styled.div`
  position: absolute;
  right: 5px;
  color: white;
`;

export default function Orderbook({ smallScreen, depth = 7, onPrice, onSize }) {
  const markPrice = useMarkPrice();
  const [orderbook, loaded] = useOrderbook();
  const { baseCurrency, quoteCurrency } = useMarket();

  let bids = [];
  let asks = [];
  if (loaded) {
    bids = orderbook.bids;
    asks = orderbook.asks;
  }

  function getCumulativeOrderbookSide(orders, backwards = false) {
    let cumulative = [];
    let cumulativeSize = 0;
    orders.forEach(([price, size]) => {
      if (cumulative.length < depth) {
        cumulativeSize += size;
        cumulative.push({ price, size, cumulativeSize });
      }
    });
    if (backwards) {
      cumulative = cumulative.reverse();
    }
    let totalSize =
      cumulative.length > 0 &&
      cumulative[backwards ? 0 : cumulative.length - 1].cumulativeSize;
    return [cumulative, totalSize];
  }

  let [asksToDisplay, totalAskSize] = getCumulativeOrderbookSide(asks, true);
  let [bidsToDisplay, totalBidSize] = getCumulativeOrderbookSide(bids, false);

  let totalSize = totalAskSize + totalBidSize;

  return (
    <FloatingElement
      style={
        smallScreen ? { flex: 1 } : { height: '500px', overflow: 'hidden' }
      }
    >
      <Title>Orderbook</Title>
      <SizeTitle>
        <Col span={12} style={{ textAlign: 'left' }}>
          Size ({baseCurrency})
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          Price ({quoteCurrency})
        </Col>
      </SizeTitle>
      {asksToDisplay.map(({ price, size, cumulativeSize }, index) => (
        <OrderbookRow
          index={index}
          price={price}
          size={size}
          side={'sell'}
          sizePercent={(cumulativeSize / (totalSize || 1)) * 100}
          onSizeClick={() => onSize(size)}
          onPriceClick={() => onPrice(price)}
        />
      ))}
      <MarkPriceComponent markPrice={markPrice} />
      {bidsToDisplay.map(({ price, size, cumulativeSize }, index) => (
        <OrderbookRow
          index={index}
          price={price}
          size={size}
          side={'buy'}
          sizePercent={(cumulativeSize / (totalSize || 1)) * 100}
          onSizeClick={() => onSize(size)}
          onPriceClick={() => onPrice(price)}
        />
      ))}
    </FloatingElement>
  );
}

const OrderbookRow = React.memo(
  ({ index, side, price, size, sizePercent, onSizeClick, onPriceClick }) => {
    const element = useRef();

    useEffect(() => {
      // eslint-disable-next-line
      let _ = element.current?.classList.add('flash');
      setTimeout(() => element.current?.classList.remove('flash'), 500);
    }, [price, size]);

    return (
      <Row
        ref={element}
        id={index + ''}
        style={{ marginBottom: 1 }}
        onClick={onSizeClick}
      >
        <Col span={12} style={{ textAlign: 'left' }}>
          {size}
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Line
            data-width={sizePercent + '%'}
            data-bgcolor={
              side === 'buy'
                ? 'rgba(65, 199, 122, 0.6)'
                : 'rgba(242, 60, 105, 0.6)'
            }
          />
          <Price onClick={onPriceClick}>{price}</Price>
        </Col>
      </Row>
    );
  },
  (prevProps, nextProps) =>
    isEqual(prevProps, nextProps, ['side', 'price', 'size', 'sizePercent']),
);

const MarkPriceComponent = React.memo(
  ({ markPrice }) => {
    const { priceStep } = useMarket();
    const previousMarkPrice = usePrevious(markPrice);

    let markPriceColor =
      markPrice > previousMarkPrice
        ? '#41C77A'
        : markPrice < previousMarkPrice
        ? '#F23B69'
        : 'white';

    return (
      <MarkPriceTitle justify="center">
        <Col style={{ color: markPriceColor }}>
          {markPrice > previousMarkPrice && (
            <ArrowUpOutlined style={{ marginRight: 5 }} />
          )}
          {markPrice < previousMarkPrice && (
            <ArrowDownOutlined style={{ marginRight: 5 }} />
          )}
          {markPrice
            ? priceStep
              ? markPrice.toFixed(getDecimalCount(priceStep))
              : markPrice
            : '----'}
        </Col>
      </MarkPriceTitle>
    );
  },
  (prevProps, nextProps) => isEqual(prevProps, nextProps, ['markPrice']),
);
