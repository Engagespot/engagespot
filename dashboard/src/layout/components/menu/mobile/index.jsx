import React from 'react';

import { Drawer } from 'antd';
import { RiCloseFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import MenuLogo from '../logo';
import MenuItem from '../item';
import MenuFooter from '../footer';

export default function MenuMobile(props) {
  const { onClose, visible } = props;
  const { user } = useSelector(state => {
    return {
      user: state.auth.user,
    };
  });
  return (
    <Drawer
      title={<MenuLogo onClose={onClose} />}
      className="da-mobile-sidebar"
      placement="left"
      closable={true}
      onClose={onClose}
      visible={visible}
      closeIcon={
        <RiCloseFill className="remix-icon da-text-color-black-80" size={24} />
      }
    >
      <MenuItem onClose={onClose} />

      <MenuFooter onClose={onClose} collapsed={false} />
    </Drawer>
  );
}
