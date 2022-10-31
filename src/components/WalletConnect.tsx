import { Button, Dropdown, Menu, Modal } from 'antd';
import React, { useState } from 'react';

import LinkAddress from './LinkAddress';
import { useWallet } from '@solana/wallet-adapter-react';

export default function WalletConnect() {
  const {
    connected,
    publicKey,
    connect,
    disconnect,
    select,
    wallet,
    wallets,
  } = useWallet();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const publicKeyString = publicKey?.toBase58() || '';

  const menu = (
    <Menu>
      {connected && <LinkAddress shorten={true} address={publicKeyString} />}
      <Menu.Item
        key="3"
        onClick={() => {
          setIsModalVisible((v) => !v);
        }}
      >
        Change Wallet
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown.Button
        onClick={
          wallet
            ? connected
              ? disconnect
              : connect
            : () => {
                setIsModalVisible(true);
              }
        }
        overlay={menu}
      >
        {connected ? 'Disconnect' : 'Connect'}
      </Dropdown.Button>
      <Modal
        title="Select Wallet"
        okText="Connect"
        visible={isModalVisible}
        okButtonProps={{ style: { display: 'none' } }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        width={400}
      >
        {wallets.map(({ adapter }) => {
          const onClick = function () {
            select(adapter.name);
            setIsModalVisible(false);
          };

          return (
            <Button
              size="large"
              type={adapter.name === wallet?.adapter.name ? 'primary' : 'ghost'}
              onClick={onClick}
              icon={
                <img
                  alt={`${adapter.name}`}
                  width={20}
                  height={20}
                  src={adapter.icon}
                  style={{ marginRight: 8 }}
                />
              }
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                marginBottom: 8,
              }}
            >
              {adapter.name}
            </Button>
          );
        })}
      </Modal>
    </>
  );
}
