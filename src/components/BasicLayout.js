import { Layout } from 'antd';
import React from 'react';
import { CustomFooter as Footer } from './Footer';
import TopBar from './TopBar';
const { Header, Content } = Layout;

export default function BasicLayout({ children }) {
  return (
    <React.Fragment>
      <Layout
        style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
      >
        {/* <Header style={{ padding: 0, minHeight: 64, height: 'unset' }}>
          <TopBar />
        </Header> */}
        <Content style={{ flex: 1 }}>{children}</Content>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}
