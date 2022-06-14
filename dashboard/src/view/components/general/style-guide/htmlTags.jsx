import React from 'react';

import { Card, Row, Col } from 'antd';

export default function HtmlTags() {
  return (
    <Col className="da-px-0">
      <div className="da-mb-32">
        <h2 className="da-mb-16">Typography</h2>

        <p className="da-p1-body">
          These examples for typography, including global settings, headings,
          body text, lists, and more. When more control is needed, check out the
          textual utility classes.
        </p>
      </div>

      <div className="da-mb-32">
        <h4>Headings</h4>

        <p className="da-p1-body">
          All HTML headings,
          <span className="da-text-color-primary-1 da-text-color-dark-primary-2">
            &lt;h1&gt;
          </span>{' '}
          through
          <span className="da-text-color-primary-1 da-text-color-dark-primary-2">
            &lt;h6&gt;
          </span>{' '}
          are available.
        </p>
      </div>

      <Card className="da-border-color-black-40">
        <Row justify="space-between" className="da-mb-24">
          <Col span={12}>
            <p className="da-caption da-text-color-black-60">Tag</p>
          </Col>

          <Col span={12}>
            <p className="da-caption da-mt-1 da-text-color-black-60">Size</p>
          </Col>
        </Row>

        <Row className="da-mb-24 da-border-bottom-1 da-border-color-dark-80">
          <Col span={12}>
            <p className="da-text-color-primary-1 da-text-color-dark-primary-2">
              &lt;h1&gt; &lt;h1&gt;
            </p>
          </Col>

          <Col className="da-float-right" span={12}>
            <h1 className="da-mb-24">h1. Yoda heading</h1>
          </Col>
        </Row>

        <Row className="da-mb-24 da-border-bottom-1 da-border-color-dark-80">
          <Col span={12}>
            <p className="da-text-color-primary-1 da-text-color-dark-primary-2">
              &lt;h2&gt; &lt;h2&gt;
            </p>
          </Col>

          <Col className="da-float-right" span={12}>
            <h2 className="da-mb-24">h2. Yoda heading</h2>
          </Col>
        </Row>

        <Row className="da-mb-24 da-border-bottom-1 da-border-color-dark-80">
          <Col span={12}>
            <p className="da-text-color-primary-1 da-text-color-dark-primary-2">
              &lt;h3&gt; &lt;h3&gt;
            </p>
          </Col>

          <Col className="da-float-right" span={12}>
            <h3 className="da-mb-24">h3. Yoda heading</h3>
          </Col>
        </Row>

        <Row className="da-mb-24 da-border-bottom-1 da-border-color-dark-80">
          <Col span={12}>
            <p className="da-text-color-primary-1 da-text-color-dark-primary-2">
              &lt;h4&gt; &lt;h4&gt;
            </p>
          </Col>

          <Col className="da-float-right" span={12}>
            <h4 className="da-mb-24">h4. Yoda heading</h4>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <p className="da-text-color-primary-1 da-text-color-dark-primary-2">
              &lt;h5&gt; &lt;h5&gt;
            </p>
          </Col>

          <Col className="da-float-right" span={12}>
            <h5 className="da-mb-24">h5. Yoda heading</h5>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
