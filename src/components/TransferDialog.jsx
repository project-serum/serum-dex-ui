import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import { useWallet } from '../utils/wallet';
import { useConnection } from '../utils/connection';
import { isValidPublicKey } from '../utils/utils';
import { transferToken } from '../utils/send';
import { notify } from '../utils/notifications';
import { PublicKey } from '@solana/web3.js';
import { getMintDecimals } from '../utils/tokens';

export default function TransferDialog({ onClose, transferCoin }) {
  const { connected, wallet } = useWallet();
  const connection = useConnection();

  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState(0);
  const [transferInProgress, setTransferInProgress] = useState(false);

  const onDoClose = () => {
    setDestination('');
    setAmount(0);
    onClose();
  };

  const onTransfer = async () => {
    try {
      const decimals = await getMintDecimals(connection, transferCoin?.mint);
      if (!decimals) {
        notify({ message: 'Could not get source data', type: 'error' });
        return;
      }

      const parsedAmount = Math.round(amount * 10 ** decimals);
      await transferToken({
        wallet,
        connection,
        source: transferCoin?.source,
        destination: new PublicKey(destination),
        amount: parsedAmount,
        onBeforeSendCallBack: () => setTransferInProgress(true),
        onConfirmCallBack: (err) => {
          setTransferInProgress(false);
          if (!err) onDoClose();
        },
      });
    } catch (e) {
      notify({
        message: 'Error transferring tokens: ' + e.message,
        type: 'error',
      });
      setTransferInProgress(false);
    }
  };

  const canSubmit = connected && isValidPublicKey(destination) && amount > 0;

  return (
    <Modal
      title={`Transfer ${transferCoin?.coin}`}
      visible={transferCoin?.mint && transferCoin?.source}
      onOk={onTransfer}
      okText={'Transfer'}
      onCancel={onDoClose}
      okButtonProps={{ disabled: !canSubmit, loading: transferInProgress }}
    >
      <div style={{ paddingTop: '20px' }}>
        <Input
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <Input
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
      </div>
    </Modal>
  );
}
