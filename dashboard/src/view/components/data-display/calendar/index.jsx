import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicCalendar from './basic';
import NoticeCalendar from './notice';
import CardCalendar from './cardCalendar';

export default function Calendar() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Calendar"
          />

          <PageTitle
            pageTitle="Calendar"
            pageText="Container for displaying data in calendar form."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicCalendar />
      </Col>

      <Col span={24}>
        <NoticeCalendar />
      </Col>

      <Col span={24}>
        <CardCalendar />
      </Col>
    </Row>
  );
}
