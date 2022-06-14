import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { buttonTypes } from './code.js';

import { Card, Row, Col, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function ButtonTypes() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-pb-16" lg={12} span={20}>
          <h4>Button Types</h4>
          <p className="da-p1-body">
            There are primary button, default button, dashed button, text button
            and link button in Yoda.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Row>
          <Col span={24}>
            <Button type="primary" className="da-mr-16 da-mb-16">
              Primary Button
            </Button>

            <Button className="da-mr-16 da-mb-16">Default Button</Button>

            <Button className="da-mr-16 da-mb-16" type="dashed">
              Dashed Button
            </Button>

            <Button className="da-mr-16 da-mb-16" type="text">
              Text Button
            </Button>

            <Button className="da-mr-16 da-mb-16" type="link">
              Link Button
            </Button>
          </Col>
        </Row>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {buttonTypes}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
