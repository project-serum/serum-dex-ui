import React from 'react';
import { Row, Col, Tag } from 'antd';
import { useFills, useMarket } from '../../utils/markets';
import DataTable from '../layout/DataTable';

export default function FillsTable() {
  const fills = useFills();

  const { quoteCurrency } = useMarket();

  const columns = [
    {
      title: 'Market',
      dataIndex: 'marketName',
      key: 'marketName',
    },
    {
      title: 'Side',
      dataIndex: 'side',
      key: 'side',
      render: (side) => (
        <Tag
          color={side === 'buy' ? '#41C77A' : '#F23B69'}
          style={{ fontWeight: 700 }}
        >
          {side.charAt(0).toUpperCase() + side.slice(1)}
        </Tag>
      ),
    },
    {
      title: `Size`,
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: `Price`,
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: `Liquidity`,
      dataIndex: 'liquidity',
      key: 'liquidity',
    },
    {
      title: quoteCurrency ? `Fees (${quoteCurrency})` : 'Fees',
      dataIndex: 'feeCost',
      key: 'feeCost',
    },
  ];

  const dataSource = (fills || []).map((fill) => ({
    ...fill,
    key: `${fill.orderId}${fill.side}`,
    liquidity: fill.eventFlags.maker ? 'Maker' : 'Taker',
  }));

  return (
    <>
      <Row>
        <Col span={24}>
          <DataTable
            dataSource={dataSource}
            columns={columns}
            pagination={true}
            pageSize={5}
            emptyLabel="No fills"
          />
        </Col>
      </Row>
    </>
  );
}
