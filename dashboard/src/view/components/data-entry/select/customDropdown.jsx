import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { customDropdown } from './code.js';

import { Select, Divider, Input, Card, Row, Col, Button } from 'antd';
import { RiCodeSSlashLine, RiAddLine } from 'react-icons/ri';

const { Option } = Select;

export default function SelectCustomDropdown() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [items, setItems] = useState(['jack', 'lucy']);
  const [name, setName] = useState('');
  let index = 0;

  const onNameChange = event => {
    setName(event.target.value);
  };

  const addItem = () => {
    setItems([...items, name || 'New item ' + index++]);
    setName('');
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Custom dropdown</h4>
          <p className="da-p1-body">
            Customize the dropdown menu via dropdownRender.
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
            style={{ width: 240 }}
            placeholder="custom dropdown render"
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    padding: 8,
                  }}
                >
                  <Input
                    style={{ flex: 'auto' }}
                    value={name}
                    onChange={onNameChange}
                  />
                  <a
                    style={{
                      flex: 'none',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={addItem}
                  >
                    <RiAddLine className="da-remix-icon" /> Add item
                  </a>
                </div>
              </div>
            )}
          >
            {items.map(item => (
              <Option key={item}>{item}</Option>
            ))}
          </Select>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {customDropdown}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
