import { BonfidaTrade } from './types';
import dotenv from 'dotenv';

dotenv.config();

export default class BonfidaApi {
  static URL: string = process.env.REACT_APP_SERUM_HIST_API as string;

  static async get(path: string) {
    try {
      const response = await fetch(this.URL + path);
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.success ? responseJson.data : null;
      }
    } catch (err) {
      console.log(`Error fetching from Bonfida API ${path}: ${err}`);
    }
    return null;
  }

  static async getRecentTrades(
    marketAddress: string,
  ): Promise<BonfidaTrade[] | null> {
    return BonfidaApi.get(`trades/address/${marketAddress}`);
  }
}

export const BONFIDA_DATA_FEED = process.env
  .REACT_APP_SERUM_HIST_DATAFEED as string;
