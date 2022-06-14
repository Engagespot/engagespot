import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../layout/components/content/breadcrumbs';
import ActionButton from '../../../layout/components/content/action-button';
import PageTitle from '../../../layout/components/content/page-title';

export default function Blank() {
  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <Row gutter={[32, 32]} justify="space-between">
          <Breadcrumbs breadCrumbParent="Pages" breadCrumbActive="Blank Page" />

          <ActionButton label="Add" />
        </Row>
      </Col>

      <PageTitle pageTitle="Blank Page" />
    </Row>
  );
}
