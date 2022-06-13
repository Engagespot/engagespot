import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicPagination from './basic';
import PaginationMore from './more';
import PaginationChanger from './changer';
import PaginationJumper from './jumper';
import PaginationMiniSize from './miniSize';
import PaginationSimpleMode from './simpleMode';
import PaginationPrevNext from './prevNext';

export default function Pagination() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Navigation"
            breadCrumbActive="Pagination"
          />

          <PageTitle
            pageTitle="Pagination"
            pageText="A long list can be divided into several pages using Pagination, and only one page will be loaded at a time."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicPagination />
      </Col>

      <Col span={24}>
        <PaginationMore />
      </Col>

      <Col span={24}>
        <PaginationChanger />
      </Col>

      <Col span={24}>
        <PaginationJumper />
      </Col>

      <Col span={24}>
        <PaginationMiniSize />
      </Col>

      <Col span={24}>
        <PaginationSimpleMode />
      </Col>

      <Col span={24}>
        <PaginationPrevNext />
      </Col>
    </Row>
  );
}
