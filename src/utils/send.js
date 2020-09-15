import { notify } from './notifications';
import { getDecimalCount, sleep } from './utils';
import { Account, SystemProgram } from '@solana/web3.js';
import { TokenInstructions } from '@project-serum/serum';

export async function createTokenAccount({
  connection,
  wallet,
  mintPublicKey,
  onConfirmCallBack,
}) {
  let newAccount = new Account();
  const transaction = SystemProgram.createAccount({
    fromPubkey: wallet.publicKey,
    newAccountPubkey: newAccount.publicKey,
    lamports: await connection.getMinimumBalanceForRentExemption(165),
    space: 165,
    programId: TokenInstructions.TOKEN_PROGRAM_ID,
  });
  transaction.add(
    TokenInstructions.initializeAccount({
      account: newAccount.publicKey,
      mint: mintPublicKey,
      owner: wallet.publicKey,
    }),
  );
  const onConfirm = (result) => {
    if (result.timeout) {
      notify({
        message: 'Timed out',
        type: 'error',
        description: 'Timed out awaiting confirmation on transaction',
      });
    } else if (result.err) {
      console.log(result.err);
      notify({ message: 'Error creating account', type: 'error' });
    } else {
      notify({ message: 'Account creation confirmed', type: 'success' });
    }
    onConfirmCallBack && onConfirmCallBack();
  };
  const onBeforeSend = () => notify({ message: 'Creating account...' });
  const onAfterSend = () =>
    notify({ message: 'Account created', type: 'success' });
  return await sendTransaction({
    transaction,
    wallet,
    connection,
    onBeforeSend: onBeforeSend,
    onAfterSend: onAfterSend,
    onConfirm,
    signers: [wallet.publicKey, newAccount],
  });
}

export async function settleFunds({
  market,
  openOrders,
  connection,
  wallet,
  baseCurrencyAccount,
  quoteCurrencyAccount,
}) {
  if (
    !market ||
    !wallet ||
    !connection ||
    !openOrders ||
    !baseCurrencyAccount ||
    !quoteCurrencyAccount
  ) {
    if (baseCurrencyAccount && !quoteCurrencyAccount) {
      return await createTokenAccount({
        connection,
        wallet,
        mintPublicKey: market.quoteMintAddress,
        onConfirmCallBack: async () => {
          await sleep(1000); // wait to make sure currency account is available
          const quoteCurrencyAccounts = await market.findQuoteTokenAccountsForOwner(
            connection,
            wallet.publicKey,
            true,
          );
          quoteCurrencyAccounts &&
            settleFunds({
              market,
              openOrders,
              connection,
              wallet,
              baseCurrencyAccount,
              quoteCurrencyAccount: quoteCurrencyAccounts[0],
            });
        },
      });
    } else if (quoteCurrencyAccount && !baseCurrencyAccount) {
      return await createTokenAccount({
        connection,
        wallet,
        mintPublicKey: market.baseMintAddress,
        onConfirmCallBack: async () => {
          await sleep(1000); // wait to make sure currency account is available
          const baseCurrencyAccounts = await market.findBaseTokenAccountsForOwner(
            connection,
            wallet.publicKey,
            true,
          );
          baseCurrencyAccounts &&
            settleFunds({
              market,
              openOrders,
              connection,
              wallet,
              baseCurrencyAccount: baseCurrencyAccounts[0],
              quoteCurrencyAccount,
            });
        },
      });
    } else {
      notify({ message: 'Not connected' });
      return;
    }
  }

  const { transaction, signers } = await market.makeSettleFundsTransaction(
    connection,
    openOrders,
    baseCurrencyAccount.pubkey,
    quoteCurrencyAccount.pubkey,
  );

  const onConfirm = (result) => {
    if (result.timeout) {
      notify({
        message: 'Timed out',
        type: 'error',
        description: 'Timed out awaiting confirmation on transaction',
      });
    } else if (result.err) {
      console.log(result.err);
      notify({ message: 'Error settling funds', type: 'error' });
    } else {
      notify({ message: 'Fund settlement confirmed', type: 'success' });
    }
  };
  const onBeforeSend = () => notify({ message: 'Settling funds...' });
  const onAfterSend = () =>
    notify({ message: 'Funds settled', type: 'success' });
  return await sendTransaction({
    transaction,
    signers,
    wallet,
    connection,
    onBeforeSend,
    onAfterSend,
    onConfirm,
  });
}

