import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import TopNavigationMenu from './TopNavigation';
import InlineMenu from './inline';
import VerticalMenu from './vertical';
import CollapsedMenu from './collapsed';

export default function Menu() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Navigation"
            breadCrumbActive="Menu"
          />

          <PageTitle
            pageTitle="Menu"
            pageText="A versatile menu for navigation"
          />
        </Row>
      </Col>

      <Col span={24}>
        <TopNavigationMenu />
      </Col>

      <Col span={24}>
        <InlineMenu />
      </Col>

      <Col span={24}>
        <VerticalMenu />
      </Col>

      <Col span={24}>
        <CollapsedMenu />
      </Col>
    </Row>
  );
}
