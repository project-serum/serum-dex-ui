import { Connection, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { Market } from './market';

export function throwIfNull<T>(
  value: T | null,
  message = 'account not found',
): T {
  if (value === null) {
    throw new Error(message);
  }
  return value;
}

export const getMintDecimals = async (
  connection: Connection,
  mint: PublicKey,
) => {
  const { value } = throwIfNull(
    await connection.getParsedAccountInfo(mint),
    'Mint not found',
  );
  // @ts-ignore
  return value?.data?.parsed.info.decimals;
};

export const getTokenBalance = async (
  connection: Connection,
  address: PublicKey,
) => {
  const { value } = throwIfNull(
    await connection.getParsedAccountInfo(address),
    'Token account does not exist',
  );
  // @ts-ignore
  return value?.data.parsed.uiAmount;
};

export const divideBnToNumber = (numerator: BN, denominator: BN): number => {
  const quotient = numerator.div(denominator).toNumber();
  const rem = numerator.umod(denominator);
  const gcd = rem.gcd(denominator);
  return quotient + rem.div(gcd).toNumber() / denominator.div(gcd).toNumber();
};

export const computeUiPrice = (market: Market, fp32Price: BN) => {
  return roundUiAmount(
    2 ** -32 *
      10 ** (market.baseDecimals - market.quoteDecimals) *
      fp32Price.toNumber(),
  );
};

export const computeUiSize = (market: Market, bnSize: BN) => {
  return bnSize.toNumber() * 10 ** -market.baseDecimals;
};

export const roundUiAmount = (uiAmount: number) =>
  Number(uiAmount.toPrecision(5));

export const computeFp32Price = (market: Market, uiPrice: number) => {
  const price = new BN(Math.pow(2, 32) * uiPrice);
  const remainder = price.umod(market.tickSizeBN);
  const roundedPrice = price.sub(remainder);

  const scalingExponent = market.quoteDecimals - market.baseDecimals;

  return scalingExponent >= 0
    ? roundedPrice.muln(10 ** scalingExponent)
    : roundedPrice.divn(10 ** -scalingExponent);
};

export const computeSize = (market: Market, size: number) => {
  return new BN(size - (size % market.minOrderSizeBN.toNumber()));
};
