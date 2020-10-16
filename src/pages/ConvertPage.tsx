import React from 'react';
import styled from 'styled-components';
import ConvertForm from '../components/ConvertForm';
import { Row, Col } from 'antd';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;

export default function ConvertPage() {
  return (
    <Wrapper style={{ flex: 1, paddingTop: 10 }}>
      <Row justify="center">
        <Col>
          <ConvertForm />
        </Col>
      </Row>
    </Wrapper>
  );
}
