import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import SuccessResult from './success';
import InfoResult from './info';
import WarningResult from './warning';
import ErrorResult from './error';

export default function Result() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Feedback"
            breadCrumbActive="Result"
          />

          <PageTitle
            pageTitle="Result"
            pageText="A panel which slides in from the edge of the screen."
          />
        </Row>
      </Col>

      <Col span={24}>
        <SuccessResult />
      </Col>

      <Col span={24}>
        <InfoResult />
      </Col>

      <Col span={24}>
        <WarningResult />
      </Col>

      <Col span={24}>
        <ErrorResult />
      </Col>
    </Row>
  );
}
