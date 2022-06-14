import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { disabledButton } from './code.js';

import { Card, Row, Col, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function DisabledButton() {
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
          <h4>Disabled Button</h4>
          <p className="da-p1-body">
            To make a button as disabled, choose the disabled class in variant.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Row>
          <Col span={24}>
            <Button className="da-mr-16 da-mb-16" type="primary">
              Primary
            </Button>

            <Button className="da-mr-16 da-mb-16" type="primary" disabled>
              Primary(disabled)
            </Button>

            <Button className="da-mr-16 da-mb-16">Default</Button>

            <Button className="da-mr-16 da-mb-16" disabled>
              Default(disabled)
            </Button>

            <br />

            <Button className="da-mr-16 da-mb-16" type="dashed">
              Dashed
            </Button>

            <Button className="da-mr-16 da-mb-16" type="dashed" disabled>
              Dashed(disabled)
            </Button>

            <Button className="da-mr-16 da-mb-16" danger>
              Danger Default
            </Button>

            <Button className="da-mr-16 da-mb-16" danger disabled>
              Danger Default(disabled)
            </Button>

            <br />

            <Button className="da-mr-16 da-mb-16" type="link">
              Link
            </Button>

            <Button className="da-mr-16 da-mb-16" type="link" disabled>
              Link(disabled)
            </Button>

            <Button className="da-mr-16 da-mb-16" type="text">
              Text
            </Button>

            <Button className="da-mr-16 da-mb-16" type="text" disabled>
              Text(disabled)
            </Button>

            <br />

            <Button className="da-mr-16 da-mb-16" danger type="text">
              Danger Text
            </Button>

            <Button className="da-mr-16 da-mb-16" danger type="text" disabled>
              Danger Text(disabled)
            </Button>

            <Button className="da-mr-16 da-mb-16" type="link" danger>
              Danger Link
            </Button>

            <Button className="da-mr-16 da-mb-16" type="link" danger disabled>
              Danger Link(disabled)
            </Button>

            <Col className="da-d-inline-block da-bg-color-black-20 da-bg-color-dark-90 da-px-16 da-pt-16">
              <Button className="da-mr-16 da-mb-16" ghost>
                Ghost
              </Button>

              <Button className="da-mr-16 da-mb-16" ghost disabled>
                Ghost(disabled)
              </Button>
            </Col>
          </Col>
        </Row>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {disabledButton}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
