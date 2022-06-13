import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicDropdown from './basic';
import ButtonWithDropdown from './button';
import PlacementDropdown from './placement';
import CascadingDropdown from './cascading';

export default function Dropdown() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Navigation"
            breadCrumbActive=" Dropdown"
          />

          <PageTitle pageTitle="Dropdown" pageText="A dropdown list." />
        </Row>
      </Col>

      <Col span={24}>
        <BasicDropdown />
      </Col>

      <Col span={24}>
        <ButtonWithDropdown />
      </Col>

      <Col span={24}>
        <PlacementDropdown />
      </Col>

      <Col span={24}>
        <CascadingDropdown />
      </Col>
    </Row>
  );
}
