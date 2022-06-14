import React from 'react';

import { Card, Row, Col, Timeline } from 'antd';

export default function NotificationCardOne() {
  return (
    <Card className="da-border-color-black-40 da-card-5">
      <Row>
        <Col span={24}>
          <h5 className="da-mb-32">Notification</h5>

          <Timeline className="da-p2-body">
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01 </Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </Card>
  );
}
