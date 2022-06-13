import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { Layout, Row, Col } from 'antd';

import Sidebar from './components/menu/Sidebar';
import MenuHeader from './components/header';
import MenuFooter from './components/footer';

const { Content } = Layout;

export default function VerticalLayout(props) {
  const { children } = props;

  const [visible, setVisible] = useState(false);

  // Redux
  const customise = useSelector(state => state.customise);

  return (
    <Layout className="da-app-layout">
      <Sidebar visible={visible} setVisible={setVisible} />

      <Layout className="da-bg-color-dark-90">
        <MenuHeader setVisible={setVisible} />

        <Content className="da-content-main">
          <Row justify="center">
            {customise.contentWidth == 'full' && (
              <Col span={24}>{children}</Col>
            )}

            {customise.contentWidth == 'boxed' && (
              <Col xxl={20} xl={22} span={24}>
                {children}
              </Col>
            )}
          </Row>
        </Content>

        <MenuFooter />
      </Layout>
    </Layout>
  );
}
