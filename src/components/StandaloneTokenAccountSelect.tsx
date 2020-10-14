import React from 'react';
import {TokenAccount} from "../utils/types";
import styled from 'styled-components';
import {useSelectedTokenAccounts} from "../utils/markets";
import {Button, Col, Row, Select, Typography} from "antd";
import {CopyOutlined} from '@ant-design/icons';
import {abbreviateAddress} from "../utils/utils";
import {notify} from "../utils/notifications";

const RowBox = styled(Row)`
  padding-bottom: 10px;
`;

export default function StandaloneTokenAccountsSelect({
  accounts,
  mint
}: {
  accounts: TokenAccount[] | null | undefined,
  mint: string | undefined
}) {
  const [selectedTokenAccounts, setSelectedTokenAccounts] = useSelectedTokenAccounts();

  let selectedValue: string | undefined;
  if (mint && mint in selectedTokenAccounts) {
    selectedValue = selectedTokenAccounts[mint];
  } else if (accounts && accounts?.length > 0) {
    selectedValue = accounts[0].pubkey.toBase58();
  } else {
    selectedValue = undefined;
  }

  const setTokenAccountForCoin = (value) => {
    if (!mint) {
      notify({
        message: 'Error selecting token account',
        description: 'Mint is undefined',
        type: 'error',
      })
      return;
    }
    const newSelectedTokenAccounts = {...selectedTokenAccounts};
    newSelectedTokenAccounts[mint] = value;
    setSelectedTokenAccounts(newSelectedTokenAccounts);
  }

  return (
    <React.Fragment>
      <RowBox align="middle" >
        <Col span={8}>
          Token account:
        </Col>
        <Col span={13}>
          <Select
            style={{ width: '100%' }}
            value={selectedValue}
            onSelect={setTokenAccountForCoin}
          >
            {accounts?.map(account => (
              <Select.Option key={account.pubkey.toBase58()} value={account.pubkey.toBase58()}>
                <Typography.Text code>{abbreviateAddress(account.pubkey, 8)}</Typography.Text>
              </Select.Option>)
            )}
          </Select>
        </Col>
        <Col span={2} offset={1}>
          <Button
            shape="round"
            icon={<CopyOutlined />}
            size={'small'}
            onClick={() => selectedValue && navigator.clipboard.writeText(selectedValue)}
          />
        </Col>
      </RowBox>
    </React.Fragment>
  );
}
