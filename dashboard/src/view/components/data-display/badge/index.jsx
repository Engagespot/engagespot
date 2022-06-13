import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicBadge from './basic';
import BadgeRed from './redBadge';
import BadgeSizes from './badgeSizes';
import BadgeStatus from './status';
import BadgeStandAlone from './standAlone';

export default function Badge() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Badge"
          />

          <PageTitle
            pageTitle="Badge"
            pageText="Small numerical value or status descriptor for UI elements."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicBadge />
      </Col>

      <Col span={24}>
        <BadgeSizes />
      </Col>

      <Col span={24}>
        <BadgeStandAlone />
      </Col>

      <Col span={24}>
        <BadgeRed />
      </Col>

      <Col span={24}>
        <BadgeStatus />
      </Col>
    </Row>
  );
}
