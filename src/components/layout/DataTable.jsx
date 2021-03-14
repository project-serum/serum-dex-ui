import React, { useState } from 'react';
import { ConfigProvider, Table } from 'antd';

export default function DataTable({
  dataSource,
  columns,
  emptyLabel = 'No data',
  pagination = false,
  loading = false,
  pageSize = 10,
}) {
  const [currPageSize, setCurrPageSize] = useState(pageSize);
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

  const onShowSizeChange = (current, size) => {
    setCurrPageSize(size);
  };

  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={
          pagination
            ? { pagination: true, pageSize: currPageSize, onShowSizeChange }
            : false
        }
        loading={loading}
      />
    </ConfigProvider>
  );
}
