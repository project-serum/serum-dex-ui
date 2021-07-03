import { USE_MARKETS } from './markets';

export const findTVMarketFromAddress = (marketAddressString: string) => {
  for ( let market of USE_MARKETS ) {
    if (market.address.toBase58() === marketAddressString) {
      return market.name;
    }
  }
};