import React, { useState } from 'react';

import { Card, Row, Col } from 'antd';
import Chart from 'react-apexcharts';

export default function MarketPlaceRadialbarCard() {
  const [data] = useState({
    series: [61, 82, 65],
    options: {
      chart: {
        height: '184px',
        id: 'market-place-chart',
        fontFamily: 'Manrope, sans-serif',
        type: 'radialBar',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ['#00F7BF', '#0010F7', '#FFC700'],

      labels: ['Ebay', 'Web', 'Amazon'],

      dataLabels: {
        enabled: false,
      },
      stroke: {
        lineCap: 'round',
      },

      plotOptions: {
        radialBar: {
          dataLabels: {
            show: true,
            name: {
              fontSize: '10px',
            },
            value: {
              fontSize: '10px',
              offsetY: 0,
            },
            total: {
              show: true,
              fontSize: '10px',
              label: 'Total',
              formatter: function (w) {
                return 7400;
              },
            },
          },
        },
      },

      legend: {
        show: true,
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
                horizontal: 8,
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
    <Card className="da-border-color-black-40 da-card-3">
      <Row>
        <Col span={24}>
          <h4 className="da-mr-8 da-mb-16">Marketplace</h4>
        </Col>

        <Col span={24}>
          <div id="market-place-chart">
            <Chart
              options={data.options}
              series={data.series}
              type="radialBar"
              height="184px"
              legend="legend"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
