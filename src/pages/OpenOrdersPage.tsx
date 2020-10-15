import React from 'react';
import FloatingElement from '../components/layout/FloatingElement';
import {getMarketInfos, useAllOpenOrders, useMarket} from "../utils/markets";
import AllOpenOrderTable from "../components/UserInfoTable/AllOpenOrdersTable";
import OpenOrderTable from "../components/UserInfoTable/OpenOrderTable";

export default function OpenOrdersPage() {
  const {openOrders, loaded, refreshOpenOrders} = useAllOpenOrders();
  let {customMarkets} = useMarket();
  let marketInfos = getMarketInfos(customMarkets);
  let marketAddressesToNames = Object.fromEntries(marketInfos.map(info => [info.address.toBase58(), info.name]));

  const dataSource = (openOrders || []).map((orderInfos) =>
    orderInfos.orders.map(order => {
      return {
        marketName: marketAddressesToNames[orderInfos.marketAddress],
        side: order.side,
        size: order.size,
        price: order.price,
        orderId: order.orderId,
        key: order.orderId,
      };
    })
  ).flat();
  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <OpenOrderTable openOrders={dataSource} />
    </FloatingElement>
  );
}
