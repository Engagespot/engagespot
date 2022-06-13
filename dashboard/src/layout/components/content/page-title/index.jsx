import React from 'react';

import { Col, Row } from 'antd';

export default function PageTitle(props) {
  const { pageTitle, pageText } = props;

  return (
    <Col span={24}>
      <Row>
        <Col span={24}>
          {pageTitle && <h1 className="da-mb-8">{pageTitle}</h1>}
        </Col>

        <Col span={24}>
          {pageText && <p className="da-mb-0 da-p1-body">{pageText}</p>}
        </Col>
      </Row>
    </Col>
  );
}
