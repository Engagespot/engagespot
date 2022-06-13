import React from 'react';

import { Row, Col, Card, Avatar } from 'antd';
import { RiArrowRightLine } from 'react-icons/ri';

import marketingImg1 from '../../../../../assets/images/dasboard/analytics-marketing-team-1.svg';
import marketingImg2 from '../../../../../assets/images/dasboard/analytics-marketing-team-2.svg';
import marketingImg3 from '../../../../../assets/images/dasboard/analytics-marketing-team-3.svg';
import marketingImg4 from '../../../../../assets/images/dasboard/analytics-marketing-team-4.svg';
import marketingImg5 from '../../../../../assets/images/dasboard/analytics-marketing-team-5.svg';
import marketingImg6 from '../../../../../assets/images/dasboard/analytics-marketing-team-6.svg';

export default function BestTeamCard() {
  return (
    <Card className="da-border-color-black-40">
      <Row justify="space-between">
        <Col md={12} span={24}>
          <h5>Best team</h5>
          <p className="da-p1-body da-text-color-black-60 da-text-color-dark-50 da-mb-0">
            Highest income this month
          </p>

          <Row align="middle">
            <h4 className="da-mb-0">$442.98</h4>
            <p className="da-p1-body da-text-color-black-60 da-text-color-dark-50 da-ml-8 da-mb-0">
              Highest income this month
            </p>
          </Row>
        </Col>

        <Col md={12} span={24} className="da-mt-sm-32">
          <h5 className="da-text-center">Marketing team</h5>

          <Row align="middle" justify="center">
            <Avatar
              size={36}
              src={marketingImg1}
              className="da-mr-8 da-bg-color-primary-3"
            />

            <Avatar
              size={36}
              src={marketingImg2}
              className="da-mr-8 da-bg-color-info-3"
            />

            <Avatar
              size={36}
              src={marketingImg3}
              className="da-mr-8 da-bg-color-black-60"
            />

            <Avatar
              size={36}
              src={marketingImg4}
              className="da-mr-8 da-bg-color-danger-3"
            />

            <Avatar
              size={36}
              src={marketingImg5}
              className="da-mr-8 da-bg-color-secondary-3"
            />

            <Avatar
              size={36}
              src={marketingImg6}
              className="da-mr-16 da-bg-color-warning-3"
            />

            <RiArrowRightLine
              className="remix-icon da-text-color-dark-30"
              size={24}
            />
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
