import { Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function RadialbarChart({
  currentMonthlyUsers,
  maxMonthlyUser,
}) {
  const [data] = useState({
    series: [(currentMonthlyUsers / maxMonthlyUser) * 100],
    options: {
      chart: {
        fontFamily: 'Manrope, sans-serif',
        type: 'radialBar',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ['#5350f6'],

      labels: ['Monthly Users'],

      dataLabels: {
        enabled: true,
      },
      stroke: {
        lineCap: 'round',
      },

      plotOptions: {
        radialBar: {
          size: 185,
          hollow: {
            size: '60%',
          },

          track: {
            margin: 16,
          },
          dataLabels: {
            show: true,
            name: {
              fontSize: '16px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              fontSize: '16px',
              label: 'Monthly User Limit',
              formatter: function (w) {
                return maxMonthlyUser;
              },
            },
          },
        },
      },

      legend: {
        show: true,
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

        onItemClick: {
          toggleDataSeries: false,
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
              <h4 className="da-mr-8">
                You have
                <span className="csm-highlighted-text">{` ${currentMonthlyUsers} `}</span>
                Monthly Active Users
              </h4>

              <p className="">
                You’re using
                <span className="csm-highlighted-text">
                  {` ${Number(
                    (currentMonthlyUsers / maxMonthlyUser) * 100
                  ).toFixed(1)}%  `}
                </span>
                of your Maximum Monthly Active User Limit of
                <span className="csm-highlighted-text"> {maxMonthlyUser}</span>.
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div id="chart" className="da-donut-chart">
            <Chart
              options={data.options}
              series={data.series}
              type="radialBar"
              height={398}
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
