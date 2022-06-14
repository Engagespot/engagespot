import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { loading } from './code.js';

import { Card, Row, Col, Button, message } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function LoadingIndicatorMessage() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const success = () => {
    const hide = message.loading('Action in progress..', 0);
    setTimeout(hide, 2500);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Message with Loading Indicator</h4>
              <p className="da-p1-body">
                Display a global loading indicator, which is dismissed by itself
                asynchronously.
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
          <Button type="primary" ghost onClick={success}>
            Display a loading indicator
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {loading}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
