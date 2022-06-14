import React, { useState } from 'react';

import { Card, Row, Col } from 'antd';
import Chart from 'react-apexcharts';

export default function VisitCustomerDonutCard() {
  const [data] = useState({
    series: [35, 25, 45],
    options: {
      chart: {
        id: 'visit-customer-donut-card',
        fontFamily: 'Manrope, sans-serif',
        type: 'donut',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ['#1BE7FF', '#0010F7', '#00F7BF'],

      labels: ['Desktop', 'Tablet', 'Mobile'],

      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              name: {
                fontSize: '12px',
                offsetY: 0,
              },
              value: {
                fontSize: '12px',
                offsetY: 0,
                formatter(val) {
                  return `% ${val}`;
                },
              },
              total: {
                show: true,
                fontSize: '16px',
                label: 'Total',

                formatter: function (w) {
                  return '2400';
                },
              },
            },
          },
        },
      },

      legend: {
        itemMargin: {
          horizontal: 0,
          vertical: 6,
        },
        horizontalAlign: 'center',
        position: 'left',
        fontSize: '14px',

        markers: {
          radius: 12,
        },
      },
      responsive: [
        {
          breakpoint: 325,
          options: {
            legend: {
              itemMargin: {
                horizontal: 4,
                vertical: 0,
              },
              horizontalAlign: 'center',
              position: 'bottom',
              fontSize: '14px',
            },
          },
        },
      ],
    },
  });

  return (
    <Card className="da-border-color-black-40 da-mb-32 da-card-3">
      <Row>
        <Col span={24}>
          <h4 className="da-mb-16">Visit Customers</h4>
        </Col>

        <Col span={24}>
          <div id="visit-customer-donut-card">
            <Chart
              options={data.options}
              series={data.series}
              type="donut"
              height="184px%"
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
