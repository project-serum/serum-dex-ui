import { Col, Row } from 'antd';
import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useMarket, useOrderbook, useMarkPrice } from '../utils/markets';
import { isEqual, getDecimalCount } from '../utils/utils';
import { useInterval } from '../utils/useInterval';
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
  const [orderbook] = useOrderbook();
  const { baseCurrency, quoteCurrency } = useMarket();

  const currentOrderbookData = useRef(null);
  const lastOrderbookData = useRef(null);

  const [asksToDisplay, setAsksToDisplay] = useState([]);
  const [bidsToDisplay, setBidsToDisplay] = useState([]);
  const [totalSize, setTotalSize] = useState(0);

  useInterval(() => {
    if (
      !currentOrderbookData.current ||
      JSON.stringify(currentOrderbookData.current) !==
        JSON.stringify(lastOrderbookData.current)
    ) {
      let bids = orderbook?.bids || [];
      let asks = orderbook?.asks || [];

      let [asksToDisplay, totalAskSize] = getCumulativeOrderbookSide(
        asks,
        true,
      );
      let [bidsToDisplay, totalBidSize] = getCumulativeOrderbookSide(
        bids,
        false,
      );
      let totalSize = totalAskSize + totalBidSize;

      setAsksToDisplay(asksToDisplay);
      setBidsToDisplay(bidsToDisplay);
      setTotalSize(totalSize);

      currentOrderbookData.current = {
        bids: orderbook?.bids,
        asks: orderbook?.asks,
      };
    }
  }, 250);

  useEffect(() => {
    lastOrderbookData.current = {
      bids: orderbook?.bids,
      asks: orderbook?.asks,
    };
  }, [orderbook]);

  function getCumulativeOrderbookSide(orders, backwards = false) {
    let cumulative = orders
      .slice(0, depth)
      .reduce((cumulative, [price, size], i) => {
        cumulative.push({
          price,
          size,
          cumulativeSize: (cumulative[i - 1]?.cumulativeSize || 0) + size,
        });
        return cumulative;
      }, []);
    if (backwards) {
      cumulative = cumulative.reverse();
    }
    let totalSize =
      cumulative[backwards ? 0 : cumulative.length - 1]?.cumulativeSize || 0;
    return [cumulative, totalSize];
  }

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
      {asksToDisplay.map(({ price, size, cumulativeSize }) => (
        <OrderbookRow
          key={price + ''}
          price={price}
          size={size}
          side={'sell'}
          sizePercent={(cumulativeSize / (totalSize || 1)) * 100}
          onSizeClick={() => onSize(size)}
          onPriceClick={() => onPrice(price)}
        />
      ))}
      <MarkPriceComponent markPrice={markPrice} />
      {bidsToDisplay.map(({ price, size, cumulativeSize }) => (
        <OrderbookRow
          key={price + ''}
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
  ({ side, price, size, sizePercent, onSizeClick, onPriceClick }) => {
    const element = useRef();

    const { market } = useMarket();

    useEffect(() => {
      // eslint-disable-next-line
      !element.current?.classList.contains('flash') &&
        element.current?.classList.add('flash');
      setTimeout(
        () =>
          element.current?.classList.contains('flash') &&
          element.current?.classList.remove('flash'),
        500,
      );
    }, [price, size]);

    let formattedSize =
      market?.minOrderSize && !isNaN(size)
        ? Number(size).toFixed(getDecimalCount(market.minOrderSize) + 1)
        : size;

    let formattedPrice =
      market?.tickSize && !isNaN(price)
        ? Number(price).toFixed(getDecimalCount(market.tickSize) + 1)
        : price;

    return (
      <Row ref={element} style={{ marginBottom: 1 }} onClick={onSizeClick}>
        <Col span={12} style={{ textAlign: 'left' }}>
          {formattedSize}
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
          <Price onClick={onPriceClick}>{formattedPrice}</Price>
        </Col>
      </Row>
    );
  },
  (prevProps, nextProps) =>
    isEqual(prevProps, nextProps, ['side', 'price', 'size', 'sizePercent']),
);

const MarkPriceComponent = React.memo(
  ({ markPrice }) => {
    const { market } = useMarket();
    const previousMarkPrice = usePrevious(markPrice);

    let markPriceColor =
      markPrice > previousMarkPrice
        ? '#41C77A'
        : markPrice < previousMarkPrice
        ? '#F23B69'
        : 'white';

    let formattedMarkPrice =
      markPrice &&
      market?.tickSize &&
      markPrice.toFixed(getDecimalCount(market.tickSize));

    return (
      <MarkPriceTitle justify="center">
        <Col style={{ color: markPriceColor }}>
          {markPrice > previousMarkPrice && (
            <ArrowUpOutlined style={{ marginRight: 5 }} />
          )}
          {markPrice < previousMarkPrice && (
            <ArrowDownOutlined style={{ marginRight: 5 }} />
          )}
          {formattedMarkPrice || '----'}
        </Col>
      </MarkPriceTitle>
    );
  },
  (prevProps, nextProps) => isEqual(prevProps, nextProps, ['markPrice']),
);
