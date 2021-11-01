import React from 'react';
import { ConfigProvider, Table } from 'antd';

export default function DataTable({
  dataSource,
  columns,
  emptyLabel = 'No data',
  pagination = false,
  loading = false,
  pageSize = 10,
}) {
  const customizeRenderEmpty = () => (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {emptyLabel}
    </div>
  );

  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={pagination ? { pagination: true, pageSize } : false}
        loading={loading}
      />
    </ConfigProvider>
  );
}
