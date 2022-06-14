import React, { useState } from 'react';

import { Card, Row, Col, Button, Tag, Rate } from 'antd';
import { RiHeartFill, RiShoppingBagLine } from 'react-icons/ri';

import xboxGamepad from '../../../../../assets/images/product/xbox-1.png';

export default function EcommerceCardThree() {
  const [wishCheck, setWishCheck] = useState(true);

  return (
    <Card className="da-border-color-black-40 da-mb-32 da-card-3 da-eCommerceCardOne">
      <Row gutter={32}>
        <Col sm={10} xs={24} className="da-mb-xs-24">
          <Row justify="space-between" align="top">
            <Tag className="da-border-none" color="blue">
              Featured
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

          <Col className="da-text-center">
            <img src={xboxGamepad} alt="Xbox Wireless Game Console" />
          </Col>
        </Col>

        <Col sm={14} xs={24}>
          <Rate defaultValue={4.5} size={16} allowHalf></Rate>

          <div className="da-my-8">
            <h4 className="da-mb-4">Xbox Wireless Game Console</h4>

            <p className="da-caption da-mb-0 da-text-color-black-60 da-text-color-dark-50">
              By{' '}
              <span className="da-text-color-black-80 da-text-color-dark-30">
                {' '}
                Microsoft
              </span>
            </p>
          </div>

          <p className="da-mb-0 da-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            urna eu nunc faucibus scelerisque quis sed est.
          </p>

          <Row align="middle" className="da-my-8">
            <span className="h5 da-mb-0 da-mr-8 da-text-color-primary-1 da-font-weight-500">
              $39.00
            </span>

            <span className="da-mb-0 da-mr-4 da-text-color-black-60 da-text-color-dark-50 da-text-line-through da-input-description">
              $59.00
            </span>
          </Row>

          <Row gutter={8}>
            <Col sm={12} xs={24} className="da-mb-xs-8">
              <Button type="ghost" className="da-mr-8" block>
                Check Detail
              </Button>
            </Col>

            <Col sm={12} xs={24}>
              <Button
                icon={<RiShoppingBagLine className="remix-icon " />}
                type="primary"
                block
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
