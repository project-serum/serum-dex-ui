import { PoolInfo } from '@project-serum/pool';
import React from 'react';
import { PublicKey } from '@solana/web3.js';
import { useAccountInfo } from '../../../utils/connection';
import {
  parseTokenAccountData,
  parseTokenMintData,
} from '../../../utils/tokens';
import { Button, Spin, Tabs } from 'antd';
import FloatingElement from '../../../components/layout/FloatingElement';
import { useTokenAccounts } from '../../../utils/markets';
import { MintName } from '../../../components/MintName';
import { LinkOutlined } from '@ant-design/icons';
import { WRAPPED_SOL_MINT } from '@project-serum/serum/lib/token-instructions';

const { TabPane } = Tabs;

export default function PoolBalancesPanel({
  poolInfo,
}: {
  poolInfo: PoolInfo;
}) {
  return (
    <FloatingElement>
      <Tabs>
        <TabPane tab="Wallet Balances" key="wallet">
          <WalletBalancesTab poolInfo={poolInfo} />
        </TabPane>
        <TabPane tab="Pool Balances" key="pool">
          <PoolBalancesTab poolInfo={poolInfo} />
        </TabPane>
      </Tabs>
    </FloatingElement>
  );
}

function WalletBalancesTab({ poolInfo }: { poolInfo: PoolInfo }) {
  const [tokenAccounts] = useTokenAccounts();
  return (
    <ul>
      {[
        poolInfo.state.poolTokenMint,
        ...poolInfo.state.assets.map((asset) => asset.mint),
      ].map((mint, index) => {
        const tokenAccount = tokenAccounts?.find((account) =>
          account.effectiveMint.equals(mint),
        );
        if (!tokenAccount) {
          return null;
        }
        return (
          <BalanceItem
            key={index}
            mint={mint}
            publicKey={tokenAccount.pubkey}
            isPoolToken={mint.equals(poolInfo.state.poolTokenMint)}
          />
        );
      })}
    </ul>
  );
}

function PoolBalancesTab({ poolInfo }: { poolInfo: PoolInfo }) {
  return (
    <ul>
      {poolInfo.state.assets.map((asset, index) => {
        return (
          <BalanceItem
            key={index}
            mint={asset.mint}
            publicKey={asset.vaultAddress}
          />
        );
      })}
    </ul>
  );
}

interface BalanceItemProps {
  mint: PublicKey;
  publicKey: PublicKey;
  isPoolToken?: boolean;
}

function BalanceItem({ mint, publicKey, isPoolToken }: BalanceItemProps) {
  const [mintAccountInfo] = useAccountInfo(mint);
  const [balanceAccountInfo] = useAccountInfo(publicKey);
  let quantityDisplay = <Spin size="small" />;
  if (mintAccountInfo && balanceAccountInfo) {
    const mintInfo = parseTokenMintData(mintAccountInfo.data);
    if (mint.equals(WRAPPED_SOL_MINT)) {
      quantityDisplay = (
        <>{balanceAccountInfo.lamports / 10 ** mintInfo.decimals}</>
      );
    } else {
      const accountInfo = parseTokenAccountData(balanceAccountInfo.data);
      quantityDisplay = <>{accountInfo.amount / 10 ** mintInfo.decimals}</>;
    }
  }

  return (
    <li>
      {quantityDisplay}{' '}
      {isPoolToken ? (
        <>
          Pool Token (<MintName mint={mint} />)
        </>
      ) : (
        <MintName mint={mint} />
      )}{' '}
      <Button
        type="link"
        icon={<LinkOutlined />}
        href={'https://solscan.io/address/' + publicKey.toBase58()}
        target="_blank"
        rel="noopener noreferrer"
      />
    </li>
  );
}
