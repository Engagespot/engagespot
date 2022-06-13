import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicCheckbox from './basic';
import DisabledCheckbox from './disabled';
import CheckboxGroup from './checkboxGroup';
import CheckboxGrid from './checkboxGrid';
import CheckboxControlled from './checkboxControlled';
import CheckboxCheckAll from './checkboxCheckAll';

export default function Checkbox() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Entry"
            breadCrumbActive="Checkbox"
          />

          <PageTitle pageTitle="Checkbox" pageText="Checkbox component." />
        </Row>
      </Col>

      <Col span={24}>
        <BasicCheckbox />
      </Col>

      <Col span={24}>
        <CheckboxGroup />
      </Col>

      <Col span={24}>
        <CheckboxControlled />
      </Col>

      <Col span={24}>
        <DisabledCheckbox />
      </Col>

      <Col span={24}>
        <CheckboxGrid />
      </Col>

      <Col span={24}>
        <CheckboxCheckAll />
      </Col>
    </Row>
  );
}
