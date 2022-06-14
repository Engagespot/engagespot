import React from 'react';

import { useSelector } from 'react-redux';

import { Card, Row, Col, Button } from 'antd';

import cardImg from '../../../../../assets/images/dasboard/analytics-payment-bg.svg';
import cardImgDark from '../../../../../assets/images/dasboard/analytics-payment-bg-dark.png';

export default function UpgradePlanCardOneBg() {
  // Redux
  const theme = useSelector(state => state.customise.theme);

  return (
    <Card
      className="da-border-color-black-40 da-card-1 da-upgradePlanCardOne da-upgradePlanCardOne-bg"
      style={{
        backgroundImage: `url(${theme == 'dark' ? cardImgDark : cardImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
      }}
    >
      <Row align="middle" className="da-mt-8">
        <Col span={24} className="da-mb-4">
          <Row align="middle" justify="space-between">
            <Col flex="1">
              <h4 className="da-mb-8">
                Get exclusive discounts for any payment method
              </h4>

              <p className="da-p1-body da-mb-0">
                by upgrading your plan to premium
              </p>
            </Col>

            <Button className="da-float-right da-mt-xs-16 da-text-color-primary-1 da-bg-dark-primary-1 da-border-color-dark-primary-1 da-text-color-dark-0">
              Upgradge Now
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
