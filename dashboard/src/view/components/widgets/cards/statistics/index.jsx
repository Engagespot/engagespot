import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../../layout/components/content/page-title';
import SubsColumnCard from './subsColumnCard';
import OrderColumnCard from './orderColumnCard';
import CustomerSupportCard from './customerSupportCard';
import ActiveUserCard from './activeUserCard';
import StatisticsCard from './statisticsCard';
import SiteTrafficLineCard from './siteTrafficLineCard';

export default function Statistics() {
  return (
    <Row gutter={32}>
      <Col className="da-mb-32" span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Main"
            breadCrumbParent2="Widgets"
            breadCrumbParent3="YodaCards"
            breadCrumbActive=" Statistics"
          />

          <PageTitle
            pageTitle="Statistics Cards"
            pageText="You can find special Analytic Cards we designed for Yoda Admin Template"
          />
        </Row>
      </Col>

      <Col xl={6} sm={12} xs={24}>
        <SubsColumnCard />
      </Col>

      <Col xl={6} sm={12} xs={24}>
        <OrderColumnCard />
      </Col>

      <Col xl={6} sm={12} xs={24}>
        <CustomerSupportCard />
      </Col>

      <Col xl={6} sm={12} xs={24}>
        <ActiveUserCard />
      </Col>

      <Col xl={8} sm={24} xs={24}>
        <SiteTrafficLineCard />
      </Col>

      <Col xl={16} sm={24} xs={24}>
        <StatisticsCard />
      </Col>
    </Row>
  );
}
