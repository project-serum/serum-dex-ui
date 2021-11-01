import React from 'react';
import FloatingElement from '../components/layout/FloatingElement';
import {
  useAllMarkets,
  useAllOpenOrders,
  useMarketInfos,
} from '../utils/markets';
import OpenOrderTable from '../components/UserInfoTable/OpenOrderTable';
import { Button, Row } from 'antd';
import { OrderWithMarketAndMarketName } from '../utils/types';
import { useWallet } from '../utils/wallet';
import WalletConnect from '../components/WalletConnect';

export default function OpenOrdersPage() {
  const { connected } = useWallet();
  const { openOrders, loaded, refreshOpenOrders } = useAllOpenOrders();
  let marketInfos = useMarketInfos();
  let marketAddressesToNames = Object.fromEntries(
    marketInfos.map((info) => [info.address.toBase58(), info.name]),
  );
  let [allMarkets] = useAllMarkets();
  const marketsByAddress = Object.fromEntries(
    (allMarkets || []).map((marketInfo) => [
      marketInfo.market.address.toBase58(),
      marketInfo.market,
    ]),
  );

  const dataSource: OrderWithMarketAndMarketName[] = (openOrders || [])
    .map((orderInfos) =>
      orderInfos.orders.map((order) => {
        return {
          marketName: marketAddressesToNames[orderInfos.marketAddress],
          market: marketsByAddress[orderInfos.marketAddress],
          ...order,
        };
      }),
    )
    .flat();

  if (!connected) {
    return (
      <Row
        justify="center"
        style={{
          marginTop: '10%',
        }}
      >
        <WalletConnect />
      </Row>
    );
  }

  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <Button onClick={refreshOpenOrders} loading={!loaded}>
        Refresh
      </Button>
      <OpenOrderTable
        openOrders={dataSource}
        pageSize={25}
        loading={!loaded}
        onCancelSuccess={refreshOpenOrders}
        marketFilter
      />
    </FloatingElement>
  );
}
