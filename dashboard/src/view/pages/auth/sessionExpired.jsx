import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Button } from 'antd';

import img from '../../../assets/images/pages/error/404.svg';

export default function SessionExpired() {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    let interval = setTimeout(() => {
      clearTimeout(interval);
      setCounter(counter - 1);
      if (counter === 1) window.location.href = '/auth/login';
    }, 1000);
  });
  return (
    <Row className="da-bg-color-primary-4 da-bg-color-dark-90 da-text-center">
      <Col className="da-error-content da-py-32" span={24}>
        <Row className="da-h-100" align="middle" justify="center">
          <Col>
            <div className="da-position-relative da-mt-sm-0 da-mt-64 da-mb-32">
              <div className="da-error-content-circle da-bg-dark-100"></div>
            </div>
            <h2 className="h1 da-mb-sm-0 da-mb-16">Session Expired</h2>

            <p className="da-mb-32 da-p1-body">You can go back home.</p>

            <Link to="/auth/login">
              <Button type="primary">Back to Home {counter}</Button>
            </Link>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="da-py-24">
        <p className="da-mb-0 da-badge-text">
          COPYRIGHT ©2020 Hypeople, All rights Reserved
        </p>
      </Col>
    </Row>
  );
}
