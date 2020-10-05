import React from 'react';
import { Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

export default function LinkAddress({ title, address }) {
  return (
    <div>
      {title && <p style={{ color: 'white' }}>{title}</p>}
      <Button
        type="link"
        icon={<LinkOutlined />}
        href={'https://explorer.solana.com/address/' + address}
        target="_blank"
        rel="noopener noreferrer"
      >
        {address}
      </Button>
    </div>
  );
}
