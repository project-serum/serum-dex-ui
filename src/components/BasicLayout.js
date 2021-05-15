import { Layout } from 'antd';
import React from 'react';
import { CustomFooter as Footer } from './Footer';
import TopBar from './TopBar';
import { HideOnMobile } from './HideOnMobile';

const { Header, Content } = Layout;

export default function BasicLayout({ children }) {
  return (
    <React.Fragment>
      <Layout
        style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
      >
        <HideOnMobile>
          <Header style={{ padding: 0, minHeight: 64, height: 'unset' }}>
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
