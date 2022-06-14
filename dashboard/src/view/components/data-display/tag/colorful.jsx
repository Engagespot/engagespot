import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { colorful } from './code.js';

import { Card, Row, Col, Tag, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function TagColorful() {
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
          <h4>Colorful Tag</h4>
          <p className="da-p1-body">
            We preset a series of colorful tag styles for use in different
            situations. You can also set it to a hex color string for custom
            color.
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
            <Col className="da-mr-16">
              <Tag>Tag</Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag color="blue">Tag</Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag color="magenta">Tag</Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag color="red">Tag</Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag color="green">Tag</Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag color="gold">Tag</Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag color="cyan">Tag</Tag>
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
          {colorful}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
