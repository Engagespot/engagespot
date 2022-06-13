import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { prefixsuffix } from './code.js';

import { Card, Row, Col, Input, Tooltip, Button } from 'antd';
import { RiInformationLine, RiCodeSSlashLine } from 'react-icons/ri';
import { User } from 'react-iconly';

export default function PrefixSuffix() {
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
          <h4>Prefix and Suffix</h4>
          <p className="da-p1-body">
            Add a prefix or suffix icons inside input.
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
          <Input
            placeholder="Enter your username"
            prefix={<User set="curved" className="remix-icon" size={16} />}
            suffix={
              <Tooltip title="Extra information">
                <RiInformationLine className="remix-icon" />
              </Tooltip>
            }
          />
          <br />
          <br />
          <Input prefix="$" suffix="RMB" />
          <br />
          <br />
          <Input prefix="$" suffix="RMB" disabled />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {prefixsuffix}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
