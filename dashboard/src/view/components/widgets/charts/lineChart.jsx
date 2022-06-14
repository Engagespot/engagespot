import React, { useState } from 'react';

import { Card, Row, Col, DatePicker } from 'antd';
import Chart from 'react-apexcharts';
import moment from 'moment';

export default function LineChart() {
  function onChange(date, dateString) {
    //console.log(date, dateString);
  }

  const [data] = useState({
    series: [
      {
        name: 'Ads',
        data: [
          28877, 29334, 33233, 36439, 32675, 32333, 33457, 38345, 36783, 39457,
          22459, 39840,
        ],
      },
      {
        name: 'Organic',
        data: [
          12010, 11313, 14623, 18935, 17345, 13465, 17813, 19125, 16256, 20356,
          12233, 14570,
        ],
      },
    ],
    options: {
      chart: {
        fontFamily: 'Manrope, sans-serif',
        type: 'line',

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ['#0063F7', '#1BE7FF'],
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

      markers: {
        strokeWidth: 0,
        size: 6,
        colors: ['#0063F7', '#1BE7FF'],
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

        tickPlacement: 'between',
        labels: {
          style: {
            colors: ['636E72'],
            fontSize: '14px',
          },
        },
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
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
        max: 40000,
        tickAmount: 4,
      },
    },
  });

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row justify="space-between">
            <Row align="bottom" className="da-pb-16">
              <h4 className="da-mr-8">Line Chart</h4>
              <p className="da-badge-text">Website Visit</p>
            </Row>

            <Col>
              <DatePicker
                onChange={onChange}
                picker="year"
                defaultValue={moment('2019', 'YYYY')}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="chart">
            <Chart
              options={data.options}
              series={data.series}
              type="line"
              height={350}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
