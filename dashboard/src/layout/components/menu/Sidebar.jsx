import React, { useState, createElement, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Layout, Button, Row, Col } from 'antd';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';

import logoSmall from '../../../assets/images/logo/engageSpotLogo-small.png';

import MenuLogo from './logo';
import MenuFooter from './footer';
import MenuItem from './item';
import MenuMobile from './mobile';

const { Sider } = Layout;

export default function Sidebar(props) {
  const { visible, setVisible } = props;

  // Redux
  const { customise, user } = useSelector(state => {
    return {
      customise: state.customise,
      user: state.user,
    };
  });

  // Collapsed
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (customise.sidebarCollapsed) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [customise]);

  // Location
  const location = useLocation();
  const { pathname } = location;

  // Mobile Sidebar
  const onClose = () => {
    setVisible(false);
  };

  // Menu
  function toggle() {
    setCollapsed(!collapsed);
  }

  const trigger = createElement(collapsed ? RiMenuUnfoldLine : RiMenuFoldLine, {
    className: 'trigger',
    onClick: toggle,
  });

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={256}
      className="da-sidebar da-bg-color-black-0 da-bg-color-dark-100"
    >
      <Row
        className="da-mr-12 da-ml-24 da-mt-24"
        align="bottom"
        justify="space-between"
      >
        <Col style={{ width: '80%' }}>
          {collapsed === false ? <MenuLogo onClose={onClose} /> : ''}
        </Col>

        {customise.sidebarCollapseButton && (
          <Col className="da-pr-0">
            <Button
              icon={trigger}
              type="text"
              className="da-float-right da-text-color-dark-0"
            ></Button>
          </Col>
        )}

        {collapsed !== false && (
          <Col className="da-mt-8">
            <img className="da-logo" src={logoSmall} alt="logo" />
          </Col>
        )}
      </Row>

      <MenuItem onClose={onClose} />

      <MenuFooter onClose={onClose} collapsed={collapsed} />

      <MenuMobile onClose={onClose} visible={visible} />
    </Sider>
  );
}
