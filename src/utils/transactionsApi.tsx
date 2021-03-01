import { BonfidaTrade } from './types';

export default class TransactionsApi {
  static URL: string = 'https://www.serumtaxtime.com/';

  static async request(path: string, options: any) {
    try {
      const response = await fetch(this.URL + path, options);
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }
    } catch (err) {
      console.log(`Error fetching from transactions api ${path}: ${err}`);
    }
    return null;
  }

  static async getTransactionData(
    publicKeyStr: string,
  ): Promise<BonfidaTrade[] | null> {
    return TransactionsApi.request(`transactions_api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: `owner_pubkey=${publicKeyStr}`,
    });
  }
}
