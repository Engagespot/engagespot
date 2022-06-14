import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicInputNumber from './basic';
import InputNumberSizes from './inputNumberSizes';
import InputNumberDisabled from './disabled';

export default function InputNumber() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Entry"
            breadCrumbActive="Input Number"
          />

          <PageTitle
            pageTitle="Input Number"
            pageText="Enter a number within certain range with the mouse or keyboard."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicInputNumber />
      </Col>

      <Col span={24}>
        <InputNumberDisabled />
      </Col>

      <Col span={24}>
        <InputNumberSizes />
      </Col>
    </Row>
  );
}
