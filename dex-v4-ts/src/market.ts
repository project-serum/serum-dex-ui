import {
  Commitment,
  Connection,
  PublicKey,
  Keypair,
  Transaction,
  TransactionSignature,
  TransactionInstruction,
} from '@solana/web3.js';
import {
  getMintDecimals,
  getTokenBalance,
  divideBnToNumber,
  computeUiPrice,
  computeUiSize,
  roundUiAmount,
} from './utils';
import { CALLBACK_INFO_LEN, MarketState, SelfTradeBehavior } from './state';
import { DEX_ID, SRM_MINT, MSRM_MINT } from './ids';
import {
  EventQueue,
  getPriceFromKey,
  MarketState as AaobMarketState,
  Slab,
} from '@bonfida/aaob';
import { getFeeTier } from './fees';
import { OpenOrders } from './openOrders';
import { cancelOrder, placeOrder, settle } from './bindings';
import BN from 'bn.js';
import { OrderType, Side, OrderInfo, MarketOptions } from './types';
import { Orderbook } from './orderbook';
import { getAssociatedTokenAddress } from '@solana/spl-token';

/**
 * A Serum DEX Market object
 */
export class Market {
  /** Market state
   * @private
   */
  private _marketState: MarketState;

  /** Asset agnostic orderbook state
   * @private
   */
  private _orderbookState: AaobMarketState;

  /** Address of the Serum DEX market
   * @private
   */
  private _address: PublicKey;

  /** Number of decimals of the base token
   * @private
   */
  private _baseDecimals: number;

  /** Number of decimals of the quote token
   * @private
   */
  private _quoteDecimals: number;

  /**
   * Quote token multiplier
   * @private
   */
  private _quoteSplTokenMultiplier: BN;

  /** Base token multiplier
   * @private
   */
  private _baseSplTokenMultiplier: BN;

  /** Serum program ID of the market
   * @private
   */
  private _programId: PublicKey;

  /** Base vault address of the market
   * @private
   */
  private _baseVault: PublicKey;

  /** Quote vault address of the market
   * @private
   */
  private _quoteVault: PublicKey;

  /** Event queue address of the market
   * @private
   */
  private _eventQueueAddress: PublicKey;

  /** Address of the orderbook or AAOB market
   * @private
   */
  private _orderbookAddress: PublicKey;

  /** Preflight option (used in the connection object for sending tx)
   * @private
   */
  private _skipPreflight: boolean;
  /** Commitment option (used in the connection object)
   * @private
   */
  private _commitment: Commitment;

  private _tickSize: number;
  private _tickSizeBN: BN;
  private _minOrderSize: number;
  private _minOrderSizeBN: BN;
  private _admin: PublicKey;

  constructor(
    marketState: MarketState,
    orderbookState: AaobMarketState,
    address: PublicKey,
    baseDecimals: number,
    quoteDecimals: number,
    options: MarketOptions,
    programdId: PublicKey,
    baseVault: PublicKey,
    quoteVault: PublicKey,
    eventQueueAddress: PublicKey,
    orderbookAddress: PublicKey,
  ) {
    this._marketState = marketState;
    this._orderbookState = orderbookState;
    this._address = address;
    this._baseDecimals = baseDecimals;
    this._quoteDecimals = quoteDecimals;
    this._skipPreflight = !!options.skipPreflight;
    this._commitment = options.commitment || 'recent';
    this._programId = programdId;
    this._baseVault = baseVault;
    this._quoteVault = quoteVault;
    this._eventQueueAddress = eventQueueAddress;
    this._orderbookAddress = orderbookAddress;
    this._baseSplTokenMultiplier = new BN(10).pow(new BN(baseDecimals));
    this._quoteSplTokenMultiplier = new BN(10).pow(new BN(quoteDecimals));
    this._tickSize = roundUiAmount(
      orderbookState.tickSize.toNumber() * Math.pow(2, -32),
    );
    this._tickSizeBN = orderbookState.tickSize;
    this._minOrderSize =
      marketState.minBaseOrderSize.toNumber() * Math.pow(10, -baseDecimals);
    this._minOrderSizeBN = marketState.minBaseOrderSize;
    this._admin = marketState.admin;
  }

