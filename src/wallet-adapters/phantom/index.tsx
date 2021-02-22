import EventEmitter from 'eventemitter3';
import { PublicKey, Transaction } from '@solana/web3.js';
import { notify } from '../../utils/notifications';
import { DEFAULT_PUBLIC_KEY, WalletAdapter } from '../types';

type PhantomEvent = 'disconnect' | 'connect';
type PhantomRequestMethod =
  | 'connect'
  | 'disconnect'
  | 'signTransaction'
  | 'signAllTransactions';

interface PhantomProvider {
  publicKey?: PublicKey;
  isConnected?: boolean;
  autoApprove?: boolean;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<any>;
}

export class PhantomWalletAdapter
  extends EventEmitter
  implements WalletAdapter {
  _provider: PhantomProvider | undefined;
  constructor() {
    super();
    this.connect = this.connect.bind(this);
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

  connect() {
    if (this._provider) {
      return;
    }

    if ((window as any)?.solana?.isPhantom) {
      this._provider = (window as any).solana;
    } else {
      window.open('https://phantom.app/', '_blank');
      notify({
        message: 'Phantom Error',
        description: 'Please install Phantom wallet from Chrome ',
      });
      return;
    }

    return this._provider?.connect().then(() => this.emit('connect'));
  }

  disconnect() {
    if (this._provider) {
      this._provider.disconnect();
      this._provider = undefined;
      this.emit('disconnect');
    }
  }
}
