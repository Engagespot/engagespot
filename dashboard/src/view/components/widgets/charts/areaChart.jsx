import React, { useState } from 'react';

import { Card, Row, Col, DatePicker } from 'antd';
import Chart from 'react-apexcharts';
import moment from 'moment';

export default function AreaChart() {
  function onChange(date, dateString) {
    //console.log(date, dateString);
  }

  const [data] = useState({
    series: [
      {
        name: 'Visit',
        data: [
          10877, 29334, 33233, 36439, 32675, 32333, 33457, 38345, 36783, 30457,
          28459, 29840,
        ],
      },
      {
        name: 'Click',
        data: [
          8753, 21313, 24623, 28935, 27345, 23465, 27813, 29125, 26256, 24356,
          20233, 24570,
        ],
      },
      {
        name: 'Sales',
        data: [
          6000, 11313, 14623, 18935, 17345, 13465, 17813, 19125, 16256, 20356,
          16233, 14570,
        ],
      },
    ],
    options: {
      chart: {
        fontFamily: 'Manrope, sans-serif',
        type: 'area',

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
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
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },

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
        markers: {
          radius: 12,
        },
      },
      colors: ['#EBFAFA', '#55B1F3', '#0010F7'],

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
              <h4 className="da-mr-8">Area Chart</h4>
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
              type="area"
              height={350}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
