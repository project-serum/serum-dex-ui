// This file is auto-generated. DO NOT EDIT
import BN from "bn.js";
import { Schema, serialize } from "borsh";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";

export interface AccountKey {
  pubkey: PublicKey;
  isSigner: boolean;
  isWritable: boolean;
}
export class closeAccountInstruction {
  tag: BN;
  static schema: Schema = new Map([
    [
      closeAccountInstruction,
      {
        kind: "struct",
        fields: [["tag", "u64"]],
      },
    ],
  ]);
  constructor() {
    this.tag = new BN(8);
  }
  serialize(): Uint8Array {
    return serialize(closeAccountInstruction.schema, this);
  }
  getInstruction(
    programId: PublicKey,
    user: PublicKey,
    userOwner: PublicKey,
    targetLamportsAccount: PublicKey
  ): TransactionInstruction {
    const data = Buffer.from(this.serialize());
    let keys: AccountKey[] = [];
    keys.push({
      pubkey: user,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: userOwner,
      isSigner: true,
      isWritable: false,
    });
    keys.push({
      pubkey: targetLamportsAccount,
      isSigner: false,
      isWritable: true,
    });
    return new TransactionInstruction({
      keys,
      programId,
      data,
    });
  }
}
export class newOrderInstruction {
  tag: BN;
  clientOrderId: BN;
  limitPrice: BN;
  maxBaseQty: BN;
  maxQuoteQty: BN;
  matchLimit: BN;
  side: number;
  orderType: number;
  selfTradeBehavior: number;
  hasDiscountTokenAccount: number;
  padding: Uint8Array;
  static schema: Schema = new Map([
    [
      newOrderInstruction,
      {
        kind: "struct",
        fields: [
          ["tag", "u64"],
          ["clientOrderId", "u128"],
          ["limitPrice", "u64"],
          ["maxBaseQty", "u64"],
          ["maxQuoteQty", "u64"],
          ["matchLimit", "u64"],
          ["side", "u8"],
          ["orderType", "u8"],
          ["selfTradeBehavior", "u8"],
          ["hasDiscountTokenAccount", "u8"],
          ["padding", "u32"],
        ],
      },
    ],
  ]);
  constructor(obj: {
    clientOrderId: BN;
    limitPrice: BN;
    maxBaseQty: BN;
    maxQuoteQty: BN;
    matchLimit: BN;
    side: number;
    orderType: number;
    selfTradeBehavior: number;
    hasDiscountTokenAccount: number;
  }) {
    this.tag = new BN(1);
    this.clientOrderId = obj.clientOrderId;
    this.clientOrderId = obj.clientOrderId;
    this.limitPrice = obj.limitPrice;
    this.maxBaseQty = obj.maxBaseQty;
    this.maxQuoteQty = obj.maxQuoteQty;
    this.matchLimit = obj.matchLimit;
    this.side = obj.side;
    this.orderType = obj.orderType;
    this.selfTradeBehavior = obj.selfTradeBehavior;
    this.hasDiscountTokenAccount = obj.hasDiscountTokenAccount;
    this.padding = new Uint8Array(4).fill(0);
  }
  serialize(): Uint8Array {
    return serialize(newOrderInstruction.schema, this);
  }
  getInstruction(
    programId: PublicKey,
    splTokenProgram: PublicKey,
    systemProgram: PublicKey,
    market: PublicKey,
    orderbook: PublicKey,
    eventQueue: PublicKey,
    bids: PublicKey,
    asks: PublicKey,
    baseVault: PublicKey,
    quoteVault: PublicKey,
    user: PublicKey,
    userTokenAccount: PublicKey,
    userOwner: PublicKey,
    discountTokenAccount?: PublicKey,
    feeReferralAccount?: PublicKey
  ): TransactionInstruction {
    const data = Buffer.from(this.serialize());
    let keys: AccountKey[] = [];
    keys.push({
      pubkey: splTokenProgram,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: systemProgram,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: market,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: orderbook,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: eventQueue,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: bids,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: asks,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: baseVault,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: quoteVault,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: user,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: userTokenAccount,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: userOwner,
      isSigner: true,
      isWritable: true,
    });
    if (!!discountTokenAccount) {
      keys.push({
        pubkey: discountTokenAccount,
        isSigner: false,
        isWritable: false,
      });
    }
    if (!!feeReferralAccount) {
      keys.push({
        pubkey: feeReferralAccount,
        isSigner: false,
        isWritable: true,
      });
    }
    return new TransactionInstruction({
      keys,
      programId,
      data,
    });
  }
}
export class cancelOrderInstruction {
  tag: BN;
  orderId: BN;
  orderIndex: BN;
  isClientId: number;
  padding: Uint8Array;
  static schema: Schema = new Map([
    [
      cancelOrderInstruction,
      {
        kind: "struct",
        fields: [
          ["tag", "u64"],
          ["orderId", "u128"],
          ["orderIndex", "u64"],
          ["isClientId", "u8"],
          ["padding", [7]],
        ],
      },
    ],
  ]);
  constructor(obj: { orderId: BN; orderIndex: BN; isClientId: number }) {
    this.tag = new BN(3);
    this.orderId = obj.orderId;
    this.orderIndex = obj.orderIndex;
    this.isClientId = obj.isClientId;
    this.padding = new Uint8Array(7).fill(0);
  }
  serialize(): Uint8Array {
    return serialize(cancelOrderInstruction.schema, this);
  }
  getInstruction(
    programId: PublicKey,
    market: PublicKey,
    orderbook: PublicKey,
    eventQueue: PublicKey,
    bids: PublicKey,
    asks: PublicKey,
    user: PublicKey,
    userOwner: PublicKey
  ): TransactionInstruction {
    const data = Buffer.from(this.serialize());
    let keys: AccountKey[] = [];
    keys.push({
      pubkey: market,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: orderbook,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: eventQueue,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: bids,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: asks,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: user,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: userOwner,
      isSigner: true,
      isWritable: false,
    });
    return new TransactionInstruction({
      keys,
      programId,
      data,
    });
  }
}
export class settleInstruction {
  tag: BN;
  static schema: Schema = new Map([
    [
      settleInstruction,
      {
        kind: "struct",
        fields: [["tag", "u64"]],
      },
    ],
  ]);
  constructor() {
    this.tag = new BN(5);
  }
  serialize(): Uint8Array {
    return serialize(settleInstruction.schema, this);
  }
  getInstruction(
    programId: PublicKey,
    splTokenProgram: PublicKey,
    market: PublicKey,
    baseVault: PublicKey,
    quoteVault: PublicKey,
    marketSigner: PublicKey,
    user: PublicKey,
    userOwner: PublicKey,
    destinationBaseAccount: PublicKey,
    destinationQuoteAccount: PublicKey
  ): TransactionInstruction {
    const data = Buffer.from(this.serialize());
    let keys: AccountKey[] = [];
    keys.push({
      pubkey: splTokenProgram,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: market,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: baseVault,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: quoteVault,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: marketSigner,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: user,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: userOwner,
      isSigner: true,
      isWritable: false,
    });
    keys.push({
      pubkey: destinationBaseAccount,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: destinationQuoteAccount,
      isSigner: false,
      isWritable: true,
    });
    return new TransactionInstruction({
      keys,
      programId,
      data,
    });
  }
}
export class initializeAccountInstruction {
  tag: BN;
  market: Uint8Array;
  maxOrders: BN;
  static schema: Schema = new Map([
    [
      initializeAccountInstruction,
      {
        kind: "struct",
        fields: [
          ["tag", "u64"],
          ["market", [32]],
          ["maxOrders", "u64"],
        ],
      },
    ],
  ]);
  constructor(obj: { market: Uint8Array; maxOrders: BN }) {
    this.tag = new BN(6);
    this.market = obj.market;
    this.maxOrders = obj.maxOrders;
  }
  serialize(): Uint8Array {
    return serialize(initializeAccountInstruction.schema, this);
  }
  getInstruction(
    programId: PublicKey,
    systemProgram: PublicKey,
    user: PublicKey,
    userOwner: PublicKey,
    feePayer: PublicKey
  ): TransactionInstruction {
    const data = Buffer.from(this.serialize());
    let keys: AccountKey[] = [];
    keys.push({
      pubkey: systemProgram,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: user,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: userOwner,
      isSigner: true,
      isWritable: false,
    });
    keys.push({
      pubkey: feePayer,
      isSigner: true,
      isWritable: true,
    });
    return new TransactionInstruction({
      keys,
      programId,
      data,
    });
  }
}
export class closeMarketInstruction {
  tag: BN;
  static schema: Schema = new Map([
    [
      closeMarketInstruction,
      {
        kind: "struct",
        fields: [["tag", "u64"]],
      },
    ],
  ]);
  constructor() {
    this.tag = new BN(9);
  }
  serialize(): Uint8Array {
    return serialize(closeMarketInstruction.schema, this);
  }
  getInstruction(
    programId: PublicKey,
    market: PublicKey,
    baseVault: PublicKey,
    quoteVault: PublicKey,
    orderbook: PublicKey,
    eventQueue: PublicKey,
    bids: PublicKey,
    asks: PublicKey,
    marketAdmin: PublicKey,
    targetLamportsAccount: PublicKey,
    marketSigner: PublicKey,
    splTokenProgram: PublicKey
  ): TransactionInstruction {
    const data = Buffer.from(this.serialize());
    let keys: AccountKey[] = [];
    keys.push({
      pubkey: market,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: baseVault,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: quoteVault,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: orderbook,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: eventQueue,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: bids,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: asks,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: marketAdmin,
      isSigner: true,
      isWritable: false,
    });
    keys.push({
      pubkey: targetLamportsAccount,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: marketSigner,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: splTokenProgram,
      isSigner: false,
      isWritable: false,
    });
    return new TransactionInstruction({
      keys,
      programId,
      data,
    });
  }
}
export class consumeEventsInstruction {
  tag: BN;
  maxIterations: BN;
  noOpErr: BN;
  static schema: Schema = new Map([
    [
      consumeEventsInstruction,
      {
        kind: "struct",
        fields: [
          ["tag", "u64"],
          ["maxIterations", "u64"],
          ["noOpErr", "u64"],
        ],
      },
    ],
  ]);
  constructor(obj: { maxIterations: BN; noOpErr: BN }) {
    this.tag = new BN(4);
    this.maxIterations = obj.maxIterations;
    this.noOpErr = obj.noOpErr;
  }
  serialize(): Uint8Array {
    return serialize(consumeEventsInstruction.schema, this);
  }
  getInstruction(
    programId: PublicKey,
    market: PublicKey,
    orderbook: PublicKey,
    eventQueue: PublicKey,
    rewardTarget: PublicKey,
    userAccounts: PublicKey[]
  ): TransactionInstruction {
    const data = Buffer.from(this.serialize());
    let keys: AccountKey[] = [];
    keys.push({
      pubkey: market,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: orderbook,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: eventQueue,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: rewardTarget,
      isSigner: false,
      isWritable: true,
    });
    for (let k of userAccounts) {
      keys.push({
        pubkey: k,
        isSigner: false,
        isWritable: true,
      });
    }
    return new TransactionInstruction({
      keys,
      programId,
      data,
    });
  }
}
export class sweepFeesInstruction {
  tag: BN;
  static schema: Schema = new Map([
    [
      sweepFeesInstruction,
      {
        kind: "struct",
        fields: [["tag", "u64"]],
      },
    ],
  ]);
  constructor() {
    this.tag = new BN(7);
  }
  serialize(): Uint8Array {
    return serialize(sweepFeesInstruction.schema, this);
  }
  getInstruction(
    programId: PublicKey,
    market: PublicKey,
    marketSigner: PublicKey,
    quoteVault: PublicKey,
    destinationTokenAccount: PublicKey,
    splTokenProgram: PublicKey,
    tokenMetadata: PublicKey,
    creatorsTokenAccounts: PublicKey[]
  ): TransactionInstruction {
    const data = Buffer.from(this.serialize());
    let keys: AccountKey[] = [];
    keys.push({
      pubkey: market,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: marketSigner,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: quoteVault,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: destinationTokenAccount,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: splTokenProgram,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: tokenMetadata,
      isSigner: false,
      isWritable: false,
    });
    for (let k of creatorsTokenAccounts) {
      keys.push({
        pubkey: k,
        isSigner: false,
        isWritable: true,
      });
    }
    return new TransactionInstruction({
      keys,
      programId,
      data,
    });
  }
}
export class swapInstruction {
  tag: BN;
  baseQty: BN;
  quoteQty: BN;
  matchLimit: BN;
  side: number;
  hasDiscountTokenAccount: number;
  padding: Uint8Array;
  static schema: Schema = new Map([
    [
      swapInstruction,
      {
        kind: "struct",
        fields: [
          ["tag", "u64"],
          ["baseQty", "u64"],
          ["quoteQty", "u64"],
          ["matchLimit", "u64"],
          ["side", "u8"],
          ["hasDiscountTokenAccount", "u8"],
          ["padding", [6]],
        ],
      },
    ],
  ]);
  constructor(obj: {
    baseQty: BN;
    quoteQty: BN;
    matchLimit: BN;
    side: number;
    hasDiscountTokenAccount: number;
  }) {
    this.tag = new BN(2);
    this.baseQty = obj.baseQty;
    this.quoteQty = obj.quoteQty;
    this.matchLimit = obj.matchLimit;
    this.side = obj.side;
    this.hasDiscountTokenAccount = obj.hasDiscountTokenAccount;
    this.padding = new Uint8Array(6).fill(0);
  }
  serialize(): Uint8Array {
    return serialize(swapInstruction.schema, this);
  }
  getInstruction(
    programId: PublicKey,
    splTokenProgram: PublicKey,
    systemProgram: PublicKey,
    market: PublicKey,
    orderbook: PublicKey,
    eventQueue: PublicKey,
    bids: PublicKey,
    asks: PublicKey,
    baseVault: PublicKey,
    quoteVault: PublicKey,
    marketSigner: PublicKey,
    userBaseAccount: PublicKey,
    userQuoteAccount: PublicKey,
    userOwner: PublicKey,
    discountTokenAccount?: PublicKey,
    feeReferralAccount?: PublicKey
  ): TransactionInstruction {
    const data = Buffer.from(this.serialize());
    let keys: AccountKey[] = [];
    keys.push({
      pubkey: splTokenProgram,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: systemProgram,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: market,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: orderbook,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: eventQueue,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: bids,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: asks,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: baseVault,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: quoteVault,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: marketSigner,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: userBaseAccount,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: userQuoteAccount,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: userOwner,
      isSigner: true,
      isWritable: true,
    });
    if (!!discountTokenAccount) {
      keys.push({
        pubkey: discountTokenAccount,
        isSigner: false,
        isWritable: false,
      });
    }
    if (!!feeReferralAccount) {
      keys.push({
        pubkey: feeReferralAccount,
        isSigner: false,
        isWritable: true,
      });
    }
    return new TransactionInstruction({
      keys,
      programId,
      data,
    });
  }
}
export class updateRoyaltiesInstruction {
  tag: BN;
  static schema: Schema = new Map([
    [
      updateRoyaltiesInstruction,
      {
        kind: "struct",
        fields: [["tag", "u64"]],
      },
    ],
  ]);
  constructor() {
    this.tag = new BN(10);
  }
  serialize(): Uint8Array {
    return serialize(updateRoyaltiesInstruction.schema, this);
  }
  getInstruction(
    programId: PublicKey,
    market: PublicKey,
    eventQueue: PublicKey,
    orderbook: PublicKey,
    tokenMetadata: PublicKey
  ): TransactionInstruction {
    const data = Buffer.from(this.serialize());
    let keys: AccountKey[] = [];
    keys.push({
      pubkey: market,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: eventQueue,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: orderbook,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: tokenMetadata,
      isSigner: false,
      isWritable: false,
    });
    return new TransactionInstruction({
      keys,
      programId,
      data,
    });
  }
}
export class createMarketInstruction {
  tag: BN;
  signerNonce: BN;
  minBaseOrderSize: BN;
  tickSize: BN;
  baseCurrencyMultiplier: BN;
  quoteCurrencyMultiplier: BN;
  static schema: Schema = new Map([
    [
      createMarketInstruction,
      {
        kind: "struct",
        fields: [
          ["tag", "u64"],
          ["signerNonce", "u64"],
          ["minBaseOrderSize", "u64"],
          ["tickSize", "u64"],
          ["baseCurrencyMultiplier", "u64"],
          ["quoteCurrencyMultiplier", "u64"],
        ],
      },
    ],
  ]);
  constructor(obj: {
    signerNonce: BN;
    minBaseOrderSize: BN;
    tickSize: BN;
    baseCurrencyMultiplier: BN;
    quoteCurrencyMultiplier: BN;
  }) {
    this.tag = new BN(0);
    this.signerNonce = obj.signerNonce;
    this.minBaseOrderSize = obj.minBaseOrderSize;
    this.tickSize = obj.tickSize;
    this.baseCurrencyMultiplier = obj.baseCurrencyMultiplier;
    this.quoteCurrencyMultiplier = obj.quoteCurrencyMultiplier;
  }
  serialize(): Uint8Array {
    return serialize(createMarketInstruction.schema, this);
  }
  getInstruction(
    programId: PublicKey,
    market: PublicKey,
    orderbook: PublicKey,
    baseVault: PublicKey,
    quoteVault: PublicKey,
    marketAdmin: PublicKey,
    eventQueue: PublicKey,
    asks: PublicKey,
    bids: PublicKey,
    tokenMetadata: PublicKey
  ): TransactionInstruction {
    const data = Buffer.from(this.serialize());
    let keys: AccountKey[] = [];
    keys.push({
      pubkey: market,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: orderbook,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: baseVault,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: quoteVault,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: marketAdmin,
      isSigner: false,
      isWritable: false,
    });
    keys.push({
      pubkey: eventQueue,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: asks,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: bids,
      isSigner: false,
      isWritable: true,
    });
    keys.push({
      pubkey: tokenMetadata,
      isSigner: false,
      isWritable: false,
    });
    return new TransactionInstruction({
      keys,
      programId,
      data,
    });
  }
}
