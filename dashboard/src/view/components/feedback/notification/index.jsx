import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicNotification from './basic';
import DurationNotification from './duration';
import IconNotification from './icon';
import CustomCloseNotification from './customClose';

export default function Notification() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Feedback"
            breadCrumbActive="Notification"
          />

          <PageTitle
            pageTitle="Notification"
            pageText="Display a notification message globally."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicNotification />
      </Col>

      <Col span={24}>
        <DurationNotification />
      </Col>

      <Col span={24}>
        <IconNotification />
      </Col>

      <Col span={24}>
        <CustomCloseNotification />
      </Col>
    </Row>
  );
}
