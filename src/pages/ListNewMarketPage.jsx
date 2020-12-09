import React, { useState } from 'react';
import { Button, Form, Input, Tooltip, Typography } from 'antd';
import { notify } from '../utils/notifications';
import { MARKETS } from '@project-serum/serum';
import { useConnection } from '../utils/connection';
import FloatingElement from '../components/layout/FloatingElement';
import styled from 'styled-components';
import { useWallet } from '../utils/wallet';
import { listMarket } from '../utils/send';
import { useMintInput } from '../components/useMintInput';

const { Text, Title } = Typography;

const Wrapper = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export default function ListNewMarketPage() {
  const connection = useConnection();
  const { wallet, connected } = useWallet();
  const [baseMintInput, baseMintInfo] = useMintInput(
    'baseMint',
    <Text>
      Base Token Mint Address{' '}
      <Text type="secondary">
        (e.g. BTC solana address:{' '}
        {
          <Text type="secondary" code>
            9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E
          </Text>
        }
        )
      </Text>
    </Text>,
    'The base token is the token being traded. For example, the base token of a BTC/USDT market is BTC.',
  );
  const [quoteMintInput, quoteMintInfo] = useMintInput(
    'quoteMint',
    <Text>
      Quote Token Mint Address{' '}
      <Text type="secondary">
        (e.g. USDT solana address:{' '}
        {
          <Text type="secondary" code>
            BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4
          </Text>
        }
        )
      </Text>
    </Text>,
    'The quote token is the token used to price trades. For example, the quote token of a BTC/USDT market is USDT.',
  );
  const [lotSize, setLotSize] = useState('1');
  const [tickSize, setTickSize] = useState('0.01');
  const dexProgramId = MARKETS.find(({ deprecated }) => !deprecated).programId;
  const [submitting, setSubmitting] = useState(false);

  const [listedMarket, setListedMarket] = useState(null);

  let baseLotSize;
  let quoteLotSize;
  if (baseMintInfo && parseFloat(lotSize) > 0) {
    baseLotSize = Math.round(10 ** baseMintInfo.decimals * parseFloat(lotSize));
    if (quoteMintInfo && parseFloat(tickSize) > 0) {
      quoteLotSize = Math.round(
        parseFloat(lotSize) *
          10 ** quoteMintInfo.decimals *
          parseFloat(tickSize),
      );
    }
  }

  const canSubmit =
    connected &&
    !!baseMintInfo &&
    !!quoteMintInfo &&
    !!baseLotSize &&
    !!quoteLotSize;

  async function onSubmit() {
    if (!canSubmit) {
      return;
    }
    setSubmitting(true);
    try {
      const marketAddress = await listMarket({
        connection,
        wallet,
        baseMint: baseMintInfo.address,
        quoteMint: quoteMintInfo.address,
        baseLotSize,
        quoteLotSize,
        dexProgramId,
      });
      setListedMarket(marketAddress);
    } catch (e) {
      console.warn(e);
      notify({
        message: 'Error listing new market',
        description: e.message,
        type: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Wrapper>
      <FloatingElement>
        <Title level={4}>List New Market</Title>
        <Form
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          layout={'vertical'}
          onFinish={onSubmit}
        >
          {baseMintInput}
          {quoteMintInput}
          <Form.Item
            label={
              <Tooltip title="Smallest allowed order size. For a BTC/USDT market, this would be in units of BTC.">
                Minimum Order Size{' '}
                <Text type="secondary">(Lot size in e.g. BTC)</Text>
              </Tooltip>
            }
            name="lotSize"
            initialValue="1"
            validateStatus={
              baseMintInfo && quoteMintInfo
                ? baseLotSize
                  ? 'success'
                  : 'error'
                : null
            }
            hasFeedback={baseMintInfo && quoteMintInfo}
          >
            <Input
              value={lotSize}
              onChange={(e) => setLotSize(e.target.value.trim())}
              type="number"
              min="0"
              step="any"
            />
          </Form.Item>
          <Form.Item
            label={
              <Tooltip title="Smallest amount by which prices can move. For a BTC/USDT market, this would be in units of USDT.">
                Tick Size{' '}
                <Text type="secondary">(Price increment in e.g. USDT)</Text>
              </Tooltip>
            }
            name="tickSize"
            initialValue="0.01"
            validateStatus={
              baseMintInfo && quoteMintInfo
                ? quoteLotSize
                  ? 'success'
                  : 'error'
                : null
            }
            hasFeedback={baseMintInfo && quoteMintInfo}
          >
            <Input
              value={tickSize}
              onChange={(e) => setTickSize(e.target.value.trim())}
              type="number"
              min="0"
              step="any"
            />
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={!canSubmit}
              loading={submitting}
            >
              {connected ? 'Submit' : 'Not connected to wallet'}
            </Button>
          </Form.Item>
        </Form>
      </FloatingElement>
      {listedMarket ? (
        <FloatingElement>
          <Text>New market address: {listedMarket.toBase58()}</Text>
        </FloatingElement>
      ) : null}
    </Wrapper>
  );
}
