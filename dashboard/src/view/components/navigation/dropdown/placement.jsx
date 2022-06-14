import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { placement } from './code.js';

import { Card, Row, Col, Menu, Dropdown, Button, Space } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function PlacementDropdown() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          1st menu item
        </a>
      </Menu.Item>

      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          2nd menu item
        </a>
      </Menu.Item>

      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Placement</h4>
              <p className="da-p1-body">Support 6 Placement</p>
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
          <Space size={24} direction="vertical">
            <Space size={16} wrap>
              <Dropdown overlay={menu} placement="bottomLeft">
                <Button>bottomLeft</Button>
              </Dropdown>

              <Dropdown overlay={menu} placement="bottomCenter">
                <Button>bottomCenter</Button>
              </Dropdown>

              <Dropdown overlay={menu} placement="bottomRight">
                <Button>bottomRight</Button>
              </Dropdown>
            </Space>

            <Space size={16} wrap>
              <Dropdown overlay={menu} placement="topLeft">
                <Button>topLeft</Button>
              </Dropdown>

              <Dropdown overlay={menu} placement="topCenter">
                <Button>topCenter</Button>
              </Dropdown>

              <Dropdown overlay={menu} placement="topRight">
                <Button>topRight</Button>
              </Dropdown>
            </Space>
          </Space>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {placement}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
