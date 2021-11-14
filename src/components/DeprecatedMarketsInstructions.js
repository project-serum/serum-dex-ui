import { Button, Divider, Spin, Typography } from 'antd';
import React from 'react';
import {
  useGetOpenOrdersForDeprecatedMarkets,
  useBalancesForDeprecatedMarkets,
  useUnmigratedOpenOrdersAccounts,
} from '../utils/markets';
import FloatingElement from './layout/FloatingElement';
import CheckOutlined from '@ant-design/icons/lib/icons/CheckOutlined';
import BalancesTable from './UserInfoTable/BalancesTable';
import OpenOrderTable from './UserInfoTable/OpenOrderTable';
import SyncOutlined from '@ant-design/icons/lib/icons/SyncOutlined';

const { Title } = Typography;

export default function DeprecatedMarketsInstructions({ switchToLiveMarkets }) {
  const balances = useBalancesForDeprecatedMarkets();
  const {
    openOrders,
    loaded,
    refreshOpenOrders,
  } = useGetOpenOrdersForDeprecatedMarkets();

  const { refresh } = useUnmigratedOpenOrdersAccounts();
  const needToCancelOrders = !openOrders || openOrders.length > 0;
  const filteredBalances =
    balances &&
    balances.filter(({ orders, unsettled }) => orders > 0 || unsettled > 0);
  const needToSettleFunds = filteredBalances && filteredBalances.length > 0;
  return (
    <FloatingElement>
      <Title level={4} style={{ color: 'rgba(255, 255, 255, 1)' }}>
        Migrate new markets
      </Title>
      <Typography>
        Markets on older versions of the DEX or using Wrapped USDT are now deprecated. To migrate over
        to the new markets, please cancel your orders and settle your funds on old markets. To convert
        from Wrapped USDT to Native USDT use sollet.io.
      </Typography>
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => refresh(true)}>
          <SyncOutlined /> Refresh data
        </Button>
      </div>
      {!balances ? (
        <Spin size="large" />
      ) : (
        <>
          <Divider>
            {!needToCancelOrders && <CheckOutlined />} Cancel your orders
          </Divider>
          {needToCancelOrders ? (
            loaded ? (
              <OpenOrderTable
                openOrders={openOrders}
                onCancelSuccess={() => {
                  setTimeout(() => {
                    refresh();
                    refreshOpenOrders();
                  }, 1000); // Wait so that on-chain account state reflects the update
                }}
              />
            ) : (
              <Spin size="large" />
            )
          ) : null}
          <Divider>
            {!needToSettleFunds && <CheckOutlined />} Settle your funds
          </Divider>
          {needToSettleFunds && (
            <BalancesTable
              balances={filteredBalances}
              hideWalletBalance
              showMarket
              onSettleSuccess={() => {
                setTimeout(refresh, 1000); // Wait so that on-chain account state reflects the update
              }}
            />
          )}
          <Divider>Switch to upgraded markets</Divider>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={switchToLiveMarkets}
              disabled={needToSettleFunds || needToCancelOrders}
            >
              Switch to new markets
            </Button>
          </div>
        </>
      )}
    </FloatingElement>
  );
}
