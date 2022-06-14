import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { miniSize } from './code.js';

import { Card, Row, Col, Pagination, Divider, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function PaginationMiniSize() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function showTotal(total) {
    return `Total ${total} items`;
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Mini size</h4>
          <p className="da-p1-body">Mini size pagination.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Pagination size="small" total={50} className="da-mb-16" />

          <Divider />

          <Pagination
            size="small"
            total={50}
            showSizeChanger
            showQuickJumper
            className="da-mb-16"
          />

          <Divider />

          <Pagination
            size="small"
            total={50}
            showTotal={showTotal}
            className="da-mb-16"
          />

          <Divider />

          <Pagination
            size="small"
            total={50}
            disabled
            showTotal={showTotal}
            showSizeChanger
            showQuickJumper
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {miniSize}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
