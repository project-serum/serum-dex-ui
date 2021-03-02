import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Col, PageHeader, Row, Spin, Typography } from 'antd';
import { PublicKey } from '@solana/web3.js';
import { useAccountInfo } from '../../../utils/connection';
import FloatingElement from '../../../components/layout/FloatingElement';
import {
  decodePoolState,
  isAdminControlledPool,
  PoolInfo,
} from '@project-serum/pool';
import PoolInfoPanel from './PoolInfoPanel';
import { parseTokenMintData } from '../../../utils/tokens';
import PoolCreateRedeemPanel from './PoolCreateRedeemPanel';
import PoolBalancesPanel from './PoolBalancesPanel';
import { useHistory } from 'react-router-dom';
import { PoolAdminPanel } from './PoolAdminPanel';
import { useWallet } from '../../../utils/wallet';

const { Text } = Typography;

export default function PoolPage() {
  const { poolAddress } = useParams();
  const [poolAccountInfo, poolAccountLoaded] = useAccountInfo(
    isPublicKey(poolAddress) ? new PublicKey(poolAddress) : null,
  );
  const history = useHistory();

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
  const [mintAccountInfo, mintAccountInfoLoaded] = useAccountInfo(
    poolInfo?.state.poolTokenMint,
  );
  const mintInfo = useMemo(
    () => (mintAccountInfo ? parseTokenMintData(mintAccountInfo.data) : null),
    [mintAccountInfo],
  );
  const { wallet } = useWallet();

  if (poolInfo && mintInfo && wallet) {
    return (
      <>
        <PageHeader
          title={<>Pool {poolInfo.address.toBase58()}</>}
          onBack={() => history.push('/pools')}
          subTitle={poolInfo.state.name}
        />
        <Row>
          <Col xs={24} lg={12}>
            <PoolInfoPanel poolInfo={poolInfo} mintInfo={mintInfo} />
          </Col>
          <Col xs={24} lg={12}>
            <PoolCreateRedeemPanel poolInfo={poolInfo} mintInfo={mintInfo} />
          </Col>
          <Col xs={24}>
            <PoolBalancesPanel poolInfo={poolInfo} />
          </Col>
          {wallet.connected &&
          poolInfo.state.adminKey?.equals(wallet.publicKey) &&
          isAdminControlledPool(poolInfo) ? (
            <Col xs={24}>
              <PoolAdminPanel poolInfo={poolInfo} />
            </Col>
          ) : null}
        </Row>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title={<>Pool {poolAddress}</>}
        onBack={() => history.push('/pools')}
      />
      <FloatingElement>
        {!poolAccountLoaded || !mintAccountInfoLoaded ? (
          <Spin />
        ) : (
          <Text>Invalid pool</Text>
        )}
      </FloatingElement>
    </>
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
