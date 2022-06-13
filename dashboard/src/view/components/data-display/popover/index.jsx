import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicPopover from './basic';
import PopoverTrigers from './trigers';
import PopoverPlacements from './placement';

export default function Popover() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Popover"
          />

          <PageTitle
            pageTitle="Popover"
            pageText="The floating card popped by clicking or hovering."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicPopover />
      </Col>

      <Col span={24}>
        <PopoverPlacements />
      </Col>

      <Col span={24}>
        <PopoverTrigers />
      </Col>
    </Row>
  );
}
