import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { controlled } from './code.js';

import { Card, Row, Col, Button, Checkbox } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function CheckboxControlled() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleCheckedCode() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange = e => {
    setChecked(e.target.checked);
  };

  const label = `${checked ? 'Checked' : 'Unchecked'}-${
    disabled ? 'Disabled' : 'Enabled'
  }`;

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Controlled Checkbox</h4>
          <p className="da-p1-body">Communicated with other components.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleCheckedCode}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24} className="da-mb-24">
          <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
            {label}
          </Checkbox>
        </Col>

        <Col span={24}>
          <Button type="primary" size="small" onClick={toggleChecked}>
            {checked ? 'Check' : 'Uncheck'}
          </Button>

          <Button
            style={{ margin: '0 10px' }}
            type="primary"
            size="small"
            onClick={toggleDisable}
          >
            {disabled ? 'Disable' : 'Enable'}
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {controlled}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
