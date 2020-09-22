# Serum DEX UI

An implementation of a UI for the Serum DEX.

See [A technical introduction to the Serum DEX](https://projectserum.com/blog/serum-dex-introduction) to learn more about the Serum DEX.

See [serum-js](https://github.com/project-serum/serum-js) for DEX client-side code. Serum DEX UI uses this library.

See [sol-wallet-adapter](https://github.com/project-serum/sol-wallet-adapter) for an explanation of how the Serum DEX UI interacts with wallet services to sign and send requests to the Serum DEX.

See [spl-token-wallet](https://github.com/project-serum/spl-token-wallet) for an implementation of such a wallet, live at [sollet.io](https://sollet.io).

---

Run `yarn` to install dependencies, then run `yarn start` to start a development server or `yarn build` to create a production build that can be served by a static file server.

See the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) for other commands and options.

## Referral fees for GUI hosters

If you are publicly hosting an UI and use this codebase (directly or indirectly) you can collect referral fees when your users trade through your UI. To do so fill in your addresses in the root `.env` file and recompile the UI. NOTE: if you do not recompile your referral addresses will not be used.
