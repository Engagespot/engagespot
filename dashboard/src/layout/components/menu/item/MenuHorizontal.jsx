import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Menu, Row, Col } from 'antd';

import navigation from '../../../../navigation/horizontal';

const { SubMenu } = Menu;

export default function MenuHorizontal(props) {
  const { onClose } = props;

  // Redux
  const customise = useSelector(state => state.customise);

  // Location
  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split('/');

  // Menu
  const splitLocationUrl =
    splitLocation[splitLocation.length - 2] +
    '/' +
    splitLocation[splitLocation.length - 1];

  const menuItem = navigation.map((item, index) => {
    return item.subMenu ? (
      <SubMenu
        key={item.header}
        title={
          <Row
            key={item.header}
            align="middle"
            className="menu-item da-hover-fill-primary-1 da-hover-bg-color-primary-4 da-hover-text-color-primary-1 da-transition da-px-24 da-py-10 da-border-radius-lg"
          >
            <Col>{item.header}</Col>

            <Col className="da-d-flex-align-center da-ml-8">
              <svg
                className="da-fill-black-80"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.99999 3.78145L8.29999 0.481445L9.24266 1.42411L4.99999 5.66678L0.757324 1.42411L1.69999 0.481445L4.99999 3.78145Z" />
              </svg>
            </Col>
          </Row>
        }
        className={
          splitLocation[1] == item.header.toLowerCase() &&
          'ant-menu-submenu-selected'
        }
      >
        {item.subMenu.map((value, index) =>
          value.children ? (
            // Level 2
            <SubMenu key={value.id} icon={value.icon} title={value.title}>
              {value.children.map((childItem, index) =>
                childItem.children ? (
                  <SubMenu
                    key={childItem.id}
                    icon={childItem.icon}
                    title={childItem.title}
                  >
                    {
                      // Level 3
                      childItem.children ? (
                        childItem.children.map((childItem1, index) => (
                          <Menu.Item
                            key={childItem1.id}
                            className={
                              splitLocationUrl ===
                              childItem1.navLink.split('/')[
                                childItem1.navLink.split('/').length - 2
                              ] +
                                '/' +
                                childItem1.navLink.split('/')[
                                  childItem1.navLink.split('/').length - 1
                                ]
                                ? 'ant-menu-item-selected'
                                : 'ant-menu-item-selected-in-active'
                            }
                            onClick={onClose}
                          >
                            <Link to={childItem1.navLink}>
                              {childItem1.title}
                            </Link>
                          </Menu.Item>
                        ))
                      ) : (
                        <Menu.Item key={childItem.id}>
                          <Link to={childItem.navLink}>{childItem.title}</Link>
                        </Menu.Item>
                      )
                    }
                  </SubMenu>
                ) : (
                  <Menu.Item
                    key={childItem.id}
                    className={
                      splitLocationUrl ===
                      childItem.navLink.split('/')[
                        childItem.navLink.split('/').length - 2
                      ] +
                        '/' +
                        childItem.navLink.split('/')[
                          childItem.navLink.split('/').length - 1
                        ]
                        ? 'ant-menu-item-selected'
                        : 'ant-menu-item-selected-in-active'
                    }
                    onClick={onClose}
                  >
                    <Link to={childItem.navLink}>{childItem.title}</Link>
                  </Menu.Item>
                )
              )}
            </SubMenu>
          ) : (
            // Level 1
            <Menu.Item
              key={value.id}
              icon={value.icon}
              onClick={onClose}
              className={
                splitLocation[splitLocation.length - 2] +
                  '/' +
                  splitLocation[splitLocation.length - 1] ===
                value.navLink.split('/')[value.navLink.split('/').length - 2] +
                  '/' +
                  value.navLink.split('/')[value.navLink.split('/').length - 1]
                  ? 'ant-menu-item-selected'
                  : 'ant-menu-item-selected-in-active'
              }
            >
              <Link to={value.navLink}>{value.title}</Link>
            </Menu.Item>
          )
        )}
      </SubMenu>
    ) : (
      <Menu.Item key={item.header}>
        <Link to={item.navLink}>{item.header}</Link>
      </Menu.Item>
    );
  });

  return (
    <Menu
      mode="horizontal"
      theme={customise.theme == 'light' ? 'light' : 'dark'}
    >
      {menuItem}
    </Menu>
  );
}
