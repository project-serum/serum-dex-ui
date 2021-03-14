import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import styled from 'styled-components';
import { Button, Row, Col, Typography } from 'antd';
import DataTable from '../layout/DataTable';
import TransactionsApi from '../../utils/transactionsApi';
import { useWallet } from '../../utils/wallet';

const ExportButton = styled(Button)`
  color: #2abdd2;
  background-color: #212734;
  border-width: 0px;
  text-decoration: none;
`;

export default function TradeExporter() {
  const [transactionData, setTransactionData] = useState({});
  const { wallet, connected } = useWallet();

  useEffect(() => {
    (async () => {
      if (connected) {
        const data = await TransactionsApi.getTransactionData(
          wallet.publicKey.toBase58(),
        );
        setTransactionData(data);
      } else {
        setTransactionData({});
      }
    })();
  }, [wallet, connected]);

  useEffect(() => {}, []);

  const columns = [
    {
      title: 'Date and Time',
      dataIndex: 'date_and_time',
      key: 'date_and_time',
    },
    {
      title: `Sent Quantity`,
      dataIndex: 'sent_quantity',
      key: 'sent_quantity',
    },
    {
      title: `Sent Currency`,
      dataIndex: 'sent_currency',
      key: 'sent_currency',
    },
    {
      title: `Received Quantity`,
      dataIndex: 'received_quantity',
      key: 'received_quantity',
    },
    {
      title: `Received Currency`,
      dataIndex: 'received_currency',
      key: 'received_currency',
    },
    {
      title: `Fee`,
      dataIndex: 'fee',
      key: 'fee',
    },
    {
      title: `Fee Currency`,
      dataIndex: 'fee_currency',
      key: 'fee_currency',
    },
  ];
  return (
    <>
      <Row>
        <Col span={24}>
          <div style={{ marginBottom: 5 }}>
            {transactionData.data && (
              <ExportButton>
                <CSVLink
                  data={transactionData.data}
                  filename={`serum_trades_${
                    connected ? wallet.publicKey.toBase58() : ''
                  }`}
                  headers={transactionData.columns}
                >
                  Download CSV
                </CSVLink>
              </ExportButton>
            )}
          </div>
          <DataTable
            dataSource={transactionData.data}
            columns={columns}
            pagination={true}
            pageSize={5}
            emptyLabel={connected ? 'No transactions' : 'Connect Wallet'}
            exportable
          />
        </Col>
      </Row>

      <Row style={{ marginTop: 8 }}>
        <Col>
          <Typography>
            CSV is formatted using{' '}
            <a href="https://help.taxbit.com/hc/en-us/articles/360047756913-Importing-transactions-manually-with-a-CSV-file">
              TaxBit importer specifications
            </a>
          </Typography>
        </Col>
      </Row>
    </>
  );
}
