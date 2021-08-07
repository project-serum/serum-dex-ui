import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { HideOnMobile } from './HideOnMobile';

import { CustomFooter as Footer } from './Footer';
import TopBar from './TopBar';
import { useReferrer } from '../utils/referrer';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { notify } from '../utils/notifications';
const { Header, Content } = Layout;

export default function BasicLayout({ children }) {
  const { refCode, setRefCode, allowRefLink } = useReferrer();
  const { search } = useLocation();
  const parsed = queryString.parse(search);

  useEffect(() => {
    if (!!parsed.refCode && parsed.refCode !== refCode && allowRefLink) {
      notify({ message: `New referrer ${parsed.refCode} added` });
      setRefCode(parsed.refCode);
    }
  }, [parsed, refCode, setRefCode, allowRefLink]);

  return (
    <React.Fragment>
      <Layout
        style={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          backgroundColor: '#121010',
        }}
      >
        <HideOnMobile>
          <Header
            style={{
              padding: 0,
              minHeight: 64,
              height: 'unset',
              backgroundColor: 'black',
            }}
          >
            <TopBar />
          </Header>
        </HideOnMobile>
        <Content style={{ flex: 1 }}>{children}</Content>
        <HideOnMobile>
          <Footer />
        </HideOnMobile>
      </Layout>
    </React.Fragment>
  );
}
