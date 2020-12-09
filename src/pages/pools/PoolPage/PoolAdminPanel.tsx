import React, { FormEvent, useState } from 'react';
import { AdminControlledPoolInstructions, PoolInfo } from '@project-serum/pool';
import { TokenInstructions } from '@project-serum/serum';
import FloatingElement from '../../../components/layout/FloatingElement';
import { useConnection } from '../../../utils/connection';
import { useWallet } from '../../../utils/wallet';
import {
  getSelectedTokenAccountForMint,
  useTokenAccounts,
} from '../../../utils/markets';
import { sendTransaction } from '../../../utils/send';
import { notify } from '../../../utils/notifications';
import { PublicKey, Transaction } from '@solana/web3.js';
import { Button, Input, Tabs } from 'antd';
import {
  createAssociatedTokenAccount,
  getAssociatedTokenAddress,
} from '@project-serum/associated-token';
import { parseTokenMintData } from '../../../utils/tokens';
import BN from 'bn.js';
import { refreshAllCaches } from '../../../utils/fetch-loop';

const { TabPane } = Tabs;

export function PoolAdminPanel({ poolInfo }: { poolInfo: PoolInfo }) {
  return (
    <FloatingElement>
      <Tabs>
        <TabPane tab="Pause/Unpause" key="pause">
          <PauseUnpauseTab poolInfo={poolInfo} />
        </TabPane>
        <TabPane tab="Add Token" key="addAsset">
          <AddAssetTab poolInfo={poolInfo} />
        </TabPane>
        <TabPane tab="Remove Token" key="removeAsset">
          <RemoveAssetTab poolInfo={poolInfo} />
        </TabPane>
        <TabPane tab="Deposit" key="deposit">
          <DepositTab poolInfo={poolInfo} />
        </TabPane>
        <TabPane tab="Withdraw" key="withdraw">
          <WithdrawTab poolInfo={poolInfo} />
        </TabPane>
        <TabPane tab="Change Fee" key="updateFee">
          <UpdateFeeTab poolInfo={poolInfo} />
        </TabPane>
      </Tabs>
    </FloatingElement>
  );
}

interface TabParams {
  poolInfo: PoolInfo;
}

