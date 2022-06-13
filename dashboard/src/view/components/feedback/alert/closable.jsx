import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { closable } from './code.js';

import { Card, Row, Col, Alert, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function ClosableAlert() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function onClose() {}

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Closable</h4>
              <p className="da-p1-body">To show close button.</p>
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
            message="Success Text"
            type="success"
            closable
            onClose={onClose}
          />

          <Alert
            className="da-mt-16"
            message="Info Text"
            type="info"
            closable
            onClose={onClose}
          />

          <Alert
            className="da-mt-16"
            message="Warning Text"
            type="warning"
            closable
            onClose={onClose}
          />

          <Alert
            className="da-mt-16"
            message="Danger Text"
            description="Danger Alert - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
            type="error"
            closable
            onClose={onClose}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {closable}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
