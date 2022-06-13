import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../../layout/components/content/page-title';
import RevenueColumnCard from './revenueColumnCard';
import ExpensesDonutCard from './expensesDonutCard';
import VisitersLineCard from './visitersLineCard';
import RevenueRadarCard from './revenueRadarCard';
import SiteTraficRadarCard from './siteTraficRadarCard';
import RevenueLineList from './revenueLineList';
import EnergyCard from './enegryCard';
import MarketPlaceRadialbarCard from './marketPlaceRadialbarCard';
import VisitCustomerDonutCard from './visitCustomerDonutCard';

export default function Analytics() {
  return (
    <Row gutter={32}>
      <Col className="da-mb-32" span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Main"
            breadCrumbParent2="Widgets"
            breadCrumbParent3="YodaCards"
            breadCrumbActive=" Analytics"
          />

          <PageTitle
            pageTitle="Analytic Cards"
            pageText="You can find special Analytic Cards we designed for Yoda Admin Template"
          />
        </Row>
      </Col>

      <Col xl={16} sm={24}>
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <RevenueColumnCard />
          </Col>

          <Col span={24}>
            <VisitersLineCard />
          </Col>

          <Col span={24}>
            <SiteTraficRadarCard />
          </Col>

          <Col xl={12} sm={12}>
            <MarketPlaceRadialbarCard />
          </Col>

          <Col xl={12} sm={12}>
            <VisitCustomerDonutCard />
          </Col>
        </Row>
      </Col>

      <Col xl={8} sm={24}>
        <Row gutter={[32]}>
          <Col xl={24} md={12} span={24}>
            <ExpensesDonutCard />
          </Col>

          <Col xl={24} md={12} span={24}>
            <RevenueRadarCard />
          </Col>
        </Row>

        <Row gutter={[32]}>
          <Col xl={24} md={12} span={24}>
            <RevenueLineList />
          </Col>

          <Col xl={24} md={12} span={24}>
            <EnergyCard />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
