import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Col, Popover, Row, Select, Typography, Button } from 'antd';
import styled from 'styled-components';
import Orderbook from '../components/Orderbook';
import UserInfoTable from '../components/UserInfoTable';
import StandaloneBalancesDisplay from '../components/StandaloneBalancesDisplay';
import {
  useMarket,
  useMarketsList,
  useUnmigratedDeprecatedMarkets,
} from '../utils/markets';
import TradeForm from '../components/TradeForm';
import TradesTable from '../components/TradesTable';
import LinkAddress from '../components/LinkAddress';
import DeprecatedMarketsInstructions from '../components/DeprecatedMarketsInstructions';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;

export default function TradePage() {
  const { marketName, market } = useMarket();
  const markets = useMarketsList();
  const [handleDeprecated, setHandleDeprecated] = useState(false);
  const deprecatedMarkets = useUnmigratedDeprecatedMarkets();
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    document.title = marketName ? `${marketName} — Serum` : 'Serum';
  }, [marketName]);

  const changeOrderRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const width = dimensions?.width;
  const componentProps = {
    onChangeOrderRef: (ref) => (changeOrderRef.current = ref),
    onPrice: useCallback(
      (price) => changeOrderRef.current && changeOrderRef.current({ price }),
      [],
    ),
    onSize: useCallback(
      (size) => changeOrderRef.current && changeOrderRef.current({ size }),
      [],
    ),
  };
  const getComponent = useCallback(() => {
    if (handleDeprecated) {
      return (
        <DeprecatedMarketsPage
          switchToLiveMarkets={() => setHandleDeprecated(false)}
        />
      );
    } else if (width < 1000) {
      return <RenderSmaller {...componentProps} />;
    } else if (width < 1450) {
      return <RenderSmall {...componentProps} />;
    } else {
      return <RenderNormal {...componentProps} />;
    }
  }, [width, componentProps, handleDeprecated]);

  return (
    <>
      <Wrapper>
        <Row
          align="middle"
          style={{ paddingLeft: 5, paddingRight: 5 }}
          gutter={16}
        >
          <Col>
            <MarketSelector
              markets={markets}
              setHandleDeprecated={setHandleDeprecated}
              placeholder={'Select market'}
            />
          </Col>
          {market ? (
            <Col>
              <Popover
                content={<LinkAddress address={market.publicKey.toBase58()} />}
                placement="bottomRight"
                title="Market address"
                trigger="click"
              >
                <InfoCircleOutlined style={{ color: '#2abdd2' }} />
              </Popover>
            </Col>
          ) : null}
          {deprecatedMarkets && deprecatedMarkets.length > 0 && (
            <React.Fragment>
              <Col>
                <Typography>
                  You have unsettled funds on old markets! Please go through
                  them to claim your funds.
                </Typography>
              </Col>
              <Col>
                <Button onClick={() => setHandleDeprecated(!handleDeprecated)}>
                  {handleDeprecated ? 'View new markets' : 'Handle old markets'}
                </Button>
              </Col>
            </React.Fragment>
          )}
        </Row>
        {getComponent()}
      </Wrapper>
    </>
  );
}

function MarketSelector({ markets, placeholder, setHandleDeprecated }) {
  const { market, setMarketAddress } = useMarket();

  const onSetMarketAddress = (marketAddress) => {
    setHandleDeprecated(false);
    setMarketAddress(marketAddress);
  };

  const extractBase = (a) => a.split('/')[0];
  const extractQuote = (a) => a.split('/')[1];

  return (
    <Select
      showSearch
      size={'large'}
      style={{ width: 200 }}
      placeholder={placeholder || 'Select a market'}
      optionFilterProp="name"
      onSelect={onSetMarketAddress}
      listHeight={400}
      value={markets
        .find(
          (proposedMarket) =>
            market?.address && proposedMarket.address.equals(market.address),
        )
        ?.address?.toBase58()}
      filterOption={(input, option) =>
        option.name.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {markets
        .sort((a, b) =>
          extractQuote(a.name) === 'USDT' && extractQuote(b.name) !== 'USDT'
            ? -1
            : extractQuote(a.name) !== 'USDT' && extractQuote(b.name) === 'USDT'
            ? 1
            : 0,
        )
        .sort((a, b) =>
          extractBase(a.name) < extractBase(b.name)
            ? -1
            : extractBase(a.name) > extractBase(b.name)
            ? 1
            : 0,
        )
        .map(({ address, name, deprecated }, i) => (
          <Option
            value={address.toBase58()}
            key={address}
            name={name}
            style={{
              padding: '10px 0',
              textAlign: 'center',
              backgroundColor: i % 2 === 0 ? 'rgb(39, 44, 61)' : null,
            }}
          >
            {name} {deprecated ? ' (Deprecated)' : null}
          </Option>
        ))}
    </Select>
  );
}

const DeprecatedMarketsPage = ({ switchToLiveMarkets }) => {
  return (
    <>
      <Row>
        <Col flex="auto">
          <DeprecatedMarketsInstructions
            switchToLiveMarkets={switchToLiveMarkets}
          />
        </Col>
      </Row>
    </>
  );
};

const RenderNormal = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <Row
      style={{
        minHeight: '800px',
        flexWrap: 'nowrap',
      }}
    >
      <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
        <UserInfoTable />
      </Col>
      <Col flex={'360px'} style={{ height: '100%' }}>
        <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
        <TradesTable smallScreen={false} />
      </Col>
      <Col
        flex="400px"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <TradeForm setChangeOrderRef={onChangeOrderRef} />
        <StandaloneBalancesDisplay />
      </Col>
    </Row>
  );
};

const RenderSmall = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <>
      <Row
        style={{
          height: '800px',
        }}
      >
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <Orderbook
            smallScreen={true}
            depth={13}
            onPrice={onPrice}
            onSize={onSize}
          />
        </Col>
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <TradesTable smallScreen={true} />
        </Col>
        <Col
          flex="400px"
          style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <StandaloneBalancesDisplay />
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
          <UserInfoTable />
        </Col>
      </Row>
    </>
  );
};

const RenderSmaller = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <>
      <Row>
        <Col xs={24} sm={12} style={{ height: '100%', display: 'flex' }}>
          <TradeForm style={{ flex: 1 }} setChangeOrderRef={onChangeOrderRef} />
        </Col>
        <Col xs={24} sm={12}>
          <StandaloneBalancesDisplay />
        </Col>
      </Row>
      <Row
        style={{
          height: '500px',
        }}
      >
        <Col xs={24} sm={12} style={{ height: '100%', display: 'flex' }}>
          <Orderbook smallScreen={true} onPrice={onPrice} onSize={onSize} />
        </Col>
        <Col xs={24} sm={12} style={{ height: '100%', display: 'flex' }}>
          <TradesTable smallScreen={true} />
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
          <UserInfoTable />
        </Col>
      </Row>
    </>
  );
};
