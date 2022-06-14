import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicAlert from './basic';
import MoreAlert from './more';
import ClosableAlert from './closable';
import DescriptionAlert from './description';
import IconAlert from './icon';

export default function Alert() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Feedback"
            breadCrumbActive="Alert"
          />

          <PageTitle
            pageTitle="Alert"
            pageText="Alert component for feedback."
          />
        </Row>
      </Col>

      <Col xl={24} xs={24}>
        <BasicAlert />
      </Col>

      <Col xl={24} xs={24}>
        <ClosableAlert />
      </Col>

      <Col xl={24} xs={24}>
        <IconAlert />
      </Col>

      <Col xl={24} xs={24}>
        <MoreAlert />
      </Col>

      <Col xl={24} xs={24}>
        <DescriptionAlert />
      </Col>
    </Row>
  );
}
