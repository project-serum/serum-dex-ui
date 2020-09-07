import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Col, Popover, Row, Select, Typography } from 'antd';
import styled from 'styled-components';
import Orderbook from '../components/Orderbook';
import UserInfoTable from '../components/UserInfoTable';
import StandaloneBalancesDisplay from '../components/StandaloneBalancesDisplay';
import {
  useMarket,
  useMarketsList,
  useUnmigratedDeprecatedMarketsList,
} from '../utils/markets';
import TradeForm from '../components/TradeForm';
import TradesTable from '../components/TradesTable';
import LinkAddress from '../components/LinkAddress';
import DeprecatedMarketInstructions from '../components/DeprecatedMarketInstructions';
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
  const { marketName, market, deprecated } = useMarket();
  const markets = useMarketsList();
  const deprecatedMarkets = useUnmigratedDeprecatedMarketsList();
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    document.title = `${marketName} — Serum`;
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
    onPrice: (price) =>
      changeOrderRef.current && changeOrderRef.current({ price }),
    onSize: (size) =>
      changeOrderRef.current && changeOrderRef.current({ size }),
  };
  const getComponent = useCallback(() => {
    if (deprecated) {
      return <RenderDeprecatedMarket />;
    } else if (width < 1000) {
      return <RenderSmaller {...componentProps} />;
    } else if (width < 1450) {
      return <RenderSmall {...componentProps} />;
    } else {
      return <RenderNormal {...componentProps} />;
    }
  }, [width, componentProps, deprecated]);

  return (
    <>
      <Wrapper>
        <Row
          align="middle"
          style={{ paddingLeft: 5, paddingRight: 5 }}
          gutter={16}
        >
          <Col>
            <MarketSelector markets={markets} placeholder={'Select market'} />
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
                  You have unsettled funds on deprecated markets! Please go
                  through them to claim your funds.
                </Typography>
              </Col>
              <Col>
                <MarketSelector
                  markets={deprecatedMarkets}
                  placeholder={'Select deprecated market'}
                />
              </Col>
            </React.Fragment>
          )}
        </Row>
        {getComponent()}
      </Wrapper>
    </>
  );
}

function MarketSelector({ markets, placeholder }) {
  const { market, setMarketAddress } = useMarket();
  return (
    <Select
      size={'large'}
      bordered={true}
      onSelect={setMarketAddress}
      value={markets
        .find(
          (proposedMarket) =>
            market?.address && proposedMarket.address.equals(market.address),
        )
        ?.address?.toBase58()}
      listHeight={400}
      placeholder={placeholder}
    >
      {markets.map(({ address, name, deprecated }, i) => (
        <Option
          value={address.toBase58()}
          key={address}
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

const RenderDeprecatedMarket = () => {
  return (
    <>
      <Row>
        <Col flex="auto">
          <DeprecatedMarketInstructions />
        </Col>
      </Row>
    </>
  );
};

const RenderNormal = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <Row
      style={{
        minHeight: '750px',
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
          height: '750px',
        }}
      >
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <Orderbook
            smallScreen={true}
            depth={12}
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
      <Row style={{ minHeight: '500px' }}>
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
