import React from 'react';

import { Card, Row, Col } from 'antd';
import {
  RiHandCoinLine,
  RiMoneyDollarCircleLine,
  RiUserAddLine,
  RiUserStarLine,
} from 'react-icons/ri';

export default function StatisticsCard() {
  return (
    <Card className="da-border-color-black-40 da-mb-32 da-card-2">
      <Row gutter={16} align="middle">
        <Col className="da-mb-36" span={24}>
          <Row justify="space-between">
            <h5 className="da-mr-8">Statistics</h5>

            <p className="da-caption-text da-text-color-black-80 da-text-color-dark-30">
              Updated 1 month ago
            </p>
          </Row>
        </Col>

        <Col sm={6} xs={12} className="da-mb-xs-32">
          <Row>
            <Col className="da-statistic-icon-bg da-mr-lg-8 da-mb-xs-16 da-bg-color-primary-4 da-bg-color-dark-primary">
              <RiHandCoinLine
                className="da-text-color-primary-1 da-text-color-dark-primary-2 remix-icon"
                size={24}
              />
            </Col>

            <Col>
              <h5 className="da-mb-4">14.000 $</h5>
              <p className="da-badge-text da-mb-0 da-text-color-black-80 da-text-color-dark-30">
                Revenue
              </p>
            </Col>
          </Row>
        </Col>

        <Col sm={6} xs={12} className="da-mb-xs-32">
          <Row>
            <Col className="da-statistic-icon-bg da-mr-lg-8 da-mb-xs-16 da-bg-color-warning-4 da-bg-color-dark-warning">
              <RiMoneyDollarCircleLine
                className="da-text-color-warning-1 remix-icon"
                size={24}
              />
            </Col>

            <Col>
              <h5 className="da-mb-4">94.000 $</h5>
              <p className="da-badge-text da-mb-0 da-text-color-black-80 da-text-color-dark-30">
                Sales
              </p>
            </Col>
          </Row>
        </Col>

        <Col sm={6} xs={12}>
          <Row>
            <Col className="da-statistic-icon-bg da-mr-lg-8 da-mb-xs-16 da-bg-color-secondary-4 da-bg-color-dark-secondary">
              <RiUserAddLine
                className="da-text-color-secondary-1 remix-icon"
                size={24}
              />
            </Col>

            <Col>
              <h5 className="da-mb-4">+120</h5>
              <p className="da-badge-text da-mb-0 da-text-color-black-80 da-text-color-dark-30">
                Customer
              </p>
            </Col>
          </Row>
        </Col>

        <Col sm={6} xs={12}>
          <Row>
            <Col className="da-statistic-icon-bg da-mr-lg-8 da-mr-xs-8 da-mb-xs-16 da-bg-color-danger-4 da-bg-color-dark-danger">
              <RiUserStarLine
                className="da-text-color-danger-1 remix-icon"
                size={24}
              />
            </Col>

            <Col>
              <h5 className="da-mb-4">24,500</h5>
              <p className="da-badge-text da-mb-0 da-text-color-black-80 da-text-color-dark-30">
                Customer
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
