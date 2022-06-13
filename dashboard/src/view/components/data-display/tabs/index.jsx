import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicTab from './basic';
import TabsDisabled from './disabled';
import TabsIcon from './icon';
import TabsPosition from './position';
import TabsSizes from './tabsSizes';
import TabsType from './type';
import TabsAddClose from './addClose';

export default function Tabs() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Tabs"
          />

          <PageTitle
            pageTitle="Tabs"
            pageText="Tabs make it easy to switch between different views."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicTab />
      </Col>

      <Col span={24}>
        <TabsIcon />
      </Col>

      <Col span={24}>
        <TabsSizes />
      </Col>

      <Col span={24}>
        <TabsType />
      </Col>

      <Col span={24}>
        <TabsDisabled />
      </Col>

      <Col span={24}>
        <TabsPosition />
      </Col>

      <Col span={24}>
        <TabsAddClose />
      </Col>
    </Row>
  );
}
