import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { basic } from './code.js';

import { Card, Row, Col, Tag, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function BasicTag() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function log(e) {
    //console.log(e);
  }

  function preventDefault(e) {
    e.preventDefault();
    //console.log("Clicked! But prevent default.");
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Basic</h4>
          <p className="da-p1-body">
            Usage of basic Tag, and it could be closable by set closable
            property. Closable Tag supports onClose events.
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
          <Row gutter={[0, 16]}>
            <Col>
              <Tag className="da-mr-16">Tag 1</Tag>
            </Col>

            <Col>
              <Tag className="da-mr-16">
                <a href="#">Link</a>
              </Tag>
            </Col>

            <Col>
              <Tag className="da-mr-16" closable onClose={log}>
                Tag 2
              </Tag>
            </Col>

            <Col>
              <Tag className="da-mr-16" closable onClose={preventDefault}>
                Prevent Default
              </Tag>
            </Col>
          </Row>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {basic}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
