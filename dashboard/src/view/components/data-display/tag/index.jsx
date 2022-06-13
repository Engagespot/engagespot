import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicTag from './basic';
import TagColorful from './colorful';
import TagStatus from './status';

export default function Tags() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Tag"
          />

          <PageTitle
            pageTitle="Tag"
            pageText="Tag for categorizing or markup."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicTag />
      </Col>

      <Col span={24}>
        <TagStatus />
      </Col>

      <Col span={24}>
        <TagColorful />
      </Col>
    </Row>
  );
}
