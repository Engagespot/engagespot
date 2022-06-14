import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { rangepicker } from './code.js';

import { Card, Row, Col, DatePicker, Button } from 'antd';
import { RiCalendarLine, RiCodeSSlashLine } from 'react-icons/ri';

const { RangePicker } = DatePicker;

export default function RangePickerItem() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function onChange(value) {
    //console.log("changed", value);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Range Picker</h4>
          <p className="da-p1-body">Set range picker type by picker prop.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <RangePicker
            className="da-mb-16 da-mr-16"
            onChange={onChange}
            suffixIcon={<RiCalendarLine className="remix-icon" />}
          />
          <RangePicker
            className="da-mb-16 da-mr-16"
            onChange={onChange}
            picker="week"
            suffixIcon={<RiCalendarLine className="remix-icon" />}
          />
          <RangePicker
            className="da-mb-16 da-mr-16"
            onChange={onChange}
            picker="month"
            suffixIcon={<RiCalendarLine className="remix-icon" />}
          />
          <RangePicker
            className="da-mb-16 da-mr-16"
            onChange={onChange}
            picker="quarter"
            suffixIcon={<RiCalendarLine className="remix-icon" />}
          />
          <RangePicker
            className="da-mb-16 da-mr-16"
            onChange={onChange}
            picker="year"
            suffixIcon={<RiCalendarLine className="remix-icon" />}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {rangepicker}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
