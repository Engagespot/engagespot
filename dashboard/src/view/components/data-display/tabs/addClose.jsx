import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { addClose } from './code.js';

import { Tabs, Row, Col, Card, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { TabPane } = Tabs;

export default function TabsAddClose() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const initPanes = [
    { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
    { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
  ];
  const [panes, setPanes] = useState(initPanes);
  const [newTabIndex, setNewTabIndex] = useState(0);
  const [activeKey, setActiveKey] = useState(panes[0].key);

  const onChange = activeKey => {
    setActiveKey(activeKey);
  };

  const onEdit = (targetKey, action) => {
    if (action === 'remove') {
      remove(targetKey);
    } else if (action === 'add') {
      add();
    }
  };

  const add = () => {
    let newTabIndex2 = newTabIndex + 1;
    let key = `newTab${newTabIndex2}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: key });
    setPanes(panes);
    setActiveKey(key);
    setNewTabIndex(newTabIndex2);
  };

  const remove = targetKey => {
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    const newPanes = panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        setActiveKey(panes[lastIndex].key);
      } else {
        setActiveKey(panes[0].key);
      }
    }
    setPanes(newPanes);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Add & close tab</h4>
          <p className="da-p1-body">
            Only card type Tabs support adding & closable. +Use closable={false}
            to disable close.
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
          <Tabs
            type="editable-card"
            onChange={onChange}
            activeKey={activeKey}
            onEdit={onEdit}
          >
            {panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {addClose}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
