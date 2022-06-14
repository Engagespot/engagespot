import React from 'react';

import { useSelector } from 'react-redux';

import { Card, Row, Col } from 'antd';

import illustration from '../../../../../assets/images/illustrations/growth.svg';
import illustrationDark from '../../../../../assets/images/illustrations/growth-dark.svg';

export default function CtaCardTwo() {
  const theme = useSelector(state => state.customise.theme);

  return (
    <Card className="da-border-color-black-40 da-card-6 da-pb-10">
      <Row>
        <Col className="da-text-center" span={24}>
          <img
            src={theme == 'light' ? illustration : illustrationDark}
            alt="Upgrade Account"
          />

          <h3 className="da-mb-0 da-mt-24 da-mb-16 da-mr-4">Upgrade Account</h3>

          <p className="da-p1-body da-mb-0">
            5 integrations, 30 team members, <br /> advanced
            <span className="da-mx-4 da-text-color-primary-1 da-text-color-dark-primary-2 da-font-weight-500">
              features
            </span>
            for teams.
          </p>
        </Col>
      </Row>
    </Card>
  );
}
