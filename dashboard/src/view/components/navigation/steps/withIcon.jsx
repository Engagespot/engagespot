import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { withIcon } from './code.js';

import { Card, Row, Col, Steps, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { Step } = Steps;

export default function StepsWithIcon() {
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
          <h4>With icon</h4>
          <p className="da-p1-body">
            You can use your own custom icons by setting the property icon for
            Steps.Step.
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
          <Steps>
            <Step
              status="finish"
              title="Login"
              icon={
                <span className="remix-icon">
                  <i className="ri-user-line" />
                </span>
              }
            />
            <Step
              status="process"
              title="Pay"
              icon={
                <span className="remix-icon  anticon-loading anticon-spin">
                  <i className="ri-loader-5-line" />
                </span>
              }
            />

            <Step
              status="wait"
              title="Done"
              icon={
                <span className="remix-icon">
                  <i className="ri-user-smile-line" />
                </span>
              }
            />
          </Steps>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {withIcon}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
