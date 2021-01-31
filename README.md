# Serum DEX UI

An implementation of a UI for the Serum DEX.

### Running the UI

Run `yarn` to install dependencies, then run `yarn start` to start a development server or `yarn build` to create a production build that can be served by a static file server.

### Collect referral fees

If you are hosting a public UI using this codebase, you can collect referral fees when your users trade through your site.

To do so, set the `REACT_APP_USDT_REFERRAL_FEES_ADDRESS` and `REACT_APP_USDC_REFERRAL_FEES_ADDRESS` environment variables to the addresses of your USDT and USDC SPL token accounts.

You may want to put these in local environment files (e.g. `.env.development.local`, `.env.production.local`). See the [documentation](https://create-react-app.dev/docs/adding-custom-environment-variables) on environment variables for more information.

NOTE: remember to re-build your app before deploying for your referral addresses to be reflected.

### Add Trading View charts

It is possible to add OHLCV candles built from on chain data using [Bonfida's API](https://docs.bonfida.com). Here is how to do it:

1. Get access to the [TradingView Charting Library](https://github.com/tradingview/charting_library/) repository. This is a **private repository** and it will **return a 404 if you don't have access to it**. To get access to the repository please refer to [TradingView's website](https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/)

2. Once you have access to the Charting Library repository:

- Copy `charting_library` folder from https://github.com/tradingview/charting_library/ to `/public` and to `/src` folders.
- Copy `datafeeds` folder from https://github.com/tradingview/charting_library/ to `/public`.

3. Import `TVChartContainer` from `/src/components/TradingView` and add it to your `TradePage.tsx`. The TradingView widget will work out of the box using [Bonfida's](https://bonfida.com) datafeed.

4. Remove the following from the `tsconfig.json`

```json
"./src/components/TradingView/index.tsx"
```

5. Uncomment the following in `public/index.html`

```
<script src="%PUBLIC_URL%/datafeeds/udf/dist/polyfills.js"></script>
<script src="%PUBLIC_URL%/datafeeds/udf/dist/bundle.js">
```

<p align="center">
<img height="300" src="https://i.imgur.com/UyFKmTv.png">
</p>

---

See the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) for other commands and options.

---

See [A technical introduction to the Serum DEX](https://projectserum.com/blog/serum-dex-introduction) to learn more about the Serum DEX.

See [serum-js](https://github.com/project-serum/serum-js) for DEX client-side code. Serum DEX UI uses this library.

See [sol-wallet-adapter](https://github.com/project-serum/sol-wallet-adapter) for an explanation of how the Serum DEX UI interacts with wallet services to sign and send requests to the Serum DEX.

See [spl-token-wallet](https://github.com/project-serum/spl-token-wallet) for an implementation of such a wallet, live at [sollet.io](https://sollet.io).
