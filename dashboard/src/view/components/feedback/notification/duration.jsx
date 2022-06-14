import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { duration } from './code.js';

import { Card, Row, Col, Button, notification } from 'antd';
import { RiCloseFill, RiCodeSSlashLine } from 'react-icons/ri';

export default function DurationNotification() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const openNotification = () => {
    const args = {
      message: 'Primary',
      description: 'Primary message.',
      duration: 0,
      closeIcon: (
        <RiCloseFill
          className="remix-icon da-text-color-black-80 da-text-color-dark-30"
          size={24}
        />
      ),
    };
    notification.open(args);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Duration after which the notification box is closed</h4>
              <p className="da-p1-body">
                Duration can be used to specify how long the notification stays
                open. After the duration time elapses, the notification closes
                automatically. If not specified, default value is 4.5 seconds.
                If you set the value to 0, the notification box will never close
                automatically.
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
          <Button type="primary" onClick={openNotification}>
            Open the notification box
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {duration}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
