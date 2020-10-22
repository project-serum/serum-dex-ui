
import React, { useState, createContext, useContext, useEffect } from 'react'
import BandChain from '@bandprotocol/bandchain.js'


const CurrencyContext = React.createContext<null | any>(null);
const bandchain = new BandChain("http://poa-api.bandchain.org")

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD")
  const [currencyRates, setCurrencyRates] = useState({})
  const [stableRates, setStableRates] = useState({})

  const currencies = ["USD", "CNY", "EUR","GBP","KRW","JPY","INR","RUB","CHF","AUD","BRL","CAD","HKD", "SGD"]
  const stables = ["USDT", "USDC"]

  useEffect(() => {
    (async () => {
      let currencyPairs: string[] = []
      let stablePairs: string[] = []
      currencies.map(cur => {
        currencyPairs.push("USD/"+ cur)
      })
      stables.map(stable => {
        stablePairs.push(stable+"/USD")
      })
      const latestCurrencies = await bandchain.getReferenceData(currencyPairs)
      const latestStables = await bandchain.getReferenceData(stablePairs)
      const currencyTemp = latestCurrencies.reduce((a, e) => {
        let base = e["pair"].split("/")[1];
        delete e.pair;
        a[base] = {...e};
        return { ...a }
      }, {});
      const stableTemp = latestStables.reduce((a, e) => {
        let base = e["pair"].split("/")[0];
        delete e.pair;
        a[base] = {...e};
        return { ...a }
      }, {});
      setCurrencyRates(currencyTemp)
      setStableRates(stableTemp)
    })()

  },[])


  return (
    <CurrencyContext.Provider
      value={{
        currencies,
        stables,
        currency,
        setCurrency,
        currencyRates,
        stableRates,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrencyContextState = () => useContext(CurrencyContext)
