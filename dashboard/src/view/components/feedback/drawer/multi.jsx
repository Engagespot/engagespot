import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { multi } from './code.js';

import { Card, Row, Col, Drawer, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function MultiDrawer() {
  const [visible, setVisible] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
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

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Multi-level drawer</h4>
              <p className="da-p1-body">
                Open a new drawer on top of an existing drawer to handle multi
                branch tasks.
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
          <Button type="primary" onClick={showDrawer}>
            Open drawer
          </Button>

          <Drawer
            title={<h5 className="da-mb-0">Multi-level drawer</h5>}
            width={520}
            closable={false}
            onClose={onClose}
            visible={visible}
            className="da-drawer-mobile"
          >
            <Button type="primary" onClick={showChildrenDrawer}>
              Two-level drawer
            </Button>

            <Drawer
              title={<h5 className="da-mb-0">Two-level Drawer</h5>}
              width={320}
              closable={false}
              onClose={onChildrenDrawerClose}
              visible={childrenDrawer}
            >
              <p className="da-p1-body">This is two-level drawer</p>
            </Drawer>
          </Drawer>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {multi}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
