import React from 'react';
import DataTable from '../layout/DataTable';
import { useWallet } from '../../utils/wallet';
import { Col, Row, Tabs, Tag } from 'antd';
import { Account, Instruction, useSerumInstruction } from './dfuse/use-serum-instruction';
import { MarketInfo } from '../../utils/types';
import { MARKETS } from '@project-serum/serum';
import { useBalances } from '../../utils/markets';
import BalancesTable from './BalancesTable';
import { PublicKey } from '@solana/web3.js';
import Link from '../Link';

// Used in debugging, should be false in production
const _IGNORE_DEPRECATED = false;

const USE_MARKETS: MarketInfo[] = _IGNORE_DEPRECATED
  ? MARKETS.map((m) => ({ ...m, deprecated: false }))
  : MARKETS;


const TrxSignature:React.FC<{trxSignature: string}> = ({ trxSignature }) => {
  return (
    <Link
      external
      to={'https://explorer.solana.com/tx/' + trxSignature}
    >
      {trxSignature.slice(0, 8)}...{trxSignature.slice(trxSignature.length - 8)}
    </Link>
  )
}

const resolveMarket = (marketAddress: string): string => {
  let marketName = marketAddress;
  USE_MARKETS.map(market => {
    if (market.address.toString() == marketAddress) {
      marketName = market.name;
    }
  });
  return marketName;
};

const renderInstructionDetails = (instruction: Instruction) => {
  switch (instruction.instruction.__typename) {
    case 'SerumSettleFunds':
      return (
        <div>
          <strong>No input data</strong>
        </div>
      );
    case 'SerumNewOrder':
      return (
        <div>
          <strong>Side:</strong> {instruction.instruction.side}<br />
          <strong>Limit Price:</strong> {instruction.instruction.limitPrice}<br />
          <strong>Max Quantity:</strong> {instruction.instruction.maxQuantity}<br />
          <strong>Order Type:</strong> {instruction.instruction.orderType}<br />
          <strong>Client Id:</strong> {instruction.instruction.clientID}<br />
        </div>
      );
    case 'SerumMatchOrder':
      return (
        <div>
          <strong>Limit:</strong> {instruction.instruction.limit}<br />
        </div>
      );
    case 'SerumInitializeMarket':
      return (
        <div>
          <strong>Base Lot Size:</strong> {instruction.instruction.baseLotSize}<br />
          <strong>Quote Lot Size:</strong> {instruction.instruction.quoteLotSize}<br />
          <strong>Fee Rate Bps:</strong> {instruction.instruction.feeRateBps}<br />
          <strong>Vault Signer Nonce:</strong> {instruction.instruction.vaultSignerNonce}<br />
          <strong>Quote Dust Threshold:</strong> {instruction.instruction.quoteLotSize}
        </div>
      );
    case 'SerumConsumeEvents':
      return (
        <div>
          <strong>Limit:</strong> {instruction.instruction.limit}<br />
        </div>
      );
    case 'SerumCancelOrderByClientId':
      return (
        <div>
          <strong>Client ID:</strong> {instruction.instruction.clientID}<br />
        </div>
      );
    case 'SerumCancelOrder':
      return (
        <div>
          <strong>Side: </strong> {instruction.instruction.side}<br />
          <strong>Order Id: </strong> {instruction.instruction.orderId}<br />
          <strong>Open Orders: </strong> {instruction.instruction.openOrders}<br />
          <strong>Open Order Slot: </strong> {instruction.instruction.openOrderSlot}<br />
        </div>
      );
  }

};

const renderAccount = (display: string, account: Account | undefined) => {
  if (!account) {
    return null;
  }

  return (
    <><Col span={6}><strong>{display}</strong></Col>
      <Col span={18}>
        <code>{account.publicKey}</code>
        {account.isWritable && <Tag color={'warning'} style={{ marginLeft: '10px' }}>Writable</Tag>}
        {account.isSigner && <Tag color={'green'} style={{ marginLeft: '10px' }}>Signer</Tag>}
      </Col>
    </>
  );
};

