import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { extrafooter } from './code.js';

import { Card, Row, Col, DatePicker, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { RangePicker } = DatePicker;

export default function DatePickerExtraFooter() {
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
          <h4>Extra Footer</h4>
          <p className="da-p1-body">
            Render extra footer in panel for customized requirements.
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
          <DatePicker
            renderExtraFooter={() => 'extra footer'}
            className="da-mb-16 da-mr-16"
          />
          <DatePicker
            className="da-mb-16 da-mr-16"
            renderExtraFooter={() => 'extra footer'}
            showTime
          />
          <RangePicker
            className="da-mb-16 da-mr-16"
            renderExtraFooter={() => 'extra footer'}
          />
          <RangePicker
            className="da-mb-16 da-mr-16"
            renderExtraFooter={() => 'extra footer'}
            showTime
          />
          <DatePicker
            className="da-mb-16 da-mr-16"
            renderExtraFooter={() => 'extra footer'}
            picker="month"
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {extrafooter}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
