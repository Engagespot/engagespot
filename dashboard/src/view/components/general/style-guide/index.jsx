import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import HtmlTags from './htmlTags';
import ThemeColors from './themeColors';
import BlacksGradients from './blacksGradients';

export default function StyleGuide() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="General"
            breadCrumbActive="Style Guide"
          />

          <PageTitle
            pageTitle="Style Guide"
            pageText="This is base of Yoda UI Style with typography and colors."
          />
        </Row>
      </Col>

      <Col span={24}>
        <HtmlTags />
      </Col>

      <Col span={24}>
        <ThemeColors />
      </Col>

      <Col span={24}>
        <BlacksGradients />
      </Col>
    </Row>
  );
}
