import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { miniCircleProgressBar } from './code.js';

import { Card, Row, Col, Progress, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function MiniCircleProgessBar() {
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
              <h4>Mini size circular progress bar</h4>
              <p className="da-p1-body">A smaller circular progress bar.</p>
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
          <Row gutter={[8, 8]}>
            <Col>
              <Progress
                type="circle"
                percent={75}
                width={100}
                strokeWidth={2}
              />
            </Col>

            <Col className="da-text-center">
              <Progress
                type="circle"
                percent={70}
                width={100}
                strokeWidth={2}
                status="exception"
              />
              <p className="da-badge-text da-font-weight-400 da-mb-0 da-mt-8">
                Information
              </p>
            </Col>

            <Col className="da-text-center">
              <Progress
                type="circle"
                percent={100}
                width={100}
                strokeWidth={2}
              />
              <p className="da-badge-text da-font-weight-400 da-mb-0 da-mt-8">
                Information
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {miniCircleProgressBar}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
