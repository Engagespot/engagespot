import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import ButtonTypes from './buttonTypes';
import IconButtons from './iconButtons';
import ButtonSizes from './buttonSizes';
import DisabledButton from './disabledButton';
import GhostButton from './ghostButton';
import DangerButton from './dangerButton';

export default function Buttons() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="General"
            breadCrumbActive="Buttons"
          />

          <PageTitle pageTitle="Buttons" pageText="To trigger an operation." />
        </Row>
      </Col>

      <Col span={24}>
        <ButtonTypes />
      </Col>

      <Col span={24}>
        <ButtonSizes />
      </Col>

      <Col span={24}>
        <GhostButton />
      </Col>

      <Col span={24}>
        <IconButtons />
      </Col>

      <Col span={24}>
        <DisabledButton />
      </Col>

      <Col span={24}>
        <DangerButton />
      </Col>
    </Row>
  );
}
