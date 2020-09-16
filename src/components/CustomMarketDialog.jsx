import React, { useState, useEffect } from 'react';
import { Modal, Input, Row, Col, Typography } from 'antd';
import { notify } from '../utils/notifications';
import { PublicKey } from '@solana/web3.js';
import { MARKETS } from '@project-serum/serum';

const { Text } = Typography;

export default function CustomMarketDialog({
  visible,
  onAddCustomMarket,
  onClose,
}) {
  const [marketId, setMarketId] = useState(null);
  const [programId, setProgramId] = useState(null);
  const [label, setLabel] = useState(null);

  useEffect(() => {
    setLabel(MARKETS.find((m) => m.address.toBase58() === marketId)?.name);
  }, [marketId]);

  const knownMarket = MARKETS.some((m) => m.address.toBase58() === marketId);

  const onSubmit = () => {
    if (!marketId || !programId || !label) {
      notify({ message: 'Please fill in all fields', type: 'error' });
      return;
    }

    try {
      new PublicKey(marketId);
    } catch {
      notify({ message: 'Not a valid market id', type: 'error' });
      return;
    }

    try {
      new PublicKey(programId);
    } catch {
      notify({ message: 'Not a valid program id', type: 'error' });
      return;
    }

    onAddCustomMarket({
      address: marketId,
      programId,
      name: label,
    });
    onClose();
  };

  return (
    <Modal
      title={'Add custom market'}
      visible={visible}
      onOk={onSubmit}
      okText={'Add'}
      onCancel={onClose}
    >
      <div style={{ paddingTop: '20px' }}>
        <Row style={{ marginBottom: 8 }}>
          <Col span={24}>
            <Input
              placeholder="Market Id"
              value={marketId}
              onChange={(e) => setMarketId(e.target.value)}
            />
            {marketId && !knownMarket && (
              <div style={{ marginTop: 8 }}>
                <Text type="warning">
                  Warning: unknown market, possible scam
                </Text>
              </div>
            )}
          </Col>
        </Row>
        <Row style={{ marginBottom: 8 }}>
          <Col span={24}>
            <Input
              placeholder="Program Id"
              value={programId}
              onChange={(e) => setProgramId(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: 8 }}>
          <Col span={24}>
            <Input
              placeholder="Label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </Col>
        </Row>
      </div>
    </Modal>
  );
}
