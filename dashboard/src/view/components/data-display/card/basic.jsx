import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { basic } from './code.js';

import { Card, Row, Col, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function BasicCard() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Basic Card</h4>
          <p className="da-p1-body">
            A basic card containing a title, content and an extra corner
            content. Supports two sizes: default and small.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col xl={12} md={24} sm={24} xs={24}>
          <Card
            className="da-mb-16 da-mr-16"
            title="Default size card"
            extra={<a href="#">More</a>}
          >
            <p className="da-p1-body">Card content</p>
            <p className="da-p1-body">Card content</p>
            <p className="da-p1-body">Card content</p>
          </Card>
        </Col>

        <Col xl={12} md={24} sm={24} xs={24}>
          <Card
            size="small"
            title="Small size card"
            extra={<a href="#">More</a>}
          >
            <p className="da-p1-body">Card content</p>
            <p className="da-p1-body">Card content</p>
            <p className="da-p1-body">Card content</p>
          </Card>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {basic}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
