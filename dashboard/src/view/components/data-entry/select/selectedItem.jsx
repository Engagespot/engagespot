import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { selectedItem } from './code.js';

import { Select, Card, Row, Col, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { Option } = Select;

export default function SelectSelectedItem() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function handleChange(value) {
    //console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Get value of selected item</h4>
          <p className="da-p1-body">
            As a default behavior, the onChange callback can only get the value
            of the selected item. The labelInValue prop can be used to get the
            label property of the selected item. The label of the selected item
            will be packed as an object for passing to the onChange callback.
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
          <Select
            labelInValue
            defaultValue={{ value: 'lucy' }}
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="jack">Jack (100)</Option>
            <Option value="lucy">Lucy (101)</Option>
          </Select>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {selectedItem}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
