import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicTooltip from './basic';
import TooltipPlacement from './placement';

export default function Tooltip() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Tooltip"
          />
          <PageTitle pageTitle="Tooltip" pageText="A simple text popup tip." />
        </Row>
      </Col>

      <Col span={24}>
        <BasicTooltip />
      </Col>

      <Col span={24}>
        <TooltipPlacement />
      </Col>
    </Row>
  );
}
