import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { trigger } from './code.js';

import { Card, Row, Col, Popconfirm, Switch, message, Button } from 'antd';
import {
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiCloseCircleLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

export default function TriggerPopconfirm() {
  const [visible, setVisible] = useState(false);
  const [condition, setCondition] = useState(true);
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const changeCondition = value => {
    setCondition(value);
  };

  function confirm() {
    message.success({
      content: 'Next step.',
      icon: <RiCheckboxCircleLine className="remix-icon" />,
    });
  }

  function cancel() {
    message.error({
      content: 'Click on cancel',
      icon: <RiCloseCircleLine className="remix-icon" />,
    });
  }

  const handleVisibleChange = visible => {
    if (!visible) {
      setVisible(visible);
      return;
    }

    if (condition) {
      confirm();
    } else {
      setVisible(visible);
    }
  };

  return (
    <Card className="da-border-color-black-40">
      <Row gutter={[32, 32]}>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Conditional trigger</h4>
              <p className="da-p1-body">
                Make it pop up under some conditions.
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
          <Popconfirm
            title="Are you sure delete this task?"
            visible={visible}
            onVisibleChange={handleVisibleChange}
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            icon={
              <RiErrorWarningLine className="remix-icon da-text-color-primary-1 da-text-color-dark-primary-2" />
            }
          >
            <a href="#">Delete a task</a>
          </Popconfirm>

          <div className="da-mt-16">
            <span className="da-text-color-dark-30">
              Whether directly execute：
            </span>
            <Switch defaultChecked onChange={changeCondition} />
          </div>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {trigger}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
