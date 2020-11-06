import { Basket, PoolInfo } from '@project-serum/pool';
import React from 'react';
import BN from 'bn.js';
import { PublicKey } from '@solana/web3.js';
import { useAccountInfo } from '../../../utils/connection';
import { parseTokenMintData } from '../../../utils/tokens';
import { Spin } from 'antd';

interface BasketDisplayProps {
  poolInfo: PoolInfo;
  basket: Basket;
}

export default function PoolBasketDisplay({
  poolInfo,
  basket,
}: BasketDisplayProps) {
  return (
    <ul>
      {poolInfo.state.assets.map((asset, index) => (
        <BasketItem
          key={index}
          mint={asset.mint}
          quantity={basket.quantities[index]}
        />
      ))}
    </ul>
  );
}

interface BasketItemProps {
  mint: PublicKey;
  quantity: BN;
}

function BasketItem({ mint, quantity }: BasketItemProps) {
  const [mintAccountInfo] = useAccountInfo(mint);
  let quantityDisplay = <Spin size="small" />;
  if (mintAccountInfo) {
    const mintInfo = parseTokenMintData(mintAccountInfo.data);
    quantityDisplay = <>{quantity.toNumber() / 10 ** mintInfo.decimals}</>;
  }

  return (
    <li>
      {quantityDisplay} {mint.toBase58()}
    </li>
  );
}
