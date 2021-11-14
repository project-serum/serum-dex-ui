import styled from 'styled-components';
import FloatingElement from '../../components/layout/FloatingElement';
import React, { useState } from 'react';
import { Button, Input, Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import Link from '../../components/Link';

const { Title } = Typography;

const Wrapper = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  margin-top: 16px;
  margin-bottom: 48px;
`;

export default function PoolListPage() {
  const [poolAddress, setPoolAddress] = useState('');
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    history.push(`/pools/${poolAddress}`);
  }
  return (
    <Wrapper>
      <FloatingElement>
        <Title level={3}>Pools</Title>
        <Form onSubmit={onSubmit}>
          <Input
            value={poolAddress}
            onChange={(e) => setPoolAddress(e.target.value.trim())}
            placeholder="Pool address"
          />
          <Button type="primary" htmlType="submit">
            Go
          </Button>
        </Form>
        <Link to="/pools/new">Create new pool</Link>
      </FloatingElement>
    </Wrapper>
  );
}
