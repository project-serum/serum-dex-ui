import React from 'react';
import { Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

export default function LinkAddress({ title, address }) {
  const onOpenAddress = (address) => {
    window.open('https://explorer.solana.com/address/' + address, '_blank');
  };

  return (
    <div style={{ marginBottom: 20 }}>
      {title && <p style={{ color: 'white' }}>{title}</p>}
      <Button
        type="link"
        icon={<LinkOutlined />}
        onClick={() => onOpenAddress(address)}
      >
        {address}
      </Button>
    </div>
  );
}
