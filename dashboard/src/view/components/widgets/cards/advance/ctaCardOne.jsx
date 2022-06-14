import React from 'react';

import { useSelector } from 'react-redux';

import { Card, Row, Col, Button } from 'antd';

import illustration from '../../../../../assets/images/illustrations/time-management-1.svg';
import illustrationDark from '../../../../../assets/images/illustrations/time-management-1-dark.svg';

export default function CtaCardOne() {
  const theme = useSelector(state => state.customise.theme);

  return (
    <Card className="da-border-color-black-40 da-card-6">
      <Row>
        <Col className="da-text-center" span={24}>
          <img
            src={theme == 'light' ? illustration : illustrationDark}
            alt="Buy Pro Account to explore Premium Features"
          />

          <h4 className="da-mb-0 da-my-24 da-mr-4 da-font-weight-700">
            Buy Pro Account to explore Premium Features
          </h4>

          <Button type="primary">Purchase Now</Button>
        </Col>
      </Row>
    </Card>
  );
}
