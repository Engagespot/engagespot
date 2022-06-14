import React from 'react';

import { Card, Row, Col, Button, Progress } from 'antd';
import { Document } from 'react-iconly';

export default function WelcomeCardOne(props) {
  const { title, subTitle, price, percent, image } = props;

  return (
    <Card className="da-border-color-black-40 da-card-3 da-welcomeCard">
      <Row>
        <Col xl={12} sm={18} xs={24}>
          <Row justify="space-between">
            <h2 className="da-mb-8 da-ml-4">{title}</h2>
            <div className="da-dot-1 da-bg-color-primary-4 da-bg-color-dark-90" />
          </Row>

          <p className="da-mb-32 da-text-color-dark-0 da-pr-sm-24 da-pr-64">
            {subTitle}
          </p>

          <Row>
            <Col span={18}>
              {price && (
                <h3 className="da-mb-0 da-text-color-black-60 da-text-color-dark-40">
                  £ {price}
                </h3>
              )}

              {percent && <Progress percent={percent} strokeWidth={4} />}
            </Col>
          </Row>

          <Button
            icon={<Document set="curved" className="remix-icon" />}
            type="text"
            className="da-px-0 da-btn-text-bg-none da-text-color-primary-1 da-mt-8"
          >
            Report Detail
          </Button>
        </Col>

        <img src={image} className="da-img-1" alt={title} />
      </Row>
    </Card>
  );
}
