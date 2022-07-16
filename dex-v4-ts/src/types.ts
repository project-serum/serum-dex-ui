import {
  Keypair,
  TransactionInstruction,
  PublicKey,
  Commitment,
} from "@solana/web3.js";
import BN from "bn.js";

export type PrimedTransaction = [Keypair[], TransactionInstruction[]];

export enum Side {
  Bid = 0,
  Ask = 1,
}

export enum OrderType {
  Limit = 0,
  ImmediateOrCancel = 1,
  FillOrKill = 2,
  PostOnly = 3,
}

export enum SelfTradeBehavior {
  DecrementTake = 0,
  CancelProvide = 1,
  AbortTransaction = 2,
}

export interface OrderParams<T = Keypair> {
  owner: T;
  payer: PublicKey;
  side: Side;
  price: number;
  size: number;
  orderType?: OrderType;
  clientId?: BN;
  openOrdersAddressKey?: PublicKey;
  openOrdersAccount?: Keypair;
  feeDiscountPubkey?: PublicKey | null;
  selfTradeBehavior?: SelfTradeBehavior;
  programId?: PublicKey;
}

export interface Order {
  orderIndex: BN;
  openOrdersAddress: PublicKey;
  price: number;
  size: number;
  feeTier: number;
  side: Side;
  orderType: OrderType;
  selfTradeBehavior: SelfTradeBehavior;
  clientId?: BN;
}

export interface OrderInfo {
  orderIndex: number;
  orderId: BN;
}

export interface MarketOptions {
  skipPreflight?: boolean;
  commitment?: Commitment;
}
