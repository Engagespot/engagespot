import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { sizes } from './code.js';

import { Select, Radio, Card, Row, Col, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { Option } = Select;

export default function SelectSizes() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  function handleChange(value) {
    //console.log("selected", value);
  }

  const [size, setSize] = useState('default');

  const handleSizeChange = e => {
    setSize(e.target.value);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Sizes</h4>
          <p className="da-p1-body">
            The height of the input field for the select defaults to 32px. If
            size is set to large, the height will be 40px, and if set to small,
            24px.
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
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>

          <br />
          <br />

          <Select
            className="da-mt-16"
            size={size}
            defaultValue="a1"
            onChange={handleChange}
            style={{ width: 200 }}
          >
            {children}
          </Select>

          <br />

          <Select
            className="da-mt-16"
            mode="multiple"
            size={size}
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
            onChange={handleChange}
            style={{ width: '100%' }}
          >
            {children}
          </Select>

          <br />

          <Select
            className="da-mt-16"
            mode="tags"
            size={size}
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
            onChange={handleChange}
            style={{ width: '100%' }}
          >
            {children}
          </Select>
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
