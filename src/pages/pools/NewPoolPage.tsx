import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Tooltip, Typography } from 'antd';
import { PublicKey } from '@solana/web3.js';
import { useConnection } from '../../utils/connection';
import FloatingElement from '../../components/layout/FloatingElement';
import styled from 'styled-components';
import { useWallet } from '../../utils/wallet';
import { sendSignedTransaction, signTransaction } from '../../utils/send';
import { useMintInput } from '../../components/useMintInput';
import { PoolTransactions } from '@project-serum/pool';
import { useTokenAccounts } from '../../utils/markets';
import BN from 'bn.js';
import { notify } from '../../utils/notifications';
import Link from '../../components/Link';

const { Text, Title } = Typography;

const Wrapper = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const AddRemoveTokenButtons = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const DEFAULT_PROGRAM_ID = '8qZoqDMXTfLZz6BYrDfD5Cuy65JKkaNwktb54hj1yaoK';

export default function NewPoolPage() {
  const connection = useConnection();
  const { wallet, connected } = useWallet();
  const [poolName, setPoolName] = useState('');
  const [programId, setProgramId] = useState(DEFAULT_PROGRAM_ID);
  const [initialSupply, setInitialSupply] = useState('1');
  const [initialAssets, setInitialAssets] = useState<InitialAsset[]>([
    { valid: false },
    { valid: false },
  ]);
  const [tokenAccounts] = useTokenAccounts();
  const [submitting, setSubmitting] = useState(false);
  const [newPoolAddress, setNewPoolAddress] = useState<PublicKey | null>(null);

  const canSubmit =
    connected &&
    poolName.trim() &&
    programId &&
    parseFloat(initialSupply) > 0 &&
    initialAssets.every((asset) => asset.valid) &&
    tokenAccounts;

  async function onSubmit() {
    if (!canSubmit) {
      return;
    }
    setSubmitting(true);
    try {
      const assets = initialAssets as ValidInitialAsset[];
      const [
        poolAddress,
        transactions,
      ] = await PoolTransactions.initializeSimplePool({
        connection,
        programId: new PublicKey(programId),
        poolName,
        poolStateSpace: 1024,
        poolMintDecimals: 6,
        initialPoolMintSupply: new BN(
          Math.round(10 ** 6 * parseFloat(initialSupply)),
        ),
        assetMints: assets.map((asset) => asset.mint),
        initialAssetQuantities: assets.map((asset) => new BN(asset.quantity)),
        creator: wallet.publicKey,
        creatorAssets: assets.map((asset) => {
          const found = tokenAccounts?.find((tokenAccount) =>
            tokenAccount.effectiveMint.equals(asset.mint),
          );
          if (!found) {
            throw new Error('No token account for ' + asset.mint.toBase58());
          }
          return found.pubkey;
        }),
      });
      const signed = await Promise.all(
        transactions.map(({ transaction, signers }) =>
          signTransaction({ transaction, wallet, signers, connection }),
        ),
      );
      for (let signedTransaction of signed) {
        await sendSignedTransaction({ signedTransaction, connection });
      }
      setNewPoolAddress(poolAddress);
    } catch (e) {
      console.warn(e);
      notify({
        message: 'Error creating new pool: ' + e.message,
        type: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Wrapper>
      <FloatingElement>
        <Title level={4}>Create new pool</Title>
        <Form layout="vertical" onFinish={onSubmit}>
          <Form.Item
            label={
              <Tooltip title="Public name of the pool.">Pool Name</Tooltip>
            }
            name="name"
          >
            <Input
              value={poolName}
              onChange={(e) => setPoolName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label={
              <Tooltip title="Address of the pool program.">
                Program ID{' '}
                <Text type="secondary">(e.g. {DEFAULT_PROGRAM_ID})</Text>
              </Tooltip>
            }
            name="programId"
            initialValue={DEFAULT_PROGRAM_ID}
          >
            <Input
              value={programId}
              onChange={(e) => setProgramId(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label={
              <Tooltip title="Initial number of pool tokens to mint to your account.">
                Initial Pool Token Supply
              </Tooltip>
            }
            name="initialSupply"
            initialValue="1"
          >
            <Input
              value={initialSupply}
              onChange={(e) => setInitialSupply(e.target.value.trim())}
              type="number"
              min="0"
              step="any"
            />
          </Form.Item>
          <AddRemoveTokenButtons>
            <Button
              onClick={() =>
                setInitialAssets((assets) => assets.concat({ valid: false }))
              }
            >
              Add token
            </Button>{' '}
            <Button
              onClick={() =>
                setInitialAssets((assets) => assets.slice(0, assets.length - 1))
              }
              disabled={initialAssets.length <= 1}
            >
              Remove token
            </Button>
          </AddRemoveTokenButtons>
          {initialAssets.map((asset, i) => (
            <AssetInput setInitialAssets={setInitialAssets} index={i} key={i} />
          ))}
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
      {newPoolAddress ? (
        <FloatingElement>
          <Text>
            New pool address:{' '}
            <Link to={`/pools/${newPoolAddress.toBase58()}`}>
              {newPoolAddress.toBase58()}
            </Link>
          </Text>
        </FloatingElement>
      ) : null}
    </Wrapper>
  );
}

type InitialAsset = { valid: false } | ValidInitialAsset;
interface ValidInitialAsset {
  valid: true;
  mint: PublicKey;
  quantity: number;
}

function AssetInput({ setInitialAssets, index }) {
  const [mintInput, mintInfo] = useMintInput(
    `mint${index}`,
    <Text>Token {index + 1} Mint Address</Text>,
    <>Token mint address for token {index + 1}.</>,
  );
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    let change: InitialAsset;
    if (mintInfo && parseFloat(quantity) >= 0) {
      let parsedQuantity = Math.round(
        10 ** mintInfo.decimals * parseFloat(quantity),
      );
      change = {
        mint: mintInfo.address,
        quantity: parsedQuantity,
        valid: true,
      };
    } else {
      change = { valid: false };
    }
    setInitialAssets((assets: InitialAsset[]) =>
      assets.map((old, i) => (i === index ? change : old)),
    );
  }, [setInitialAssets, index, mintInfo, quantity]);

  return (
    <>
      {mintInput}
      <Form.Item
        label={
          <Tooltip
            title={
              <>
                Initial quantity of token {index + 1} to deposit into the pool.
              </>
            }
          >
            Token {index + 1} Initial Quantity
          </Tooltip>
        }
        name={`quantity${index}`}
        validateStatus={'success'}
      >
        <Input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value.trim())}
          type="number"
          min="0"
          step="any"
        />
      </Form.Item>
    </>
  );
}
