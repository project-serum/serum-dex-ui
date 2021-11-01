import React, { FormEvent, useMemo, useState } from 'react';
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
import {
  Account,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import { AutoComplete, Button, Input, Select, Tabs } from 'antd';
import {
  createAssociatedTokenAccount,
  getAssociatedTokenAddress,
} from '@project-serum/associated-token';
import { parseTokenMintData, useMintToTickers } from '../../../utils/tokens';
import BN from 'bn.js';
import { refreshAllCaches } from '../../../utils/fetch-loop';

const { TabPane } = Tabs;
const { Option } = Select;

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
        <TabPane tab="Modify Fee" key="updateFee">
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
    if (!connected || !wallet) {
      return;
    }
    setSubmitting(true);
    try {
      const transaction = new Transaction();
      transaction.add(AdminControlledPoolInstructions.pause(poolInfo));
      await sendTransaction({ connection, wallet, transaction });
    } catch (e) {
      notify({
        message: 'Error pausing pool',
        description: e.message,
        type: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  }

  async function sendUnpause() {
    if (!connected || !wallet) {
      return;
    }
    setSubmitting(true);
    try {
      const transaction = new Transaction();
      transaction.add(AdminControlledPoolInstructions.unpause(poolInfo));
      await sendTransaction({ connection, wallet, transaction });
    } catch (e) {
      notify({
        message: 'Error unpausing pool',
        description: e.message,
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
      if (!(await connection.getAccountInfo(vaultAddress)) && wallet) {
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
      return [transaction, []];
    },
  );

  return (
    <form onSubmit={onSubmit}>
      <MintSelector
        label="Token Mint Address"
        value={address}
        onChange={(value) => setAddress(value)}
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
      return [transaction, []];
    },
  );

  return (
    <form onSubmit={onSubmit}>
      <MintInPoolSelector
        poolInfo={poolInfo}
        label="Token Mint Address"
        value={address}
        onChange={(value) => setAddress(value)}
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
      if (!wallet) {
        throw new Error('Wallet is not connected');
      }

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

      const wrappedSolAccount =
        mintAddress.equals(TokenInstructions.WRAPPED_SOL_MINT) &&
        walletTokenAccount.pubkey.equals(wallet.publicKey)
          ? new Account()
          : null;

      const transaction = new Transaction();
      const signers: Account[] = [];
      if (wrappedSolAccount) {
        transaction.add(
          SystemProgram.createAccount({
            fromPubkey: wallet.publicKey,
            lamports: parsedQuantity + 2.04e6,
            newAccountPubkey: wrappedSolAccount.publicKey,
            programId: TokenInstructions.TOKEN_PROGRAM_ID,
            space: 165,
          }),
          TokenInstructions.initializeAccount({
            account: wrappedSolAccount.publicKey,
            mint: TokenInstructions.WRAPPED_SOL_MINT,
            owner: wallet.publicKey,
          }),
          TokenInstructions.transfer({
            source: wrappedSolAccount.publicKey,
            destination: vaultAddress,
            amount: parsedQuantity,
            owner: wallet.publicKey,
          }),
          TokenInstructions.closeAccount({
            source: wrappedSolAccount.publicKey,
            destination: walletTokenAccount.pubkey,
            owner: wallet.publicKey,
          }),
        );
        signers.push(wrappedSolAccount);
      } else {
        transaction.add(
          TokenInstructions.transfer({
            source: walletTokenAccount.pubkey,
            destination: vaultAddress,
            amount: parsedQuantity,
            owner: wallet.publicKey,
          }),
        );
      }
      return [transaction, signers];
    },
    true,
  );

  return (
    <form onSubmit={onSubmit}>
      <MintInPoolSelector
        poolInfo={poolInfo}
        label="Token Mint Address"
        value={address}
        onChange={(value) => setAddress(value)}
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
      if (!wallet) {
        throw new Error('Wallet is not connected');
      }

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

      const wrappedSolAccount =
        mintAddress.equals(TokenInstructions.WRAPPED_SOL_MINT) &&
        walletTokenAccount.pubkey.equals(wallet.publicKey)
          ? new Account()
          : null;

      const transaction = new Transaction();
      const signers: Account[] = [];
      if (wrappedSolAccount) {
        transaction.add(
          SystemProgram.createAccount({
            fromPubkey: wallet.publicKey,
            lamports: 2.04e6,
            newAccountPubkey: wrappedSolAccount.publicKey,
            programId: TokenInstructions.TOKEN_PROGRAM_ID,
            space: 165,
          }),
          TokenInstructions.initializeAccount({
            account: wrappedSolAccount.publicKey,
            mint: TokenInstructions.WRAPPED_SOL_MINT,
            owner: wallet.publicKey,
          }),
        );
        signers.push(wrappedSolAccount);
      }
      transaction.add(
        AdminControlledPoolInstructions.approveDelegate(
          poolInfo,
          vaultAddress,
          wallet.publicKey,
          new BN(parsedQuantity),
        ),
      );
      if (wrappedSolAccount) {
        transaction.add(
          TokenInstructions.transfer({
            source: vaultAddress,
            destination: wrappedSolAccount.publicKey,
            amount: parsedQuantity,
            owner: wallet.publicKey,
          }),
          TokenInstructions.closeAccount({
            source: wrappedSolAccount.publicKey,
            destination: walletTokenAccount.pubkey,
            owner: wallet.publicKey,
          }),
        );
      } else {
        transaction.add(
          TokenInstructions.transfer({
            source: vaultAddress,
            destination: walletTokenAccount.pubkey,
            amount: parsedQuantity,
            owner: wallet.publicKey,
          }),
        );
      }
      return [transaction, signers];
    },
  );

  return (
    <form onSubmit={onSubmit}>
      <MintInPoolSelector
        poolInfo={poolInfo}
        label="Token Mint Address"
        value={address}
        onChange={(value) => setAddress(value)}
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
      return [transaction, []];
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
  makeTransaction: () => Promise<[Transaction, Account[]]>,
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
      if (!connected || !wallet) {
        throw new Error('Wallet not connected');
      }
      const [transaction, signers] = await makeTransaction();
      await sendTransaction({ connection, wallet, transaction, signers });
      if (refresh) {
        refreshAllCaches();
      }
    } catch (e) {
      notify({
        message: `Error ${description}`,
        description: e.message,
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

function MintInPoolSelector({
  poolInfo,
  label,
  value,
  onChange,
  style,
}: {
  poolInfo: PoolInfo;
  label: string;
  value: string;
  onChange: (string) => void;
  style: any;
}) {
  const mintToTickers = useMintToTickers();
  return (
    <Input.Group style={style}>
      <span className="ant-input-group-addon">{label}</span>
      <Select onChange={onChange} value={value} style={{ width: '100%' }}>
        {poolInfo.state.assets.map((asset) => (
          <Option value={asset.mint.toBase58()} key={asset.mint.toBase58()}>
            {mintToTickers[asset.mint.toBase58()] ? (
              <>
                {mintToTickers[asset.mint.toBase58()]} ({asset.mint.toBase58()})
              </>
            ) : (
              asset.mint.toBase58()
            )}
          </Option>
        ))}
      </Select>
    </Input.Group>
  );
}

function MintSelector({ label, style, value, onChange }) {
  const mintToTickers = useMintToTickers();
  const options = useMemo(() => {
    return Object.entries(mintToTickers)
      .filter(
        ([mintAddress, ticker]) =>
          mintAddress.includes(value) ||
          ticker.toLowerCase().includes(value.toLowerCase()),
      )
      .map(([mintAddress, ticker]) => ({
        value: mintAddress,
        label: (
          <>
            {ticker} ({mintAddress})
          </>
        ),
      }));
  }, [mintToTickers, value]);
  return (
    <Input.Group style={style}>
      <span className="ant-input-group-addon">{label}</span>
      <AutoComplete
        options={options}
        value={value}
        onChange={(e) => onChange(e)}
        style={{ width: '100%' }}
      />
    </Input.Group>
  );
}
