import React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useWallet } from '../utils/wallet';

export default function WalletConnect() {
  const { connected, wallet } = useWallet();

  return (
    <Button
      type="text"
      size="large"
      onClick={connected ? wallet.disconnect : wallet.connect}
      style={{ color: '#2abdd2' }}
    >
      <UserOutlined />
      {!connected ? 'Connect wallet' : 'Disconnect'}
    </Button>
  );
}
