import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicRate from './basic';
import HalfStarRate from './halfStar';
import RateCustomizeCharacter from './customizeCharacter';
import RateOtherCharacter from './otherCharacter';

export default function Rate() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Entry"
            breadCrumbActive="Rate"
          />

          <PageTitle pageTitle="Rate" pageText="Rate component." />
        </Row>
      </Col>

      <Col span={24}>
        <BasicRate />
      </Col>

      <Col span={24}>
        <RateCustomizeCharacter />
      </Col>

      <Col span={24}>
        <HalfStarRate />
      </Col>

      <Col span={24}>
        <RateOtherCharacter />
      </Col>
    </Row>
  );
}
