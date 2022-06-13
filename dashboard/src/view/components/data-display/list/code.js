export const basic = `
import { List, Avatar } from "antd";
import {
  RiThumbUpLine,
  RiThumbDownLine,
  RiMessage3Line,
  RiStarLine,
} from "react-icons/ri";

import user from "../../../../assets/images/memoji/memoji-1.png";

const data = [
  {
    title: "Yoda Admin Title 1",
  },
  {
    title: "Yoda Admin Title 2",
  },
  {
    title: "Yoda Admin Title 3",
  },
  {
    title: "Yoda Admin Title 4",
  },
];

return (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={user} />}
          title={<a href="#">{item.title}</a>}
          description="Yoda Design, a design language for background applications, is refined by Hypeople UED Team"
        />
      </List.Item>
    )}
  />
);
`;

export const load = `
import React, { useState, useEffect } from "react";

import { List, Avatar, Skeleton, Button } from "antd";
import { axios } from "axios";

import user from "../../../../assets/images/memoji/memoji-1.png";

const axios = require("axios").default;
const count = 3;
const fakeDataUrl = "https://randomuser.me/api/?results="+count+"&inc=name,gender,email,nat&noinfo";
const [initLoading, setInitLoading] = useState(true);
const [loading, setLoading] = useState(false);
const [data, setData] = useState([]);
const [list, setList] = useState([]);

useEffect(() => {
  getData();
}, []);

const getData = () => {
  axios
    .get(
      "https://randomuser.me/api/?results="+count+"&inc=name,gender,email,nat&noinfo"
    )
    .then(function (response) {
      setData(response.data.results);
      setList(response.data.results);
      setInitLoading(false);
    });
};

const onLoadMore = () => {
  setLoading(true);
  setList(
    list.concat(
      [...new Array(count)].map(() => ({ loading: true, name: {} }))
    )
  );

  axios
    .get(
      "https://randomuser.me/api/?results="+count+"&inc=name,gender,email,nat&noinfo"
    )
    .then(function (response) {
      let data = list.concat(response.data.results);
      setData();
      setList(data);
      setLoading(false);
    });
};

const loadMore =
  !initLoading && !loading ? (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={onLoadMore}>loading more</Button>
    </div>
  ) : null;

return (
  <List
    className="da-demo-loadmore-list"
    loading={initLoading}
    itemLayout="horizontal"
    loadMore={loadMore}
    dataSource={list}
    renderItem={(item) => (
      <List.Item
        actions={[
          <a key="list-loadmore-edit">edit</a>,
          <a key="list-loadmore-more">more</a>,
        ]}
      >
        <Skeleton avatar title={false} loading={item.loading} active>
          <List.Item.Meta
            avatar={<Avatar src={user} />}
            title={<a href="#">{item.name.last}</a>}
            description="Yoda Design, a design language for background applications, is refined by Hypeople UED Team"
          />
          <div>content</div>
        </Skeleton>
      </List.Item>
    )}
  />
);
`;

export const vertical = `
import { List, Avatar, Space } from "antd";
import { RiThumbUpLine, RiMessage3Line, RiStarLine } from "react-icons/ri";

import user from "../../../../assets/images/memoji/memoji-1.png";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "/",
    title: "Yoda part " + i,
    avatar: user,
    description:
      "Yoda Design, a design language for background applications, is refined by Hypeople UED Team",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {icon}
    {text}
  </Space>
);

return (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        //console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>Special</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText
            icon={<RiStarLine className="remix-icon" />}
            text="156"
            key="list-vertical-star-o"
          />,
          <IconText
            icon={<RiThumbUpLine className="remix-icon" />}
            text="156"
            key="list-vertical-like-o"
          />,
          <IconText
            icon={<RiMessage3Line className="remix-icon" />}
            text="2"
            key="list-vertical-message"
          />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
`;
