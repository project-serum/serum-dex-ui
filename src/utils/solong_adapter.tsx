import EventEmitter from 'eventemitter3';
import { PublicKey } from '@solana/web3.js';
import { notify } from "./notifications";

export class SolongAdapter extends EventEmitter {
  _publicKey: any
  _onProcess:boolean
  constructor(providerUrl: string, network: string) {
    super()
    this._publicKey = null;
    this._onProcess = false;
    this.connect= this.connect.bind(this);
    this.disconnect= this.disconnect.bind(this);
  }

  get publicKey() {
    return this._publicKey;
  }

  async signTransaction(transaction: any) {
    const trx  = await  (window as any).solong.signTransaction(transaction).catch(
      () => {
        throw {message:"Reject sign request!"}
      }
    );
    return trx
  }

  connect() {
    if (this._onProcess) {
      return ;
    }

    if ((window as any).solong === undefined){
      notify({
        message: "Solong Error",
        description: "Please install solong wallet from Chrome " ,
      });
      return;
    }

    this._onProcess = true;
    console.log('solong helper select account');
    (window as any).solong
      .selectAccount()
      .then((account: any) => {
        this._publicKey = new PublicKey(account);
        console.log('window solong select:', account, 'this:', this);
        this.emit('connect', this._publicKey);
      })
      .catch(() => {
        this.disconnect()
      })
      .finally(()=>{this._onProcess=false});
  }

  disconnect (){
    if (this._publicKey) {
      this._publicKey = null;
      this.emit('disconnect');
    }
  }
}