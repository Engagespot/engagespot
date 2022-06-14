import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import CollapseCard from './collapse';
import AccordionCard from './accordion';

export default function Collapse() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Collapse"
          />

          <PageTitle
            pageTitle="Collapse"
            pageText="A content area which can be collapsed and expanded."
          />
        </Row>
      </Col>

      <Col span={24}>
        <CollapseCard />
      </Col>

      <Col span={24}>
        <AccordionCard />
      </Col>
    </Row>
  );
}
