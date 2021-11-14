import React, { useEffect, useState } from 'react';
import {
  AutoComplete,
  Button,
  Form,
  Input,
  Switch,
  Tooltip,
  Typography,
} from 'antd';
import { PublicKey } from '@solana/web3.js';
import { useConnection } from '../../utils/connection';
import FloatingElement from '../../components/layout/FloatingElement';
import styled from 'styled-components';
import { useWallet } from '../../utils/wallet';
import { sendSignedTransaction, signTransactions } from '../../utils/send';
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

const SIMPLE_POOL_PROGRAM_ID = '71JS8f7y7ASMbuuSMCVG7a3qDdcVco2qYD6bMJeZqUCm';
const ADMIN_CONTROLLED_POOL_PROGRAM_ID =
  'WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6';
const DEFAULT_PROGRAM_ID = ADMIN_CONTROLLED_POOL_PROGRAM_ID;
const PROGRAM_ID_OPTIONS = [
  {
    label: `Simple Pool (${SIMPLE_POOL_PROGRAM_ID})`,
    value: SIMPLE_POOL_PROGRAM_ID,
  },
  {
    label: `Admin-Controlled Pool (${ADMIN_CONTROLLED_POOL_PROGRAM_ID})`,
    value: ADMIN_CONTROLLED_POOL_PROGRAM_ID,
  },
];

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
  const [adminControlled, setAdminControlled] = useState(false);
  const [adminAddress, setAdminAddress] = useState('');
  const [tokenAccounts] = useTokenAccounts();
  const [submitting, setSubmitting] = useState(false);
  const [newPoolAddress, setNewPoolAddress] = useState<PublicKey | null>(null);

  useEffect(() => {
    if (programId === SIMPLE_POOL_PROGRAM_ID) {
      setAdminControlled(false);
    } else if (programId === ADMIN_CONTROLLED_POOL_PROGRAM_ID) {
      setAdminControlled(true);
    }
  }, [programId]);

  useEffect(() => {
    if (connected && wallet) {
      setAdminAddress(wallet.publicKey.toBase58());
    }
  }, [wallet, connected]);

  const canSubmit =
    connected &&
    poolName.trim() &&
    programId &&
    parseFloat(initialSupply) > 0 &&
    initialAssets.every((asset) => asset.valid) &&
    tokenAccounts &&
    (adminAddress || !adminControlled);

  async function onSubmit() {
    if (!canSubmit || !wallet) {
      return;
    }
    setSubmitting(true);
    try {
      const assets = initialAssets as ValidInitialAsset[];
      const [
        poolAddress,
        transactionsAndSigners,
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
        additionalAccounts: adminControlled
          ? [
              {
                pubkey: new PublicKey(adminAddress),
                isSigner: false,
                isWritable: false,
              },
            ]
          : [],
      });
      const signed = await signTransactions({
        transactionsAndSigners,
        wallet,
        connection,
      });
      for (let signedTransaction of signed) {
        await sendSignedTransaction({ signedTransaction, connection });
      }
      setNewPoolAddress(poolAddress);
    } catch (e) {
      console.warn(e);
      notify({
        message: 'Error creating new pool',
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
            <AutoComplete
              value={programId}
              onChange={(value) => setProgramId(value)}
              options={PROGRAM_ID_OPTIONS}
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
          <Form.Item
            label={
              <Tooltip title="Whether the assets in the pool can be controlled by the pool admin.">
                Admin Controlled
              </Tooltip>
            }
            name="adminControlled"
          >
            <Switch
              checked={adminControlled}
              onChange={(checked) => setAdminControlled(checked)}
              disabled={
                programId === SIMPLE_POOL_PROGRAM_ID ||
                programId === ADMIN_CONTROLLED_POOL_PROGRAM_ID
              }
            />
          </Form.Item>
          {adminControlled ? (
            <Form.Item
              label={
                <Tooltip title="Address of the pool admin account.">
                  Admin Address
                </Tooltip>
              }
            >
              <Input
                value={adminAddress}
                onChange={(e) => setAdminAddress(e.target.value.trim())}
              />
            </Form.Item>
          ) : null}
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
