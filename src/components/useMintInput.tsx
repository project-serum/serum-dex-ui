import { PublicKey } from '@solana/web3.js';
import React, { ReactElement, useMemo, useState } from 'react';
import { useAccountInfo } from '../utils/connection';
import { isValidPublicKey } from '../utils/utils';
import { ValidateStatus } from 'antd/lib/form/FormItem';
import { TokenInstructions } from '@project-serum/serum';
import { parseTokenMintData } from '../utils/tokens';
import { Form, Input, Tooltip } from 'antd';
import Link from './Link';

export interface MintInfo {
  address: PublicKey;
  decimals: number;
}

export function useMintInput(
  name,
  label: string | ReactElement,
  tooltip?: string | ReactElement,
): [ReactElement, MintInfo | null] {
  const [address, setAddress] = useState('');
  const [accountInfo, loaded] = useAccountInfo(
    isValidPublicKey(address) ? new PublicKey(address) : null,
  );

  const { validateStatus, hasFeedback, help, mintInfo } = useMemo(() => {
    let validateStatus: ValidateStatus = '';
    let hasFeedback = false;
    let help: string | null = null;
    let mintInfo: MintInfo | null = null;
    if (address) {
      hasFeedback = true;
      if (accountInfo) {
        if (
          accountInfo.owner.equals(TokenInstructions.TOKEN_PROGRAM_ID) &&
          accountInfo.data.length === 82
        ) {
          let parsed = parseTokenMintData(accountInfo.data);
          if (parsed.initialized) {
            validateStatus = 'success';
            mintInfo = {
              address: new PublicKey(address),
              decimals: parsed.decimals,
            };
          } else {
            validateStatus = 'error';
            help = 'Invalid SPL mint';
          }
        } else {
          validateStatus = 'error';
          help = 'Invalid SPL mint address';
        }
      } else if (isValidPublicKey(address) && !loaded) {
        validateStatus = 'validating';
      } else {
        validateStatus = 'error';
        help = 'Invalid Solana address';
      }
    }
    return { validateStatus, hasFeedback, help, mintInfo };
  }, [address, accountInfo, loaded]);

  const input = (
    <Form.Item
      label={
        <Tooltip
          title={
            <>
              {tooltip} You can look up token mint addresses on{' '}
              <Link external to="https://sollet.io">
                sollet.io
              </Link>
              .
            </>
          }
        >
          {label}
        </Tooltip>
      }
      name={name}
      validateStatus={validateStatus}
      hasFeedback={hasFeedback}
      help={help}
    >
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value.trim())}
      />
    </Form.Item>
  );

  return [input, mintInfo];
}
