import React from 'react';
import { Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

export default function LinkAddress({
  title,
  address,
  shorten = false,
}: {
  title?: undefined | any;
  address: string;
  shorten?: boolean;
}) {
  return (
    <div>
      {title && <p style={{ color: 'white' }}>{title}</p>}
      <Button
        type="link"
        icon={<LinkOutlined />}
        href={'https://solscan.io/address/' + address}
        target="_blank"
        rel="noopener noreferrer"
        style={{ cursor: 'pointer' }}
      >
        {shorten ? `${address.slice(0, 4)}...${address.slice(-4)}` : address}
      </Button>
    </div>
  );
}
