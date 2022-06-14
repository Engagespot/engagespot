import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { triger } from './code.js';

import { Card, Row, Col, Popover, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function PopoverTrigers() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const content = (
    <div>
      <p className="da-mb-0">Content</p>
    </div>
  );

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Three ways to trigger</h4>
          <p className="da-p1-body">Mouse to click, focus and move in.</p>
        </Col>
        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Col>
            <Popover content={content} title="Popover Title" trigger="hover">
              <Button className="da-mr-16 da-mb-16" type="primary">
                Hover me
              </Button>
            </Popover>

            <Popover content={content} title="Popover Title" trigger="focus">
              <Button type="primary" className="da-mr-16">
                Focus me
              </Button>
            </Popover>

            <Popover content={content} title="Popover Title" trigger="click">
              <Button type="primary">Click me</Button>
            </Popover>
          </Col>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {triger}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
