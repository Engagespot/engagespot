import React from 'react';

import { Card, Row, Col, Button } from 'antd';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function UpgradePlanCardOne() {
  return (
    <Card className="da-border-color-black-40 da-card-1 da-py-2 da-upgradePlanCardOne">
      <Row align="middle" className="da-mt-8">
        <Col span={24} className="da-mb-4">
          <Row align="middle" justify="space-between">
            <Col span={20}>
              <h5 className="da-mb-8">
                Get exclusive discounts for any payment method
              </h5>

              <p className="da-p1-body da-mb-0">
                by upgrading your plan to premium
              </p>
            </Col>

            <Button
              className="da-float-right da-mt-xs-16"
              shape="circle"
              icon={<RiArrowRightSLine className="remix-icon" />}
              type="primary"
            />
          </Row>

          <div className="da-dot-1 da-bg-color-black-20 da-bg-color-dark-90"></div>
          <div className="da-dot-2 da-bg-color-black-20 da-bg-color-dark-90"></div>
          <div className="da-dot-3 da-bg-color-success-4 da-bg-color-dark-success"></div>
        </Col>
      </Row>
    </Card>
  );
}
