import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Wallet from '@project-serum/sol-wallet-adapter';
import { notify } from './notifications';
import { useConnectionConfig } from './connection';
import { useLocalStorageState } from './utils';
import { WalletContextValues } from './types';
import { Button, Modal } from 'antd';
import {
  WalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolletExtensionAdapter,
  MathWalletAdapter,
  SolflareExtensionWalletAdapter,
} from '../wallet-adapters';

const ASSET_URL =
  'https://cdn.jsdelivr.net/gh/solana-labs/oyster@main/assets/wallets';
export const WALLET_PROVIDERS = [
  {
    name: 'sollet.io',
    url: 'https://www.sollet.io',
    icon: `${ASSET_URL}/sollet.svg`,
  },
  {
    name: 'Sollet Extension',
    url: 'https://www.sollet.io/extension',
    icon: `${ASSET_URL}/sollet.svg`,
    adapter: SolletExtensionAdapter as any,
  },
  {
    name: 'Ledger',
    url: 'https://www.ledger.com',
    icon: `${ASSET_URL}/ledger.svg`,
    adapter: LedgerWalletAdapter,
  },
  {
    name: 'Solflare',
    url: 'https://solflare.com/access-wallet',
    icon: `${ASSET_URL}/solflare.svg`,
  },
  {
    name: 'Solflare Extension',
    url: 'https://solflare.com',
    icon: `${ASSET_URL}/solflare.svg`,
    adapter: SolflareExtensionWalletAdapter,
  },
  {
    name: 'Phantom',
    url: 'https://www.phantom.app',
    icon: `https://www.phantom.app/img/logo.png`,
    adapter: PhantomWalletAdapter,
  },
  {
    name: 'MathWallet',
    url: 'https://www.mathwallet.org',
    icon: `${ASSET_URL}/mathwallet.svg`,
    adapter: MathWalletAdapter,
  },
];

const WalletContext = React.createContext<null | WalletContextValues>(null);

export function WalletProvider({ children }) {
  const { endpoint } = useConnectionConfig();

  const [autoConnect, setAutoConnect] = useState(false);
  const [providerUrl, setProviderUrl] = useLocalStorageState('walletProvider');

  const provider = useMemo(
    () => WALLET_PROVIDERS.find(({ url }) => url === providerUrl),
    [providerUrl],
  );

  let [wallet, setWallet] = useState<WalletAdapter | undefined>(undefined);

  useEffect(() => {
    if (provider) {
      const updateWallet = () => {
        // hack to also update wallet synchronously in case it disconnects
        // eslint-disable-next-line react-hooks/exhaustive-deps
        wallet = new (provider.adapter || Wallet)(
          providerUrl,
          endpoint,
        ) as WalletAdapter;
        setWallet(wallet);
      };

      if (document.readyState !== 'complete') {
        // wait to ensure that browser extensions are loaded
        const listener = () => {
          updateWallet();
          window.removeEventListener('load', listener);
        };
        window.addEventListener('load', listener);
        return () => window.removeEventListener('load', listener);
      } else {
        updateWallet();
      }
    }
  }, [provider, providerUrl, endpoint]);

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (wallet) {
      wallet.on('connect', () => {
        if (wallet?.publicKey) {
          console.log('connected');
          localStorage.removeItem('feeDiscountKey');
          setConnected(true);
          const walletPublicKey = wallet.publicKey.toBase58();
          const keyToDisplay =
            walletPublicKey.length > 20
              ? `${walletPublicKey.substring(
                  0,
                  7,
                )}.....${walletPublicKey.substring(
                  walletPublicKey.length - 7,
                  walletPublicKey.length,
                )}`
              : walletPublicKey;

          notify({
            message: 'Wallet update',
            description: 'Connected to wallet ' + keyToDisplay,
          });
        }
      });

      wallet.on('disconnect', () => {
        setConnected(false);
        notify({
          message: 'Wallet update',
          description: 'Disconnected from wallet',
        });
        localStorage.removeItem('feeDiscountKey');
      });
    }

    return () => {
      setConnected(false);
      if (wallet && wallet.connected) {
        wallet.disconnect();
        setConnected(false);
      }
    };
  }, [wallet]);

  useEffect(() => {
    if (wallet && autoConnect) {
      wallet.connect();
      setAutoConnect(false);
    }

    return () => {};
  }, [wallet, autoConnect]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const select = useCallback(() => setIsModalVisible(true), []);
  const close = useCallback(() => setIsModalVisible(false), []);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        connected,
        select,
        providerUrl,
        setProviderUrl,
        providerName:
          WALLET_PROVIDERS.find(({ url }) => url === providerUrl)?.name ??
          providerUrl,
      }}
    >
      {children}
      <Modal
        title="Select Wallet"
        okText="Connect"
        visible={isModalVisible}
        okButtonProps={{ style: { display: 'none' } }}
        onCancel={close}
        width={400}
      >
        {WALLET_PROVIDERS.map((provider) => {
          const onClick = function () {
            setProviderUrl(provider.url);
            setAutoConnect(true);
            close();
          };

          return (
            <Button
              size="large"
              type={providerUrl === provider.url ? 'primary' : 'ghost'}
              onClick={onClick}
              icon={
                <img
                  alt={`${provider.name}`}
                  width={20}
                  height={20}
                  src={provider.icon}
                  style={{ marginRight: 8 }}
                />
              }
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                marginBottom: 8,
              }}
            >
              {provider.name}
            </Button>
          );
        })}
      </Modal>
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('Missing wallet context');
  }

  const wallet = context.wallet;
  return {
    connected: context.connected,
    wallet: wallet,
    providerUrl: context.providerUrl,
    setProvider: context.setProviderUrl,
    providerName: context.providerName,
    select: context.select,
    connect() {
      wallet ? wallet.connect() : context.select();
    },
    disconnect() {
      wallet?.disconnect();
    },
  };
}
