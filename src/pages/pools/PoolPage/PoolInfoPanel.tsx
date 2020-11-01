import { getPoolBasket, PoolInfo } from '@project-serum/pool';
import React from 'react';
import FloatingElement from '../../../components/layout/FloatingElement';
import { Spin, Typography } from 'antd';
import { MintInfo } from '../../../utils/tokens';
import { useAsyncData } from '../../../utils/fetch-loop';
import { useConnection } from '../../../utils/connection';
import tuple from 'immutable-tuple';
import PoolBasketDisplay from './PoolBasketDisplay';

const { Text, Paragraph } = Typography;

interface PoolInfoProps {
  poolInfo: PoolInfo;
  mintInfo: MintInfo;
}

export default function PoolInfoPanel({ poolInfo, mintInfo }: PoolInfoProps) {
  const connection = useConnection();

  const [totalBasket] = useAsyncData(
    () => getPoolBasket(connection, poolInfo, { redeem: mintInfo.supply }),
    tuple(
      getPoolBasket,
      connection,
      poolInfo.address.toBase58(),
      'total',
      mintInfo.supply.toString(),
    ),
  );

  return (
    <FloatingElement stretchVertical>
      <Paragraph>Name: {poolInfo.state.name}</Paragraph>
      <Paragraph>
        Address: <Text copyable>{poolInfo.address.toBase58()}</Text>
      </Paragraph>
      <Paragraph>
        Pool token mint address:{' '}
        <Text copyable>{poolInfo.state.poolTokenMint.toBase58()}</Text>
      </Paragraph>
      <Paragraph>
        Total supply: {mintInfo.supply.toNumber() / 10 ** mintInfo.decimals}
      </Paragraph>
      <Text>Total assets:</Text>
      <div>
        {!totalBasket ? (
          <Spin />
        ) : (
          <PoolBasketDisplay poolInfo={poolInfo} basket={totalBasket} />
        )}
      </div>
    </FloatingElement>
  );
}
