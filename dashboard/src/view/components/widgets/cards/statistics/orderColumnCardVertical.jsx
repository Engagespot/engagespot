import React, { useEffect, useState } from 'react';

import { Row, Col } from 'antd';
import Chart from 'react-apexcharts';

export default function OrderColumnCardVertical() {
  const [chartWidth, setChartWidth] = useState('50%');

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartWidth('100%');
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const [data] = useState({
    series: [
      {
        name: 'Earning',
        data: [50, 70, 100, 60],
      },
    ],
    options: {
      chart: {
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
          top: -12,
          bottom: -12,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          startingShape: 'rounded',
          colors: {
            backgroundBarColors: [],
            backgroundBarRadius: 5,
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#0010F7'],
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
    <div className="da-border-1 da-overflow-hidden da-border-color-black-40 da-border-color-dark-80 da-border-radius da-bg-color-black-0 da-bg-color-dark-100 da-p-16 da-card-2">
      <Row gutter={16} align="middle">
        <Col span={24} className="da-text-center">
          <div
            id="chart"
            className="da-bg-color-primary-4 da-bg-color-dark-90 da-border-radius da-d-flex-center da-px-18 da-mb-18"
          >
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              width={chartWidth}
              height={80}
              legend="legend"
            />
          </div>

          <h3 className="da-mb-0">13,346</h3>
          <p className="da-p1-body da-mb-0 da-text-color-black-80 da-text-color-dark-50">
            New Order
          </p>
        </Col>
      </Row>
    </div>
  );
}
