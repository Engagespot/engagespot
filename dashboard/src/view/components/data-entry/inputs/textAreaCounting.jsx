import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { textareacounting } from './code.js';

import { Card, Row, Col, Input, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { TextArea } = Input;

export default function TextAreaCounting() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const onChange = e => {
    //console.log("Change:", e.target.value);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Textarea with Character Counting</h4>
          <p className="da-p1-body">Show character counting.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <TextArea
            rows={4}
            placeholder="Pleaceholder Text"
            showCount
            maxLength={100}
            onChange={onChange}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {textareacounting}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
