import React from 'react';
import { Modal } from 'antd';
import {
  useSelectedBaseCurrencyAccount,
  useMarket,
  useSelectedQuoteCurrencyAccount,
} from '../utils/markets';
import { TOKEN_MINTS } from '@project-serum/serum';
import { useWallet } from '../utils/wallet';
import Link from './Link';

export default function DepositDialog({ onClose, depositCoin }) {
  let coinMint =
    depositCoin &&
    TOKEN_MINTS.find(({ name }) => name === depositCoin)?.address;
  const { market } = useMarket();
  const { providerName, providerUrl } = useWallet();
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
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
      <div style={{ paddingTop: '20px' }}>
        <p style={{ color: 'white' }}>Mint address:</p>
        <p style={{ color: 'rgba(255,255,255,0.5)' }}>{coinMint.toBase58()}</p>
        <div>
          <p style={{ color: 'white' }}>Deposit address:</p>
          <p style={{ color: 'rgba(255,255,255,0.5)' }}>
            {account ? (
              account.pubkey.toBase58()
            ) : (
              <>
                Visit{' '}
                <Link external to={providerUrl}>
                  {providerName}
                </Link>{' '}
                to create an account for this mint
              </>
            )}
          </p>
        </div>
      </div>
    </Modal>
  );
}
