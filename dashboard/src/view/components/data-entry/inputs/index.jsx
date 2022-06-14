import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicInput from './basic';
import InputSizes from './sizes';
import PrePostTab from './prePostTab';
import SearchBox from './searchBox';
import TextAreaItem from './textArea';
import TextAreaCounting from './textAreaCounting';
import PrefixSuffix from './prefixSuffix';

export default function Inputs() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Entry"
            breadCrumbActive="Inputs"
          />

          <PageTitle
            pageTitle="Inputs"
            pageText="A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicInput />
      </Col>

      <Col span={24}>
        <PrePostTab />
      </Col>

      <Col span={24}>
        <TextAreaItem />
      </Col>

      <Col span={24}>
        <TextAreaCounting />
      </Col>

      <Col span={24}>
        <InputSizes />
      </Col>

      <Col span={24}>
        <SearchBox />
      </Col>

      <Col span={24}>
        <PrefixSuffix />
      </Col>
    </Row>
  );
}
