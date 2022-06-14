import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicCard from './basic';
import CardNoBorder from './noBorder';
import SimpleCard from './simple';
import CustomizedCard from './customize';
import CardWithTabs from './withTabs';

export default function Cards() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Card"
          />

          <PageTitle
            pageTitle="Card"
            pageText="Simple rectangular container."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicCard />
      </Col>

      <Col span={24}>
        <CustomizedCard />
      </Col>

      <Col span={24}>
        <CardNoBorder />
      </Col>

      <Col span={24}>
        <SimpleCard />
      </Col>

      <Col span={24}>
        <CardWithTabs />
      </Col>
    </Row>
  );
}