  /**
   *
   * @param connection The solana connection object to the RPC node
   * @param address Address of the Serum market to load
   * @param programId Program ID of Serum
   * @param options MarketOptions object (skipPreflight and Commitment)
   * @returns Returns a market object
   */
  static async load(
    connection: Connection,
    address: PublicKey,
    programId: PublicKey = DEX_ID,
    options: MarketOptions = {},
  ) {
    const marketState = await MarketState.retrieve(connection, address);

    const orderbookState = await AaobMarketState.retrieve(
      connection,
      marketState.orderbook,
    );

    const [baseDecimals, quoteDecimals] = await Promise.all([
      getMintDecimals(connection, marketState.baseMint),
      getMintDecimals(connection, marketState.quoteMint),
    ]);

    return new Market(
      marketState,
      orderbookState,
      address,
      baseDecimals,
      quoteDecimals,
      options,
      programId,
      marketState.baseVault,
      marketState.quoteVault,
      orderbookState.eventQueue,
      marketState.orderbook,
    );
  }

  /** Returns the Serum program ID of the market */
  get programId(): PublicKey {
    return this._programId;
  }

  /** Return the market address */
  get address(): PublicKey {
    return this._address;
  }

  /** Returns the mint address of the base token */
  get baseMintAddress(): PublicKey {
    return this._marketState.baseMint;
  }

  /** Returns the mint address of the quote token */
  get quoteMintAddress(): PublicKey {
    return this._marketState.quoteMint;
  }

  /** Returns the bids address (AOB program) of the market */
  get bidsAddress(): PublicKey {
    return this._orderbookState.bids;
  }

  /** Returns the asks address (AOB program) of the market */
  get asksAddress(): PublicKey {
    return this._orderbookState.asks;
  }

  /** Returns the market state */
  get marketState(): MarketState {
    return this._marketState;
  }

  /** Returns the orderbook state */
  get orderbookState(): AaobMarketState {
    return this._orderbookState;
  }

  /** Returns the number of decimals of the quote spl-token */
  get quoteDecimals(): number {
    return this._quoteDecimals;
  }

  /** Returns the number of decimals of the quote spl-token */
  get baseDecimals(): number {
    return this._baseDecimals;
  }

  /** Returns the base vault address of the market */
  get baseVault(): PublicKey {
    return this._baseVault;
  }

  /** Returns the quote vault address of the market */
  get quoteVault(): PublicKey {
    return this._quoteVault;
  }

  /** Returns the orderbook address of the market */
  get orderbookAddress(): PublicKey {
    return this._orderbookAddress;
  }

  /** Returns the event queue address of the market */
  get eventQueueAddress(): PublicKey {
    return this._eventQueueAddress;
  }

  /** Returns the tick size of the market */
  get tickSize(): number {
    return this._tickSize;
  }

  get tickSizeBN(): BN {
    return this._tickSizeBN;
  }

  /** Returns the min order size of the market */
  get minOrderSize(): number {
    return this._minOrderSize;
  }

  get minOrderSizeBN(): BN {
    return this._minOrderSizeBN;
  }

  get marketAdmin(): PublicKey {
    return this._admin;
  }

  /** Returns the inception base volume */
  baseVolume(): number {
    return this._marketState.baseVolume.toNumber();
  }

  /** Returns the inception quote volume */
  quoteVolume(): number {
    return this._marketState.quoteVolume.toNumber();
  }

  /** Returns the timestamp of the market creation */
  marketCreation(): number {
    return this._marketState.creationTimestamp.toNumber();
  }

  /** Returns the base token multiplier */
  baseSplSizeToNumber(size: BN) {
    return divideBnToNumber(size, this._baseSplTokenMultiplier);
  }

  /** Returns the quote token multiplier */
  quoteSplSizeToNumber(size: BN) {
    return divideBnToNumber(size, this._quoteSplTokenMultiplier);
  }

