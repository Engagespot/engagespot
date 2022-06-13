import React, { useState } from 'react';

import { Card, Row, Col, Dropdown, Menu } from 'antd';
import { RiMoreFill } from 'react-icons/ri';
import Chart from 'react-apexcharts';

export default function DonutChart() {
  const menu = (
    <Menu>
      <Menu.Item>Last 28 Days</Menu.Item>
      <Menu.Item>Last Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  const [data] = useState({
    series: [1244, 2155, 1541],
    options: {
      chart: {
        fontFamily: 'Manrope, sans-serif',
        type: 'donut',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ['#0010F7', '#55B1F3', '#1BE7FF'],

      labels: ['Marketing', 'Payments', 'Bills'],

      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '85%',
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
              },
              value: {
                fontSize: '16px',
                formatter(val) {
                  return `$ ${val}`;
                },
              },
              total: {
                show: true,
                fontSize: '16px',
                label: 'Total',
                // formatter(w) {
                //   return `$ `;
                // },
                formatter: function (w) {
                  return `$ ${w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0)}`;
                },
              },
            },
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
        fontSize: '14px',

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
              <h4 className="da-mr-8">Donut Chart</h4>
              <p className="da-badge-text">Expenses</p>
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
              type="donut"
              height={398}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
