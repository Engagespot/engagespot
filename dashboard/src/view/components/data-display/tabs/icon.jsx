import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { icon } from './code.js';

import { Tabs, Row, Col, Card, Button } from 'antd';
import { RiHome2Line, RiMailLine, RiCodeSSlashLine } from 'react-icons/ri';

const { TabPane } = Tabs;

export default function TabsIcon() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Icon</h4>
          <p className="da-p1-body">The Tab with Icon.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Tabs defaultActiveKey="2">
            <TabPane
              tab={
                <span>
                  <RiHome2Line className="remix-icon" />
                  Tab 1
                </span>
              }
              key="1"
            >
              Tab 1
            </TabPane>

            <TabPane
              tab={
                <span>
                  <RiMailLine className="remix-icon" />
                  Tab 2
                </span>
              }
              key="2"
            >
              Tab 2
            </TabPane>
          </Tabs>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {icon}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
