import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { types } from './code.js';

import { Card, Row, Col, Button, message } from 'antd';
import {
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiCloseCircleLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

export default function TypesMessage() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const success = () => {
    message.success({
      content: 'This is a success message',
      icon: <RiCheckboxCircleLine className="remix-icon" />,
    });
  };

  const error = () => {
    message.error({
      content: 'This is an error message',
      icon: <RiCloseCircleLine className="remix-icon" />,
    });
  };

  const warning = () => {
    message.warning({
      content: 'This is a warning message',
      icon: <RiErrorWarningLine className="remix-icon" />,
    });
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Other Types of Message</h4>
              <p className="da-p1-body">
                Messages of success, error and warning types.
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
          <Button
            className="da-mb-16 da-mr-16"
            type="primary"
            ghost
            onClick={success}
          >
            Success
          </Button>

          <Button
            className="da-mb-16 da-mr-16"
            type="primary"
            ghost
            onClick={error}
          >
            Error
          </Button>

          <Button
            className="da-mb-16 da-mr-16"
            type="primary"
            ghost
            onClick={warning}
          >
            Warning
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {types}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
