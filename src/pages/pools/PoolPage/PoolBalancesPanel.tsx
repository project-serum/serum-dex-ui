import { PoolInfo } from '@project-serum/pool';
import React from 'react';
import { PublicKey } from '@solana/web3.js';
import { useAccountInfo } from '../../../utils/connection';
import {
  parseTokenAccountData,
  parseTokenMintData,
} from '../../../utils/tokens';
import { Spin, Tabs } from 'antd';
import FloatingElement from '../../../components/layout/FloatingElement';
import { useTokenAccounts } from '../../../utils/markets';

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
}

function BalanceItem({ mint, publicKey }: BalanceItemProps) {
  const [mintAccountInfo] = useAccountInfo(mint);
  const [balanceAccountInfo] = useAccountInfo(publicKey);
  let quantityDisplay = <Spin size="small" />;
  if (mintAccountInfo && balanceAccountInfo) {
    const mintInfo = parseTokenMintData(mintAccountInfo.data);
    const accountInfo = parseTokenAccountData(balanceAccountInfo.data);
    quantityDisplay = <>{accountInfo.amount / 10 ** mintInfo.decimals}</>;
  }

  return (
    <li>
      {quantityDisplay} {mint.toBase58()} {publicKey.toBase58()}
    </li>
  );
}
