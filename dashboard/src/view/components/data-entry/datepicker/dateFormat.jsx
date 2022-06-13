import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dateformat } from './code.js';

import { Card, Row, Col, DatePicker, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';
import moment from 'moment';

const { RangePicker } = DatePicker;

export default function DateFormat() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const dateFormat = 'YYYY/MM/DD';
  const monthFormat = 'YYYY/MM';
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

  const customFormat = value => `custom format: ${value.format(dateFormat)}`;

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Date Format</h4>
          <p className="da-p1-body">We can set the date format by format.</p>
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
            className="da-mb-16 da-mr-16"
            defaultValue={moment('2015/01/01', dateFormat)}
            format={dateFormat}
          />
          <DatePicker
            className="da-mb-16 da-mr-16"
            defaultValue={moment('01/01/2015', dateFormatList[0])}
            format={dateFormatList}
          />
          <DatePicker
            className="da-mb-16 da-mr-16"
            defaultValue={moment('2015/01', monthFormat)}
            format={monthFormat}
            picker="month"
          />
          <RangePicker
            className="da-mb-16 da-mr-16"
            defaultValue={[
              moment('2015/01/01', dateFormat),
              moment('2015/01/01', dateFormat),
            ]}
            format={dateFormat}
          />
          <DatePicker
            className="da-mb-16 da-mr-16"
            defaultValue={moment('2015/01/01', dateFormat)}
            format={customFormat}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {dateformat}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
