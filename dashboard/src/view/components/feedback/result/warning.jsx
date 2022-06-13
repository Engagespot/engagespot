import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { warning } from './code.js';

import { Card, Row, Col, Result, Button } from 'antd';
import { RiAlertFill, RiCodeSSlashLine } from 'react-icons/ri';

export default function WarningResult() {
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
              <h4>Warning</h4>
              <p className="da-p1-body">The result of the warning.</p>
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
            status="warning"
            title={<h3>There are some problems with your operation.</h3>}
            icon={<RiAlertFill className="remix-icon" />}
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
          {warning}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