const renderInstructionAddresses = (instruction: Instruction) => {
  switch (instruction.instruction.__typename) {
    case 'SerumSettleFunds':
      return (
        <Row>
          {renderAccount('Open Orders', instruction.instruction.accounts.openOrders)} <br />
          {renderAccount('Owner', instruction.instruction.accounts.owner)} <br />
          {renderAccount('Coin Vault', instruction.instruction.accounts.coinVault)} <br />
          {renderAccount('PC Vault', instruction.instruction.accounts.pcVault)} <br />
          {renderAccount('Coin Wallet', instruction.instruction.accounts.coinWallet)} <br />
          {renderAccount('PC Wallet', instruction.instruction.accounts.pcWallet)} <br />
          {renderAccount('Signer', instruction.instruction.accounts.signer)} <br />
          {renderAccount('SPL Token Program', instruction.instruction.accounts.splTokenProgram)} <br />
          {renderAccount('Referrer PC Wallet', instruction.instruction.accounts.referrerPCWallet)}
        </Row>
      );
    case 'SerumNewOrder':
      return (
        <Row>
          {renderAccount('Open Orders', instruction.instruction.accounts.openOrders)} <br />
          {renderAccount('Request Queue', instruction.instruction.accounts.requestQueue)} <br />
          {renderAccount('Payer', instruction.instruction.accounts.payer)} <br />
          {renderAccount('Owner', instruction.instruction.accounts.owner)} <br />
          {renderAccount('Coin Vault', instruction.instruction.accounts.coinVault)} <br />
          {renderAccount('PC Vault', instruction.instruction.accounts.pcVault)} <br />
          {renderAccount('SPL Token Program', instruction.instruction.accounts.splTokenProgram)} <br />
          {renderAccount('Rent', instruction.instruction.accounts.rent)} <br />
          {renderAccount('SRM Discount', instruction.instruction.accounts.srmDiscount)}
        </Row>
      );
    case 'SerumMatchOrder':
      return (
        <Row>
          {renderAccount('Request Queue', instruction.instruction.accounts.requestQueue)} <br />
          {renderAccount('Event Queue', instruction.instruction.accounts.eventQueue)} <br />
          {renderAccount('Bids', instruction.instruction.accounts.bids)} <br />
          {renderAccount('Asks', instruction.instruction.accounts.asks)} <br />
          {renderAccount('Coin Fee Receivable', instruction.instruction.accounts.coinFeeReceivable)} <br />
          {renderAccount('PC Fee Receivable', instruction.instruction.accounts.pcFeeReceivable)} <br />
        </Row>
      );
    case 'SerumInitializeMarket':
      return (
        <Row>
          {renderAccount('SPL Coin Token', instruction.instruction.accounts.splCoinToken)} <br />
          {renderAccount('SPL Price Token', instruction.instruction.accounts.splPriceToken)} <br />
          {renderAccount('Coin Mint', instruction.instruction.accounts.coinMint)} <br />
          {renderAccount('Price Mint', instruction.instruction.accounts.priceMint)} <br />
        </Row>
      );
    case 'SerumConsumeEvents':
      return (
        <Row>
          {renderAccount('Event Queue', instruction.instruction.accounts.eventQueue)} <br />
          {renderAccount('Coin Fee Receivable', instruction.instruction.accounts.coinFeeReceivable)} <br />
          {renderAccount('PC Fee Receivable', instruction.instruction.accounts.pcFeeReceivable)} <br />
        </Row>);
    case 'SerumCancelOrderByClientId':
      return (
        <Row>
          {renderAccount('Open Orders', instruction.instruction.accounts.openOrders)} <br />
          {renderAccount('Request Queue', instruction.instruction.accounts.requestQueue)} <br />
          {renderAccount('Owner', instruction.instruction.accounts.owner)} <br />
        </Row>
      );
    case 'SerumCancelOrder':
      return (
        <Row>
          {renderAccount('Request Queue', instruction.instruction.accounts.requestQueue)} <br />
          {renderAccount('Owner', instruction.instruction.accounts.owner)} <br />
        </Row>
      );
  }

};


const columns = [
  {
    title: 'Instruction',
    dataIndex: 'instruction',
    key: 'instruction',
    render: (_, instruction: Instruction) => {
      switch (instruction.instruction.__typename) {
        case 'SerumCancelOrder':
          return 'Cancel Order';
        case 'SerumCancelOrderByClientId':
          return 'Cancel Order by Client Id';
        case 'SerumConsumeEvents':
          return 'Consume Events';
        case 'SerumInitializeMarket':
          return 'Initialize Market';
        case 'SerumMatchOrder':
          return 'Match Order';
        case 'SerumNewOrder':
          return 'New order';
        case 'SerumSettleFunds':
          return 'Settle Funds';
      }
      return 'Unknown';
    },
  },
  {
    title: 'Market',
    dataIndex: 'market',
    key: 'market',
    render: (_, instruction: Instruction) => {
      if (instruction.instruction?.accounts?.market) {
        return resolveMarket(instruction.instruction.accounts.market.publicKey);
      }
      return 'n/a';
    },
  },
  {
    title: 'Details',
    dataIndex: 'details',
    key: 'details',
    render: (_, instruction: Instruction) => {
      return renderInstructionDetails(instruction);
    },
  },
  {
    title: 'Trx Signature',
    dataIndex: 'trxSignature',
    key: 'trxSignature',
    render: (_, instruction: Instruction) => {

      return <TrxSignature trxSignature={instruction.trxSignature} />
    },
  },
  {
    title: 'Addresses',
    dataIndex: 'addresses',
    key: 'addresses',
    width: 600,
    render: (_, instruction: Instruction) => {
      return renderInstructionAddresses(instruction);
    },
  }];

export const InstructionTable:React.FC<{walletAddress: PublicKey}> = ({ walletAddress }) =>{
  const publicKey = walletAddress.toString();
  const {
    instructions,
    isStreaming,
  } = useSerumInstruction({
    account: publicKey,
  });


  const dataSource = (instructions || []).map((instruction, index) => ({
    ...instruction,
    key: `${index}`,
  }));


  return (
    <Row>
      <Col span={24}>
        <DataTable
          emptyLabel="No open orders"
          dataSource={dataSource}
          columns={columns}
          pagination={true}
        />
      </Col>
    </Row>
  );
}



export const InstructionTab = () => {
  const { wallet } = useWallet()
  if(wallet && wallet.publicKey) {
    return <InstructionTable walletAddress={wallet.publicKey}/>;
  }

  return (
    <p>Connect a wallet to see your instruction history.</p>
  )
};
