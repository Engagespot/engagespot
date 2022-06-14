import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { buttonSizes } from './code.js';

import { Card, Row, Col, Button, Radio } from 'antd';
import {
  RiDownload2Line,
  RiArrowRightSLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

export default function ButtonSizes() {
  const [size, setSize] = useState('large');
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const handleSizeChange = e => {
    setSize(e.target.value);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Button Sizes</h4>
          <p className="da-p1-body">
            Yoda Design supports a default button size as well as a large and
            small size.
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
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>

          <br />
          <br />

          <Button className="da-mr-16 da-mb-16" type="primary" size={size}>
            Primary
          </Button>

          <Button className="da-mr-16 da-mb-16 da-mb-lg-4" size={size}>
            Default
          </Button>

          <Button
            className="da-mr-16 da-mb-16 da-mb-lg-4"
            type="dashed"
            size={size}
          >
            Dashed
          </Button>

          <Button className="da-mr-16 da-mb-16" type="link" size={size}>
            Link
          </Button>

          <br />

          <Button
            className="da-mr-16 da-mb-16"
            type="primary"
            icon={<RiDownload2Line className="remix-icon" />}
            size={size}
          />

          <Button
            className="da-mr-16 da-mb-16"
            type="primary"
            shape="circle"
            icon={<RiArrowRightSLine className="remix-icon" />}
            size={size}
          />

          <Button
            className="da-mr-16 da-mb-16"
            type="primary"
            shape="round"
            icon={<RiDownload2Line className="remix-icon" />}
            size={size}
          />

          <Button
            className="da-mr-16 da-mb-16"
            type="primary"
            shape="round"
            icon={<RiDownload2Line className="remix-icon" />}
            size={size}
          >
            Download
          </Button>

          <Button
            className="da-mr-16 da-mb-16"
            icon={<RiDownload2Line className="remix-icon" />}
            size={size}
          >
            Download
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {buttonSizes}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
