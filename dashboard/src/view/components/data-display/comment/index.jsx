import React from 'react';

import { Row, Col } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';
import BasicComment from './basic';
import CommentListUsage from './listUsage';
import CommentReplyEditor from './replyEditor';

export default function Comment() {
  return (
    <Row gutter={[32, 32]} className="da-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Comment"
          />

          <PageTitle
            pageTitle="Comment"
            pageText="A comment displays user feedback and discussion to website content."
          />
        </Row>
      </Col>

      <Col span={24}>
        <BasicComment />
      </Col>

      <Col span={24}>
        <CommentListUsage />
      </Col>

      <Col span={24}>
        <CommentReplyEditor />
      </Col>
    </Row>
  );
}
