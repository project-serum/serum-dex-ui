import { Identicon } from './Identicon';
import React from 'react';
import { getTokenIcon } from '../../utils/swap';
import { useConnectionConfig } from '../../utils/connection';

export const TokenIcon = (props: {
  mintAddress: string;
  style?: React.CSSProperties;
}) => {
  const { env } = useConnectionConfig();
  const icon = env ? getTokenIcon(env, props.mintAddress) : null;

  if (icon) {
    return (
      <img
        key={props.mintAddress}
        width="20"
        height="20"
        src={icon}
        alt={''}
        style={{
          marginRight: '0.5rem',
          borderRadius: '1rem',
          backgroundColor: 'white',
          backgroundClip: 'padding-box',
          ...props.style,
        }}
      />
    );
  }

  return (
    <Identicon address={props.mintAddress} style={{ marginRight: '0.5rem' }} />
  );
};

export const PoolIcon = (props: {
  mintA: string;
  mintB: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div>
      <TokenIcon
        mintAddress={props.mintA}
        style={{ marginRight: '-0.5rem', ...props.style }}
      />
      <TokenIcon mintAddress={props.mintB} />
    </div>
  );
};
