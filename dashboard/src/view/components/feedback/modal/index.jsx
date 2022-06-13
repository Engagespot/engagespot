import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicModal from './basic';
import InfoModal from './info';
import CustomizeWidthModal from './customizeWidth';
import PositionModal from './position';
import ConfirmationModal from './confirmation';
import YodaModal from './yoda';

export default function Modal() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Feedback"
            breadCrumbActive="Modal"
          />

          <PageTitle pageTitle="Modal" pageText="Modal dialogs." />
        </Row>
      </Col>

      <Col span={24}>
        <BasicModal />
      </Col>

      <Col span={24}>
        <InfoModal />
      </Col>

      <Col span={24}>
        <CustomizeWidthModal />
      </Col>

      <Col span={24}>
        <ConfirmationModal />
      </Col>

      <Col span={24}>
        <PositionModal />
      </Col>

      <Col span={24}>
        <YodaModal />
      </Col>
    </Row>
  );
}
