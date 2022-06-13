import React, { useState } from 'react';

import { Card, Row, Col, Dropdown, Menu } from 'antd';
import { RiMoreFill } from 'react-icons/ri';
import Chart from 'react-apexcharts';

export default function EnergyCard() {
  const menu = (
    <Menu>
      <Menu.Item>Last 28 Days</Menu.Item>
      <Menu.Item>Last 6 Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  const [data1] = useState({
    series: [91],
    options: {
      chart: {
        fontFamily: 'Manrope, sans-serif',
        type: 'radialBar',
        id: 'energy-card',

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },

      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          track: {
            background: 'transparent',
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: '12px',
              fontWeight: '400',
              color: '#636E72',
            },
            value: {
              fontSize: '24px',
              fontWeight: '500',
              color: undefined,
              formatter: function (val) {
                return val + '%';
              },
            },
          },
        },
      },

      stroke: {
        dashArray: 6,
      },
      labels: ['Completed'],

      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 1,
          gradientToColors: ['#0010F7', '#1BE7FF'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
        },
      },
    },
  });

  return (
    <Card className="da-border-color-black-40 da-mb-32 da-card-6">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row justify="space-between" align="top">
            <h4 className="da-mr-8">Energy Consuming</h4>

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
          <Col id="energy-card">
            <Chart
              options={data1.options}
              series={data1.series}
              height={335}
              type="radialBar"
              legend="legend"
            />

            <Row className="da-text-center da-pt-32" justify="space between">
              <Col span={12}>
                <h4 className="da-mb-0">Volt</h4>
                <p className="da-mb-0 da-text-color-black-80 da-text-color-dark-30">
                  24V
                </p>
              </Col>

              <Col span={12}>
                <h4 className="da-mb-0">Amper</h4>
                <p className="da-mb-0 da-text-color-black-80 da-text-color-dark-30">
                  0.2A
                </p>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Card>
  );
}
