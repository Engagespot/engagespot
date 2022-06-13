import React from 'react';

import { Card, Row, Col, Tooltip } from 'antd';

export default function BlackGradients() {
  return (
    <Card className="da-border-color-black-40">
      <Row className="da-mb-16">
        <h4 className="da-w-100">Blacks & Gradients</h4>

        <p className="da-p1-body">
          Black tags can be use with class
          .da-&#123;css-property&#125;-black-dark-bg, Gradients can be used with
          class .da-&#123;css-property&#125;-primary-gradient. Gradients is used
          for background instead of backgroun-color.
        </p>
      </Row>

      <Row justify="space-between" className="da-mb-48">
        <Col>
          <Row className="da-border-radius da-overflow-hidden da-border-color-black-40">
            <Col>
              <Tooltip title="Dark-Bg #111314">
                <Col className="da-bg-color-black-bg da-color-wrapper da-border-radius-l da-mb-8"></Col>
              </Tooltip>
              <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
                {' '}
                Dark-Bg
              </p>
            </Col>

            <Col>
              <Tooltip title="B-100 #2D3436">
                <Col className="da-bg-color-black-100 da-color-wrapper da-mb-8"></Col>
              </Tooltip>
              <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
                {' '}
                B-100
              </p>
            </Col>

            <Col>
              <Tooltip title="B-80 #636E72">
                <Col className="da-bg-color-black-80 da-color-wrapper da-mb-8"></Col>
              </Tooltip>
              <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
                {' '}
                B-80
              </p>
            </Col>

            <Col>
              <Tooltip title="B-60 #B2BEC3">
                <Col className="da-bg-color-black-60 da-color-wrapper da-mb-8"></Col>
              </Tooltip>
              <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
                {' '}
                B-60
              </p>
            </Col>

            <Col>
              <Tooltip title="B-40 #DFE6E9">
                <Col className="da-bg-color-black-40 da-color-wrapper da-mb-8"></Col>
              </Tooltip>
              <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
                {' '}
                B-40
              </p>
            </Col>

            <Col>
              <Tooltip title="B-20 #F0F3F5">
                <Col className="da-bg-color-black-20 da-color-wrapper da-mb-8"></Col>
              </Tooltip>
              <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
                {' '}
                B-20
              </p>
            </Col>

            <Col>
              <Tooltip title="B-10 #F7FAFC">
                <Col className="da-bg-color-black-10 da-color-wrapper da-mb-8"></Col>
              </Tooltip>
              <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
                {' '}
                B-10
              </p>
            </Col>

            <Col>
              <Tooltip title="B-0 #FFFFFF">
                <Col className="da-bg-color-black-10 da-color-wrapper da-border-radius-r da-mb-8"></Col>
              </Tooltip>
              <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
                {' '}
                B-0
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col>
          <Col className="da-bg-primary-gradient da-color-wrapper da-border-radius da-mb-8"></Col>
          <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
            Primary <br />
            Gradient
          </p>
        </Col>

        <Col>
          <Col className="da-bg-secondary-gradient da-color-wrapper da-border-radius da-mb-8"></Col>
          <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
            Secondary <br />
            Gradient
          </p>
        </Col>

        <Col>
          <Col className="da-bg-danger-gradient da-color-wrapper da-border-radius da-mb-8"></Col>
          <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
            Danger <br />
            Gradient
          </p>
        </Col>

        <Col>
          <Col className="da-bg-info-gradient da-color-wrapper da-border-radius da-mb-8"></Col>
          <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
            Info <br />
            Gradient
          </p>
        </Col>

        <Col>
          <Col className="da-bg-success-gradient da-color-wrapper da-border-radius da-mb-8"></Col>
          <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
            Success <br />
            Gradient
          </p>
        </Col>

        <Col>
          <Col className="da-bg-warning-gradient da-color-wrapper da-border-radius da-mb-8"></Col>
          <p className="da-badge-text da-text-color-black-100 da-text-color-dark-0">
            Warning <br />
            Gradient
          </p>
        </Col>
      </Row>
    </Card>
  );
}