function PauseUnpauseTab({ poolInfo }: TabParams) {
  const connection = useConnection();
  const { wallet, connected } = useWallet();
  const [submitting, setSubmitting] = useState(false);

  async function sendPause() {
    if (!connected) {
      return;
    }
    setSubmitting(true);
    try {
      const transaction = new Transaction();
      transaction.add(AdminControlledPoolInstructions.pause(poolInfo));
      await sendTransaction({ connection, wallet, transaction });
    } catch (e) {
      notify({
        message: 'Error pausing pool: ' + e.message,
        type: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  }

  async function sendUnpause() {
    if (!connected) {
      return;
    }
    setSubmitting(true);
    try {
      const transaction = new Transaction();
      transaction.add(AdminControlledPoolInstructions.unpause(poolInfo));
      await sendTransaction({ connection, wallet, transaction });
    } catch (e) {
      notify({
        message: 'Error unpausing pool: ' + e.message,
        type: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Button onClick={sendPause} disabled={submitting}>
        Pause
      </Button>{' '}
      <Button onClick={sendUnpause} disabled={submitting}>
        Unpause
      </Button>
    </>
  );
}

function AddAssetTab({ poolInfo }: TabParams) {
  const connection = useConnection();
  const [address, setAddress] = useState('');
  const { wallet, connected } = useWallet();
  const canSubmit = connected && address;
  const [onSubmit, submitting] = useOnSubmitHandler(
    'adding asset to pool',
    async () => {
      const mintAddress = new PublicKey(address);
      const vaultAddress = await getAssociatedTokenAddress(
        poolInfo.state.vaultSigner,
        mintAddress,
      );
      const transaction = new Transaction();
      if (!(await connection.getAccountInfo(vaultAddress))) {
        transaction.add(
          await createAssociatedTokenAccount(
            wallet.publicKey,
            poolInfo.state.vaultSigner,
            mintAddress,
          ),
        );
      }
      transaction.add(
        AdminControlledPoolInstructions.addAsset(poolInfo, vaultAddress),
      );
      return transaction;
    },
  );

  return (
    <form onSubmit={onSubmit}>
      <Input
        addonBefore={<>Token Mint Address</>}
        value={address}
        onChange={(e) => setAddress(e.target.value.trim())}
        style={{ marginBottom: 24 }}
      />
      <SubmitButton canSubmit={canSubmit} submitting={submitting} />
    </form>
  );
}

function RemoveAssetTab({ poolInfo }: TabParams) {
  const [address, setAddress] = useState('');
  const { connected } = useWallet();
  const canSubmit = connected && address;
  const [onSubmit, submitting] = useOnSubmitHandler(
    'removing asset from pool',
    async () => {
      const mintAddress = new PublicKey(address);
      const vaultAddress = poolInfo.state.assets.find((asset) =>
        asset.mint.equals(mintAddress),
      )?.vaultAddress;
      if (!vaultAddress) {
        throw new Error('Asset not in pool');
      }
      const transaction = new Transaction();
      transaction.add(
        AdminControlledPoolInstructions.removeAsset(poolInfo, vaultAddress),
      );
      return transaction;
    },
  );

  return (
    <form onSubmit={onSubmit}>
      <Input
        addonBefore={<>Token Mint Address</>}
        value={address}
        onChange={(e) => setAddress(e.target.value.trim())}
        style={{ marginBottom: 24 }}
      />
      <SubmitButton canSubmit={canSubmit} submitting={submitting} />
    </form>
  );
}

function DepositTab({ poolInfo }: TabParams) {
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState('');

  const connection = useConnection();
  const { wallet, connected } = useWallet();
  const [tokenAccounts] = useTokenAccounts();
  const canSubmit =
    connected && address && tokenAccounts && parseFloat(quantity);

  const [onSubmit, submitting] = useOnSubmitHandler(
    'depositing to pool',
    async () => {
      const mintAddress = new PublicKey(address);
      const vaultAddress = poolInfo.state.assets.find((asset) =>
        asset.mint.equals(mintAddress),
      )?.vaultAddress;
      if (!vaultAddress) {
        throw new Error('Asset not in pool');
      }

      const walletTokenAccount = getSelectedTokenAccountForMint(
        tokenAccounts,
        mintAddress,
      );
      if (!walletTokenAccount) {
        throw new Error('Asset not in wallet');
      }

      const mintAccountInfo = await connection.getAccountInfo(mintAddress);
      if (!mintAccountInfo) {
        throw new Error('Mint not found');
      }
      const mintDecimals = parseTokenMintData(mintAccountInfo.data).decimals;
      const parsedQuantity = Math.round(
        parseFloat(quantity) * 10 ** mintDecimals,
      );

      const transaction = new Transaction();
      transaction.add(
        TokenInstructions.transfer({
          source: walletTokenAccount.pubkey,
          destination: vaultAddress,
          amount: parsedQuantity,
          owner: wallet.publicKey,
        }),
      );
      return transaction;
    },
    true,
  );

  return (
    <form onSubmit={onSubmit}>
      <Input
        addonBefore={<>Token Mint Address</>}
        value={address}
        onChange={(e) => setAddress(e.target.value.trim())}
        style={{ marginBottom: 24 }}
      />
      <Input
        addonBefore={<>Quantity</>}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value.trim())}
        style={{ marginBottom: 24 }}
      />
      <SubmitButton canSubmit={canSubmit} submitting={submitting} />
    </form>
  );
}

function WithdrawTab({ poolInfo }: TabParams) {
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState('');

  const connection = useConnection();
  const { wallet, connected } = useWallet();
  const [tokenAccounts] = useTokenAccounts();
  const canSubmit =
    connected && address && tokenAccounts && parseFloat(quantity);

  const [onSubmit, submitting] = useOnSubmitHandler(
    'withdrawing from pool',
    async () => {
      const mintAddress = new PublicKey(address);
      const vaultAddress = poolInfo.state.assets.find((asset) =>
        asset.mint.equals(mintAddress),
      )?.vaultAddress;
      if (!vaultAddress) {
        throw new Error('Asset not in pool');
      }

      const walletTokenAccount = getSelectedTokenAccountForMint(
        tokenAccounts,
        mintAddress,
      );
      if (!walletTokenAccount) {
        throw new Error('Asset not in wallet');
      }

      const mintAccountInfo = await connection.getAccountInfo(mintAddress);
      if (!mintAccountInfo) {
        throw new Error('Mint not found');
      }
      const mintDecimals = parseTokenMintData(mintAccountInfo.data).decimals;
      const parsedQuantity = Math.round(
        parseFloat(quantity) * 10 ** mintDecimals,
      );

      const transaction = new Transaction();
      transaction.add(
        AdminControlledPoolInstructions.approveDelegate(
          poolInfo,
          vaultAddress,
          wallet.publicKey,
          new BN(parsedQuantity),
        ),
        TokenInstructions.transfer({
          source: vaultAddress,
          destination: walletTokenAccount.pubkey,
          amount: parsedQuantity,
          owner: wallet.publicKey,
        }),
      );
      return transaction;
    },
  );

  return (
    <form onSubmit={onSubmit}>
      <Input
        addonBefore={<>Token Mint Address</>}
        value={address}
        onChange={(e) => setAddress(e.target.value.trim())}
        style={{ marginBottom: 24 }}
      />
      <Input
        addonBefore={<>Quantity</>}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value.trim())}
        style={{ marginBottom: 24 }}
      />
      <SubmitButton canSubmit={canSubmit} submitting={submitting} />
    </form>
  );
}

function UpdateFeeTab({ poolInfo }: TabParams) {
  const [feeRate, setFeeRate] = useState('');

  const { connected } = useWallet();
  const [tokenAccounts] = useTokenAccounts();
  const canSubmit = connected && tokenAccounts && parseFloat(feeRate);

  const [onSubmit, submitting] = useOnSubmitHandler(
    'changing pool fee',
    async () => {
      const transaction = new Transaction();
      transaction.add(
        AdminControlledPoolInstructions.updateFee(
          poolInfo,
          Math.round(parseFloat(feeRate) * 1_000_000),
        ),
      );
      return transaction;
    },
  );

  return (
    <form onSubmit={onSubmit}>
      <Input
        addonBefore={<>Fee Rate</>}
        value={feeRate}
        onChange={(e) => setFeeRate(e.target.value.trim())}
        style={{ marginBottom: 24 }}
      />
      <SubmitButton canSubmit={canSubmit} submitting={submitting} />
    </form>
  );
}

function useOnSubmitHandler(
  description: string,
  makeTransaction: () => Promise<Transaction | null | undefined>,
  refresh = false,
): [(FormEvent) => void, boolean] {
  const connection = useConnection();
  const { wallet, connected } = useWallet();
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) {
      return;
    }
    setSubmitting(true);
    try {
      if (!connected) {
        throw new Error('Wallet not connected');
      }
      const transaction = await makeTransaction();
      if (!transaction) {
        return;
      }
      await sendTransaction({ connection, wallet, transaction });
      if (refresh) {
        refreshAllCaches();
      }
    } catch (e) {
      notify({
        message: `Error ${description}: ${e.message}`,
        type: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return [onSubmit, submitting];
}

function SubmitButton({ canSubmit, submitting }) {
  const { connected } = useWallet();
  return (
    <Button
      htmlType="submit"
      type="primary"
      disabled={!canSubmit || submitting}
    >
      {!connected ? 'Wallet not connected' : 'Submit'}
    </Button>
  );
}
