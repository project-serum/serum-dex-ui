import BN from "bn.js";

// Assumes lowest fee tier
export const computeTakerFee = (orderSize: BN) => {
  const rate = new BN(40).shln(32).div(new BN(100_000));
  return orderSize.mul(rate).shrn(32);
};

// Compute royalties
export const computeRoyalties = (orderSize: BN, royalties: BN) => {
  const rate = new BN(royalties).shln(32).div(new BN(10_000));
  return orderSize.mul(rate).shrn(32);
};
