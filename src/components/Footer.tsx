import React from 'react';
import { Layout, Row, Col, Grid } from 'antd';
import Link from './Link';
import { helpUrls } from './HelpUrls';
import { useReferrer } from '../utils/referrer';
const { Footer } = Layout;
const { useBreakpoint } = Grid;

const footerElements = [
  { description: 'Interstellar Alliance Discord', link: helpUrls.discord },
];

export const CustomFooter = () => {
  const smallScreen = !useBreakpoint().lg;
  const { refCode, allowRefLink } = useReferrer();
  return (
    <Footer
      style={{
        minHeight: '55px',
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      {refCode && allowRefLink && (
        <Row justify="center">Your referrer is {refCode}</Row>
      )}
      <Row align="middle" gutter={[16, 4]}>
        {!smallScreen && (
          <>
            <Col flex="auto" />
            {footerElements.map((elem, index) => {
              return (
                <Col key={index + ''}>
                  <Link external to={elem.link} style={{ color: '#99CCFF'}}>
                    {elem.description}
                  </Link>
                </Col>
              );
            })}
          </>
        )}
        <Col flex="auto">{/*  <DexProgramSelector />*/}</Col>
      </Row>
      <Row justify="center">
        <span style={{
          textAlign: 'center',
          fontSize: 'small',
          padding: '10px 80px',
        }}><strong>Disclaimer: </strong>StarAtlas.exchange is an unofficial site and is not affiliated nor endorsed by Automata S.A. This site is in beta, use at your own risk.</span>
      </Row>
    </Footer>
  );
};
