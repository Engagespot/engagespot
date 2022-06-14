import React, { useState } from 'react';

import { Card, Row, Col, Dropdown, Menu } from 'antd';
import { RiMoreFill } from 'react-icons/ri';
import Chart from 'react-apexcharts';

export default function SiteTraficRadarCard() {
  const menu = (
    <Menu>
      <Menu.Item>Last 28 Days</Menu.Item>
      <Menu.Item>Last 6 Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  const [data] = useState({
    series: [
      {
        name: 'SEO Visits',
        data: [20, 50, 60, 80, 90, 55],
      },
      {
        name: 'Organic',
        data: [35, 35, 35, 15, 35, 15],
      },
      {
        name: 'Sponsored',
        data: [100, 15, 60, 40, 50, 80],
      },
    ],
    options: {
      chart: {
        id: 'site-trafic-radar-card',
        fontFamily: 'Manrope, sans-serif',
        type: 'radar',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      fill: {
        opacity: [0.2, 0.2, 0.2],
      },
      stroke: {
        show: true,
        width: 3,
      },
      markers: {
        size: 0,
      },

      colors: ['#0063F7', '#FF0022', '#00F7BF'],

      labels: ['Marketing', 'Payments', 'Bills'],

      yaxis: {
        show: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },

      plotOptions: {
        radar: {
          polygons: {
            connectorColors: '#fff',
          },
        },
      },
      legend: {
        itemMargin: {
          horizontal: 32,
          vertical: 16,
        },
        horizontalAlign: 'center',
        position: 'bottom',
        fontSize: '24px',
        fontWeight: 500,
        markers: {
          radius: 12,
        },
      },
    },
  });

  return (
    <Card className="da-border-color-black-40 da-card-7">
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="top">
            <Row align="bottom">
              <h4 className="da-mr-8 da-mb-32">Site Trafic</h4>
            </Row>

            <Col>
              <Dropdown overlay={menu} trigger={['click']}>
                <RiMoreFill
                  className="da-text-color-dark-0"
                  size={24}
                  onClick={e => e.preventDefault()}
                />
              </Dropdown>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="site-trafic-radar-card" className="da-donut-chart">
            <Chart
              options={data.options}
              series={data.series}
              type="radar"
              height="100%"
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
