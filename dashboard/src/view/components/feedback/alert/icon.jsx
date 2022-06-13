import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { icon } from './code.js';

import { Card, Row, Col, Alert, Button } from 'antd';
import { RiFileWarningLine, RiCodeSSlashLine } from 'react-icons/ri';

export default function IconAlert() {
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
              <h4>Icon</h4>
              <p className="da-p1-body">
                A relevant icon will make information clearer and more friendly.
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
          <Alert
            message="Success Alert - Lorem ipsum dolor sit amet,"
            type="success"
            showIcon
            icon={<RiFileWarningLine className="remix-icon" size={24} />}
          />

          <Alert
            className="da-mt-16"
            message="Info Text"
            description="Info Alert - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
            type="info"
            showIcon
            icon={<RiFileWarningLine className="remix-icon" size={24} />}
          />

          <Alert
            className="da-mt-16"
            message="Warning Alert - Lorem ipsum dolor sit amet, "
            type="warning"
            showIcon
            icon={<RiFileWarningLine className="remix-icon" size={24} />}
          />

          <Alert
            className="da-mt-16"
            message="Danger Text"
            description="Danger Alert - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
            type="error"
            showIcon
            icon={<RiFileWarningLine className="remix-icon" size={24} />}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {icon}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
