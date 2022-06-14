import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { graduated } from './code.js';

import { Card, Row, Col, Slider, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function GraduatedSlider() {
  const [marks] = useState({
    0: '0',
    30: '8',
    70: '16',
    100: '24',
  });
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row gutter={[32, 32]}>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Graduated </h4>
              <p className="da-p1-body">Graduated slider.</p>
            </Col>

            <Col lg={12} span={4} className="da-text-right">
              <Button
                onClick={toggleChecked}
                type="text"
                icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
              />
            </Col>
          </Row>
        </Col>

        <Col xxl={8} xl={12} md={18} span={20}>
          <Slider className="da-mx-4" marks={marks} defaultValue={50} />

          <Slider
            marks={marks}
            className="da-mt-48 da-mx-4"
            range
            defaultValue={[10, 70]}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {graduated}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
