import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { switchStep } from './code.js';

import { Card, Row, Col, Button, Steps } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { Step } = Steps;

export default function StepsSwitchStep() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col lg={12} span={20} className="da-mb-16">
          <h4>Switch Step</h4>
          <p className="da-p1-body">
            Cooperate with the content and buttons, to represent the progress of
            a process.
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
          <div className="da-overflow-scroll da-scrollbar-x-hidden">
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
          </div>

          <div className="da-border-radius-sm da-border-dashed da-bg-color-black-20 da-bg-color-dark-90 da-text-color-dark-0 da-text-center da-p-120 da-mt-16 da-border-1 da-border-color-dark-80">
            {steps[current].content}
          </div>

          <div className="da-mt-24">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}

            {current === steps.length - 1 && (
              <Button type="primary">Done</Button>
            )}

            {current > 0 && (
              <Button className="da-mx-8" onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {switchStep}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
