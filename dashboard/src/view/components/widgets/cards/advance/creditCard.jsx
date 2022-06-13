import React from 'react';

import { Card, Row, Col, Progress } from 'antd';
import { RiMoneyEuroCircleLine, RiVisaLine } from 'react-icons/ri';

export default function CreditCard() {
  return (
    <Card className="da-border-color-black-40 da-card-3">
      <Row>
        <Col span={24}>
          <Row justify="space-between">
            <Col>
              <h5 className="da-mb-0 da-text-color-black-80 da-text-color-dark-30">
                Balance
              </h5>
              <Row align="middle">
                <RiMoneyEuroCircleLine
                  size={24}
                  className="da-text-color-dark-0"
                />
                <h2 className="da-mb-0 da-ml-4">23.900</h2>
              </Row>
            </Col>

            <RiVisaLine size={64} className="da-text-color-primary-1" />
          </Row>

          <Row className="da-mt-48">
            <Col span={18}>
              <p className="da-mb-0 da-text-color-dark-0">Limit</p>
              <Progress percent={50} showInfo={false} strokeWidth={4} />
            </Col>
          </Row>

          <Row className="da-mt-24">
            <Col className="da-mr-64">
              <p className="da-mb-0 da-caption da-text-color-black-80 da-text-color-dark-30">
                Name on Card
              </p>
              <h5 className="da-mb-0">Edward Lightning</h5>
            </Col>

            <Col>
              <p className="da-mb-0 da-caption da-text-color-black-80 da-text-color-dark-30">
                Expires
              </p>
              <h5 className="da-mb-0">12/23</h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
