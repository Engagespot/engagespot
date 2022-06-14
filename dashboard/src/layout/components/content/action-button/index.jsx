import React from 'react';

import { Col, Row, Button } from 'antd';
import { RiSettings4Line } from 'react-icons/ri';

export default function ActionButton({ label, ...rest }) {
  return (
    <Col>
      <Row align="middle">
        <Button
          {...rest}
          type="primary"
          className="da-mr-sm-8 da-mr-16"
          ghost="true"
        >
          {label ? label : 'Action'}
        </Button>

        {/* <Button type="primary" icon={<RiSettings4Line />} /> */}
      </Row>
    </Col>
  );
}
