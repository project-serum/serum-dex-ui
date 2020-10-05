import React, { useEffect, useState } from 'react';
import { Col, Input, Modal, Row, Typography } from 'antd';
import { notify } from '../utils/notifications';
import { isValidPublicKey } from '../utils/utils';
import { PublicKey } from '@solana/web3.js';
import { Market, MARKETS, TOKEN_MINTS } from '@project-serum/serum';
import { useAccountInfo, useConnection } from '../utils/connection';
import { LoadingOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function CustomMarketDialog({
  visible,
  onAddCustomMarket,
  onClose,
}) {
  const connection = useConnection();

  const [marketId, setMarketId] = useState('');

  const [marketLabel, setMarketLabel] = useState('');
  const [baseLabel, setBaseLabel] = useState('');
  const [quoteLabel, setQuoteLabel] = useState('');

  const [market, setMarket] = useState(null);
  const [loadingMarket, setLoadingMarket] = useState(false);

  const wellFormedMarketId = isValidPublicKey(marketId);

  const [marketAccountInfo] = useAccountInfo(
    wellFormedMarketId ? new PublicKey(marketId) : null,
  );
  const programId = marketAccountInfo
    ? marketAccountInfo.owner.toBase58()
    : MARKETS.find(({ deprecated }) => !deprecated).programId.toBase58();

  useEffect(() => {
    if (!wellFormedMarketId || !programId) {
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
        setMarket(market);
      })
      .catch(() => {
        resetLabels();
        setMarket(null);
      })
      .finally(() => setLoadingMarket(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection, marketId, programId]);

  const resetLabels = () => {
    setMarketLabel(null);
    setBaseLabel(null);
    setQuoteLabel(null);
  };

  const knownMarket = MARKETS.find(
    (m) =>
      m.address.toBase58() === marketId && m.programId.toBase58() === programId,
  );
  const knownProgram = MARKETS.find(
    (m) => m.programId.toBase58() === programId,
  );
  const knownBaseCurrency =
    market?.baseMintAddress &&
    TOKEN_MINTS.find((token) => token.address.equals(market.baseMintAddress))
      ?.name;

  const knownQuoteCurrency =
    market?.quoteMintAddress &&
    TOKEN_MINTS.find((token) => token.address.equals(market.quoteMintAddress))
      ?.name;

  const canSubmit =
    !loadingMarket &&
    !!market &&
    market.publicKey.toBase58() === marketId &&
    marketId &&
    programId &&
    marketLabel &&
    (knownBaseCurrency || baseLabel) &&
    (knownQuoteCurrency || quoteLabel) &&
    wellFormedMarketId;

  const onSubmit = () => {
    if (!canSubmit) {
      notify({
        message: 'Please fill in all fields with valid values',
        type: 'error',
      });
      return;
    }

    let params = {
      address: marketId,
      programId,
      name: marketLabel,
    };
    if (!knownBaseCurrency) {
      params.baseLabel = baseLabel;
    }
    if (!knownQuoteCurrency) {
      params.quoteLabel = quoteLabel;
    }
    onAddCustomMarket(params);
    onDoClose();
  };

  const onDoClose = () => {
    resetLabels();
    setMarket(null);
    setMarketId(null);
    onClose();
  };

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
        {wellFormedMarketId ? (
          <>
            {!market && !loadingMarket && (
              <Row style={{ marginBottom: 8 }}>
                <Text type="danger">Not a valid market</Text>
              </Row>
            )}
            {market && knownMarket && (
              <Row style={{ marginBottom: 8 }}>
                <Text type="warning">Market known: {knownMarket.name}</Text>
              </Row>
            )}
            {market && !knownProgram && (
              <Row style={{ marginBottom: 8 }}>
                <Text type="danger">Warning: unknown DEX program</Text>
              </Row>
            )}
            {market && knownProgram && knownProgram.deprecated && (
              <Row style={{ marginBottom: 8 }}>
                <Text type="warning">Warning: deprecated DEX program</Text>
              </Row>
            )}
          </>
        ) : (
          <>
            {marketId && !wellFormedMarketId && (
              <Row style={{ marginBottom: 8 }}>
                <Text type="danger">Invalid market ID</Text>
              </Row>
            )}
          </>
        )}
        <Row style={{ marginBottom: 8 }}>
          <Col span={24}>
            <Input
              placeholder="Market Id"
              value={marketId}
              onChange={(e) => setMarketId(e.target.value)}
              suffix={loadingMarket ? <LoadingOutlined /> : null}
            />
          </Col>
        </Row>

        <Row style={{ marginBottom: 8, marginTop: 8 }}>
          <Col span={24}>
            <Input
              placeholder="Market Label"
              disabled={!market}
              value={marketLabel}
              onChange={(e) => setMarketLabel(e.target.value)}
            />
          </Col>
        </Row>
        <Row gutter={[8]} style={{ marginBottom: 8 }}>
          <Col span={12}>
            <Input
              placeholder="Base label"
              disabled={!market || knownBaseCurrency}
              value={knownBaseCurrency || baseLabel}
              onChange={(e) => setBaseLabel(e.target.value)}
            />
            {market && !knownBaseCurrency && (
              <div style={{ marginTop: 8 }}>
                <Text type="warning">Warning: unknown token</Text>
              </div>
            )}
          </Col>
          <Col span={12}>
            <Input
              placeholder="Quote label"
              disabled={!market || knownQuoteCurrency}
              value={knownQuoteCurrency || quoteLabel}
              onChange={(e) => setQuoteLabel(e.target.value)}
            />
            {market && !knownQuoteCurrency && (
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
