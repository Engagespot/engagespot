import React from 'react';

import { Card, Row, Col } from 'antd';

export default function ClassTags() {
  return (
    <Card className="da-border-color-black-40">
      <Row className="da-mb-16">
        <h4>Class Tags</h4>

        <p className="da-p1-body text-primary-2 mt-4px">
          Class tags can be use for, &lt;p&gt; and &lt;span&gt; add .caption,
          .p1-body, p2-body classes, when you want to match the font styling of
          a tag.
        </p>
      </Row>

      <Row className="da-mb-24">
        <Col span={12}>
          <p className="da-caption da-text-color-black-60">Tag</p>
        </Col>

        <Col span={12}>
          <p className="da-caption da-mt-1 da-float-right da-text-color-black-60">
            Size
          </p>
        </Col>
      </Row>

      <Row className="da-mb-24">
        <Col span={12}>
          <p className="da-caption">Caption</p>
        </Col>

        <Col span={12}>
          <p className="da-caption da-float-right da-mt-2">12/18px</p>
        </Col>
      </Row>

      <Row className="da-mb-24">
        <Col span={12}>
          <p className="da-p1-body">P1•Body</p>
        </Col>

        <Col span={12}>
          <p className="da-p1-body da-mt-3 da-float-right">14/21px</p>
        </Col>
      </Row>

      <Row className="da-mb-24">
        <Col span={12}>
          <p className="da-p2-body">P2•Body</p>
        </Col>

        <Col span={12}>
          <p className="da-p2-body da-mt-4 da-float-right">14/21px</p>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <p className="da-button">Button</p>
        </Col>

        <Col span={12}>
          <p className="da-button da-float-right">14/16px</p>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <p className="da-placeholder">Placeholder Text</p>
        </Col>

        <Col span={12}>
          <p className="da-placeholder da-float-right">14/16px</p>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <p className="da-input-description">Input Description</p>
        </Col>

        <Col span={12}>
          <p className="da-input-description da-float-right">10/12px</p>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <p className="da-input-label">Input Label</p>
        </Col>

        <Col span={12}>
          <p className="da-input-label da-float-right">14/16px</p>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <p className="da-badge-text">Badge Text</p>
        </Col>

        <Col span={12}>
          <p className="da-badge-text da-float-right">12/12px</p>
        </Col>
      </Row>
    </Card>
  );
}
