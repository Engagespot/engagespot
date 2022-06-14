import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { avatarbadge } from './code.js';

import { Card, Row, Col, Avatar, Badge, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { User } from 'react-iconly';

export default function AvatarBadge() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>With Badge</h4>
          <p className="da-p1-body">
            Usually used for reminders and notifications.
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
          <span className="da-mr-16">
            <Badge count={1}>
              <Avatar
                shape="square"
                size={48}
                icon={<User className="remix-icon" />}
              />
            </Badge>
          </span>

          <span>
            <Badge dot>
              <Avatar
                shape="square"
                size={48}
                icon={<User className="remix-icon" />}
              />
            </Badge>
          </span>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {avatarbadge}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
