import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { duration } from './code.js';

import { Card, Row, Col, Button, message } from 'antd';
import { RiCheckboxCircleLine, RiCodeSSlashLine } from 'react-icons/ri';

export default function DurationMessage() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const success = () => {
    message.success({
      content:
        'This is a prompt message for success, and it will disappear in 10 seconds',
      icon: <RiCheckboxCircleLine className="remix-icon" />,
      duration: 10,
    });
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Customize Duration</h4>
              <p className="da-p1-body">
                Customize message display duration from default 3s to 10s.
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
            Customized display duration
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {duration}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
