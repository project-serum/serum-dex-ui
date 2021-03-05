import EventEmitter from 'eventemitter3';
import { PublicKey, Transaction } from '@solana/web3.js';
import { notify } from '../../utils/notifications';
import { DEFAULT_PUBLIC_KEY, WalletAdapter } from '../types';

export class MathWalletAdapter extends EventEmitter implements WalletAdapter {
  _publicKey?: PublicKey;
  _onProcess: boolean;
  _connected: boolean;
  constructor() {
    super();
    this._onProcess = false;
    this._connected = false;
    this.connect = this.connect.bind(this);
  }

  get connected() {
    return this._connected;
  }

  get autoApprove() {
    return false;
  }

  public async signAllTransactions(
    transactions: Transaction[],
  ): Promise<Transaction[]> {
    const solana = (window as any).solana;
    if (solana.signAllTransactions) {
      return solana.signAllTransactions(transactions);
    } else {
      const result: Transaction[] = [];
      for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];
        const signed = await solana.signTransaction(transaction);
        result.push(signed);
      }

      return result;
    }
  }

  get publicKey() {
    return this._publicKey || DEFAULT_PUBLIC_KEY;
  }

  async signTransaction(transaction: Transaction) {
    return (window as any).solana.signTransaction(transaction);
  }

  connect() {
    if (this._onProcess) {
      return;
    }

    if ((window as any).solana === undefined) {
      window.open('https://mathwallet.org/', '_blank');
      notify({
        message: 'Math Wallet Error',
        description: 'Please install mathwallet',
      });
      return;
    }

    this._onProcess = true;
    (window as any).solana
      .getAccount()
      .then((account: any) => {
        this._publicKey = new PublicKey(account);
        this._connected = true;
        this.emit('connect', this._publicKey);
      })
      .catch(() => {
        this.disconnect();
      })
      .finally(() => {
        this._onProcess = false;
      });
  }

  disconnect() {
    if (this._publicKey) {
      this._publicKey = undefined;
      this._connected = false;
      this.emit('disconnect');
    }
  }
}
