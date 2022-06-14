import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { bigData } from './code.js';

import { Select, Typography, Divider, Card, Row, Col, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { Title } = Typography;

export default function SelectBigData() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const options = [];

  for (let i = 0; i < 100000; i++) {
    const value = i.toString(36) + '' + i;
    options.push({
      value,
      disabled: i === 10,
    });
  }

  function handleChange(value) {
    //console.log('selected', value);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={13} span={20}>
          <h4>Big Data</h4>
          <p className="da-p1-body">
            Select use virtual scroll which get better performance than 3.0.
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
          <Title level={3}>Ant Design 4.0</Title>
          <Title level={4}>{options.length} Items</Title>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
            onChange={handleChange}
            options={options}
          />

          <Divider />

          <Title level={3}>Ant Design 3.0</Title>
          <iframe
            title="Ant Design 3.0 Select demo"
            src="https://codesandbox.io/embed/solitary-voice-m3vme?fontsize=14&hidenavigation=1&theme=dark&view=preview"
            style={{ width: '100%', height: 300 }}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {bigData}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
