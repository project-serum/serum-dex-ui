import { getPoolBasket, PoolInfo } from '@project-serum/pool';
import React from 'react';
import FloatingElement from '../../../components/layout/FloatingElement';
import { Typography } from 'antd';
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

const feeFormat = new Intl.NumberFormat(undefined, {
  style: 'percent',
  minimumFractionDigits: 0,
  maximumFractionDigits: 6,
});

export default function PoolInfoPanel({ poolInfo, mintInfo }: PoolInfoProps) {
  const connection = useConnection();

  const [totalBasket] = useAsyncData(
    () => getPoolBasket(connection, poolInfo, { redeem: mintInfo.supply }),
    tuple(getPoolBasket, connection, poolInfo, 'total', mintInfo),
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
      {poolInfo.state.adminKey ? (
        <Paragraph>
          Pool admin: <Text copyable>{poolInfo.state.adminKey.toBase58()}</Text>
        </Paragraph>
      ) : null}
      <Paragraph>
        Fee rate: {feeFormat.format(poolInfo.state.feeRate / 1_000_000)}
      </Paragraph>
      <Paragraph>
        Total supply: {mintInfo.supply.toNumber() / 10 ** mintInfo.decimals}
      </Paragraph>
      <Text>Total assets:</Text>
      <div>
        <PoolBasketDisplay poolInfo={poolInfo} basket={totalBasket} />
      </div>
    </FloatingElement>
  );
}
