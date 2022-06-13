import React, { useState } from 'react';

import { Card, Row, Col, DatePicker } from 'antd';
import Chart from 'react-apexcharts';
import moment from 'moment';

export default function BarChart() {
  function onChange(date, dateString) {
    //console.log(date, dateString);
  }

  const [data] = useState({
    series: [
      {
        name: 'Expenses',
        data: [4477, 7834, 8233, 6039, 5575, 6933, 6357],
      },
    ],
    options: {
      chart: {
        fontFamily: 'Manrope, sans-serif',
        type: 'bar',

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
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
        row: {
          opacity: 0.5,
        },
      },
      fill: {
        opacity: 1,
        type: 'solid',
      },
      stroke: {
        show: true,
        width: 4,
        curve: 'straight',
        colors: ['transparent'],
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        tickAmount: 5,

        labels: {
          style: {
            colors: ['636E72'],
            fontSize: '14px',
          },
        },
        categories: [
          'Sun, 23',
          'Sat, 22',
          'Fri, 21',
          'Thu, 20',
          'Wed, 19',
          'Tue, 18',
          'Mon, 17',
        ],
      },
      legend: {
        horizontalAlign: 'right',
        offsetX: 40,
        position: 'top',
        markers: {
          radius: 12,
        },
      },
      colors: ['#0063F7'],

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
          <Row justify="space-between" align="top">
            <Col className="da-pb-16">
              <h4 className="da-mr-8">Bar Chart</h4>
              <p className="da-badge-text">Expenses</p>
            </Col>

            <Col>
              <DatePicker
                onChange={onChange}
                picker="week"
                defaultValue={moment('2019-06-03', 'YYYY-MM-DD')}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="chart">
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              height={350}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
