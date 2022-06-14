import {
  Avatar,
  Badge,
  Button,
  Col,
  Form,
  Input,
  Menu,
  Modal,
  Row,
} from 'antd';
import React, { useState } from 'react';
import { Password, User, Delete, Edit, EditSquare } from 'react-iconly';
import { RiCloseFill, RiEdit2Fill } from 'react-icons/ri';
import { shallowEqual, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../../../assets/images/memoji/memoji-1.png';
import menuImg from '../../../assets/images/pages/profile/menu-img.svg';
import { GoPencil } from 'react-icons/go';

export default function MenuProfile(props) {
  const menuIconClass = 'remix-icon da-mr-8';

  const { users } = useSelector(
    ({ users }) => ({
      users: users,
    }),
    shallowEqual
  );

  function menuFooterItem() {
    if (props.footer !== 'none') {
      return (
        <div className="da-profile-menu-footer">
          <img src={menuImg} alt="Profile Pic" />
        </div>
      );
    }
  }

  function moreBtn() {
    if (props.moreBtnCheck !== 'none') {
      return (
        <Col className="da-menu-header-btn da-pr-16 da-mb-12 da-text-right">
          {props.moreBtn()}
        </Col>
      );
    }
  }

  // Redux
  const customise = useSelector(state => state.customise);

  return (
    <>
      <Col flex="240px" className="da-profile-menu da-py-24">
        <div className="da-w-100">
          <div className="da-profile-menu-header da-mt-md-16 da-text-center">
            <div className="ant-col da-menu-header-btn da-pr-16 da-mb-24 da-text-right"></div>

            <Badge className="csm-pos-rel">
              <Avatar
                className="csm-hover-overlay-avatar"
                onClick={props.preferanceModalShow}
                size={100}
                src={
                  users.items.clientUser.profilePicture
                    ? users.items.clientUser.profilePicture
                    : avatar
                }
              />

              <span className="csm-profile-pic-edit-icon__container">
                <GoPencil className="csm-profile-pic-edit-icon" />
              </span>
            </Badge>

            <h3 className="da-mt-24 da-mb-4">
              {users.items.clientUser.firstName}
            </h3>
            <p className="da-p1-body">{users.items.clientUser.email}</p>
          </div>

          <Menu
            mode="inline"
            className="da-w-100 da-profile-menu-body"
            theme={customise.theme == 'light' ? 'light' : 'dark'}
          >
            <Menu.Item
              key="1"
              icon={<User set="curved" className={menuIconClass} />}
              className={`
              da-mb-16 da-pl-24 da-pr-32
              ${
                props.selectedPage === 0
                  ? 'ant-menu-item-selected'
                  : 'ant-menu-item-selected-in-active'
              }
            `}
              onClick={props.onCloseDrawer}
            >
              <div onClick={() => props.setSelectedPage(0)}>Profile</div>
            </Menu.Item>

            <Menu.Item
              key="2"
              icon={<Password set="curved" className={menuIconClass} />}
              className={`
              da-mb-16 da-pl-24 da-pr-32
              ${
                props.selectedPage === 1
                  ? 'ant-menu-item-selected'
                  : 'ant-menu-item-selected-in-active'
              }
            `}
              onClick={props.onCloseDrawer}
            >
              <div onClick={() => props.setSelectedPage(1)}>
                {' '}
                Change Password
              </div>
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<Delete set="curved" className={menuIconClass} />}
              className={`
              da-mb-16 da-pl-24 da-pr-32
              ${
                props.selectedPage === 2
                  ? 'ant-menu-item-selected'
                  : 'ant-menu-item-selected-in-active'
              }
            `}
              onClick={props.onCloseDrawer}
            >
              <div onClick={() => props.setSelectedPage(2)}>Delete Account</div>
            </Menu.Item>
          </Menu>
        </div>
        {menuFooterItem()}
      </Col>
    </>
  );
}
