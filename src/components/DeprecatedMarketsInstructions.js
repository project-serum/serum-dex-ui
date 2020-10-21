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
import Link from './Link';
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
        Migrate to new USDC markets
      </Title>
      <Typography>
        <Link
          external
          to={
            'https://explorer.solana.com/address/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
          }
        >
          Native USDC
        </Link>{' '}
        has arrived on Solana! See{' '}
        <Link
          external
          to={
            'https://www.circle.com/blog/circle-partners-with-alameda-research-ftx-project-serum-to-introduce-support-for-usdc-on-solana'
          }
        >
          Circle's announcement
        </Link>{' '}
        for more information.
      </Typography>
      <br />
      <Typography>
        Serum is transitioning from the previous{' '}
        <Link
          external
          to={
            'https://explorer.solana.com/address/BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW'
          }
        >
          Wrapped USDC
        </Link>
        , now called WUSDC, to Native USDC. You can convert from WUSDC to USDC
        directly on{' '}
        <Link external to={'https://sollet.io'}>
          sollet.io
        </Link>
        , or can deposit WUSDC and be credited USDC on exchanges like{' '}
        <Link external to={'https://ftx.com'}>
          FTX
        </Link>
        .
      </Typography>
      <br />
      <Typography>
        Markets with WUSDC as the quote curency are now deprecated. To migrate
        over to the new USDC markets, please cancel your orders and settle your
        funds on old markets.
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
