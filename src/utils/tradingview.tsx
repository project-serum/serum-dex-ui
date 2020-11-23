import { USE_MARKETS } from './markets';

export const findTVMarketFromAddress = (marketAddressString: string) => {
  USE_MARKETS.forEach((market) => {
    if (market.address.toBase58() === marketAddressString) {
      return market.name;
    }
  });
  return 'SRM/USDC';
};