export async function cancelOrder(params) {
  return cancelOrders({ ...params, orders: [params.order] });
}

export async function cancelOrders({
  market,
  wallet,
  connection,
  orders,
  onBeforeSendCallBack,
  onAfterSendCallBack,
  onConfirmCallBack,
}) {
  const transaction = market.makeMatchOrdersTransaction(5);
  orders.forEach((order) => {
    transaction.add(
      market.makeCancelOrderInstruction(connection, wallet.publicKey, order),
    );
  });
  transaction.add(market.makeMatchOrdersTransaction(5));
  const onConfirm = (result) => {
    if (result.timeout) {
      notify({
        message: 'Timed out',
        type: 'error',
        description: 'Timed out awaiting confirmation on transaction',
      });
    } else if (result.err) {
      console.log(result.err);
      notify({
        message:
          orders.length > 1
            ? 'Error cancelling orders'
            : 'Error cancelling order',
        type: 'error',
      });
    } else {
      notify({
        message:
          orders.length > 1
            ? 'Order cancellations confirmed'
            : 'Order cancellation confirmed',
        type: 'success',
      });
    }
    onConfirmCallBack && onConfirmCallBack();
  };
  const onBeforeSend = () => {
    notify({ message: 'Sending cancel...' });
    onBeforeSendCallBack && onBeforeSendCallBack();
  };
  const onAfterSend = () => {
    notify({
      message: orders.length > 1 ? 'Orders cancelled' : 'Order cancelled',
      type: 'success',
    });
    onAfterSendCallBack && onAfterSendCallBack();
  };

  return await sendTransaction({
    transaction,
    wallet,
    connection,
    onBeforeSend,
    onAfterSend,
    onConfirm,
  });
}

export async function placeOrder({
  side,
  price,
  size,
  orderType,
  market,
  connection,
  wallet,
  baseCurrencyAccount,
  quoteCurrencyAccount,
  onBeforeSendCallBack,
  onAfterSendCallBack,
  onConfirmCallBack,
}) {
  let formattedMinOrderSize =
    market?.minOrderSize?.toFixed(getDecimalCount(market.minOrderSize)) ||
    market?.minOrderSize;
  let formattedTickSize =
    market?.tickSize?.toFixed(getDecimalCount(market.tickSize)) ||
    market?.tickSize;
  const isIncrement = (num, step) =>
    Math.abs((num / step) % 1) < 1e-5 ||
    Math.abs(((num / step) % 1) - 1) < 1e-5;
  if (isNaN(price)) {
    notify({ message: 'Invalid price', type: 'error' });
    return;
  }
  if (isNaN(size)) {
    notify({ message: 'Invalid size', type: 'error' });
    return;
  }
  if (!wallet || !wallet.publicKey) {
    notify({ message: 'Connect wallet', type: 'error' });
    return;
  }
  if (!market) {
    notify({ message: 'Invalid  market', type: 'error' });
    return;
  }
  if (!isIncrement(size, market.minOrderSize)) {
    notify({
      message: `Size must be an increment of ${formattedMinOrderSize}`,
      type: 'error',
    });
    return;
  }
  if (size < market.minOrderSize) {
    notify({ message: 'Size too small', type: 'error' });
    return;
  }
  if (!isIncrement(price, market.tickSize)) {
    notify({
      message: `Price must be an increment of ${formattedTickSize}`,
      type: 'error',
    });
    return;
  }
  if (price < market.tickSize) {
    notify({ message: 'Price under tick size', type: 'error' });
    return;
  }
  const owner = wallet.publicKey;

  const payer = side === 'sell' ? baseCurrencyAccount : quoteCurrencyAccount;
  if (!payer) {
    notify({
      message: 'Need an SPL token account for cost currency',
      type: 'error',
    });
    return;
  }
  const params = {
    owner,
    payer,
    side,
    price,
    size,
    orderType,
  };
  console.log(params);

  const transaction = market.makeMatchOrdersTransaction(5);
  let {
    transaction: placeOrderTx,
    signers,
  } = await market.makePlaceOrderTransaction(connection, params);
  transaction.add(placeOrderTx);
  transaction.add(market.makeMatchOrdersTransaction(5));

  const onConfirm = (result) => {
    if (result.timeout) {
      notify({
        message: 'Timed out',
        type: 'error',
        description: 'Timed out awaiting confirmation on transaction',
      });
    } else if (result.err) {
      console.log(result.err);
      notify({ message: 'Error placing order', type: 'error' });
    } else {
      notify({ message: 'Order confirmed', type: 'success' });
    }
    onConfirmCallBack && onConfirmCallBack();
  };
  const onBeforeSend = () => {
    notify({ message: 'Sending order...' });
    onBeforeSendCallBack && onBeforeSendCallBack();
  };
  const onAfterSend = () => {
    notify({ message: 'Order sent', type: 'success' });
    onAfterSendCallBack && onAfterSendCallBack();
  };

  return await sendTransaction({
    transaction,
    wallet,
    connection,
    onBeforeSend,
    onAfterSend,
    onConfirm,
    signers,
  });
}

