import { getPoolBasket, PoolInfo, PoolTransactions } from '@project-serum/pool';
import React, { useMemo, useState } from 'react';
import FloatingElement from '../../../components/layout/FloatingElement';
import { Button, Input, Spin, Tabs, Typography } from 'antd';
import { MintInfo } from '../../../utils/tokens';
import { useAsyncData } from '../../../utils/fetch-loop';
import { useConnection } from '../../../utils/connection';
import { PublicKey } from '@solana/web3.js';
import tuple from 'immutable-tuple';
import PoolBasketDisplay from './PoolBasketDisplay';
import BN from 'bn.js';
import { notify } from '../../../utils/notifications';
import { useWallet } from '../../../utils/wallet';
import { useTokenAccounts } from '../../../utils/markets';
import { sendTransaction } from '../../../utils/send';

const { Text } = Typography;
const { TabPane } = Tabs;

interface PoolCreateRedeemPanel {
  poolInfo: PoolInfo;
  mintInfo: MintInfo;
}

export default function PoolCreateRedeemPanel({
  poolInfo,
  mintInfo,
}: PoolCreateRedeemPanel) {
  return (
    <FloatingElement stretchVertical>
      <Tabs>
        <TabPane tab="Create" key="create">
          <CreateRedeemTab
            poolInfo={poolInfo}
            mintInfo={mintInfo}
            tab="create"
          />
        </TabPane>
        <TabPane tab="Redeem" key="redeem">
          <CreateRedeemTab
            poolInfo={poolInfo}
            mintInfo={mintInfo}
            tab="redeem"
          />
        </TabPane>
      </Tabs>
    </FloatingElement>
  );
}

interface CreateRedeemInnerPanel {
  poolInfo: PoolInfo;
  mintInfo: MintInfo;
  tab: string;
}

function CreateRedeemTab({ poolInfo, mintInfo, tab }: CreateRedeemInnerPanel) {
  const connection = useConnection();
  const { wallet, connected } = useWallet();
  const [quantity, setQuantity] = useState('');
  const [tokenAccounts] = useTokenAccounts();
  const [submitting, setSubmitting] = useState(false);

  const action = useMemo(() => {
    const parsedQuantity = Math.round(
      parseFloat(quantity) * 10 ** mintInfo.decimals,
    );
    if (parsedQuantity > 0) {
      if (tab === 'create') {
        return { create: new BN(parsedQuantity) };
      } else {
        return { redeem: new BN(parsedQuantity) };
      }
    }
    return null;
  }, [mintInfo.decimals, quantity, tab]);

  const [basket, basketLoaded] = useAsyncData(
    async () =>
      action ? await getPoolBasket(connection, poolInfo, action) : null,
    tuple(getPoolBasket, connection, poolInfo.address.toBase58(), action),
  );

  function findTokenAccount(mint: PublicKey): PublicKey {
    const account = tokenAccounts?.find((account) =>
      account.effectiveMint.equals(mint),
    );
    if (account) {
      return account.pubkey;
    }
    throw new Error('No token account for ' + mint.toBase58());
  }

  const canSubmit = connected && action && basket;

  async function onSubmit(e) {
    e.preventDefault();
    if (!action || !basket || !connected || !canSubmit || !wallet) {
      return;
    }
    setSubmitting(true);
    try {
      const { transaction, signers } = PoolTransactions.execute(
        poolInfo,
        action,
        {
          owner: wallet.publicKey,
          poolTokenAccount: findTokenAccount(poolInfo.state.poolTokenMint),
          assetAccounts: poolInfo.state.assets.map((asset) =>
            findTokenAccount(asset.mint),
          ),
        },
        basket,
      );
      await sendTransaction({ connection, wallet, transaction, signers });
    } catch (e) {
      console.warn(e);
      notify({
        message:
          'Error ' +
          (tab === 'create' ? 'creating' : 'redeeming') +
          ' pool tokens',
        description: e.message,
        type: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        addonBefore={<>Quantity</>}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value.trim())}
        style={{ marginBottom: 24 }}
      />
      <div>
        {!basket ? (
          basketLoaded ? null : (
            <Spin />
          )
        ) : (
          <>
            <Text>{tab === 'create' ? 'Cost' : 'Proceeds'}: </Text>
            <Text type="secondary">(indicative only)</Text>
            <PoolBasketDisplay poolInfo={poolInfo} basket={basket} />
          </>
        )}
      </div>
      <Button
        htmlType="submit"
        type="primary"
        disabled={!canSubmit || submitting}
      >
        {!connected ? 'Wallet not connected' : 'Submit'}
      </Button>
    </form>
  );
}
