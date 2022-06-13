import React from 'react';

import { Card, Row, Col } from 'antd';
import { RiArrowRightUpLine } from 'react-icons/ri';

import watch from '../../../../../assets/images/product/watch-card.png';

export default function EcommerceCardTwo() {
  return (
    <Card className="da-border-color-black-40 da-card-3">
      <Row>
        <Col span={24}>
          <Col className="da-text-center">
            <img src={watch} alt="Xbox Wireless Game" />
          </Col>

          <Row justify="center">
            <Col className="da-text-center">
              <h5 className="da-mb-0 da-mt-12 da-mr-4 da-text-color-black-100 da-text-color-dark-0 da-p1-body da-font-weight-500">
                Xbox Wireless Game
              </h5>

              <h3 className="da-mb-0 da-my-8 da-text-color-primary-1">£399</h3>

              <Row align="middle" justify="center">
                <RiArrowRightUpLine
                  size={16}
                  className="da-text-color-success-1"
                />

                <p className="da-mb-0 da-mr-8 da-badge-text da-text-color-success-1">
                  +4
                </p>

                <p className="da-mb-0 da-badge-text">New Item</p>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
