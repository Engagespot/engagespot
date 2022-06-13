import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { sizes } from './code.js';

import { Card, Row, Col, Input, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { User } from 'react-iconly';

export default function InputSizes() {
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
          <h4>Three Sizes of Input</h4>
          <p className="da-p1-body">
            There are three sizes of an Input box: large (48px), default (40px)
            and small (32px).
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
          <Input
            size="large"
            placeholder="Large"
            prefix={<User set="curved" className="remix-icon" size={16} />}
          />
          <br />
          <br />
          <Input
            placeholder="Default"
            prefix={<User set="curved" className="remix-icon" size={16} />}
          />
          <br />
          <br />
          <Input
            size="small"
            placeholder="Small"
            prefix={<User set="curved" className="remix-icon" size={16} />}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {sizes}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
