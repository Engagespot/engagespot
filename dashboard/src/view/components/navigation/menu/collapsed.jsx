import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { collapsedCode } from './code.js';

import { Card, Row, Col, Menu, Button } from 'antd';
import {
  RiMailLine,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

const { SubMenu } = Menu;

export default function CollapsedMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // Redux
  const customise = useSelector(state => state.customise);

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Collapsed inline menu</h4>
              <p className="da-p1-body">Inline menu could be collapsed.</p>
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
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{ marginBottom: 16 }}
          >
            {React.createElement(collapsed ? RiMenuUnfoldLine : RiMenuFoldLine)}
          </Button>

          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            inlineCollapsed={collapsed}
            theme={customise.theme == 'light' ? 'light' : 'dark'}
          >
            <Menu.Item key="1" icon={<RiMailLine className="remix-icon" />}>
              Option 1
            </Menu.Item>

            <Menu.Item key="2" icon={<RiMailLine className="remix-icon" />}>
              Option 2
            </Menu.Item>

            <Menu.Item key="3" icon={<RiMailLine className="remix-icon" />}>
              Option 3
            </Menu.Item>

            <SubMenu
              key="sub1"
              icon={<RiMailLine className="remix-icon" />}
              title="Navigation One"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              icon={<RiMailLine className="remix-icon" />}
              title="Navigation Two"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>

              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {collapsedCode}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
