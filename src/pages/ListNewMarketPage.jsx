import React, { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { notify } from '../utils/notifications';
import { isValidPublicKey } from '../utils/utils';
import { PublicKey } from '@solana/web3.js';
import { MARKETS, TokenInstructions } from '@project-serum/serum';
import { useAccountInfo, useConnection } from '../utils/connection';
import FloatingElement from '../components/layout/FloatingElement';
import styled from 'styled-components';
import { parseTokenMintData } from '../utils/tokens';
import { useWallet } from '../utils/wallet';
import { listMarket } from '../utils/send';

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
    'Base Mint Address',
  );
  const [quoteMintInput, quoteMintInfo] = useMintInput(
    'quoteMint',
    'Quote Mint Address',
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
        message: 'Error listing new market: ' + e.message,
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
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onSubmit}
        >
          {baseMintInput}
          {quoteMintInput}
          <Form.Item
            label="Min Order Size (Lot Size)"
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
            label="Tick Size (Price Increment)"
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
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
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

function useMintInput(name, label) {
  const [address, setAddress] = useState('');
  const [accountInfo, loaded] = useAccountInfo(
    isValidPublicKey(address) ? new PublicKey(address) : null,
  );

  let validateStatus = null;
  let hasFeedback = false;
  let help = null;
  let mintInfo = null;
  if (address) {
    hasFeedback = true;
    if (accountInfo) {
      if (
        accountInfo.owner.equals(TokenInstructions.TOKEN_PROGRAM_ID) &&
        accountInfo.data.length === 82
      ) {
        let parsed = parseTokenMintData(accountInfo.data);
        if (parsed.initialized) {
          validateStatus = 'success';
          mintInfo = {
            address: new PublicKey(address),
            decimals: parsed.decimals,
          };
        } else {
          validateStatus = 'error';
          help = 'Invalid SPL mint';
        }
      } else {
        validateStatus = 'error';
        help = 'Invalid SPL mint address';
      }
    } else if (isValidPublicKey(address) && !loaded) {
      validateStatus = 'loading';
    } else {
      validateStatus = 'error';
      help = 'Invalid Solana address';
    }
  }

  const input = (
    <Form.Item
      label={label}
      name={name}
      validateStatus={validateStatus}
      hasFeedback={hasFeedback}
      help={help}
    >
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value.trim())}
      />
    </Form.Item>
  );

  return [input, mintInfo];
}
