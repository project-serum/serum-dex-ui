import { Button, Divider, Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';
import {
  useGetOpenOrdersForDeprecatedMarkets,
  useBalancesForDeprecatedMarkets,
  useUnmigratedOpenOrdersAccounts,
} from '../utils/markets';
import FloatingElement from './layout/FloatingElement';
import CheckOutlined from '@ant-design/icons/lib/icons/CheckOutlined';
import BalancesTable from './UserInfoTable/BalancesTable';
import OpenOrderTable from './UserInfoTable/OpenOrderTable';

const Title = styled.div`
  color: rgba(255, 255, 255, 1);
`;

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
      <Title>Migrate off of deprecated market</Title>
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
                  }, 1500); // Wait so that on-chain account state reflects the update
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
                setTimeout(refresh, 1500); // Wait so that on-chain account state reflects the update
              }}
            />
          )}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={switchToLiveMarkets}
              disabled={needToSettleFunds || needToCancelOrders}
            >
              Switch to live markets
            </Button>
          </div>
        </>
      )}
    </FloatingElement>
  );
}
