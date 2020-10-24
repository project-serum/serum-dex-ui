import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import { getPoolName, useOwnedPools } from '../../utils/swap';
import { RemoveLiquidity } from './RemoveLiquidity';
import { useMint } from '../../utils/swapAccounts';
import { useConnectionConfig } from '../../utils/connection';
import { PoolIcon } from './TokenIcon';
import { PoolInfo, SwapTokenAccount } from '../../utils/swapTypes';

const PoolItem = (props: {
  item: { pool: PoolInfo; isFeeAccount: boolean; account: SwapTokenAccount };
}) => {
  const { env } = useConnectionConfig();
  const item = props.item;
  const mint = useMint(item.account.info.mint.toBase58());

  const amount =
    item.account.info.amount.toNumber() / Math.pow(10, mint?.decimals || 0);

  if (!amount) {
    return null;
  }

  const sorted = item.pool.pubkeys.holdingMints.map((a) => a.toBase58()).sort();

  if (item) {
    return (
      <>
        <div>{amount.toFixed(4)}</div>
        <span title="Fee account">{item.isFeeAccount ? ' (F) ' : ' '}</span>
        {sorted.length > 1 && (
          <PoolIcon
            mintA={sorted[0]}
            mintB={sorted[1]}
            style={{ marginLeft: '0.5rem' }}
          />
        )}
        <div>{!!env ? getPoolName(env, item.pool) : ''}</div>
        <RemoveLiquidity instance={item} />
      </>
    );
  }

  return null;
};

export const PoolAccounts = () => {
  const pools = useOwnedPools();

  return (
    <>
      <div>Your Liquidity</div>

      <ConfigProvider
        renderEmpty={() => (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No liquidity found."
          />
        )}
      >
        <div className="pools-grid">
          {pools.map((p) => (
            <PoolItem item={p as any} />
          ))}
        </div>
      </ConfigProvider>
    </>
  );
};
