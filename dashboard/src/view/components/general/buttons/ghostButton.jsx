import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ghostButton } from './code.js';

import { Card, Row, Col, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function GhostButton() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-pb-16" lg={12} span={20}>
          <h4>Ghost Button</h4>
          <p className="da-p1-body">
            Ghost property will make button's background transparent, it is
            commonly used in colored background.
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
          <div className="da-d-inline-block da-bg-color-black-20 da-bg-color-dark-90 da-px-16 da-pt-16">
            <Button className="da-mr-16 da-mb-16" type="primary" ghost>
              Primary
            </Button>

            <Button className="da-mr-16 da-mb-16" ghost>
              Default
            </Button>

            <Button className="da-mr-16 da-mb-16" type="dashed" ghost>
              Dashed
            </Button>
          </div>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {ghostButton}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
