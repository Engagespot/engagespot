import React, { useState } from 'react';

import { Row, Col, Card } from 'antd';

import Chart from 'react-apexcharts';

export default function EarningsCard() {
  const [data] = useState({
    series: [
      {
        name: 'Marketing',
        data: [48],
      },
      {
        name: 'Payment',
        data: [21],
      },
      {
        name: 'Bills',
        data: [31],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        stacked: true,
        stackType: '100%',
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '100%',
          startingShape: 'rounded',
          endingShape: 'rounded',
        },
      },

      colors: ['#00F7BF', '#1BE7FF', '#0010F7'],
      fill: {
        type: 'solid',
      },
      xaxis: {
        type: 'datetime',
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

      yaxis: {
        show: false,
      },

      legend: {
        position: 'left',
      },
      tooltip: {
        x: {
          show: false,
        },
      },
    },
  });

  return (
    <Card className="da-border-color-black-40">
      <Row align="middle">
        <Col sm={4} span={24}>
          <Row>
            <Col>
              <h5>Earnings</h5>
              <p className="da-p1-body da-text-color-black-60 da-text-color-dark-50 da-mb-0">
                This month
              </p>
              <h4 className="da-mb-0">$6.340.42</h4>
            </Col>
          </Row>
        </Col>

        <Col sm={20} span={24} className="da-overflow-hidden">
          <Row className="da-w-100">
            <div id="chart" className="da-w-100">
              <Chart
                options={data.options}
                series={data.series}
                type="bar"
                height={100}
              />
            </div>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
