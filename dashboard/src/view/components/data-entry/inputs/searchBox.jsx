import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { searchbox } from './code.js';

import { Card, Row, Col, Input, Button } from 'antd';
import { RiMicLine, RiCodeSSlashLine } from 'react-icons/ri';

const { Search } = Input;

export default function SearchBox() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const suffix = <RiMicLine className="remix-icon" />;

  const onSearch = value => console.log(value);

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Search box</h4>
          <p className="da-p1-body">
            Example of creating a search box by grouping a standard input with a
            search button.
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
          <Search
            className="da-mb-24"
            placeholder="input search text"
            onSearch={onSearch}
          />
          <Search
            className="da-mb-24"
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
          />
          <Search
            className="da-mb-24"
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
          <Search
            className="da-mb-24"
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          <Search
            className="da-mb-24"
            placeholder="input search text"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {searchbox}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
