import React from 'react';

import { Card, Row, Col } from 'antd';
import Chart from 'react-apexcharts';

import chrome from '../../../../../assets/images/browser/chrome.svg';
import safari from '../../../../../assets/images/browser/safari.svg';
import opera from '../../../../../assets/images/browser/opera.svg';
import edge from '../../../../../assets/images/browser/edge.svg';
import firefox from '../../../../../assets/images/browser/firefox.svg';

export default function BrowserStates() {
  const statesArr = [
    {
      avatar: <img src={chrome} alt="Google Chrome" />,
      title: 'Google Chrome',
      value: '50.2%',
      chart: {
        type: 'radialBar',
        series: [50.2],
        height: 22,
        width: 24,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: ['#C903FF'],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '20%',
              },
              track: {
                background: '#DFE6E9',
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: 'round',
          },
        },
      },
    },
    {
      avatar: <img src={firefox} alt="Mozila Firefox" />,
      title: 'Mozila Firefox',
      value: '12.5%',
      chart: {
        type: 'radialBar',
        series: [12.5],
        height: 22,
        width: 24,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: ['#FFC700'],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '20%',
              },
              track: {
                background: '#DFE6E9',
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: 'round',
          },
        },
      },
    },
    {
      avatar: <img src={safari} alt="Apple Safari" />,
      title: 'Apple Safari',
      value: '24.8%',
      chart: {
        type: 'radialBar',
        series: [24.8],
        height: 22,
        width: 24,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: ['#1BE7FF'],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '20%',
              },
              track: {
                background: '#DFE6E9',
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: 'round',
          },
        },
      },
    },
    {
      avatar: <img src={edge} alt="Microsoft Edge" />,
      title: 'Microsoft Edge',
      value: '4.7%',
      chart: {
        type: 'radialBar',
        series: [4.2],
        height: 22,
        width: 24,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: ['#0010F7'],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '20%',
              },
              track: {
                background: '#DFE6E9',
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: 'round',
          },
        },
      },
    },
    {
      avatar: <img src={opera} alt="Opera" />,
      title: 'Opera',
      value: '7.8%',
      chart: {
        type: 'radialBar',
        series: [7.8],
        height: 22,
        width: 24,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: ['#FF0022'],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '20%',
              },
              track: {
                background: '#DFE6E9',
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: 'round',
          },
        },
      },
    },
  ];

  const renderStates = () => {
    return statesArr.map(state => {
      return (
        <div key={state.title}>
          <Row justify="space-between" className="da-mt-12">
            <Col span={12}>
              <Row>
                <div className="da-mr-8">{state.avatar}</div>
                <p className="da-p1-body da-mb-0">{state.title}</p>
              </Row>
            </Col>
            <Col className="da-text-right" span={12}>
              <Row align="end">
                <p className="da-badge-text da-mb-0 da-mr-8 da-align-self-center">
                  {state.value}
                </p>
                <Chart
                  options={state.chart.options}
                  series={state.chart.series}
                  type={state.chart.type}
                  height={state.chart.height}
                  width={state.chart.width}
                />
              </Row>
            </Col>
          </Row>
        </div>
      );
    });
  };

  return (
    <Card className="da-border-color-black-40 da-mb-32 da-card-3 da-eCommerceCardOne">
      <Row>
        <Col span={24} className="da-mb-8">
          <Row justify="space-between" align="middle">
            <h5 className="da-mb-0">Browser states</h5>

            <p className="da-badge-text da-text-color-black-80 da-text-color-dark-30 da-mb-0">
              May 2021
            </p>
          </Row>
        </Col>

        <Col span={24} className="da-mb-4">
          {renderStates()}
        </Col>
      </Row>
    </Card>
  );
}
