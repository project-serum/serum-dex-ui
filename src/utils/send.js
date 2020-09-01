import { notify } from './notifications';
import { getDecimalCount, sleep } from './utils';

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
    if (
      (baseCurrencyAccount && !quoteCurrencyAccount) ||
      (quoteCurrencyAccount && !baseCurrencyAccount)
    ) {
      notify({
        message: 'Add token account',
        description: 'Add accounts for both currencies on sollet.io',
      });
    } else {
      notify({ message: 'Not connected' });
    }
    return;
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

async function sendTransaction({
  transaction,
  wallet,
  signers = [wallet.publicKey],
  connection,
  onBeforeSend,
  onAfterSend,
  onConfirm,
}) {
  transaction.recentBlockhash = (
    await connection.getRecentBlockhash('max')
  ).blockhash;
  transaction.signPartial(...signers);
  const signed = await wallet.signTransaction(transaction);
  const signedAt = new Date().getTime();

  onBeforeSend();

  const txid = await connection.sendRawTransaction(signed.serialize(), {
    skipPreflight: true,
  });
  console.log('Sent raw transaction, received TXID: ', txid);
  const sentAt = new Date().getTime();
  onAfterSend();

  // Send a bunch of requests, staggered, and stop sending the other ones, resolve when getting back the first
  const result = await getSignatureStatus(connection, txid);
  const confirmedAt = new Date().getTime();
  console.log(
    result.timeout ? 'Timed out' : 'Got signature confirmation',
    txid,
    (confirmedAt - sentAt) / 1000,
    (confirmedAt - signedAt) / 1000,
  );
  onConfirm(result);
  return txid;
}

async function getSignatureStatus(connection, txid) {
  let done = false;
  const result = await new Promise((resolve, reject) => {
    (async () => {
      const timeout = setTimeout(() => {
        console.log('Timed out', txid);
        resolve({ timeout: true });
      }, 15000);
      try {
        connection.onSignature(
          txid,
          (result, context) => {
            if (!done) {
              console.log('WS update for txid', txid, result);
              clearTimeout(timeout);
              resolve(result);
              done = true;
            }
          },
          'recent',
        );
        console.log('Subsribed for WS update on', txid);
      } catch (e) {
        console.log('Failed to subscribe for signature update on', txid, e);
      }
      while (!done) {
        // eslint-disable-next-line
        (async () => {
          try {
            console.log('Send REST request for txid', txid);
            const results = await connection.getSignatureStatuses([txid]);
            const result = results && results.value && results.value[0];
            console.log('Received REST response for txid', txid, result);
            if (!result || (!result?.confirmations && !result?.err)) {
              return;
            }
            if (!done) {
              console.log('REST update for txid', txid, result);
              done = true;
              clearTimeout(timeout);
              resolve(result);
            }
          } catch (e) {
            if (!done) {
              console.log('Connection error polling REST', txid, e);
            }
          }
        })();
        await sleep(500);
      }
    })();
  });
  done = true;
  return result;
}
