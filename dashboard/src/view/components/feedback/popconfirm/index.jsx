import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicPopconfirm from './basic';
import TriggerPopconfirm from './trigger';
import IconPopconfirm from './icon';
import PlacementPopconfirm from './placement';
import AsyncPopconfirm from './async';

export default function Popconfirm() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Feedback"
            breadCrumbActive="Popconfirm"
          />

          <PageTitle
            pageTitle="Popconfirm"
            pageText="A simple and compact confirmation dialog of an action."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicPopconfirm />
      </Col>

      <Col span={24}>
        <TriggerPopconfirm />
      </Col>

      <Col span={24}>
        <IconPopconfirm />
      </Col>

      <Col span={24}>
        <PlacementPopconfirm />
      </Col>

      <Col span={24}>
        <AsyncPopconfirm />
      </Col>
    </Row>
  );
}
