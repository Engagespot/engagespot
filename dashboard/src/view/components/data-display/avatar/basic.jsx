import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { basic } from './code.js';

import { Card, Row, Col, Avatar, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { User } from 'react-iconly';

export default function BasicAvatar() {
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
          <h4>Basic</h4>
          <p className="da-p1-body">
            Three sizes and two shapes are available.
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
          <Col className="da-mb-24">
            <Row gutter={[16, 16]} align="middle">
              <Col>
                <Avatar size={64} icon={<User className="remix-icon" />} />
              </Col>

              <Col>
                <Avatar size="large" icon={<User className="remix-icon" />} />
              </Col>

              <Col>
                <Avatar icon={<User className="remix-icon" />} />
              </Col>

              <Col>
                <Avatar size="small" icon={<User className="remix-icon" />} />
              </Col>
            </Row>
          </Col>

          <Col>
            <Row gutter={[16, 16]} align="middle">
              <Col>
                <Avatar
                  shape="square"
                  size={64}
                  icon={<User className="remix-icon" />}
                />
              </Col>

              <Col>
                <Avatar
                  shape="square"
                  size="large"
                  icon={<User className="remix-icon" />}
                />
              </Col>

              <Col>
                <Avatar shape="square" icon={<User className="remix-icon" />} />
              </Col>

              <Col>
                <Avatar
                  shape="square"
                  size="small"
                  icon={<User className="remix-icon" />}
                />
              </Col>
            </Row>
          </Col>
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
