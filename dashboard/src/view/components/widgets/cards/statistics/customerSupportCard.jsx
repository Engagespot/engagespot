import React, { useState } from 'react';

import { Card, Row, Col } from 'antd';
import Chart from 'react-apexcharts';

export default function CustomerSupportCard() {
  const [data] = useState({
    series: [76],
    options: {
      chart: {
        fontFamily: 'Manrope, sans-serif',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
          top: -15,
          bottom: -15,
        },
      },
      stroke: {
        lineCap: 'round',
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          size: 85,
          hollow: {
            size: '60%',
          },
          track: {
            show: true,
            background: '#DFE6E9',
            strokeWidth: '97%',
            opacity: 1,
            margin: 5,
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5,
            },
          },

          dataLabels: {
            show: true,

            value: {
              fontSize: '14px',
              offsetY: -10,
            },
            total: {
              show: true,
              fontSize: '14px',
              label: '',
              formatter: function (w) {
                return '%' + 76;
              },
            },
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#FF8B9A'],
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
      yaxis: {
        show: false,
        max: 100,
      },
      tooltip: {
        x: {
          show: false,
        },
      },
    },
  });

  return (
    <Card className="da-border-color-black-40 da-mb-32 da-card-1">
      <Row gutter={16} align="middle">
        <Col className="da-pl-0" span={10}>
          <div id="chart">
            <Chart
              options={data.options}
              series={data.series}
              type="radialBar"
              height={100}
              legend="legend"
            />
          </div>
        </Col>

        <Col className="da-pr-0" span={14}>
          <h3 className="da-mb-0">2,345</h3>

          <p className="da-p1-body da-mb-0">Ticket Closed</p>
        </Col>
      </Row>
    </Card>
  );
}
