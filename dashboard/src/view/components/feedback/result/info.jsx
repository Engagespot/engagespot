import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { info } from './code.js';

import { Card, Row, Col, Result, Button } from 'antd';
import { RiErrorWarningFill, RiCodeSSlashLine } from 'react-icons/ri';

export default function InfoResult() {
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
              <h4>Info</h4>
              <p className="da-p1-body">Show processing results.</p>
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
          <Result
            className="da-px-sm-8"
            status="info"
            title={<h3>Your operation has been executed</h3>}
            icon={<RiErrorWarningFill className="remix-icon" />}
            extra={
              <div className="da-mt-32">
                <Button type="primary">Go Console</Button>
              </div>
            }
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {info}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
