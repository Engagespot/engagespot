import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { responsiveAvatar } from './code.js';

import { Card, Row, Col, Avatar, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { User } from 'react-iconly';

export default function AvatarResponsive() {
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
          <h4>Responsive Size</h4>
          <p className="da-p1-body">
            Avatar size can be automatically adjusted based on the screen size.
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
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<User className="remix-icon" />}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {responsiveAvatar}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
