import React from 'react';
import FloatingElement from '../components/layout/FloatingElement';
import {
  getMarketInfos,
  useAllMarkets,
  useAllOpenOrders,
  useMarket,
} from '../utils/markets';
import OpenOrderTable from '../components/UserInfoTable/OpenOrderTable';
import { Button } from 'antd';
import { OrderWithMarketAndMarketName } from '../utils/types';

export default function OpenOrdersPage() {
  const { openOrders, loaded, refreshOpenOrders } = useAllOpenOrders();
  let { customMarkets } = useMarket();
  let marketInfos = getMarketInfos(customMarkets);
  let marketAddressesToNames = Object.fromEntries(
    marketInfos.map((info) => [info.address.toBase58(), info.name]),
  );
  let [allMarkets] = useAllMarkets(customMarkets);
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
