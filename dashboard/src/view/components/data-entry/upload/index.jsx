import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import ClickUpload from './click';
import FileListUpload from './fileList';
import PicturesListUpload from './picturesList';
import AvatarUpload from './avatar';
import PicturesWallUpload from './picturesWall';
import DragUpload from './drag';

export default function Upload() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Entry"
            breadCrumbActive="Upload"
          />

          <PageTitle
            pageTitle="Upload"
            pageText="Upload file by selecting or dragging."
          />
        </Row>
      </Col>

      <Col span={24}>
        <ClickUpload />
      </Col>

      <Col span={24}>
        <FileListUpload />
      </Col>

      <Col span={24}>
        <PicturesListUpload />
      </Col>

      <Col span={24}>
        <AvatarUpload />
      </Col>

      <Col span={24}>
        <PicturesWallUpload />
      </Col>

      <Col span={24}>
        <DragUpload />
      </Col>
    </Row>
  );
}
