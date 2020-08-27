import { UserOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import React from 'react';
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import { useWallet, WALLET_PROVIDERS } from '../utils/wallet';
import { useConnectionConfig, ENDPOINTS } from '../utils/connection';

const Wrapper = styled.div`
  background-color: #0d1017;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 30px;
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
  const [connected, wallet, providerUrl, setProvider] = useWallet();
  const { endpoint, setEndpoint } = useConnectionConfig();
  return (
    <Wrapper>
      <div>
        <LogoWrapper>
          <img src={logo} alt="" />
          {'SERUM'}
        </LogoWrapper>
      </div>
      <div style={{ display: 'block' }}>
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
        <Select onSelect={setProvider} value={providerUrl}>
          {WALLET_PROVIDERS.map(({ name, url }) => (
            <Select.Option value={url} key={url}>
              {name}
            </Select.Option>
          ))}
        </Select>
        <Button
          type="text"
          size="large"
          onClick={connected ? wallet.disconnect : wallet.connect}
          style={{ color: '#2abdd2' }}
        >
          <UserOutlined />
          {!connected ? 'Connect wallet' : 'Disconnect'}
        </Button>
      </div>
    </Wrapper>
  );
}
