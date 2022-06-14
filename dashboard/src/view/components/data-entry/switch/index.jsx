import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicSwitch from './basic';
import SwitchDisabled from './disabled';
import SwitchTextIcon from './textIcon';
import SwitchLoading from './loading';
import SwitchSizes from './switchSizes';

export default function Switch() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Entry"
            breadCrumbActive="Switch"
          />

          <PageTitle pageTitle="Switch" pageText="Switching Selector." />
        </Row>
      </Col>

      <Col span={24}>
        <BasicSwitch />
      </Col>

      <Col span={24}>
        <SwitchTextIcon />
      </Col>

      <Col span={24}>
        <SwitchLoading />
      </Col>

      <Col span={24}>
        <SwitchDisabled />
      </Col>

      <Col span={24}>
        <SwitchSizes />
      </Col>
    </Row>
  );
}
