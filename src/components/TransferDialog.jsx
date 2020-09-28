import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Input, Button, Row, Col, Typography } from 'antd';
import { useBalances } from '../utils/markets';
import { useWallet } from '../utils/wallet';
import { useConnection } from '../utils/connection';
import { isValidPublicKey } from '../utils/utils';
import { transferToken } from '../utils/send';
import { notify } from '../utils/notifications';
import { PublicKey } from '@solana/web3.js';
import { getMintDecimals } from '../utils/tokens';

const { Text } = Typography;

const InputField = styled(Input)`
  margin-bottom: 8px;
`;

const ActionButton = styled(Button)`
  color: #2abdd2;
  background-color: #212734;
  border-width: 0px;
`;

export default function TransferDialog({ onClose, transferCoin }) {
  const { connected, wallet } = useWallet();
  const connection = useConnection();
  const balances = useBalances();

  const [destination, setDestination] = useState(null);
  const [amount, setAmount] = useState(null);
  const [transferInProgress, setTransferInProgress] = useState(false);

  const balance =
    balances && balances.find((b) => b.coin === transferCoin?.coin)?.wallet;

  const onDoClose = () => {
    setDestination(null);
    setAmount(null);
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
      setTransferInProgress(true);
      await transferToken({
        wallet,
        connection,
        source: transferCoin?.source,
        destination: new PublicKey(destination),
        amount: parsedAmount,
      });
    } catch (e) {
      notify({
        message: 'Error transferring tokens: ' + e.message,
        type: 'error',
      });
    } finally {
      setTransferInProgress(false);
      onDoClose();
    }
  };

  const canSubmit =
    connected &&
    isValidPublicKey(destination) &&
    amount > 0 &&
    amount <= balance;

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
        {destination && !isValidPublicKey(destination) && (
          <Row style={{ marginBottom: 8 }}>
            <Col>
              <Text type="warning">Invalid address</Text>
            </Col>
          </Row>
        )}
        <InputField
          placeholder="Destination address"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        {amount > balance && (
          <Row style={{ marginBottom: 8 }}>
            <Col>
              <Text type="warning">Not enough balances</Text>
            </Col>
          </Row>
        )}
        <InputField
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
        <ActionButton block size="large" onClick={() => setAmount(balance)}>
          Max: {balance}
        </ActionButton>
      </div>
    </Modal>
  );
}
