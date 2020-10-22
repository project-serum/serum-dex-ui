import React, { useState } from 'react';
import { Button } from 'antd';

import {removeLiquidity, useSwapContext} from '../../utils/swap';
import { useWallet } from '../../utils/wallet';
import { useConnection } from '../../utils/connection';
import { PoolInfo, SwapTokenAccount } from '../../utils/swapTypes';
import { notify } from '../../utils/notifications';

export const RemoveLiquidity = (props: {
  instance: { account: SwapTokenAccount; pool: PoolInfo };
}) => {
  const { account, pool } = props.instance;
  const [pendingTx, setPendingTx] = useState(false);
  const { wallet } = useWallet();
  const connection = useConnection();
  const {tokenProgramId, swapProgramId} = useSwapContext()

  const onRemove = async () => {
    try {
      setPendingTx(true);
      // TODO: calculate percentage based on user input
      let liquidityAmount = account.info.amount.toNumber();
      await removeLiquidity(connection, wallet, liquidityAmount, account, swapProgramId, tokenProgramId, pool);
    } catch {
      notify({
        description:
          'Please try again and approve transactions from your wallet',
        message: 'Removing liquidity cancelled.',
        type: 'error',
      });
    } finally {
      setPendingTx(false);
      // TODO: force refresh of pool accounts?
    }
  };

  return (
    <>
      <Button type="primary" onClick={onRemove} disabled={pendingTx}>
        Remove
      </Button>
    </>
  );
};
