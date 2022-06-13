import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicTimeline from './basic';
import AlternateTimeline from './alternate';
import LabelTimeline from './label';

export default function Timeline() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Timeline"
          />

          <PageTitle
            pageTitle="Timeline"
            pageText="Vertical display timeline."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicTimeline />
      </Col>

      <Col span={24}>
        <LabelTimeline />
      </Col>

      <Col span={24}>
        <AlternateTimeline />
      </Col>
    </Row>
  );
}
