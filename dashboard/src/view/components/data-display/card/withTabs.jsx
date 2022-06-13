import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { withTabs } from './code.js';

import { Card, Row, Col, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function CardWithTabs() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const tabList = [
    {
      key: 'tab1',
      tab: 'tab1',
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ];

  const contentList = {
    tab1: <p className="da-p1-body">content1</p>,
    tab2: <p className="da-p1-body">content2</p>,
  };

  const tabListNoTitle = [
    {
      key: 'article',
      tab: 'article',
    },
    {
      key: 'app',
      tab: 'app',
    },
    {
      key: 'project',
      tab: 'project',
    },
  ];

  const contentListNoTitle = {
    article: <p className="da-p1-body">article content</p>,
    app: <p className="da-p1-body">app content</p>,
    project: <p className="da-p1-body">project content</p>,
  };

  const [key, setKey] = useState('tab1');
  const [noTitleKey, setNoTitleKey] = useState('app');

  const onTabChange = (key, type) => {
    if (type === 'key') {
      setKey(key);
    } else if (type === 'noTitleKey') {
      setNoTitleKey(key);
    }
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>With Tabs</h4>
          <p className="da-p1-body">More content can be hosted.</p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col lg={24} md={24} sm={24} xs={24}>
          <Card
            className="da-mb-24"
            title="Card title"
            extra={<a href="#">More</a>}
            tabList={tabList}
            activeTabKey={key}
            onTabChange={key => {
              onTabChange(key, 'key');
            }}
          >
            {contentList[key]}
          </Card>

          <Card
            tabList={tabListNoTitle}
            activeTabKey={noTitleKey}
            tabBarExtraContent={<a href="#">More</a>}
            onTabChange={key => {
              onTabChange(key, 'noTitleKey');
            }}
          >
            {contentListNoTitle[noTitleKey]}
          </Card>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {withTabs}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
