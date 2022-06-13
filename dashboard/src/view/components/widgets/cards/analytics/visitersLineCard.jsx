import React, { useState } from 'react';

import { Card, Row, Col, DatePicker } from 'antd';
import Chart from 'react-apexcharts';
import moment from 'moment';

export default function VisitersLineCard() {
  const [data] = useState({
    series: [
      {
        name: 'Ads',
        data: [8245, 14452, 8545, 14452, 6012, 22333],
      },
      {
        name: 'Organic',
        data: [12245, 7952, 10623, 7935, 14345, 4002],
      },
    ],
    options: {
      chart: {
        fontFamily: 'Manrope, sans-serif',
        type: 'area',
        id: 'visiters-line-card',

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ['#0063F7', '#00F7BF'],
      labels: {
        style: {
          fontSize: '14px',
        },
      },
      fill: {
        opacity: 0.3,
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        borderColor: '#DFE6E9',
        row: {
          opacity: 0.5,
        },
      },

      markers: {
        strokeWidth: 0,
        size: 0,
        colors: ['rgba(0, 255, 198, 0.17)', 'rgba(45, 125, 239, 0.17)'],
        hover: {
          sizeOffset: 1,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },

        // tickPlacement: "between",
        labels: {
          style: {
            colors: ['636E72'],
            fontSize: '14px',
          },
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      legend: {
        horizontalAlign: 'right',
        offsetX: 40,
        position: 'top',
      },
      yaxis: {
        labels: {
          style: {
            colors: ['636E72'],
            fontSize: '14px',
          },
          formatter: value => {
            return value / 1000 + 'K';
          },
        },

        min: 0,
        max: 30000,
        tickAmount: 3,
      },
    },
  });

  return (
    <Card className="da-border-color-black-40 da-card-6 da-chart-text-color da-overflow-hidden">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row justify="space-between">
            <Row align="bottom">
              <h5 className="da-mr-8">Visiters</h5>
            </Row>

            <Col>
              <DatePicker picker="year" defaultValue={moment('2019', 'YYYY')} />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="visiters-line-card">
            <Chart
              options={data.options}
              series={data.series}
              type="area"
              height="100%"
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
