import React from 'react';
import { Modal } from 'antd';
import {
  COIN_MINTS,
  useSelectedBaseCurrencyAccount,
  useMarket,
  useSelectedQuoteCurrencyAccount,
} from '../utils/markets';
import { useWallet } from '../utils/wallet';
import Link from './Link';

export default function DepositDialog({ onClose, depositCoin }) {
  let coinMint =
    depositCoin &&
    Object.keys(COIN_MINTS).find(
      (address) => COIN_MINTS[address] === depositCoin,
    );
  const { market } = useMarket();
  const { providerName, providerUrl } = useWallet();
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
  let account;
  if (market?.baseMintAddress?.toBase58() === coinMint) {
    account = baseCurrencyAccount;
  } else {
    account = quoteCurrencyAccount;
  }
  if (!coinMint) {
    return null;
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
        <p style={{ color: 'rgba(255,255,255,0.5)' }}>{coinMint}</p>
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
