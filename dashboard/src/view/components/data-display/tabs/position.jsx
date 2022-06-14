import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { position } from './code.js';

import { Tabs, Row, Col, Card, Space, Radio, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { TabPane } = Tabs;

export default function TabsPosition() {
  const [tabPosition, setTabPosition] = useState('left');

  const changeTabPosition = e => {
    setTabPosition(e.target.value);
  };

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
          <h4>Position</h4>
          <p className="da-p1-body">
            Tab's position: left, right, top or bottom. Will auto switch to top
            in mobile.
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
          <Space style={{ marginBottom: 24 }}>
            <span className="da-text-color-dark-0">Tab position:</span>
            <Radio.Group value={tabPosition} onChange={changeTabPosition}>
              <Radio.Button value="top">Top</Radio.Button>
              <Radio.Button value="bottom">Bottom</Radio.Button>
              <Radio.Button value="left">Left</Radio.Button>
              <Radio.Button value="right">Right</Radio.Button>
            </Radio.Group>
          </Space>

          <Tabs tabPosition={tabPosition}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab 1
            </TabPane>

            <TabPane tab="Tab 2" key="2">
              Content of Tab 2
            </TabPane>

            <TabPane tab="Tab 3" key="3">
              Content of Tab 3
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
          {position}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
