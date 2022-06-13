import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicForm from './basic';
import FormValidation from './formValidation';
import FormLayout from './formLayout';
import FormSizes from './formSizes';

export default function Form() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Entry"
            breadCrumbActive="Form"
          />

          <PageTitle
            pageTitle="Form"
            pageText="High performance Form component with data scope management. Including data collection, verification, and styles."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicForm />
      </Col>

      <Col span={24}>
        <FormValidation />
      </Col>

      <Col span={24}>
        <FormLayout />
      </Col>

      <Col span={24}>
        <FormSizes />
      </Col>
    </Row>
  );
}
