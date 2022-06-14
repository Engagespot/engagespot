import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { topNavigation } from './code.js';

import { Card, Row, Col, Menu, Button } from 'antd';
import { RiMailLine, RiCodeSSlashLine } from 'react-icons/ri';

const { SubMenu } = Menu;

export default function TopNavigationMenu() {
  const [current, setCurrent] = useState('mail');
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const handleClick = e => {
    setCurrent(e.key);
  };

  // Redux
  const customise = useSelector(state => state.customise);

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Top Navigation</h4>
              <p className="da-p1-body">Horizontal top navigation menu.</p>
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
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            theme={customise.theme == 'light' ? 'light' : 'dark'}
          >
            <Menu.Item key="mail" icon={<RiMailLine className="remix-icon" />}>
              Navigation One
            </Menu.Item>

            <Menu.Item
              key="app"
              disabled
              icon={<RiMailLine className="remix-icon" />}
            >
              Navigation Two
            </Menu.Item>

            <SubMenu
              key="SubMenu"
              icon={<RiMailLine className="remix-icon" />}
              title="Navigation Three - Submenu"
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>

              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>

            <Menu.Item key="alipay">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {topNavigation}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
