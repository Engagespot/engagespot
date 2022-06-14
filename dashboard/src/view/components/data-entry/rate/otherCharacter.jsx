import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { othercharacter } from './code.js';

import { Card, Row, Col, Rate, Button } from 'antd';
import { RiHeartFill, RiCodeSSlashLine } from 'react-icons/ri';

export default function RateOtherCharacter() {
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
          <h4>Other Character</h4>
          <p className="da-p1-body">
            Replace the default star to other character like alphabet, digit,
            iconfont.
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
          <Rate
            character={<RiHeartFill size={24} />}
            allowClear
            className="da-text-color-danger-1"
          />
          <br />
          <Rate character="A" allowHalf style={{ fontSize: 36 }} />
          <br />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {othercharacter}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
