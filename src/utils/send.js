import { notify } from './notifications';
import nacl from 'tweetnacl';
import { sleep } from './utils';
import { Transaction } from '@solana/web3.js';

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
    notify({ message: 'Not connected' });
    return;
  }
  const transaction = await market.makeSettleFundsTransaction(
    connection,
    openOrders,
    baseCurrencyAccount.pubkey,
    quoteCurrencyAccount.pubkey,
  );
  const onConfirm = (result) => {
    if (result.err) {
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
  const transaction = new Transaction();
  transaction.add(market.makeMatchOrdersInstruction(5));
  orders.forEach((order) => {
    transaction.add(
      market.makeCancelOrderInstruction(connection, wallet.publicKey, order),
    );
  });
  transaction.add(market.makeMatchOrdersInstruction(5));
  const onConfirm = (result) => {
    if (result.err) {
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
  openOrdersAccount,
  onBeforeSendCallBack,
  onAfterSendCallBack,
  onConfirmCallBack,
}) {
  const isIncrement = (num, step) =>
    Math.abs((num / step) % 1) < 1e-10 ||
    Math.abs(((num / step) % 1) - 1) < 1e-10;
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
      message: `Size must be an increment of ${market.minOrderSize}`,
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
      message: `Price must be an increment of ${market.tickSize}`,
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
  let transaction, signers;
  let extraSigners = [];

  // If the user does not has an open orders account, use serum-js to create one
  if (!openOrdersAccount) {
    let result = await market.makePlaceOrderTransaction(connection, params);
    transaction = result.transaction;
    signers = result.signers;
    if (signers.length > 1) {
      extraSigners = [signers[1]];
    }
  } else {
    transaction = new Transaction();
    transaction.add(market.makeMatchOrdersInstruction(5));
    transaction.add(
      market.makePlaceOrderInstruction(connection, params, openOrdersAccount),
    );
  }

  transaction.add(market.makeMatchOrdersInstruction(5));
  const onConfirm = (result) => {
    if (result.err) {
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
    extraSigners,
  });
}

async function sendTransaction({
  transaction,
  wallet,
  connection,
  onBeforeSend,
  onAfterSend,
  onConfirm,
  extraSigners = [],
}) {
  transaction.recentBlockhash = (
    await connection.getRecentBlockhash('max')
  ).blockhash;
  const signed = await wallet.signTransaction(transaction);
  const signedAt = new Date().getTime();

  // Don't rely on the open orders account being the 2nd element in the list
  // Sign with any accounts with a pubkey different from that of the wallet
  extraSigners.forEach((extraSigner) => {
    const extraSignature = nacl.sign.detached(
      signed.serializeMessage(),
      extraSigner.secretKey,
    );
    signed.addSignature(extraSigner.publicKey, extraSignature);
  });
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
    'Confirmed',
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
      connection.onSignature(
        txid,
        (result, context) => {
          if (!done) {
            console.log('WS update for txid', txid, result);
            resolve(result);
            done = true;
          }
        },
        'recent',
      );
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
              resolve(result);
            }
          } catch (e) {
            if (!done) {
              console.log('REST error for txid', txid, e);
              done = true;
              reject(e);
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
