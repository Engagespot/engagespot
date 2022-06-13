import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { basic } from './code.js';

import { Card, Row, Col, Drawer, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function BasicDrawer() {
  const [visible, setVisible] = useState(false);
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Basic</h4>
              <p className="da-p1-body">Basic drawer.</p>
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
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>

          <Drawer
            title={<h5 className="da-mb-0">Basic Drawer</h5>}
            placement="right"
            width={346}
            closable={false}
            onClose={onClose}
            visible={visible}
            className="da-drawer-mobile"
          >
            <p className="da-p1-body">Some contents...</p>
            <p className="da-p1-body">Some contents...</p>
            <p className="da-p1-body">Some contents...</p>
          </Drawer>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {basic}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
