import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicList from './basic';
import ListLoadMore from './loadMore';
import ListVertical from './vertical';

export default function List() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="List"
          />

          <PageTitle pageTitle="List" pageText="Simple List." />
        </Row>
      </Col>

      <Col span={24}>
        <BasicList />
      </Col>

      <Col span={24}>
        <ListLoadMore />
      </Col>

      <Col span={24}>
        <ListVertical />
      </Col>
    </Row>
  );
}
