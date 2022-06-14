import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import LineChart from './lineChart';
import ColumnChart from './columnChart';
import AreaChart from './areaChart';
import ScatterChart from './scatterChart';
import BarChart from './barChart';
import CandlestickChart from './candlestickChart';
import HeatmapChart from './heatmapChart';
import DonutChart from './donutChart';
import RadarChart from './radarChart';
import RadialbarChart from './radialbarChart';

export default function Charts() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Main"
            breadCrumbParent2="Widgets"
            breadCrumbActive="Charts"
          />

          <PageTitle
            pageTitle="Charts"
            pageText="We used Apex Charts and customized for Yoda "
          />
        </Row>
      </Col>

      <Col span={24}>
        <LineChart />
      </Col>

      <Col span={24}>
        <ColumnChart />
      </Col>

      <Col span={24}>
        <AreaChart />
      </Col>

      <Col span={24}>
        <ScatterChart />
      </Col>

      <Col xl={12} lg={24}>
        <BarChart />
      </Col>

      <Col xl={12} lg={24}>
        <HeatmapChart />
      </Col>

      <Col xl={12} lg={24}>
        <RadarChart />
      </Col>

      <Col xl={12} lg={24}>
        <CandlestickChart />
      </Col>

      <Col xl={12} lg={24}>
        <DonutChart />
      </Col>

      <Col xl={12} lg={24}>
        <RadialbarChart />
      </Col>
    </Row>
  );
}
