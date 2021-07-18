import EventEmitter from 'eventemitter3';
import { PublicKey, Transaction } from '@solana/web3.js';
import { notify } from '../../utils/notifications';
import { DEFAULT_PUBLIC_KEY, WalletAdapter } from '../types';

type BloctoEvent = "disconnect" | "connect";
type BloctoRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions";

interface BloctoProvider {
  isProgramWallet: boolean
  publicKey?: PublicKey
  connected: boolean
  autoApprove: boolean
  signTransaction: (transaction: Transaction) => Promise<Transaction>
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>
  convertToProgramWalletTransaction: (transaction: Transaction) => Promise<Transaction>
  signAndSendTransaction: (transaction: Transaction) => Promise<string>
  connect: () => Promise<void>
  disconnect: () => Promise<void>
  on: (event: BloctoEvent, handler: (args: any) => void) => void
  request: (method: BloctoRequestMethod, params: any) => Promise<any>
  listeners: (event: BloctoEvent) => (() => void)[]
}
  
export class BloctoWalletAdapter 
  extends EventEmitter 
  implements WalletAdapter {
  constructor() {
    super();
    this.connect = this.connect.bind(this);
  }
  
  private get _provider(): BloctoProvider | undefined {
    if ((window as any)?.solana?.isBlocto) {
      return (window as any).solana;
    }
    return undefined
  }

  private _handleConnect = (...args: any) => {
    this.emit('connect', ...args);
  }

  private _handleDisconnect = (...args: any) => {
    this.emit('disconnect', ...args);
  }

  get isProgramWallet() {
    return true;
  }

  get connected() {
    return this._provider?.connected || false;
  }

  get autoApprove() {
    return this._provider?.autoApprove || false;
  }

  // eslint-disable-next-line
  async signAllTransactions(
    transactions: Transaction[]
    ): Promise<Transaction[]> {
    if (!this._provider) {
      return transactions;
    }

    return this._provider.signAllTransactions(transactions);
  }

  get publicKey() {
    return this._provider?.publicKey || DEFAULT_PUBLIC_KEY;
  }

  // eslint-disable-next-line
  async signTransaction(transaction: Transaction) {
    if (!this._provider) {
      return transaction;
    }

    return this._provider.signTransaction(transaction)
  }

  async convertToProgramWalletTransaction(transaction: Transaction) {
    if (!this._provider) {
      return transaction;
    }

    return await this._provider.convertToProgramWalletTransaction(transaction);
  }

  async signAndSendTransaction(transaction: Transaction) {
    if (!this._provider) {
      throw new Error('no Blocto provider');
    }

    return await this._provider.signAndSendTransaction(transaction);
  }

  connect() {
    if (!this._provider) {
      window.open('https://blocto.portto.io/', '_blank');
      notify({
        message: 'Connection Error',
        description: 'Please install and open Blocto app first',
      });
      return;
    }
    if (!this._provider.listeners('connect').length) {
      this._provider?.on('connect', this._handleConnect);
    }
    if (!this._provider.listeners('disconnect').length) {
      this._provider?.on('disconnect', this._handleDisconnect);
    }
    return this._provider?.connect();
  }

  disconnect() {
    if (this._provider) {
      this._provider.disconnect();
    }
  }
}