const getUnixTs = () => {
  return new Date().getTime() / 1000;
};

const DEFAULT_TIMEOUT = 15000;

async function sendTransaction({
  transaction,
  wallet,
  signers = [wallet.publicKey],
  connection,
  onBeforeSend,
  onAfterSend,
  onConfirm,
  timeout = DEFAULT_TIMEOUT,
}) {
  transaction.recentBlockhash = (
    await connection.getRecentBlockhash('max')
  ).blockhash;
  transaction.signPartial(...signers);
  const rawTransaction = (
    await wallet.signTransaction(transaction)
  ).serialize();
  let done = false;
  const startTime = getUnixTs();
  onBeforeSend();
  const txid = await connection.sendRawTransaction(rawTransaction, {
    skipPreflight: true,
  });
  onAfterSend();
  console.log('Started sending transaction for', txid);
  awaitTransactionSignatureConfirmation(txid, timeout, connection)
    .then((res) => {
      done = true;
      onConfirm(res);
    })
    .catch((res) => {
      done = true;
      onConfirm(res);
    });
  while (!done && getUnixTs() - startTime < timeout) {
    connection.sendRawTransaction(rawTransaction, {
      skipPreflight: true,
    });
    await sleep(300);
  }
  console.log('Latency', txid, getUnixTs() - startTime);
  return txid;
}

async function awaitTransactionSignatureConfirmation(
  txid,
  timeout,
  connection,
) {
  let done = false;
  const result = await new Promise((resolve, reject) => {
    (async () => {
      setTimeout(() => {
        if (done) {
          return;
        }
        done = true;
        console.log('Timed out for txid', txid);
        reject({ timeout: true });
      }, timeout);
      try {
        connection.onSignature(
          txid,
          (result) => {
            console.log('WS confirmed', txid, result);
            done = true;
            if (result.err) {
              reject(result);
            } else {
              resolve(result);
            }
          },
          'recent',
        );
        console.log('Set up WS connection', txid);
      } catch (e) {
        done = true;
        console.log('WS error in setup', txid, e);
      }
      while (!done) {
        (async () => {
          try {
            const signatureStatuses = await connection.getSignatureStatuses([
              txid,
            ]);
            const result = signatureStatuses && signatureStatuses.value[0];
            if (!done) {
              if (!result) {
                console.log('REST null result for', txid, result);
              } else if (result.err) {
                console.log('REST error for', txid, result);
                done = true;
                reject(result);
              } else if (!result.confirmations) {
                console.log('REST no confirmations for', txid, result);
              } else {
                console.log('REST confirmation for', txid, result);
                done = true;
                resolve(result);
              }
            }
          } catch (e) {
            if (!done) {
              console.log('REST connection error: txid', txid, e);
            }
          }
        })();
        await sleep(300);
      }
    })();
  });
  done = true;
  return result;
}
