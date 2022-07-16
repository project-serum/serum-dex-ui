import { Connection, Keypair, PublicKey } from '@solana/web3.js';
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

// uiPrice * (baseMultiplier * 10^quoteDecimals * 2^32) / (quoteMultiplier * 10^baseDecimals)
export const computeFp32Price = (market: Market, uiPrice: number) => {
  const tickSize = market.tickSizeBN;

  const decimalsMul = Math.pow(10, market.quoteDecimals - market.baseDecimals);
  const baseQuoteMul =
    market.baseCurrencyMultiplier.toNumber() /
    market.quoteCurrencyMultiplier.toNumber();

  const x = uiPrice * baseQuoteMul * decimalsMul;
  const fracX = Math.pow(2, 32) * (x - Math.floor(x));

  const price = new BN(x).mul(new BN(2 ** 32)).add(new BN(fracX));
  const rem = price.umod(tickSize);

  return price.sub(rem);
};

// fp32Price * (quoteMultiplier * 10^baseDecimals) / (baseMultiplier * 10^quoteDecimals * 2^32)
export const computeUiPrice = (market: Market, fp32Price: BN) => {
  const numerator = fp32Price
    .mul(market.quoteCurrencyMultiplier)
    .mul(new BN(10).pow(new BN(market.baseDecimals)));
  const denominator = market.baseCurrencyMultiplier.mul(
    new BN(10).pow(new BN(market.quoteDecimals)).mul(new BN(2).pow(new BN(32))),
  );

  return Number(divideBnToNumber(numerator, denominator).toPrecision(5));
};
