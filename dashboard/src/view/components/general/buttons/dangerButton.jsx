import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dangerButton } from './code.js';

import { Card, Row, Col, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function DangerButton() {
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
          <h4>Danger Button</h4>
          <p className="da-p1-body">Danger is a property of button</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Button className="da-mr-16 da-mb-16" type="primary" danger>
            Primary
          </Button>

          <Button className="da-mr-16 da-mb-16" danger>
            Default
          </Button>

          <Button className="da-mr-16 da-mb-16" type="dashed" danger>
            Dashed
          </Button>

          <Button className="da-mr-16 da-mb-16" type="text" danger>
            Text
          </Button>

          <Button className="da-mr-16 da-mb-16" type="link" danger>
            Link
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {dangerButton}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
