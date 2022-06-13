import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { sizes } from './code.js';

import { Card, Row, Col, InputNumber, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function InputNumberSizes() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function onChange(value) {
    //console.log("changed", value);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Sizes</h4>
          <p className="da-p1-body">
            There are three sizes available to a numeric input box. By default,
            the size is 40px. The two additional sizes are large and small which
            means 48px and 32px, respectively.
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
          <InputNumber
            className="da-mr-16 da-mb-24"
            size="large"
            min={1}
            max={100000}
            defaultValue={3}
            onChange={onChange}
          />

          <InputNumber
            className="da-mr-16"
            min={1}
            max={100000}
            defaultValue={3}
            onChange={onChange}
          />

          <InputNumber
            size="small"
            min={1}
            max={100000}
            defaultValue={3}
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
          {sizes}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
