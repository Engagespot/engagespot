import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { types } from './code.js';

import { Card, Row, Col, Avatar, Image, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { User } from 'react-iconly';

export default function AvatarTypes() {
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
          <h4>Type</h4>
          <p className="da-p1-body">
            Image, Icon and letter are supported, and the latter two kinds of
            avatar can have custom colors and background colors.
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
          <Row gutter={[16, 16]} align="middle">
            <Col>
              <Avatar icon={<User />} />
            </Col>

            <Col>
              <Avatar>S</Avatar>
            </Col>

            <Col>
              <Avatar size={40}>USER</Avatar>
            </Col>

            <Col>
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                className="ant-avatar-transparent"
              />
            </Col>

            <Col>
              <Avatar
                src={
                  <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                className="ant-avatar-transparent"
              />
            </Col>

            <Col>
              <Avatar className="da-text-color-danger-1 da-bg-color-danger-4 da-bg-color-dark-danger">
                D
              </Avatar>
            </Col>

            <Col>
              <Avatar
                className="da-bg-color-success-4 da-bg-color-dark-success da-text-color-success-1"
                icon={<User className="remix-icon" />}
              />
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
          {types}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
