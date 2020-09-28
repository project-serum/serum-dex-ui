import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Menu, Popover, Select } from 'antd';
import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import { useWallet, WALLET_PROVIDERS } from '../utils/wallet';
import { ENDPOINTS, useConnectionConfig } from '../utils/connection';
import LinkAddress from './LinkAddress';

const Wrapper = styled.div`
  background-color: #0d1017;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 30px;
  flex-wrap: wrap;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #2abdd2;
  font-weight: bold;
  cursor: pointer;
  img {
    height: 30px;
    margin-right: 8px;
  }
`;

export default function TopBar() {
  const { connected, wallet, providerUrl, setProvider } = useWallet();
  const { endpoint, setEndpoint } = useConnectionConfig();
  const location = useLocation();
  const history = useHistory();

  const publicKey = wallet?.publicKey?.toBase58();

  const handleClick = useCallback(
    (e) => {
      history.push(e.key);
    },
    [history],
  );

  return (
    <Wrapper>
      <LogoWrapper>
        <img src={logo} alt="" onClick={() => history.push('/')} />
        {'SERUM'}
      </LogoWrapper>
      <Menu
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={[location.pathname]}
        style={{
          borderBottom: 'none',
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'flex-end',
          flex: 1,
        }}
      >
        <Menu.Item key="/">TRADE</Menu.Item>
      </Menu>
      <div>
        <Select
          onSelect={setEndpoint}
          value={endpoint}
          style={{ marginRight: 8 }}
        >
          {ENDPOINTS.map(({ name, endpoint }) => (
            <Select.Option value={endpoint} key={endpoint}>
              {name}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div>
        <Select onSelect={setProvider} value={providerUrl}>
          {WALLET_PROVIDERS.map(({ name, url }) => (
            <Select.Option value={url} key={url}>
              {name}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div>
        <Button
          type="text"
          size="large"
          onClick={connected ? wallet.disconnect : wallet.connect}
          style={{ color: '#2abdd2' }}
        >
          <UserOutlined />
          {!connected ? 'Connect wallet' : 'Disconnect'}
        </Button>
        {connected && (
          <Popover
            content={<LinkAddress address={publicKey} />}
            placement="bottomRight"
            title="Wallet public key"
            trigger="click"
          >
            <InfoCircleOutlined style={{ color: '#2abdd2' }} />
          </Popover>
        )}
      </div>
    </Wrapper>
  );
}
