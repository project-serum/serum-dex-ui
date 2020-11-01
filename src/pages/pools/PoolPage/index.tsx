import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Typography } from 'antd';
import { PublicKey } from '@solana/web3.js';
import { useAccountInfo } from '../../../utils/connection';
import FloatingElement from '../../../components/layout/FloatingElement';
import styled from 'styled-components';
import { decodePoolState, PoolInfo } from '@project-serum/pool';
import PoolInfoPanel from './PoolInfoPanel';
import { parseTokenMintData } from '../../../utils/tokens';
import PoolCreateRedeemPanel from './PoolCreateRedeemPanel';

const { Text, Title } = Typography;

const Wrapper = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export default function PoolPage() {
  const { poolAddress } = useParams();
  const [poolAccountInfo, poolAccountLoaded] = useAccountInfo(
    isPublicKey(poolAddress) ? new PublicKey(poolAddress) : null,
  );

  const poolInfo: PoolInfo | null = useMemo(() => {
    if (!poolAccountInfo) {
      return null;
    }
    try {
      return {
        address: new PublicKey(poolAddress),
        state: decodePoolState(poolAccountInfo.data),
        program: poolAccountInfo.owner,
      };
    } catch (e) {
      return null;
    }
  }, [poolAddress, poolAccountInfo]);
  const [poolTokenMintInfo, poolTokenMintInfoLoaded] = useAccountInfo(
    poolInfo?.state.poolTokenMint,
  );
  const poolTokenMintParsed = useMemo(
    () =>
      poolTokenMintInfo ? parseTokenMintData(poolTokenMintInfo.data) : null,
    [poolTokenMintInfo],
  );

  if (poolInfo && poolTokenMintParsed) {
    return <PoolPageInner poolInfo={poolInfo} mintInfo={poolTokenMintParsed} />;
  }

  return (
    <Wrapper>
      <FloatingElement>
        <Title level={4}>Pool {poolAddress}</Title>
        {!poolAccountLoaded || !poolTokenMintInfoLoaded ? (
          <Spin />
        ) : (
          <Text>Invalid pool</Text>
        )}
      </FloatingElement>
    </Wrapper>
  );
}

function isPublicKey(address) {
  try {
    new PublicKey(address);
    return true;
  } catch (e) {
    return false;
  }
}

function PoolPageInner({ poolInfo, mintInfo }) {
  return (
    <Wrapper>
      <PoolInfoPanel poolInfo={poolInfo} mintInfo={mintInfo} />
      <PoolCreateRedeemPanel poolInfo={poolInfo} mintInfo={mintInfo} />
    </Wrapper>
  );
}
