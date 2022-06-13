import React, { useState } from 'react';

import { Card, Row, Col, Dropdown, Menu } from 'antd';
import { RiMoreFill } from 'react-icons/ri';
import Chart from 'react-apexcharts';

export default function HeatmapChart() {
  const menu = (
    <Menu>
      <Menu.Item>Last 28 Days</Menu.Item>
      <Menu.Item>Last Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  function generateData(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = `w${(i + 1).toString()}`;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x,
        y,
      });
      i++;
    }
    return series;
  }

  const [data] = useState({
    series: [
      {
        name: 'SUN',
        data: generateData(24, {
          min: 0,
          max: 40,
        }),
      },
      {
        name: 'MON',
        data: generateData(24, {
          min: 0,
          max: 40,
        }),
      },
      {
        name: 'TUE',
        data: generateData(24, {
          min: 0,
          max: 40,
        }),
      },
      {
        name: 'WED',
        data: generateData(24, {
          min: 0,
          max: 40,
        }),
      },
      {
        name: 'THU',
        data: generateData(24, {
          min: 0,
          max: 40,
        }),
      },
      {
        name: 'FRI',
        data: generateData(24, {
          min: 0,
          max: 40,
        }),
      },
      {
        name: 'SAT',
        data: generateData(24, {
          min: 0,
          max: 40,
        }),
      },
    ],
    options: {
      chart: {
        fontFamily: 'Manrope, sans-serif',
        type: 'heatmap',

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        heatmap: {
          enableShades: false,

          colorScale: {
            ranges: [
              {
                from: 0,
                to: 10,
                name: '0-10',
                color: '#EBFAFA',
              },
              {
                from: 11,
                to: 20,
                name: '10-20',
                color: '#55B1F3',
              },
              {
                from: 21,
                to: 30,
                name: '20-30',
                color: '#0063F7',
              },
              {
                from: 31,
                to: 40,
                name: '30-40',
                color: '#0010F7',
              },
            ],
          },
        },
      },

      labels: {
        style: {
          fontSize: '14px',
        },
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        borderColor: '#DFE6E9',
      },
      fill: {
        opacity: 1,
        type: 'solid',
      },

      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: 'center',
        position: 'bottom',
        fontSize: '14px',
        markers: {
          radius: 12,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: ['636E72'],
            fontSize: '14px',
          },
        },
      },
    },
  });

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col span={24}>
          <Row justify="space-between">
            <Col align="bottom">
              <h4 className="da-mr-8">Heatmap Chart</h4>
              <p className="da-badge-text">Sales</p>
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
          <div id="chart" className="da-heatmap-chart">
            <Chart
              options={data.options}
              series={data.series}
              type="heatmap"
              height={350}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
