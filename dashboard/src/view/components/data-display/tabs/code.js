export const basic = `
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  //console.log(key);
}

return (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);
`;

export const addClose = `
import React, { useState } from "react";

import { Tabs } from "antd";
import { RiHome2Line, RiMailLine } from "react-icons/ri";

const { TabPane } = Tabs;

const initPanes = [
  { title: "Tab 1", content: "Content of Tab Pane 1", key: "1" },
  { title: "Tab 2", content: "Content of Tab Pane 2", key: "2" },
];
const [panes, setPanes] = useState(initPanes);
const [newTabIndex, setNewTabIndex] = useState(0);
const [activeKey, setActiveKey] = useState(panes[0].key);

const onChange = (activeKey) => {
  setActiveKey(activeKey);
};

const onEdit = (targetKey, action) => {
  if (action === "remove") {
    remove(targetKey);
  } else if (action === "add") {
    add();
  }
};

const add = () => {
  let newTabIndex2 = newTabIndex + 1;
  let key = "newTab" + newTabIndex2;
  panes.push({ title: "New Tab", content: "New Tab Pane", key: key });
  setPanes(panes);
  setActiveKey(key);
  setNewTabIndex(newTabIndex2);
};

const remove = (targetKey) => {
  let lastIndex;
  panes.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
    }
  });

  const newPanes = panes.filter((pane) => pane.key !== targetKey);
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
  <Tabs
    type="editable-card"
    onChange={onChange}
    activeKey={activeKey}
    onEdit={onEdit}
  >
    {panes.map((pane) => (
      <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
        {pane.content}
      </TabPane>
    ))}
  </Tabs>
);
`;

export const disabled = `
import { Tabs } from "antd";

const { TabPane } = Tabs;

return (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">
      Tab 1
    </TabPane>

    <TabPane tab="Tab 2" disabled key="2">
      Tab 2
    </TabPane>

    <TabPane tab="Tab 3" key="3">
      Tab 3
    </TabPane>
  </Tabs>
);
`;

export const icon = `
import { Tabs } from "antd";
import { RiHome2Line, RiMailLine } from "react-icons/ri";

const { TabPane } = Tabs;

return (
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
);
`;

export const position = `
import React, { useState } from "react";

import { Tabs, Space, Radio } from "antd";
import { RiHome2Line, RiMailLine } from "react-icons/ri";

const { TabPane } = Tabs;

const [tabPosition, setTabPosition] = useState("left");

const changeTabPosition = (e) => {
  setTabPosition(e.target.value);
};

return (
  <>
    <Space style={{ marginBottom: 24 }}>
      Tab position:
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
  </>
);
`;

export const tabSizes = `
import React, { useState } from "react";

import { Tabs, Space, Radio } from "antd";
import { RiHome2Line, RiMailLine } from "react-icons/ri";

const { TabPane } = Tabs;

const [size, setSize] = useState("small");

const onChange = (e) => {
  setSize(e.target.value);
};

return (
  <>
    <Radio.Group
      value={size}
      onChange={onChange}
      className="da-mb-16"
    >
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
  </>
);
`;

export const type = `
import { Tabs } from "antd";
import { RiHome2Line, RiMailLine } from "react-icons/ri";

const { TabPane } = Tabs;

function callback(key) {
  //console.log(key);
}

return (
  <Tabs onChange={callback} type="card">
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);
`;
