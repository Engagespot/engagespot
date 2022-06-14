import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { more } from './code.js';

import { Card, Row, Col, Alert, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function MoreAlert() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>More Types</h4>
              <p className="da-p1-body">
                There are 4 types of Alert: success, info, warning, error.
              </p>
            </Col>

            <Col lg={12} span={4} className="da-text-right">
              <Button
                onClick={toggleChecked}
                type="text"
                icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Alert message="Success Text" type="success" />
          <Alert className="da-mt-16" message="Info Text" type="info" />
          <Alert className="da-mt-16" message="Warning Text" type="warning" />
          <Alert className="da-mt-16" message="Danger Text" type="error" />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {more}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
