import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { basic } from './code.js';

import { Card, Row, Col, Popconfirm, message, Button } from 'antd';
import {
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiCloseCircleLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

export default function BasicPopconfirm() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function confirm() {
    message.success({
      content: 'Click on Yes',
      icon: <RiCheckboxCircleLine className="remix-icon" />,
    });
  }

  function cancel() {
    message.error({
      content: 'Click on No',
      icon: <RiCloseCircleLine className="remix-icon" />,
    });
  }

  return (
    <Card className="da-border-color-black-40">
      <Row gutter={[32, 32]}>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Basic</h4>
              <p className="da-p1-body">The basic example.</p>
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
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            icon={
              <RiErrorWarningLine className="remix-icon da-text-color-primary-1 da-text-color-dark-primary-2" />
            }
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {basic}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
