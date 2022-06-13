import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import NormalDrawer from './basic';
import CustomDrawer from './custom';
import SubmitDrawer from './submit';
import MultiDrawer from './multi';

export default function Drawer() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Feedback"
            breadCrumbActive="Drawer"
          />

          <PageTitle
            pageTitle="Drawer"
            pageText="A panel which slides in from the edge of the screen."
          />
        </Row>
      </Col>

      <Col span={24}>
        <NormalDrawer />
      </Col>

      <Col span={24}>
        <SubmitDrawer />
      </Col>

      <Col span={24}>
        <CustomDrawer />
      </Col>

      <Col span={24}>
        <MultiDrawer />
      </Col>
    </Row>
  );
}
