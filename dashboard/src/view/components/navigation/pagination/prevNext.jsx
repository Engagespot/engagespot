import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { prevNext } from './code.js';

import { Card, Row, Col, Pagination, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function PaginationPrevNext() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a href="#">Previous</a>;
    }
    if (type === 'next') {
      return <a href="#">Next</a>;
    }
    return originalElement;
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Prev and next</h4>
          <p className="da-p1-body">Use text link for prev and next button.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Pagination total={500} itemRender={itemRender} />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {prevNext}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
