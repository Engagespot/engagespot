import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicSkeleton from './basic';
import ComplexSkeleton from './complex';

export default function Skeleton() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Feedback"
            breadCrumbActive="Skeleton"
          />

          <PageTitle
            pageTitle="Skeleton"
            pageText="Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicSkeleton />
      </Col>

      <Col span={24}>
        <ComplexSkeleton />
      </Col>
    </Row>
  );
}
