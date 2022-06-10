import { Connection, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { DEX_ID } from './ids';
import { Order, UserAccount } from './state';
import { closeAccount, initializeAccount } from './bindings';

/**
 * Open Orders class
 */
export class OpenOrders {
  /** Address of the open orders account
   * @private
   */
  private _address: PublicKey;

  /**
   * Address of the market of the open order account
   * @private
   */
  private _market: PublicKey;

  /**
   * Address of the owner of the open order account
   * @private
   */
  private _owner: PublicKey;

  /**
   * Amount of free base tokens
   * @private
   */
  private _baseTokenFree: BN;

  /**
   * Total amount of base tokens
   * @private
   */
  private _baseTokenTotal: BN;

  /**
   * Amount of free quote tokens
   * @private
   */
  private _quoteTokenFree: BN;

  /**
   * Total amount of quote tokens
   * @private
   */
  private _quoteTokenTotal: BN;

  /**
   * List of orders of the open order account
   * @private
   */
  private _orders: Order[];

  /**
   * Amount of accumulated rebates
   * @private
   */
  private _accumulatedRebates: BN;

  constructor(
    address: PublicKey,
    market: PublicKey,
    owner: PublicKey,
    baseTokenFree: BN,
    baseTokenTotal: BN,
    quoteTokenFree: BN,
    quoteTokenTotal: BN,
    orders: Order[],
    accumulatedRebates: BN,
  ) {
    this._address = address;
    this._market = market;
    this._owner = owner;
    this._baseTokenFree = baseTokenFree;
    this._baseTokenTotal = baseTokenTotal;
    this._quoteTokenFree = quoteTokenFree;
    this._quoteTokenTotal = quoteTokenTotal;
    this._orders = orders;
    this._accumulatedRebates = accumulatedRebates;
  }

  /**
   * Returns the address of the open order account
   */
  get address(): PublicKey {
    return this._address;
  }

  /**
   * Returns the market address of the open order account
   */
  get market(): PublicKey {
    return this._market;
  }

  /**
   * Returns the owner of the open order account
   */
  get owner(): PublicKey {
    return this._owner;
  }

  /**
   * Returns the amount of free base tokens
   */
  get baseTokenFree(): BN {
    return this._baseTokenFree;
  }

  /**
   * Returns the total amount of base tokens
   */
  get baseTokenTotal(): BN {
    return this._baseTokenTotal;
  }

  /**
   * Returns the amount of free quote tokens
   */
  get quoteTokenFree(): BN {
    return this._quoteTokenFree;
  }
  /**
   * Returns the total amount of quote tokens
   */
  get quoteTokenTotal(): BN {
    return this._quoteTokenTotal;
  }

  /**
   * Returns the list of orders of the open orders account
   */
  get orders(): Order[] {
    return this._orders;
  }

  /**
   * Returns the amount of accumulated fee rebates
   */
  get accumulatedRebates(): BN {
    return this._accumulatedRebates;
  }

  /**
   * Loads the open orders account
   * @param connection The solana connection object to the RPC node
   * @param market The market address of the open orders account
   * @param owner The owner of the open orders account
   * @returns An OpenOrders object
   */
  static async load(
    connection: Connection,
    market: PublicKey,
    owner: PublicKey,
  ) {
    const [address] = await PublicKey.findProgramAddress(
      [market.toBuffer(), owner.toBuffer()],
      DEX_ID,
    );

    const userAccount = await UserAccount.retrieve(connection, address);

    return new OpenOrders(
      address,
      market,
      owner,
      userAccount.baseTokenFree,
      userAccount.baseTokenLocked.add(userAccount.baseTokenFree),
      userAccount.quoteTokenFree,
      userAccount.quoteTokenFree.add(userAccount.quoteTokenLocked),
      userAccount.orders,
      userAccount.accumulatedRebates,
    );
  }

  /**
   * Static method to make the transaction instruction that initializes an open order account
   * @param market The market address of the open orders account to initialize
   * @param owner The owner of the open orders account to initialize
   * @param maxOrders The max number of open orders the account will be able to hold
   * @returns A TransactionInstruction object
   */
  static async makeCreateAccountTransaction(
    market: PublicKey,
    owner: PublicKey,
    maxOrders = 20,
  ) {
    return await initializeAccount(market, owner, maxOrders);
  }

  /**
   *
   * @returns Returns a TransactionInstruction object to close the OpenOrder account
   */
  async makeCloseAccountTransaction() {
    return await closeAccount(this.market, this.owner);
  }

  /**
   * Checks if an open order account exists for the owner on the given market
   * @param connection The solana connection object to the RPC node
   * @param market The market address of the open orders account
   * @param owner The owner of the open orders account
   * @returns A boolean
   */
  static async exists(
    connection: Connection,
    market: PublicKey,
    owner: PublicKey,
  ) {
    const [address] = await PublicKey.findProgramAddress(
      [market.toBuffer(), owner.toBuffer()],
      DEX_ID,
    );
    const info = await connection.getAccountInfo(address);
    return !!info?.data;
  }

  static async addressForOwner(market: PublicKey, owner: PublicKey) {
    const [address] = await PublicKey.findProgramAddress(
      [market.toBuffer(), owner.toBuffer()],
      DEX_ID,
    );
    return address;
  }
}
