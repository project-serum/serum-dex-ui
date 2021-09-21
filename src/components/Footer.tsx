import React from 'react';
import { Layout, Row, Col, Grid } from 'antd';
import Link from './Link';
import { helpUrls } from './HelpUrls';
import { useReferrer } from '../utils/referrer';
const { Footer } = Layout;
const { useBreakpoint } = Grid;

const footerElements = [
  {
    description: 'Serum Developer Resources',
    link: helpUrls.developerResources,
  },
  { description: 'Discord', link: helpUrls.discord },
  { description: 'Telegram', link: helpUrls.telegram },
  { description: 'GitHub', link: helpUrls.github },
  { description: 'Project Serum', link: helpUrls.projectSerum },
  { description: 'Solana Network', link: helpUrls.solanaBeach },
];

export const CustomFooter = () => {
  const smallScreen = !useBreakpoint().lg;
  const { refCode, allowRefLink } = useReferrer();
  return (
    <Footer
      style={{
        height: '55px',
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
                  <Link external to={elem.link}>
                    {elem.description}
                  </Link>
                </Col>
              );
            })}
          </>
        )}
        <Col flex="auto">{/*  <DexProgramSelector />*/}</Col>
      </Row>
    </Footer>
  );
};
