import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import ProgessBar from './progressBar';
import MiniProgessBar from './miniProgressBar';
import CircleProgessBar from './circleProgressBar';
import MiniCircleProgessBar from './miniCircleProgressBar';

export default function Progress() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Feedback"
            breadCrumbActive="Progress"
          />

          <PageTitle
            pageTitle="Progress"
            pageText="Display the current progress of an operation flow."
          />
        </Row>
      </Col>

      <Col span={24}>
        <ProgessBar />
      </Col>

      <Col span={24}>
        <MiniProgessBar />
      </Col>

      <Col span={24}>
        <CircleProgessBar />
      </Col>

      <Col span={24}>
        <MiniCircleProgessBar />
      </Col>
    </Row>
  );
}
