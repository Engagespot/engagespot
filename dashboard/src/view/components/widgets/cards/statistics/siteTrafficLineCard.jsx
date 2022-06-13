import React, { useState } from 'react';

import { Card, Row, Col, Dropdown, Menu } from 'antd';
import { RiMoreFill, RiArrowRightUpLine } from 'react-icons/ri';
import Chart from 'react-apexcharts';

export default function SiteTrafficLineCard() {
  const menu = (
    <Menu>
      <Menu.Item>Last 28 Days</Menu.Item>
      <Menu.Item>Last 6 Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  const [data1] = useState({
    series: [
      {
        data: [31, 10, 109, 60, 140, 40, 150],
      },
    ],
    options: {
      chart: {
        fontFamily: 'Manrope, sans-serif',
        type: 'line',
        stacked: true,
        id: 'visiters-line-card',

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ['#0063F7'],
      labels: {
        style: {
          fontSize: '14px',
        },
      },
      stroke: {
        curve: 'smooth',
        lineCap: 'round',
      },

      tooltip: {
        enabled: false,
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },

      markers: {
        strokeWidth: 0,
        size: 0,
        colors: ['#0063F7', '#1BE7FF'],
        hover: {
          sizeOffset: 1,
        },
      },
      xaxis: {
        // type: "numeric",
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },

        labels: {
          show: false,
        },
      },
      // xaxis: {
      //   axisTicks: {
      //     show: false,
      //   },
      //   labels: {
      //     show: false,
      //   },
      //   axisBorder: {
      //     show: false,
      //   },
      // },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],

      yaxis: [
        {
          show: false,

          // y: 0,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
    },
  });

  return (
    <Card className="da-border-color-black-40 da-mb-32 da-card-2">
      <Row gutter={16} align="middle">
        <Col className="da-px-0" span={24}>
          <Row justify="space-between">
            <h5 className="da-mr-8">Site Traffic</h5>

            <Dropdown overlay={menu} trigger={['click']}>
              <RiMoreFill
                className="da-text-color-dark-0"
                size={24}
                onClick={e => e.preventDefault()}
              />
            </Dropdown>
          </Row>
        </Col>

        <Col span={12} className="da-mb-xs-32 da-px-0">
          <p className="da-badge-text da-mb-0 da-text-color-black-80 da-text-color-dark-30">
            Site traffic of this week
          </p>

          <h2 className="da-my-4">120.030</h2>

          <Row>
            <RiArrowRightUpLine className="da-text-color-success-1" size={16} />
            <p className="da-mb-0 da-badge-text da-text-color-success-1">10%</p>
          </Row>
        </Col>

        <Col span={12} className="da-mb-xs-32 da-px-0">
          <Chart
            options={data1.options}
            series={data1.series}
            type="line"
            height="70%"
            legend="legend"
          />
        </Col>
      </Row>
    </Card>
  );
}
