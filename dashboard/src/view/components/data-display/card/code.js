export const basic = `
import { Card } from "antd";

return (
  <>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>

    <Card
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
);
`;

export const customize = `
import { Card } from "antd";

const { Meta } = Card;

return (
  <Card
    hoverable
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        height={345}
        className="da-img-cover"
      />
    }
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
`;

export const noBorder = `
import { Card } from "antd";

return (
  <Card title="Card title" bordered={false} className="da-elevatior">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);
`;

export const simple = `
import { Card } from "antd";

return (
  <Card>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);
`;

export const withTabs = `
import React, { useState } from "react";

import { Card } from "antd";

const tabList = [
  {
    key: "tab1",
    tab: "tab1",
  },
  {
    key: "tab2",
    tab: "tab2",
  },
];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

const tabListNoTitle = [
  {
    key: "article",
    tab: "article",
  },
  {
    key: "app",
    tab: "app",
  },
  {
    key: "project",
    tab: "project",
  },
];

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

const [key, setKey] = useState("tab1");
const [noTitleKey, setNoTitleKey] = useState("app");

const onTabChange = (key, type) => {
  if (type === "key") {
    setKey(key);
  } else if (type === "noTitleKey") {
    setNoTitleKey(key);
  }
};

return (
  <>
    <Card
      title="Card title"
      extra={<a href="#">More</a>}
      tabList={tabList}
      activeTabKey={key}
      onTabChange={(key) => {
        onTabChange(key, "key");
      }}
    >
      {contentList[key]}
    </Card>
    
    <Card
      tabList={tabListNoTitle}
      activeTabKey={noTitleKey}
      tabBarExtraContent={<a href="#">More</a>}
      onTabChange={(key) => {
        onTabChange(key, "noTitleKey");
      }}
    >
      {contentListNoTitle[noTitleKey]}
    </Card>
  </>
);
`;
