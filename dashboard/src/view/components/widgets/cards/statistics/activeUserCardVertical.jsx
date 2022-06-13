import React, { useEffect, useState } from 'react';

import { Row, Col } from 'antd';
import Chart from 'react-apexcharts';

export default function ActiveUserCardVertical() {
  const [chartWidth, setChartWidth] = useState('50%');

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartWidth('100%');
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const [data] = useState({
    series: [40],
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
          top: 0,
          bottom: 0,
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
            background: '#ffffff',
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
              color: '#636E72',
            },
            total: {
              show: true,
              fontSize: '14px',
              fontWeight: 'light',
              label: '',
              formatter: function (w) {
                return '%' + 40;
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
      colors: ['#FFC700'],
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
            className="da-bg-color-warning-4 da-bg-color-dark-90 da-border-radius da-d-flex-center-full da-mb-18"
          >
            <Chart
              options={data.options}
              series={data.series}
              type="radialBar"
              width={chartWidth}
              height={92}
              legend="legend"
            />
          </div>

          <h3 className="da-mb-0">17,346</h3>
          <p className="da-p1-body da-mb-0 da-text-color-black-80 da-text-color-dark-50">
            Active Users
          </p>
        </Col>
      </Row>
    </div>
  );
}
