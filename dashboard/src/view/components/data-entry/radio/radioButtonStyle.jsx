import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { style } from './code.js';

import { Card, Row, Col, Radio, Space, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function RadioButtonStyle() {
  function onChange(e) {
    //console.log(`radio checked:${e.target.value}`);
  }

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
          <h4>Radio Style</h4>
          <p className="da-p1-body">The combination of radio button style.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Space direction="vertical">
            <Radio.Group onChange={onChange} defaultValue="a">
              <Radio.Button value="a">Istanbul</Radio.Button>
              <Radio.Button value="b">London</Radio.Button>
              <Radio.Button value="c">Berlin</Radio.Button>
              <Radio.Button value="d">Paris</Radio.Button>
            </Radio.Group>

            <Radio.Group
              onChange={onChange}
              defaultValue="a"
              style={{ marginTop: 16 }}
            >
              <Radio.Button value="a">Istanbul</Radio.Button>
              <Radio.Button value="b" disabled>
                London
              </Radio.Button>
              <Radio.Button value="c">Berlin</Radio.Button>
              <Radio.Button value="d">Paris</Radio.Button>
            </Radio.Group>

            <Radio.Group
              disabled
              onChange={onChange}
              defaultValue="a"
              style={{ marginTop: 16 }}
            >
              <Radio.Button value="a">Istanbul</Radio.Button>
              <Radio.Button value="b">London</Radio.Button>
              <Radio.Button value="c">Berlin</Radio.Button>
              <Radio.Button value="d">Paris</Radio.Button>
            </Radio.Group>
          </Space>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {style}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
