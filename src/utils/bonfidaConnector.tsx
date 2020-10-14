import { BonfidaTrade } from './types';

class BonfidaApi {
  static URL: string = 'https://serum-api.bonfida.com/';
  static async recentTrades(
    marketAddress: string,
  ): Promise<BonfidaTrade[] | null> {
    try {
      const response = await fetch(
        this.URL + `trades/address/${marketAddress}`,
      );
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.success ? responseJson.data : null;
      }
    } catch (err) {
      console.log(`Error fetching recent trades on Bonfida API: ${err}`);
    }
    return null;
  }
}

export default BonfidaApi;
