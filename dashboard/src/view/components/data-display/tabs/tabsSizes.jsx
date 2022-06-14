import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { tabSizes } from './code.js';

import { Tabs, Row, Col, Card, Radio, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { TabPane } = Tabs;

export default function TabsSizes() {
  const [size, setSize] = useState('small');

  const onChange = e => {
    setSize(e.target.value);
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
          <h4>Size</h4>
          <p className="da-p1-body">
            Large size tabs are usually used in page header, and small size
            could be used in Modal.
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
          <Radio.Group value={size} onChange={onChange} className="da-mb-16">
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>

          <Tabs defaultActiveKey="1" size={size} className="da-mb-32">
            <TabPane tab="Tab 1" key="1">
              Content of tab 1
            </TabPane>

            <TabPane tab="Tab 2" key="2">
              Content of tab 2
            </TabPane>

            <TabPane tab="Tab 3" key="3">
              Content of tab 3
            </TabPane>
          </Tabs>

          <Tabs defaultActiveKey="1" type="card" size={size}>
            <TabPane tab="Card Tab 1" key="1">
              Content of card tab 1
            </TabPane>

            <TabPane tab="Card Tab 2" key="2">
              Content of card tab 2
            </TabPane>

            <TabPane tab="Card Tab 3" key="3">
              Content of card tab 3
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
          {tabSizes}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
