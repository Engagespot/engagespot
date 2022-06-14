import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicAvatar from './basic';
import AvatarTypes from './types';
import AvatarBadge from './avatarBadge';
import AvatarResponsive from './responsiveAvatar';
import AvatarGroup from './avatarGroup';

export default function Avatar() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Avatar"
          />

          <PageTitle
            pageTitle="Avatar"
            pageText="Avatars can be used to represent people or objects. It supports images, Icons, or letters."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicAvatar />
      </Col>

      <Col span={24}>
        <AvatarGroup />
      </Col>

      <Col span={24}>
        <AvatarTypes />
      </Col>

      <Col span={24}>
        <AvatarBadge />
      </Col>

      <Col span={24}>
        <AvatarResponsive />
      </Col>
    </Row>
  );
}
