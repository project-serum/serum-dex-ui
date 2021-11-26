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
import { PublicKey } from '@solana/web3.js';
import { registerMarket } from '../utils/fraktion';
import { useTokenRegistry } from '../utils/tokensRegistry';
import { useMarketsList } from '../utils/markets';

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
      Fraktions Token Mint Address{' '}
      <Text type="secondary">
        (can be found on Vault page or in wallet/explorer)
      </Text>
    </Text>,
    'The mint address of fraktions that being traded. You can get fraktions mint address at vault page. Or',
  );

  const quoteMintInfo = {
    address: new PublicKey('So11111111111111111111111111111111111111112'),
    decimals: 9,
  };

  const dexProgramId = MARKETS.find(({ deprecated }) => !deprecated).programId;
  const [submitting, setSubmitting] = useState(false);

  const [listedMarket, setListedMarket] = useState(null);

  const tickSize = '0.001';
  const lotSize = '0.1';
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
  const { tokens } = useTokenRegistry();
  const markets = useMarketsList();

  const token = tokens.find(
    (token) => token?.address === baseMintInfo?.address?.toBase58(),
  );

  const existingMarket = markets.find(
    (market) => market?.baseMint === token?.address,
  );

  const canSubmit =
    connected &&
    !!token &&
    !existingMarket &&
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
      const token = tokens.find(
        (token) => token?.address === baseMintInfo?.address?.toBase58(),
      );

      if (token) {
        registerMarket(token.symbol, marketAddress.toBase58(), token.address);
      }
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
