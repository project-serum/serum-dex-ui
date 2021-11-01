import React from 'react';
import { PublicKey } from '@solana/web3.js';
import { abbreviateAddress } from '../utils/utils';
import { useMintToTickers } from '../utils/tokens';
import { Popover } from 'antd';
import LinkAddress from './LinkAddress';
import { InfoCircleOutlined } from '@ant-design/icons';

export function MintName({
  mint,
  showAddress = false,
}: {
  mint: string | PublicKey | null | undefined;
  showAddress?: boolean;
}) {
  const mintToTickers = useMintToTickers();
  if (!mint) {
    return null;
  }
  const mintKey = typeof mint === 'string' ? new PublicKey(mint) : mint;
  const mintAddress = typeof mint === 'string' ? mint : mint.toBase58();
  const ticker = mintToTickers[mintAddress] ?? abbreviateAddress(mintKey);

  return (
    <>
      {ticker}
      {showAddress ? (
        <>
          {' '}
          <Popover
            content={<LinkAddress address={mintAddress} />}
            placement="bottomRight"
            title="Token mint"
            trigger="hover"
          >
            <InfoCircleOutlined style={{ color: '#2abdd2' }} />
          </Popover>
        </>
      ) : null}
    </>
  );
}
