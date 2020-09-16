import React, { useState, useEffect } from 'react';
import { Modal, Input, Row, Col, Typography } from 'antd';
import { notify } from '../utils/notifications';
import { isValidPublicKey } from '../utils/utils';
import { PublicKey } from '@solana/web3.js';
import { Market, MARKETS, TOKEN_MINTS } from '@project-serum/serum';
import { useConnection } from '../utils/connection';
import { LoadingOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function CustomMarketDialog({
  visible,
  onAddCustomMarket,
  onClose,
}) {
  const connection = useConnection();
  const [marketId, setMarketId] = useState(null);
  const [programId, setProgramId] = useState(null);
  const [marketLabel, setMarketLabel] = useState(null);
  const [baseLabel, setBaseLabel] = useState(null);
  const [quoteLabel, setQuoteLabel] = useState(null);

  const [market, setMarket] = useState(null);
  const [loadingMarket, setLoadingMarket] = useState(false);
  const [validMarket, setValidMarket] = useState(true);

  useEffect(() => {
    if (!isValidPublicKey(marketId) || !isValidPublicKey(programId)) {
      resetLabels();
      return;
    }

    setLoadingMarket(true);
    Market.load(
      connection,
      new PublicKey(marketId),
      {},
      new PublicKey(programId),
    )
      .then((market) => {
        const knownMarket = MARKETS.find((m) =>
          m.address.equals(market._decoded?.ownAddress),
        );
        setMarketLabel(knownMarket?.name);

        const baseCurrency =
          market?.baseMintAddress &&
          TOKEN_MINTS.find((token) =>
            token.address.equals(market.baseMintAddress),
          )?.name;
        setBaseLabel(baseCurrency);

        const quoteCurrency =
          market?.quoteMintAddress &&
          TOKEN_MINTS.find((token) =>
            token.address.equals(market.quoteMintAddress),
          )?.name;
        setQuoteLabel(quoteCurrency);

        setMarket(market);
        setValidMarket(true);
      })
      .catch(() => {
        resetLabels();
        setMarket(null);
        setValidMarket(false);
      })
      .finally(() => setLoadingMarket(false));
  }, [marketId, programId]);

  const resetLabels = () => {
    setMarketLabel(null);
    setBaseLabel(null);
    setQuoteLabel(null);
  };

  const onSubmit = () => {
    if (!marketId || !programId || !marketLabel || !baseLabel || !quoteLabel) {
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
      name: marketLabel,
      base: baseLabel,
      quote: quoteLabel,
    });
    onDoClose();
  };

  const onDoClose = () => {
    resetLabels();
    setMarket(null);
    setMarketId(null);
    setProgramId(null);
    onClose();
  };

  const knownMarket = MARKETS.some(
    (m) =>
      m.address.toBase58() === marketId && m.programId.toBase58() === programId,
  );

  const canSubmit =
    marketId &&
    programId &&
    marketLabel &&
    baseLabel &&
    quoteLabel &&
    validMarket;

  return (
    <Modal
      title={'Add custom market'}
      visible={visible}
      onOk={onSubmit}
      okText={'Add'}
      onCancel={onDoClose}
      okButtonProps={{ disabled: !canSubmit }}
    >
      <div>
        <Row style={{ marginBottom: 8 }}>
          {marketId && !isValidPublicKey(marketId) && (
            <div style={{ marginBottom: 8 }}>
              <Text type="danger">Invalid market ID</Text>
            </div>
          )}
          {!validMarket && (
            <div style={{ marginBottom: 8 }}>
              <Text type="danger">Not a valid market</Text>
            </div>
          )}
          {market && !knownMarket && (
            <div style={{ marginBottom: 8 }}>
              <Text type="warning">Warning: unknown market</Text>
            </div>
          )}
          <Col span={24}>
            <Input
              placeholder="Market Id"
              value={marketId}
              onChange={(e) => setMarketId(e.target.value)}
              suffix={loadingMarket ? <LoadingOutlined /> : null}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: 8 }}>
          {programId && !isValidPublicKey(programId) && (
            <div style={{ marginBottom: 8 }}>
              <Text type="danger">Invalid program ID</Text>
            </div>
          )}
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
              value={marketLabel}
              onChange={(e) => setMarketLabel(e.target.value)}
            />
          </Col>
        </Row>
        <Row gutter={[8]} style={{ marginBottom: 8 }}>
          <Col span={12}>
            <Input
              placeholder="Base label"
              value={baseLabel}
              onChange={(e) => setBaseLabel(e.target.value)}
            />
            {market && !baseLabel && (
              <div style={{ marginTop: 8 }}>
                <Text type="warning">Warning: unknown token</Text>
              </div>
            )}
          </Col>
          <Col span={12}>
            <Input
              placeholder="Quote label"
              value={quoteLabel}
              onChange={(e) => setQuoteLabel(e.target.value)}
            />
            {market && !quoteLabel && (
              <div style={{ marginTop: 8 }}>
                <Text type="warning">Warning: unknown token</Text>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </Modal>
  );
}
