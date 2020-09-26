import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import {
  useSelectedBaseCurrencyAccount,
  useMarket,
  useSelectedQuoteCurrencyAccount,
} from '../utils/markets';
import { TOKEN_MINTS } from '@project-serum/serum';
import { useWallet } from '../utils/wallet';
import { useConnection } from '../utils/connection';
import { createTokenAccount } from '../utils/send';
import QRCode from 'qrcode.react';
import WalletConnect from './WalletConnect';
import { notify } from '../utils/notifications';

const ActionButton = styled(Button)`
  color: #2abdd2;
  background-color: #212734;
  border-width: 0px;
`;

export default function DepositDialog({ onClose, depositCoin }) {
  let coinMint =
    depositCoin &&
    TOKEN_MINTS.find(({ name }) => name === depositCoin)?.address;
  const { market } = useMarket();
  const { connected, wallet } = useWallet();
  const connection = useConnection();
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();

  const [isCreatingTokenAccount, setIsCreatingTokenAccount] = useState(false);

  const doCreateTokenAccount = async () => {
    try {
      await createTokenAccount({
        wallet,
        connection,
        mintPublicKey: coinMint,
        onBeforeSendCallBack: () => setIsCreatingTokenAccount(true),
        onConfirmCallBack: () => setIsCreatingTokenAccount(false),
      });
    } catch (e) {
      notify({
        message: 'Error creating token account: ' + e.message,
        type: 'error',
      });
      setIsCreatingTokenAccount(false);
    }
  };

  if (!coinMint) {
    return null;
  }

  let account;
  if (market?.baseMintAddress?.equals(coinMint)) {
    account = baseCurrencyAccount;
  } else if (market?.quoteMintAddress?.equals(coinMint)) {
    account = quoteCurrencyAccount;
  } else {
    account = null;
  }

  return (
    <Modal
      title={depositCoin}
      visible={!!coinMint}
      onOk={onClose}
      onCancel={onClose}
    >
      <div>
        <p style={{ color: 'white' }}>Deposit address:</p>
        <p style={{ color: 'rgba(255,255,255,0.5)' }}>
          {account ? (
            account.pubkey.toBase58()
          ) : (
            <>
              {connected ? (
                <ActionButton
                  block
                  size="large"
                  loading={isCreatingTokenAccount}
                  onClick={doCreateTokenAccount}
                >
                  Create token account
                </ActionButton>
              ) : (
                <WalletConnect />
              )}
            </>
          )}
        </p>
        {account && <QRCode value={account.pubkey.toBase58()} />}
      </div>
    </Modal>
  );
}
