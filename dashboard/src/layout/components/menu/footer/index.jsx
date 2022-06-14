import React from 'react';
import { Link } from 'react-router-dom';
import avatarImg from '../../../../assets/images/memoji/memoji-1.png';

import { Divider, Avatar, Row, Col } from 'antd';
import { RiHome6Line, RiSettings3Line } from 'react-icons/ri';

import avatar from '../../../../assets/images/memoji/memoji-1.png';
import { shallowEqual, useSelector } from 'react-redux';

export default function MenuFooter(props) {
  const { additionalFetch, users } = useSelector(
    ({ users, additionalFetch }) => ({
      users: users,
      additionalFetch: additionalFetch,
    }),
    shallowEqual
  );

  const selectedClient = additionalFetch.clients.filter(
    item => item.client.id == additionalFetch.clientId
  );

  const selectedClientName =
    selectedClient.length !== 0 ? selectedClient[0].client.name : '';

  return props.collapsed === false ? (
    <Row
      className="da-sidebar-footer da-pb-24 da-px-24 da-bg-color-dark-100"
      align="middle"
      justify="space-between"
    >
      <Divider className="da-border-color-black-20 da-border-color-dark-70 da-mt-0" />

      <Col>
        <Row align="middle">
          <Avatar size={36} src={<RiHome6Line />} className="da-mr-8" />

          <div>
            <span className="da-d-block da-text-color-black-100 da-text-color-dark-0 da-p1-body">
              {selectedClientName}
            </span>

            <Link
              to="#"
              className="da-badge-text da-text-color-dark-30"
              onClick={props.onClose}
            >
              Workspace
            </Link>
          </div>
        </Row>
      </Col>
    </Row>
  ) : (
    <Row
      className="da-sidebar-footer da-pt-16 da-mb-16 da-bg-color-dark-100"
      align="middle"
      justify="center"
    >
      <Col>
        <Link to="#" onClick={props.onClose}>
          <Avatar size={36} src={<RiHome6Line />} className="da-mr-8" />
        </Link>
      </Col>
    </Row>
  );
}
