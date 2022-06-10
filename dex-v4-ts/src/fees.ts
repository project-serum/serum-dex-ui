/** Serum fee tiers */
export const FEES = {
  6: {
    fees: { taker: 0.0003, maker: 0 },
    srm: Infinity,
    msrm: 1,
  },
  5: {
    fees: { taker: 0.00032, maker: 0 },
    srm: 1_000_000,
    msrm: Infinity,
  },
  4: {
    fees: { taker: 0.00034, maker: 0 },
    srm: 100_000,
    msrm: Infinity,
  },
  3: {
    fees: { taker: 0.00036, maker: 0 },
    srm: 10_000,
    msrm: Infinity,
  },
  2: {
    fees: { taker: 0.00038, maker: 0 },
    srm: 1_000,
    msrm: Infinity,
  },
  1: {
    fees: { taker: 0.00039, maker: 0 },
    srm: 100,
    msrm: Infinity,
  },
  0: {
    fees: { taker: 0.0004, maker: 0 },
    srm: 0,
    msrm: Infinity,
  },
};

/**
 * Returns the taker and maker fees given a fee schedule
 * @param feeTier Fee tier (number from 0 to 6)
 * @returns Returns the taker and maker fees in %
 */
export const getFeeRates = (feeTier: number) => {
  return FEES[feeTier].fees;
};

/**
 * Returns the fee tier corresponding to given (M)SRM balances
 * @param msrmBalance SRM balances
 * @param srmBalance MSRM balances
 * @returns Returns the fee tier corresponding to the SRM and MSRM balances
 */
export const getFeeTier = (msrmBalance: number, srmBalance: number) => {
  if (msrmBalance >= 1) {
    return 6;
  }
  for (let [key, value] of Object.entries(FEES)) {
    if (srmBalance < value.srm) return parseInt(key) - 1;
  }
  return 0;
};