  /**
   *
   * @param connection The solana connection object to the RPC node
   * @returns The decoded bids of the market
   */
  async loadBids(connection: Connection) {
    const bids = await this._orderbookState.loadBidsSlab(connection);
    return bids;
  }

  /**
   *
   * @param connection The solana connection object to the RPC node
   * @returns The decoded asks of the market
   */
  async loadAsks(connection: Connection) {
    const asks = await this._orderbookState.loadAsksSlab(connection);
    return asks;
  }

  /**
   *
   * @param connection The solana connection object to the RPC node
   * @param owner The owner of the orders to fetch
   * @returns
   */
  async loadOrdersForOwner(connection: Connection, owner: PublicKey) {
    const openOrders = await this.findOpenOrdersAccountForOwner(
      connection,
      owner,
    );
    const orderbook = await Orderbook.load(connection, this.address);
    return this.filterForOpenOrders(orderbook, openOrders);
  }

  /**
   * Fetch the associated token account of the owner for the base token of the market
   * @param owner The public key of the owner
   * @returns The public key of the associated token account of the owner
   */
  async findBaseTokenAccountsForOwner(owner: PublicKey) {
    const pubkey = await getAssociatedTokenAddress(
      this._marketState.baseMint,
      owner,
    );
    return pubkey;
  }

  /**
   * Fetch the associated token account of the owner for the quote token of the market
   * @param owner The public key of the owner
   * @returns The public key of the associated token account of the owner
   */
  async findQuoteTokenAccountsForOwner(owner: PublicKey) {
    const pubkey = await getAssociatedTokenAddress(
      owner,
      this._marketState.quoteMint,
    );
    return pubkey;
  }

  /**
   * Fetch the open order account of the owner
   * @param owner The public key of the owner
   * @returns The public key of the open order account
   */
  async findOpenOrdersAccountForOwner(
    connection: Connection,
    owner: PublicKey,
  ) {
    const openOrders = OpenOrders.load(connection, this.address, owner);
    return openOrders;
  }

  /**
   * Sign and send a place order transaction
   * @param connection The solana connection object to the RPC node
   * @param side The side of the order (cf Side enum)
   * @param limitPrice The limit price of the order
   * @param size The size of the order
   * @param orderType The type of the order (cf OrderType enum)
   * @param selfTradeBehavior The behavior of the order in case of self trade (cf SelfTradeBehavior enum)
   * @param ownerTokenAccount The token account of the owner of the wallet placing the trade (owner)
   * @param owner The owner of the order
   * @param discountTokenAccount Optional (M)SRM token account for fee discount
   * @returns The signature of the transaction
   */
  async placeOrder(
    connection: Connection,
    side: Side,
    limitPrice: number,
    size: number,
    orderType: OrderType,
    selfTradeBehavior: SelfTradeBehavior,
    ownerTokenAccount: PublicKey,
    owner: Keypair,
    clientOrderId?: BN,
    discountTokenAccount?: PublicKey,
  ) {
    const inst = await this.makePlaceOrderTransaction(
      side,
      limitPrice,
      size,
      orderType,
      selfTradeBehavior,
      ownerTokenAccount,
      owner.publicKey,
      clientOrderId,
      discountTokenAccount,
    );
    const tx = new Transaction().add(inst);
    return await this._sendTransaction(connection, tx, [owner]);
  }

  /**
   * Returns a TransactionInstruction to place an order
   * @param side The side of the order (cf Side enum)
   * @param limitPrice The limit price of the order
   * @param size The size of the order
   * @param orderType The type of the order (cf OrderType enum)
   * @param selfTradeBehavior The behavior of the order in case of self trade (cf SelfTradeBehavior enum)
   * @param ownerTokenAccount The token account of the owner of the wallet placing the trade (owner)
   * @param owner The owner of the order
   * @param discountTokenAccount Optional (M)SRM token account for fee discount
   * @returns Returns a TransactionInstruction object
   */
  async makePlaceOrderTransaction(
    side: Side,
    limitPrice: number,
    size: number,
    orderType: OrderType,
    selfTradeBehavior: SelfTradeBehavior,
    ownerTokenAccount: PublicKey,
    owner: PublicKey,
    clientOrderId?: BN,
    discountTokenAccount?: PublicKey,
  ) {
    return await placeOrder(
      this,
      side,
      limitPrice,
      size * Math.pow(10, this.baseDecimals),
      orderType,
      selfTradeBehavior,
      ownerTokenAccount,
      owner,
      clientOrderId,
      discountTokenAccount,
    );
  }

