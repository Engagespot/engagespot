import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { responsive } from './code.js';

import { Select, Space, Card, Row, Col, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function SelectResponsive() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const options = [];

  for (let i = 10; i < 36; i++) {
    const value = i.toString(36) + i;
    options.push({
      label: 'Long Label: ' + value,
      value,
    });
  }

  const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);

  const selectProps = {
    mode: 'multiple',
    style: {
      width: '100%',
    },
    value,
    options,
    onChange: newValue => {
      setValue(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={13} span={20}>
          <h4>Responsive maxTagCount</h4>
          <p className="da-p1-body">
            Auto collapse to tag with responsive case. Not recommend use in
            large form case since responsive calculation has a perf cost.
          </p>
        </Col>

        <Col lg={11} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
          >
            <Select {...selectProps} />
            <Select {...selectProps} disabled />
          </Space>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {responsive}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
