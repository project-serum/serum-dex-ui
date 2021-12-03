import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { useMarket, useBonfidaTrades } from '../utils/markets';
import { getDecimalCount } from '../utils/utils';
import FloatingElement from './layout/FloatingElement';
import { BonfidaTrade } from '../utils/types';

const Title = styled.div`
  color: rgba(255, 255, 255, 1);
`;
const SizeTitle = styled(Row)`
  padding: 20px 0 14px;
  color: #434a59;
`;

const MemoizedRow = React.memo(function RowImpl({
  price,
  side,
  size,
  time,
}: Pick<BonfidaTrade, 'price' | 'side' | 'size' | 'time'>) {
  const { market } = useMarket();
  return (
    <Row style={{ marginBottom: 4 }}>
      <Col
        span={8}
        style={{
          color: side === 'buy' ? '#41C77A' : '#F23B69',
        }}
      >
        {market?.tickSize && !isNaN(price)
          ? Number(price).toFixed(getDecimalCount(market.tickSize))
          : price}
      </Col>
      <Col span={8} style={{ textAlign: 'right' }}>
        {market?.minOrderSize && !isNaN(size)
          ? Number(size).toFixed(getDecimalCount(market.minOrderSize))
          : size}
      </Col>
      <Col span={8} style={{ textAlign: 'right', color: '#434a59' }}>
        {time && new Date(time).toLocaleTimeString()}
      </Col>
    </Row>
  );
});

export default function PublicTrades({ smallScreen }) {
  const { baseCurrency, quoteCurrency } = useMarket();
  const [trades, loaded] = useBonfidaTrades();

  return (
    <FloatingElement
      style={
        smallScreen
          ? { flex: 1 }
          : {
              marginTop: '10px',
              minHeight: '270px',
              maxHeight: 'calc(100vh - 700px)',
            }
      }
    >
      <Title>Recent Market trades</Title>
      <SizeTitle>
        <Col span={8}>Price ({quoteCurrency}) </Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          Size ({baseCurrency})
        </Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          Time
        </Col>
      </SizeTitle>
      {!!trades && loaded && (
        <div
          style={{
            marginRight: '-20px',
            paddingRight: '5px',
            overflowY: 'scroll',
            maxHeight: smallScreen
              ? 'calc(100% - 75px)'
              : 'calc(100vh - 800px)',
          }}
        >
          {trades.map((trade) => (
            <MemoizedRow
              key={trade.orderId}
              price={trade.price}
              side={trade.side}
              size={trade.size}
              time={trade.time}
            />
          ))}
        </div>
      )}
    </FloatingElement>
  );
}
