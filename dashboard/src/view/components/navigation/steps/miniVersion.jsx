import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { miniVersion } from './code.js';

import { Card, Row, Col, Steps, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { Step } = Steps;

export default function StepsMiniVersion() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col lg={12} span={20} className="da-mb-16">
          <h4>Mini Version</h4>
          <p className="da-p1-body">
            By setting like this: &lt;Steps size="small"&gt;, you can get a mini
            version.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24} className="da-overflow-scroll da-scrollbar-x-hidden">
          <Steps size="small" current={1}>
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
          </Steps>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {miniVersion}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
