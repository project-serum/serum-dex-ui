import React from 'react';
import { Row, Col } from 'antd';
import DexProgramSelector from './DexProgramSelector';

export default function BottomBar() {
  return (
    <Row justify="end">
      <Col>
        <DexProgramSelector />
      </Col>
    </Row>
  );
}
