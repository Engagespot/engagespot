import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { button } from './code.js';

import { Card, Row, Col, Menu, Dropdown, Button, message, Space } from 'antd';
import {
  RiArrowDropDownLine,
  RiMoreLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';
import { User } from 'react-iconly';

export default function ButtonWithDropdown() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function handleButtonClick(e) {
    message.info('Click on left button.');
  }

  function handleMenuClick(e) {
    message.info('Click on menu item.');
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item
        key="1"
        icon={<User set="curved" className="remix-icon" size={16} />}
      >
        1st menu item
      </Menu.Item>

      <Menu.Item
        key="2"
        icon={<User set="curved" className="remix-icon" size={16} />}
      >
        2nd menu item
      </Menu.Item>

      <Menu.Item
        key="3"
        icon={<User set="curved" className="remix-icon" size={16} />}
      >
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Button with Dropdown Menu</h4>
              <p className="da-p1-body">
                A button is on the left, and a related functional menu is on the
                right.
              </p>
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

        <Col span={24}>
          <Space size={24} wrap>
            <Dropdown.Button
              onClick={handleButtonClick}
              overlay={menu}
              icon={<RiMoreLine className="remix-icon" size={24} />}
            >
              Dropdown
            </Dropdown.Button>

            <Dropdown.Button
              overlay={menu}
              placement="bottomCenter"
              icon={<User set="curved" className="remix-icon" size={16} />}
            >
              Dropdown
            </Dropdown.Button>

            <Dropdown.Button
              onClick={handleButtonClick}
              overlay={menu}
              disabled
              icon={<RiMoreLine className="remix-icon" size={24} />}
            >
              Dropdown
            </Dropdown.Button>

            <Dropdown overlay={menu}>
              <Button>
                Button <RiArrowDropDownLine className="remix-icon" size={24} />
              </Button>
            </Dropdown>
          </Space>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {button}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