  /**
   * This method returns the fee discount keys assuming (M)SRM tokens are held in associated token account.
   * @param connection The solana connection object to the RPC node
   * @param owner The public key of the (M)SRM owner
   * @returns An array of `{ pubkey: PublicKey, mint: PublicKey, balance: number, feeTier: number }`
   */
  async findFeeDiscountKeys(connection: Connection, owner: PublicKey) {
    const [srmAddress, msrmAddress] = await Promise.all(
      [SRM_MINT, MSRM_MINT].map((e) => getAssociatedTokenAddress(e, owner)),
    );
    const [srmBalance, msrmBalance] = await Promise.all(
      [srmAddress, msrmAddress].map((e) => getTokenBalance(connection, e)),
    );
    return [
      {
        pubkey: srmAddress,
        mint: SRM_MINT,
        balance: srmBalance,
        feeTier: getFeeTier(0, srmBalance),
      },
      {
        pubkey: msrmAddress,
        mint: MSRM_MINT,
        balance: msrmBalance,
        feeTier: getFeeTier(msrmBalance, 0),
      },
    ];
  }

  /**
   *
   * @param connection The solana connection object to the RPC node
   * @param transaction The transaction to sign and send
   * @param signers The signers of the transaction
   * @returns Returns the signature of the signed and sent transaction
   */
  private async _sendTransaction(
    connection: Connection,
    transaction: Transaction,
    signers: Array<Keypair>,
  ): Promise<TransactionSignature> {
    const signature = await connection.sendTransaction(transaction, signers, {
      skipPreflight: this._skipPreflight,
    });
    const { value } = await connection.confirmTransaction(
      signature,
      this._commitment,
    );
    if (value?.err) {
      throw new Error(JSON.stringify(value.err));
    }
    return signature;
  }

  /**
   *
   * @param orderIndex The index of the order in the open order account
   * @param owner The owner of the order
   * @returns
   */
  async makeCancelOrderInstruction(
    orderIndex: BN,
    orderId: BN,
    owner: PublicKey,
  ) {
    const instruction = await cancelOrder(this, owner, orderId, orderIndex);
    const tx = new Transaction().add(instruction);
    return tx;
  }

  /**
   *
   * @param connection The solana connection object to the RPC node
   * @param orderIndex The index of the order in the open order account
   * @param owner The owner of the order
   * @returns The signature of the cancel transaction
   */
  async cancelOrderByOrderIndex(
    connection: Connection,
    orderIndex: number,
    owner: Keypair,
  ) {
    const openOrders = await OpenOrders.load(
      connection,
      this.address,
      owner.publicKey,
    );
    const orderId = openOrders.orders[orderIndex].id;
    if (!orderId) {
      throw new Error(`Invalid order index ${orderIndex}`);
    }
    const tx = await this.makeCancelOrderInstruction(
      new BN(orderIndex),
      orderId,
      owner.publicKey,
    );
    const signature = await this._sendTransaction(connection, tx, [owner]);
    return signature;
  }

  /**
   *
   * @param connection The solana connection object to the RPC node
   * @param orderId The id of the order to cancel
   * @param owner The owner of the order
   * @returns The signature of the cancel transaction
   */
  async cancelOrderByOrderId(
    connection: Connection,
    orderId: BN,
    owner: Keypair,
  ) {
    const openOrders = await OpenOrders.load(
      connection,
      this.address,
      owner.publicKey,
    );
    const orderIndex = openOrders.orders
      .map((o) => o.id.eq(orderId))
      .indexOf(true);
    if (orderIndex === -1) {
      throw new Error('Invalid order id');
    }
    const tx = await this.makeCancelOrderInstruction(
      new BN(orderIndex),
      orderId,
      owner.publicKey,
    );
    const signature = await this._sendTransaction(connection, tx, [owner]);
    return signature;
  }

