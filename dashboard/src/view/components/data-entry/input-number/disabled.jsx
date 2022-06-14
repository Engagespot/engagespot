import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { disable } from './code.js';

import { Card, Row, Col, InputNumber, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function InputNumberDisabled() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Disabled</h4>
          <p className="da-p1-body">
            Click the button to toggle between available and disabled states.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <InputNumber min={1} max={10} disabled={disabled} defaultValue={3} />
          <Col className="da-mt-16">
            <Button onClick={toggle} type="primary">
              Toggle disabled
            </Button>
          </Col>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {disable}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
