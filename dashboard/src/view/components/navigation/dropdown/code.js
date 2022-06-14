export const basic = `
import { Menu, Dropdown } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        1st menu item
      </a>
    </Menu.Item>

    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        2nd menu item
      </a>
    </Menu.Item>

    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        3rd menu item
      </a>
    </Menu.Item>

    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

return (
  <Dropdown overlay={menu}>
    <a
      className="ant-dropdown-link"
      onClick={(e) => e.preventDefault()}
    >
      Hover me <RiArrowDropDownLine className="remix-icon" size={24} />
    </a>
  </Dropdown>
);
`;

export const placement = `
import { Menu, Dropdown, Button, Space } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        1st menu item
      </a>
    </Menu.Item>

    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        2nd menu item
      </a>
    </Menu.Item>

    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

return (
  <Space size={24} direction="vertical">
    <Space size={16} wrap>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>

      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>bottomCenter</Button>
      </Dropdown>

      <Dropdown overlay={menu} placement="bottomRight">
        <Button>bottomRight</Button>
      </Dropdown>
    </Space>

    <Space size={16} wrap>
      <Dropdown overlay={menu} placement="topLeft">
        <Button>topLeft</Button>
      </Dropdown>

      <Dropdown overlay={menu} placement="topCenter">
        <Button>topCenter</Button>
      </Dropdown>

      <Dropdown overlay={menu} placement="topRight">
        <Button>topRight</Button>
      </Dropdown>
    </Space>
  </Space>
);
`;

export const button = `
import { Menu, Dropdown, Button, message, Space } from "antd";
import { RiArrowDropDownLine, RiMoreLine } from "react-icons/ri";
import { User } from "react-iconly";

function handleButtonClick(e) {
  message.info("Click on left button.");
}

function handleMenuClick(e) {
  message.info("Click on menu item.");
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<User set="curved" className="remix-icon" size={16}/>}>
      1st menu item
    </Menu.Item>

    <Menu.Item key="2" icon={<User set="curved" className="remix-icon" size={16}/>}>
      2nd menu item
    </Menu.Item>

    <Menu.Item key="3" icon={<User set="curved" className="remix-icon" size={16}/>}>
      3rd menu item
    </Menu.Item>
  </Menu>
);

return (
  <Space size={24} wrap>
    <Dropdown.Button
      onClick={handleButtonClick}
      overlay={menu}
      icon={<RiMoreLine className="remix-icon" size={24} />}
    >
      Dropdown
    </Dropdown.Button>

    <Dropdown.Button
      overlay={menu}
      placement="bottomCenter"
      icon={<User set="curved" className="remix-icon" size={16}/>}
    >
      Dropdown
    </Dropdown.Button>

    <Dropdown.Button
      onClick={handleButtonClick}
      overlay={menu}
      disabled
      icon={<RiMoreLine className="remix-icon" size={24} />}
    >
      Dropdown
    </Dropdown.Button>

    <Dropdown overlay={menu}>
      <Button>
        Button <RiArrowDropDownLine className="remix-icon" size={24} />
      </Button>
    </Dropdown>
  </Space>
);
`;

export const cascading = `
import { Menu, Dropdown } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.ItemGroup title="Group title">
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
    </Menu.ItemGroup>

    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>

    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

return (
  <Dropdown overlay={menu}>
    <a
      className="ant-dropdown-link"
      onClick={(e) => e.preventDefault()}
    >
      Cascading menu
      <RiArrowDropDownLine className="remix-icon" size={24} />
    </a>
  </Dropdown>
);
`;
