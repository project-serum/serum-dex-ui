import { Connection, PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { deserialize, deserializeUnchecked, Schema } from "borsh";

export const CALLBACK_INFO_LEN = 33;

export enum AccountTag {
  Initialized = 0,
  MarketState = 1,
  UserAccount = 2,
  Close = 3,
}

export enum SelfTradeBehavior {
  DecrementTake = 0,
  CancelProvide = 1,
  AbortTransaction = 2,
}

export enum MarketFeeType {
  Default = 0,
  Stable = 1,
}

export class MarketState {
  tag: AccountTag;
  baseMint: PublicKey;
  quoteMint: PublicKey;
  baseVault: PublicKey;
  quoteVault: PublicKey;
  orderbook: PublicKey;
  admin: PublicKey;
  creationTimestamp: BN;
  baseVolume: BN;
  quoteVolume: BN;
  accumulatedFees: BN;
  minBaseOrderSize: BN;
  royaltiesBps: BN;
  accumulatedRoyalties: BN;
  baseCurrencyMultiplier: BN;
  quoteCurrencyMultiplier: BN;
  signerNonce: number;
  feeType: number;

  static schema: Schema = new Map([
    [
      MarketState,
      {
        kind: "struct",
        fields: [
          ["tag", "u64"],
          ["baseMint", [32]],
          ["quoteMint", [32]],
          ["baseVault", [32]],
          ["quoteVault", [32]],
          ["orderbook", [32]],
          ["admin", [32]],
          ["creationTimestamp", "u64"],
          ["baseVolume", "u64"],
          ["quoteVolume", "u64"],
          ["accumulatedFees", "u64"],
          ["minBaseOrderSize", "u64"],
          ["royaltiesBps", "u64"],
          ["accumulatedRoyalties", "u64"],
          ["baseCurrencyMultiplier", "u64"],
          ["quoteCurrencyMultiplier", "u64"],
          ["signerNonce", "u8"],
          ["feeType", "u8"],
          ["padding", [6]],
        ],
      },
    ],
  ]);

  constructor(obj: {
    tag: BN;
    signerNonce: number;
    baseMint: Uint8Array;
    quoteMint: Uint8Array;
    baseVault: Uint8Array;
    quoteVault: Uint8Array;
    orderbook: Uint8Array;
    admin: Uint8Array;
    creationTimestamp: BN;
    baseVolume: BN;
    quoteVolume: BN;
    accumulatedFees: BN;
    minBaseOrderSize: BN;
    royaltiesBps: BN;
    baseCurrencyMultiplier: BN;
    quoteCurrencyMultiplier: BN;
    accumulatedRoyalties: BN;
    feeType: number;
  }) {
    this.tag = obj.tag.toNumber() as AccountTag;
    this.signerNonce = obj.signerNonce;
    this.baseMint = new PublicKey(obj.baseMint);
    this.quoteMint = new PublicKey(obj.quoteMint);
    this.baseVault = new PublicKey(obj.baseVault);
    this.quoteVault = new PublicKey(obj.quoteVault);
    this.orderbook = new PublicKey(obj.orderbook);
    this.admin = new PublicKey(obj.admin);
    this.creationTimestamp = obj.creationTimestamp;
    this.baseVolume = obj.baseVolume.mul(obj.baseCurrencyMultiplier);
    this.quoteVolume = obj.quoteVolume.mul(obj.quoteCurrencyMultiplier);
    this.accumulatedFees = obj.accumulatedFees.mul(obj.quoteCurrencyMultiplier);
    this.minBaseOrderSize = obj.minBaseOrderSize.mul(
      obj.baseCurrencyMultiplier
    );
    this.royaltiesBps = obj.royaltiesBps;
    this.accumulatedRoyalties = obj.accumulatedRoyalties.mul(
      obj.quoteCurrencyMultiplier
    );
    this.quoteCurrencyMultiplier = obj.quoteCurrencyMultiplier;
    this.baseCurrencyMultiplier = obj.baseCurrencyMultiplier;
    this.feeType = obj.feeType;
  }

  static async retrieve(connection: Connection, market: PublicKey) {
    const accountInfo = await connection.getAccountInfo(market);
    if (!accountInfo?.data) {
      throw new Error("Invalid account provided");
    }
    return deserialize(
      this.schema,
      MarketState,
      accountInfo.data
    ) as MarketState;
  }
}

export class Order {
  id: BN;
  clientId: BN;

  constructor(obj: { id: BN; clientId: BN }) {
    this.clientId = obj.clientId;
    this.id = obj.id;
  }
}

export class UserAccount {
  tag: AccountTag;
  market: PublicKey;
  owner: PublicKey;
  baseTokenFree: BN;
  baseTokenLocked: BN;
  quoteTokenFree: BN;
  quoteTokenLocked: BN;
  accumulatedRebates: BN;
  accumulatedMakerQuoteVolume: BN;
  accumulatedMakerBaseVolume: BN;
  accumulatedTakerQuoteVolume: BN;
  accumulatedTakerBaseVolume: BN;
  orders: Order[];

  // @ts-ignore
  static schema: Schema = new Map([
    [
      UserAccount,
      {
        kind: "struct",
        fields: [
          ["tag", "u64"],
          ["market", [32]],
          ["owner", [32]],
          ["baseTokenFree", "u64"],
          ["baseTokenLocked", "u64"],
          ["quoteTokenFree", "u64"],
          ["quoteTokenLocked", "u64"],
          ["accumulatedRebates", "u64"],
          ["accumulatedMakerQuoteVolume", "u64"],
          ["accumulatedMakerBaseVolume", "u64"],
          ["accumulatedTakerQuoteVolume", "u64"],
          ["accumulatedTakerBaseVolume", "u64"],
          ["_padding", "u32"],
          ["orders", [Order]],
        ],
      },
    ],
    [
      Order,
      {
        kind: "struct",
        fields: [
          ["id", "u128"],
          ["clientId", "u128"],
        ],
      },
    ],
  ]);

  constructor(obj: {
    tag: BN;
    market: Uint8Array;
    owner: Uint8Array;
    baseTokenFree: BN;
    baseTokenLocked: BN;
    quoteTokenFree: BN;
    quoteTokenLocked: BN;
    orders: Order[];
    accumulatedRebates: BN;
    accumulatedMakerQuoteVolume: BN;
    accumulatedMakerBaseVolume: BN;
    accumulatedTakerQuoteVolume: BN;
    accumulatedTakerBaseVolume: BN;
  }) {
    this.tag = obj.tag.toNumber();
    this.market = new PublicKey(obj.market);
    this.owner = new PublicKey(obj.owner);
    this.baseTokenFree = obj.baseTokenFree;
    this.baseTokenLocked = obj.baseTokenLocked;
    this.quoteTokenFree = obj.quoteTokenFree;
    this.quoteTokenLocked = obj.quoteTokenLocked;
    this.orders = obj.orders;
    this.accumulatedRebates = obj.accumulatedRebates;
    this.accumulatedMakerQuoteVolume = obj.accumulatedMakerQuoteVolume;
    this.accumulatedMakerBaseVolume = obj.accumulatedMakerBaseVolume;
    this.accumulatedTakerQuoteVolume = obj.accumulatedTakerQuoteVolume;
    this.accumulatedTakerBaseVolume = obj.accumulatedTakerBaseVolume;
  }

  static async retrieve(
    connection: Connection,
    userAccount: PublicKey,
    marketState: MarketState
  ) {
    const { baseCurrencyMultiplier, quoteCurrencyMultiplier } = marketState;
    const accountInfo = await connection.getAccountInfo(userAccount);
    if (!accountInfo?.data) {
      throw new Error("Invalid account provided");
    }
    let u = deserializeUnchecked(
      this.schema,
      UserAccount,
      accountInfo.data
    ) as UserAccount;
    u.baseTokenFree.imul(baseCurrencyMultiplier);
    u.baseTokenLocked.imul(baseCurrencyMultiplier);
    u.quoteTokenFree.imul(quoteCurrencyMultiplier);
    u.quoteTokenLocked.imul(quoteCurrencyMultiplier);
    u.accumulatedRebates.imul(quoteCurrencyMultiplier);
    u.accumulatedMakerQuoteVolume.imul(quoteCurrencyMultiplier);
    u.accumulatedTakerQuoteVolume.imul(quoteCurrencyMultiplier);
    u.accumulatedMakerBaseVolume.imul(baseCurrencyMultiplier);
    u.accumulatedTakerBaseVolume.imul(baseCurrencyMultiplier);
    return u;
  }

  getOrderId(clientOrderId: BN): BN | undefined {
    return this.orders.find((o) => o.clientId === clientOrderId)?.id;
  }

  getClientOrderId(orderId: BN): BN | undefined {
    return this.orders.find((o) => o.id === orderId)?.clientId;
  }
}
