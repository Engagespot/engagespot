import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { status } from './code.js';

import { Card, Row, Col, Badge, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function BadgeStatus() {
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
          <h4>Status</h4>
          <p className="da-p1-body">Standalone badge with status.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Row gutter={[8, 8]}>
            <Col>
              <Badge status="success" />
            </Col>

            <Col>
              <Badge status="error" />
            </Col>

            <Col>
              <Badge status="default" />
            </Col>

            <Col>
              <Badge status="processing" />
            </Col>

            <Col>
              <Badge status="warning" />
            </Col>
          </Row>

          <br />

          <Row gutter={[16, 8]}>
            <Col>
              <Badge status="success" text="Success" />
            </Col>

            <Col>
              <Badge status="error" text="Error" />
            </Col>

            <Col>
              <Badge status="default" text="Default" />
            </Col>

            <Col>
              <Badge status="processing" text="Processing" />
            </Col>

            <Col>
              <Badge status="warning" text="Warning" />
            </Col>
          </Row>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {status}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
