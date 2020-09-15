import React, { useState } from 'react';
import { Modal, Button, Input, Row, Col } from 'antd';
import { notify } from '../utils/notifications';
import { PublicKey } from '@solana/web3.js';

export default function CustomMarketDialog({
  visible,
  onAddCustomMarket,
  onClose,
}) {
  const [marketId, setMarketId] = useState(null);
  const [programId, setProgramId] = useState(null);
  const [label, setLabel] = useState(null);

  const onSubmit = () => {
    if (!marketId || !programId || !label) {
      notify({ message: 'Please fill in all fields', type: 'error' });
      return;
    }

    let marketPubkey;
    try {
      marketPubkey = new PublicKey(marketId);
    } catch {
      notify({ message: 'Not a valid market id', type: 'error' });
      return;
    }

    let programPubkey;
    try {
      programPubkey = new PublicKey(programId);
    } catch {
      notify({ message: 'Not a valid program id', type: 'error' });
      return;
    }

    onAddCustomMarket({
      address: marketPubkey.toBase58(),
      programId: programPubkey,
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
          <Col>
            <Input
              style={{ minWidth: 300 }}
              placeholder="Market Id"
              value={marketId}
              onChange={(e) => setMarketId(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: 8 }}>
          <Col>
            <Input
              style={{ minWidth: 300 }}
              placeholder="Program Id"
              value={programId}
              onChange={(e) => setProgramId(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: 8 }}>
          <Col>
            <Input
              style={{ minWidth: 300 }}
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
