import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicRadio from './basic';
import DisabledRadio from './disabled';
import RadioGroup from './radioGroup';
import RadioGroupVertical from './radioGroupVertical';
import RadioButtonSolid from './radioButtonSolid';
import RadioButtonStyle from './radioButtonStyle';
import RadioButtonSize from './radioButtonSize';

export default function Radio() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Entry"
            breadCrumbActive="Radio"
          />

          <PageTitle pageTitle="Radio" pageText="Radio." />
        </Row>
      </Col>

      <Col span={24}>
        <BasicRadio />
      </Col>

      <Col span={24}>
        <RadioGroup />
      </Col>

      <Col span={24}>
        <RadioButtonSolid />
      </Col>

      <Col span={24}>
        <RadioButtonSize />
      </Col>

      <Col span={24}>
        <DisabledRadio />
      </Col>

      <Col span={24}>
        <RadioGroupVertical />
      </Col>

      <Col span={24}>
        <RadioButtonStyle />
      </Col>
    </Row>
  );
}
