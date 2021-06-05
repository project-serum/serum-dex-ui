import { USE_MARKETS } from './markets';

export const findTVMarketFromAddress = (marketAddressString: string) => {
  let symbol = "FAB/USDC";

  USE_MARKETS.forEach((market) => {
    if (market.address.toBase58() === marketAddressString) {
      symbol = market.name;
    }
  });
  
  return symbol;
};
