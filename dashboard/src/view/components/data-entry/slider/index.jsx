import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicSlider from './basic';
import IconSlider from './icon';
import GraduatedSlider from './graduated';

export default function Slider() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Entry"
            breadCrumbActive="Slider"
          />

          <PageTitle
            pageTitle="Slider"
            pageText="A Slider component for displaying current value and intervals in range."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicSlider />
      </Col>

      <Col span={24}>
        <IconSlider />
      </Col>

      <Col span={24}>
        <GraduatedSlider />
      </Col>
    </Row>
  );
}
