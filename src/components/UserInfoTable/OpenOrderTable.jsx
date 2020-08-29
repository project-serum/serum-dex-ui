import React, { useState } from 'react';
import { useMarket } from '../../utils/markets';
import DataTable from '../layout/DataTable';

import styled from 'styled-components';
import { Button, Row, Col, Tag } from 'antd';
import { cancelOrder } from '../../utils/send';
import { useWallet } from '../../utils/wallet';
import { useConnection } from '../../utils/connection';
import { notify } from '../../utils/notifications';
import { DeleteOutlined } from '@ant-design/icons';

const CancelButton = styled(Button)`
  color: #f23b69;
  border: 1px solid #f23b69;
`;

export default function OpenOrderTable({ openOrders }) {
  let { market } = useMarket();
  let [, wallet] = useWallet();
  let connection = useConnection();

  const [cancelId, setCancelId] = useState(null);

  async function cancel(order) {
    try {
      await cancelOrder({
        order,
        market,
        connection,
        wallet,
        onBeforeSendCallBack: () => setCancelId(order?.orderId),
        onConfirmCallBack: () => setCancelId(null),
      });
    } catch (e) {
      notify({
        message: 'Error cancelling order: ' + e.message,
        type: 'error',
      });
      setCancelId(null);
    }
  }

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
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      key: 'orderId',
      render: (order) => (
        <div style={{ textAlign: 'right' }}>
          <CancelButton
            icon={<DeleteOutlined />}
            onClick={() => cancel(order)}
            loading={cancelId + '' === order?.orderId + ''}
          >
            Cancel
          </CancelButton>
        </div>
      ),
    },
  ];
  let orders = openOrders;
  const dataSource = (orders || []).map((order) =>
    Object.assign(order, { key: order.orderId }),
  );

  return (
    <Row>
      <Col span={24}>
        <DataTable
          emptyLabel="No open orders"
          dataSource={dataSource}
          columns={columns}
          pagination={true}
          pageSize={5}
        />
      </Col>
    </Row>
  );
}
