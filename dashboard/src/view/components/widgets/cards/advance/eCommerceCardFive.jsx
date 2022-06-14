import React, { useState } from 'react';

import { Card, Row, Col, Tag } from 'antd';
import { RiHeartFill } from 'react-icons/ri';

import xboxGamepad from '../../../../../assets/images/product/xbox-1.png';

export default function EcommerceCardFive() {
  const [wishCheck, setWishCheck] = useState(true);

  return (
    <Card className="da-border-color-black-40 da-card-3 da-eCommerceCardOne da-eCommerceCardOne-text-overlay">
      <Row gutter={32}>
        <Col className="da-text-center" span={24}>
          <Row justify="space-between" align="top">
            <Tag className="da-border-none" color="red">
              %25 Discount
            </Tag>

            {wishCheck ? (
              <div
                className="da-wish-button da-cursor-pointer da-border-radius-round remix-icon da-p-8 da-rate da-text-color-danger-1 da-bg-color-danger-4 da-bg-color-dark-danger"
                onClick={() => setWishCheck(false)}
              >
                <RiHeartFill />
              </div>
            ) : (
              <div
                className="da-wish-button da-cursor-pointer da-border-radius-round remix-icon da-p-8 da-rate da-text-color-black-40 da-text-color-dark-70 da-bg-color-black-10 da-bg-color-dark-90"
                onClick={() => setWishCheck(true)}
              >
                <RiHeartFill />
              </div>
            )}
          </Row>

          <img
            className="da-my-8"
            src={xboxGamepad}
            alt="Xbox Wireless Game Console"
            style={{
              maxHeight: 120,
            }}
          />

          <h3 className="da-mb-0 da-mb-8  da-text-color-primary-1 da-font-weight-500">
            $39.00
          </h3>

          <h5 className="da-mb-4 da-eCommerceCardOne-text-overlay">
            Xbox Wireless Game Console
          </h5>
        </Col>
      </Row>
    </Card>
  );
}
