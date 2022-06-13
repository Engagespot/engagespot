import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { groupvertical } from './code.js';

import { Card, Row, Col, Input, Radio, Space, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function RadioGroupVertical() {
  const [value, setValue] = useState(1);
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const onChange = e => {
    //console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Radio Group Vertical</h4>
          <p className="da-p1-body">A group of radio components.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={12}>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Radio</Radio>
              <Radio value={2}>Radio</Radio>
              <Radio value={3}>Radio</Radio>
              <Radio value={4}>
                More...
                {value === 4 ? (
                  <Input size="small" style={{ width: 100, marginLeft: 10 }} />
                ) : null}
              </Radio>
            </Space>
          </Radio.Group>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {groupvertical}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
