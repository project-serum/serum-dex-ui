import { Divider, Typography, Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import {
  useMarket,
  useOpenOrders,
  useBalances,
  useMarketsList,
  DEFAULT_MARKET,
} from '../utils/markets';
import FloatingElement from './layout/FloatingElement';
import CheckOutlined from '@ant-design/icons/lib/icons/CheckOutlined';
import BalancesTable from './UserInfoTable/BalancesTable';
import OpenOrderTable from './UserInfoTable/OpenOrderTable';

const Title = styled.div`
  color: rgba(255, 255, 255, 1);
`;

export default function DeprecatedMarketInstructions() {
  const { marketName, setMarketAddress } = useMarket();
  const liveMarkets = useMarketsList();
  const openOrders = useOpenOrders();
  const balances = useBalances();

  const needToCancelOrders = !openOrders || openOrders.length > 0;
  const needToSettleFunds =
    !balances ||
    balances.some(({ orders, unsettled }) => orders > 0 || unsettled > 0);
  const liveMarket =
    liveMarkets.find(({ name }) => name === marketName) || DEFAULT_MARKET;
  console.log('liveMarkets', liveMarkets);
  return (
    <FloatingElement>
      <Title>Migrate off of deprecated market</Title>
      <br />
      <Typography>
        This {marketName} market is deprecated (inactive).
      </Typography>
      <br />
      <Typography>
        To transition to the new and upgraded {marketName} market, please do the
        following:
      </Typography>
      <br />
      <Divider>
        {!needToCancelOrders && <CheckOutlined />} Cancel your orders
      </Divider>
      {needToCancelOrders && <OpenOrderTable openOrders={openOrders} />}
      <Divider>
        {!needToSettleFunds && <CheckOutlined />} Settle your funds
      </Divider>
      {needToSettleFunds && <BalancesTable balances={balances} />}
      <Divider>Switch to new market</Divider>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={() =>
            liveMarket?.address &&
            setMarketAddress(liveMarket.address.toBase58())
          }
          disabled={needToSettleFunds || needToCancelOrders}
        >
          Switch to live {liveMarket.name} market
        </Button>
      </div>
    </FloatingElement>
  );
}
