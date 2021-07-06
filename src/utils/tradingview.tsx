import { USE_MARKETS } from './markets';

export const findTVMarketFromAddress = (marketAddressString: string) => {
  let m_name = 'SRM/USDC';
  USE_MARKETS.forEach((market) => {
    if (market.address.toBase58() === marketAddressString) {
      m_name = market.name;
    }
  });

  return m_name;
};
