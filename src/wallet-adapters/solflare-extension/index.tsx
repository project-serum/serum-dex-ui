import EventEmitter from 'eventemitter3';
import { PublicKey, Transaction } from '@solana/web3.js';
import { notify } from '../../utils/notifications';
import { DEFAULT_PUBLIC_KEY, WalletAdapter } from '../types';

type SolflareExtensionEvent = 'disconnect' | 'connect';
type SolflareExtensionRequestMethod =
  | 'connect'
  | 'disconnect'
  | 'signTransaction'
  | 'signAllTransactions';

interface SolflareExtensionProvider {
  publicKey?: PublicKey;
  isConnected?: boolean;
  autoApprove?: boolean;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  on: (event: SolflareExtensionEvent, handler: (args: any) => void) => void;
  off: (event: SolflareExtensionEvent, handler: (args: any) => void) => void;
  request: (method: SolflareExtensionRequestMethod, params: any) => Promise<any>;
}

export class SolflareExtensionWalletAdapter
  extends EventEmitter
  implements WalletAdapter {
  constructor() {
    super();
    this.connect = this.connect.bind(this);
  }

  private get _provider(): SolflareExtensionProvider | undefined {
    if ((window as any)?.solflare?.isSolflare) {
      return (window as any).solflare;
    }
    return undefined;
  }

  private _handleConnect = (...args) => {
    this.emit('connect', ...args);
  }

  private _handleDisconnect = (...args) => {
    this._provider?.off('connect', this._handleConnect);
    this._provider?.off('disconnect', this._handleDisconnect);
    this.emit('disconnect', ...args);
  }

  get connected() {
    return this._provider?.isConnected || false;
  }

  get autoApprove() {
    return this._provider?.autoApprove || false;
  }

  async signAllTransactions(
    transactions: Transaction[],
  ): Promise<Transaction[]> {
    if (!this._provider) {
      return transactions;
    }

    return this._provider.signAllTransactions(transactions);
  }

  get publicKey() {
    return this._provider?.publicKey || DEFAULT_PUBLIC_KEY;
  }

  async signTransaction(transaction: Transaction) {
    if (!this._provider) {
      return transaction;
    }

    return this._provider.signTransaction(transaction);
  }

  async connect() {
    if (!this._provider) {
      window.open('https://solflare.com/', '_blank');
      notify({
        message: 'Connection Error',
        description: 'Please install Solflare extension',
      });
      return;
    }
    this._provider?.on('connect', this._handleConnect);
    this._provider?.on('disconnect', this._handleDisconnect);
    return this._provider?.connect();
  }

  async disconnect() {
    if (this._provider) {
      this._provider.disconnect();
    }
  }
}
