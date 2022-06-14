import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { preposttab } from './code.js';

import { Card, Row, Col, Input, Select, Button } from 'antd';
import {
  RiSettings3Line,
  RiSearchLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';
import { User } from 'react-iconly';

const { Option } = Select;

export default function PrePostTab() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  const selectAfter = (
    <Select defaultValue=".com" className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Pre / Post tab</h4>
          <p className="da-p1-body">Using pre & post tabs example.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Col className="da-mb-16">
            <Input
              addonBefore="http://"
              addonAfter=".com"
              defaultValue="mysite"
            />
          </Col>

          <Col className="da-mb-16">
            <Input
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              defaultValue="mysite"
              disabled
            />
          </Col>

          <Col className="da-mb-16">
            <Input
              prefix={<User set="curved" className="remix-icon" size={16} />}
              suffix={<RiSearchLine className="remix-icon" />}
              addonAfter={<RiSettings3Line className="remix-icon" />}
              placeholder="Placeholder Text"
            />
          </Col>

          <Col className="da-mb-16">
            <Input
              addonBefore="http://"
              suffix={<RiSearchLine className="remix-icon" />}
              placeholder="Placeholder Text"
            />
          </Col>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {preposttab}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
