import React, { useState } from 'react';

import { Card, Row, Col, Dropdown, Menu } from 'antd';
import { RiMoreFill } from 'react-icons/ri';
import Chart from 'react-apexcharts';

export default function RadarChart() {
  const menu = (
    <Menu>
      <Menu.Item>Last 28 Days</Menu.Item>
      <Menu.Item>Last Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  const [data] = useState({
    series: [
      {
        name: 'Sales',
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: 'Expense',
        data: [20, 30, 40, 80, 20, 80],
      },
    ],
    options: {
      chart: {
        fontFamily: 'Manrope, sans-serif',
        height: 350,
        type: 'radar',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          blur: 4,
          left: 1,
          top: 1,
          opacity: 0.1,
        },
      },
      fill: {
        opacity: [1, 1],
      },
      stroke: {
        show: false,
        width: 0,
      },
      markers: {
        size: 0,
      },

      colors: ['#0010F7', '#1BE7FF'],

      labels: ['Marketing', 'Payments', 'Bills'],

      dataLabels: {
        enabled: false,
      },
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
          horizontal: 24,
          vertical: 0,
        },
        horizontalAlign: 'center',
        position: 'bottom',
        fontSize: '16px',

        markers: {
          radius: 12,
        },
      },
    },
  });

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="top">
            <Col>
              <h4 className="da-mr-8">Radar Chart</h4>
              <p className="da-badge-text">Revenue</p>
            </Col>

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
          <div id="chart" className="da-donut-chart">
            <Chart
              options={data.options}
              series={data.series}
              type="radar"
              height={350}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
