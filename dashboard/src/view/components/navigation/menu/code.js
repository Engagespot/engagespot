export const topNavigation = `
import React, { useState } from "react";

import { Menu } from "antd";
import { RiMailLine } from "react-icons/ri";

const { SubMenu } = Menu;

const [current, setCurrent] = useState("mail");

const handleClick = (e) => {
  setCurrent(e.key);
};

return (
  <Menu
    onClick={handleClick}
    selectedKeys={[current]}
    mode="horizontal"
  >
    <Menu.Item key="mail" icon={<RiMailLine className="remix-icon" />}>
      Navigation One
    </Menu.Item>

    <Menu.Item
      key="app"
      disabled
      icon={<RiMailLine className="remix-icon" />}
    >
      Navigation Two
    </Menu.Item>

    <SubMenu
      key="SubMenu"
      icon={<RiMailLine className="remix-icon" />}
      title="Navigation Three - Submenu"
    >
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>

    <Menu.Item key="alipay">
      <a href="#" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    </Menu.Item>
  </Menu>
);
`;

export const inline = `
import { Menu } from "antd";
import { RiMailLine } from "react-icons/ri";

const { SubMenu } = Menu;

return (
  <Menu
    style={{ width: 256 }}
    defaultSelectedKeys={["1"]}
    defaultOpenKeys={["sub1"]}
    mode="inline"
  >
    <SubMenu
      key="sub1"
      icon={<RiMailLine className="remix-icon" />}
      title="Navigation One"
    >
      <Menu.ItemGroup key="g1" title="NAVIGATION GROUP">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key="g2" title="NAVIGATION GROUP">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>

    <SubMenu
      key="sub2"
      icon={<RiMailLine className="remix-icon" />}
      title="Navigation Two"
    >
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>

      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </SubMenu>

    <SubMenu
      key="sub4"
      icon={<RiMailLine className="remix-icon" />}
      title="Navigation Three"
    >
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
  </Menu>
);
`;

export const collapsedCode = `
import React, { useState } from "react";

import { Menu, Button } from "antd";
import { RiMailLine, RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

const { SubMenu } = Menu;

const [collapsed, setCollapsed] = useState(false);

const toggleCollapsed = () => {
  setCollapsed(!collapsed);
};

return (
  <Button
    type="primary"
    onClick={toggleCollapsed}
    style={{ marginBottom: 16 }}
  >
    {React.createElement(
      collapsed ? RiMenuUnfoldLine : RiMenuFoldLine
    )}
  </Button>

  <Menu
    defaultSelectedKeys={["1"]}
    defaultOpenKeys={["sub1"]}
    mode="inline"
    inlineCollapsed={collapsed}
  >
    <Menu.Item key="1" icon={<RiMailLine className="remix-icon" />}>
      Option 1
    </Menu.Item>

    <Menu.Item key="2" icon={<RiMailLine className="remix-icon" />}>
      Option 2
    </Menu.Item>

    <Menu.Item key="3" icon={<RiMailLine className="remix-icon" />}>
      Option 3
    </Menu.Item>

    <SubMenu
      key="sub1"
      icon={<RiMailLine className="remix-icon" />}
      title="Navigation One"
    >
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <Menu.Item key="7">Option 7</Menu.Item>
      <Menu.Item key="8">Option 8</Menu.Item>
    </SubMenu>

    <SubMenu
      key="sub2"
      icon={<RiMailLine className="remix-icon" />}
      title="Navigation Two"
    >
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>

      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </SubMenu>
  </Menu>
);
`;

export const vertical = `
import { Menu } from "antd";
import { RiMailLine } from "react-icons/ri";

const { SubMenu } = Menu;

return (
  <Menu style={{ width: 256 }} mode="vertical">
    <SubMenu
      key="sub1"
      icon={<RiMailLine className="remix-icon" />}
      title="Navigation One"
    >
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup title="Iteom 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>

    <SubMenu
      key="sub2"
      icon={<RiMailLine className="remix-icon" />}
      title="Navigation Two"
    >
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>

      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </SubMenu>

    <SubMenu
      key="sub4"
      icon={<RiMailLine className="remix-icon" />}
      title="Navigation Three"
    >
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
  </Menu>
);
`;
