import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicDatepicker from './basic';
import RangePickerItem from './rangePicker';
import SwitchablePicker from './switchable';
import DateFormat from './dateFormat';
import DatePickerSizes from './datePickerSizes';
import DatePickerDisabled from './disabled';
import DatePickerCustomizedDateRender from './customizedDateRender';
import DatePickerExtraFooter from './extraFooter';

export default function Datepicker() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Entry"
            breadCrumbActive="Date Picker"
          />

          <PageTitle
            pageTitle="Date Picker"
            pageText="To select or input a date."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicDatepicker />
      </Col>

      <Col span={24}>
        <SwitchablePicker />
      </Col>

      <Col span={24}>
        <DatePickerSizes />
      </Col>

      <Col span={24}>
        <DatePickerCustomizedDateRender />
      </Col>

      <Col span={24}>
        <RangePickerItem />
      </Col>

      <Col span={24}>
        <DateFormat />
      </Col>

      <Col span={24}>
        <DatePickerDisabled />
      </Col>

      <Col span={24}>
        <DatePickerExtraFooter />
      </Col>
    </Row>
  );
}
