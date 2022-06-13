import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicBreadcrumb from './basic';
import BreadcrumbWithIcon from './icon';
import ConfiguredBreadcrumb from './configureSeparator';

export default function Breadcrumb() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Navigation"
            breadCrumbActive=" Breadcrumb"
          />

          <PageTitle
            pageTitle="Breadcrumb"
            pageText="A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicBreadcrumb />
      </Col>

      <Col span={24}>
        <ConfiguredBreadcrumb />
      </Col>

      <Col span={24}>
        <BreadcrumbWithIcon />
      </Col>
    </Row>
  );
}
