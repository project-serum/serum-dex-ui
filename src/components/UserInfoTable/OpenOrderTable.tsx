import React, { useState } from 'react';
import DataTable from '../layout/DataTable';

import styled from 'styled-components';
import { Button, Col, Row, Tag } from 'antd';
import { cancelOrder } from '../../utils/send';
import { useWallet } from '../../utils/wallet';
import { useSendConnection } from '../../utils/connection';
import { notify } from '../../utils/notifications';
import { DeleteOutlined } from '@ant-design/icons';
import { OrderWithMarketAndMarketName } from '../../utils/types';

const CancelButton = styled(Button)`
  color: #f23b69;
  border: 1px solid #f23b69;
`;

export default function OpenOrderTable({
  openOrders,
  onCancelSuccess,
  pageSize,
  loading,
  marketFilter,
}: {
  openOrders: OrderWithMarketAndMarketName[] | null | undefined;
  onCancelSuccess?: () => void;
  pageSize?: number;
  loading?: boolean;
  marketFilter?: boolean;
}) {
  let { wallet } = useWallet();
  let connection = useSendConnection();

  const [cancelId, setCancelId] = useState(null);

  async function cancel(order) {
    setCancelId(order?.orderId);
    try {
      if (!wallet) {
        return null;
      }

      await cancelOrder({
        order,
        market: order.market,
        connection,
        wallet,
      });
    } catch (e) {
      notify({
        message: 'Error cancelling order',
        description: e.message,
        type: 'error',
      });
      return;
    } finally {
      setCancelId(null);
    }
    onCancelSuccess && onCancelSuccess();
  }

  const marketFilters = [
    ...new Set((openOrders || []).map((orderInfos) => orderInfos.marketName)),
  ].map((marketName) => {
    return { text: marketName, value: marketName };
  });

  const columns = [
    {
      title: 'Market',
      dataIndex: 'marketName',
      key: 'marketName',
      filters: marketFilter ? marketFilters : undefined,
      onFilter: (value, record) => record.marketName.indexOf(value) === 0,
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
      sorter: (a, b) => {
        if (a.side === b.side) {
          return 0;
        } else if (a.side === 'buy') {
          return 1;
        } else {
          return -1;
        }
      },
      showSorterTooltip: false,
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
      sorter: (a, b) => b.size - a.size,
      showSorterTooltip: false,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => b.price - a.price,
      showSorterTooltip: false,
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
  const dataSource = (openOrders || []).map((order) => ({
    ...order,
    key: order.orderId,
  }));

  return (
    <Row>
      <Col span={24}>
        <DataTable
          emptyLabel="No open orders"
          dataSource={dataSource}
          columns={columns}
          pagination={true}
          pageSize={pageSize ? pageSize : 5}
          loading={loading !== undefined && loading}
        />
      </Col>
    </Row>
  );
}