  async cancelInBatch(
    connection: Connection,
    orders: OrderInfo[],
    owner: Keypair,
  ) {
    orders.sort((a, b) => b.orderIndex - a.orderIndex);
    let instr: TransactionInstruction[] = [];
    for (let o of orders) {
      instr.push(
        await cancelOrder(
          this,
          owner.publicKey,
          o.orderId,
          new BN(o.orderIndex),
        ),
      );
    }
    const tx = new Transaction().add(...instr);
    const signature = await this._sendTransaction(connection, tx, [owner]);
    return signature;
  }

  /**
   *
   * @param owner Owner of the funds to settle
   * @param destinationBaseAccount The owner base token account
   * @param destinationQuoteAccount The owner quote token account
   * @returns
   */
  async makeSettleFundsTransaction(
    owner: PublicKey,
    destinationBaseAccount: PublicKey,
    destinationQuoteAccount: PublicKey,
  ) {
    const instructions = await settle(
      this,
      owner,
      destinationBaseAccount,
      destinationQuoteAccount,
    );
    const tx = new Transaction().add(instructions);
    return tx;
  }

  /**
   *
   * @param connection The solana connection object to the RPC node
   * @param owner The owner of the funds to settle
   * @param destinationBaseAccount The owner base token account
   * @param destinationQuoteAccount The owner quote token account
   * @returns The signature of the settle transaction
   */
  async settleFunds(
    connection: Connection,
    owner: Keypair,
    destinationBaseAccount: PublicKey,
    destinationQuoteAccount: PublicKey,
  ) {
    const tx = await this.makeSettleFundsTransaction(
      owner.publicKey,
      destinationBaseAccount,
      destinationQuoteAccount,
    );
    const signature = await this._sendTransaction(connection, tx, [owner]);
    return signature;
  }

  /**
   *
   * @param connection The solana connection object to the RPC node
   * @returns The deserialized event queue of the market
   */
  async loadEventQueue(connection: Connection) {
    const eventQueue = await EventQueue.load(
      connection,
      this._orderbookState.eventQueue,
      CALLBACK_INFO_LEN,
    );
    return eventQueue;
  }

  /**
   *
   * @param connection The solana connection object to the RPC node
   * @param limit Optional limit parameters to the number of fills fetched
   */
  async loadFills(connection: Connection, limit = 100) {
    const eventQueue = await this.loadEventQueue(connection);
    return eventQueue.parseFill(limit);
  }

  /**
   *
   * @param slab Slab to extract open orders from
   * @param openOrders Open orders account
   * @returns
   */
  filterForOpenOrdersFromSlab(slab: Slab, openOrders: OpenOrders, side: Side) {
    return [...slab]
      .filter((o) =>
        openOrders?.address.equals(
          new PublicKey(slab.getCallBackInfo(o.callBackInfoPt).slice(0, 32)),
        ),
      )
      .map((o) => {
        return {
          orderId: o.key,
          price: computeUiPrice(this, getPriceFromKey(o.key)),
          feeTier: slab.getCallBackInfo(o.callBackInfoPt).slice(32)[0],
          size: computeUiSize(this, o.baseQuantity),
          openOrdersAddress: new PublicKey(
            slab.getCallBackInfo(o.callBackInfoPt).slice(0, 32),
          ),
          side: side,
        };
      });
  }

  /**
   *
   * @param orderbook The orderbook of the market
   * @param openOrder The openOrder that owns the orders
   * @returns
   */
  filterForOpenOrders(orderbook: Orderbook, openOrder: OpenOrders) {
    const bids = this.filterForOpenOrdersFromSlab(
      orderbook.slabBids,
      openOrder,
      Side.Bid,
    );
    const asks = this.filterForOpenOrdersFromSlab(
      orderbook.slabAsks,
      openOrder,
      Side.Ask,
    );
    return [...bids, ...asks];
  }
}
