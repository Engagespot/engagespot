import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { error } from './code.js';

import { Card, Row, Col, Result, Button, Typography } from 'antd';
import {
  RiCloseCircleFill,
  RiCloseCircleLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

const { Paragraph, Text } = Typography;

export default function ErrorResult() {
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
              <h4>Error</h4>
              <p className="da-p1-body">Complex error feedback.</p>
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

        <Col span={24} className="da-result-col">
          <Result
            className="da-px-sm-8 da-pb-32"
            status="error"
            title={<h3 className="da-mb-32">Submission Failed</h3>}
            icon={<RiCloseCircleFill className="remix-icon" />}
            extra={null}
          >
            <div className="desc">
              <Paragraph>
                <Text className="h5">
                  The content you submitted has the following error:
                </Text>
              </Paragraph>

              <Paragraph>
                <RiCloseCircleLine className="remix-icon da-text-color-danger-1 da-mr-8" />
                Your account has been frozen.{' '}
                <a href="#">Thaw immediately &gt;</a>
              </Paragraph>

              <Paragraph>
                <RiCloseCircleLine className="remix-icon da-text-color-danger-1 da-mr-8" />
                Your account is not yet eligible to apply.
                <a href="#">Apply Unlock &gt;</a>
              </Paragraph>
            </div>
          </Result>

          <div className="da-result-button da-text-center da-mb-48">
            <Button type="primary">Go Console</Button>

            <Button className="da-ml-8" ghost>
              Buy Again
            </Button>
          </div>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {error}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
