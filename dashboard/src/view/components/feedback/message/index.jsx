import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import NormalMessage from './normal';
import TypesMessage from './types';
import DurationMessage from './duration';
import LoadingIndicatorMessage from './loading';

export default function Message() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Feedback"
            breadCrumbActive="Message"
          />

          <PageTitle
            pageTitle="Message"
            pageText="Display global messages as feedback in response to user operations."
          />
        </Row>
      </Col>

      <Col span={24}>
        <NormalMessage />
      </Col>

      <Col span={24}>
        <DurationMessage />
      </Col>

      <Col span={24}>
        <TypesMessage />
      </Col>

      <Col span={24}>
        <LoadingIndicatorMessage />
      </Col>
    </Row>
  );
}
