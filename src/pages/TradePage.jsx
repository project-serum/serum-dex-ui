import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Col, Input, Popover, Row, Select } from 'antd';
import styled from 'styled-components';
import Orderbook from '../components/Orderbook';
import UserInfoTable from '../components/UserInfoTable';
import StandaloneBalancesDisplay from '../components/StandaloneBalancesDisplay';
import { useMarket, useMarketsList } from '../utils/markets';
import TradeForm from '../components/TradeForm';
import { useLocalStorageState } from '../utils/utils';
import TradesTable from '../components/TradesTable';
import LinkAddress from '../components/LinkAddress';
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

function hashString(s) {
  var h = 0,
    l = s.length,
    i = 0;
  if (l > 0) while (i < l) h = ((h << 5) - h + s.charCodeAt(i++)) | 0;
  return h;
}

const requirePassword = false;

export default function TradePage() {
  const { market, marketName, setMarketName } = useMarket();
  const markets = useMarketsList();
  const [submittedPassword, setSubmittedPassword] = useLocalStorageState(
    'submittedPassword5',
    false,
  );
  const [password, setPassword] = useState('password');
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
    if (width < 1000) {
      return <RenderSmaller {...componentProps} />;
    } else if (width < 1450) {
      return <RenderSmall {...componentProps} />;
    } else {
      return <RenderNormal {...componentProps} />;
    }
  }, [width, componentProps]);

  if (!submittedPassword && requirePassword) {
    return (
      <Wrapper style={{ width: 400 }}>
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={() => {
            if (hashString(password) === 99071593) {
              setSubmittedPassword(true);
            }
          }}
          block
          type="primary"
          size="large"
        >
          Submit
        </Button>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>
        <Row
          align="middle"
          style={{ paddingLeft: 5, paddingRight: 5 }}
          gutter={16}
        >
          <Col>
            <Select
              size={'large'}
              bordered={true}
              onSelect={setMarketName}
              value={marketName}
              listHeight={400}
            >
              {markets.map(({ name, address }, i) => (
                <Option
                  value={name}
                  key={address}
                  style={{
                    padding: '10px 0',
                    textAlign: 'center',
                    backgroundColor: i % 2 === 0 ? 'rgb(39, 44, 61)' : null,
                  }}
                >
                  {name}
                </Option>
              ))}
            </Select>
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
        </Row>
        {getComponent()}
      </Wrapper>
    </>
  );
}

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
