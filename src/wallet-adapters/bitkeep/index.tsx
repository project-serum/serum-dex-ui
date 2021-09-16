import EventEmitter from 'eventemitter3';
import { PublicKey, Transaction } from '@solana/web3.js';
import { notify } from '../../utils/notifications';
import { DEFAULT_PUBLIC_KEY, WalletAdapter } from '../types';

export class BitKeepWalletAdapter extends EventEmitter implements WalletAdapter {
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
    if (!this._provider) {
      return transactions;
    }

    return this._provider.signAllTransactions(transactions);
  }

  private get _provider() {
    if ((window as any)?.solana?.isBitKeep) {
      return (window as any).solana;
    }
    return undefined;
  }

  get publicKey() {
    return this._publicKey || DEFAULT_PUBLIC_KEY;
  }

  async signTransaction(transaction: Transaction) {
    if (!this._provider) {
      return transaction;
    }

    return this._provider.signTransaction(transaction);
  }

  connect() {
    if (this._onProcess) {
      return;
    }

    if (!this._provider) {
      window.open('https://bitkeep.com/', '_blank');
      notify({
        message: 'BitKeep Wallet Error',
        description: 'Please install BitKeep Wallet',
      });
      return;
    }

    this._onProcess = true;
    this._provider
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
