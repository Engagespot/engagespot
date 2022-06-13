import React from 'react';

import { Card, Row, Col, Button, Avatar, Tag } from 'antd';
import { User } from 'react-iconly';

import userImg from '../../../../../assets/images/memoji/memoji-1.png';

export default function MeetingCard() {
  return (
    <Card className="da-border-color-black-40 da-card-5">
      <Row>
        <Col span={24}>
          <Tag className="da-mb-16" color="blue">
            05 May 2021
          </Tag>

          <h5 className="da-mb-4">Sales Meeting</h5>

          <p className="da-p1-body da-mb-16">
            2020 Overview of yearly sales over Covid-19 pandemic situation.
          </p>

          <p className="da-badge-text da-mb-8 da-text-color-black-100 da-text-color-dark-0">
            Teams
          </p>

          <Tag color="red">Sales</Tag>

          <Tag className="da-mb-16" color="cyan">
            Marketing
          </Tag>

          <p className="da-badge-text da-mb-8 da-text-color-black-100 da-text-color-dark-0">
            Members
          </p>

          <Avatar.Group
            maxCount={5}
            maxStyle={{
              color: '#FF0022',
              backgroundColor: '#FFE7EA',
            }}
          >
            <Avatar src={userImg} />

            <Avatar
              className="da-text-color-danger-1"
              style={{
                backgroundColor: '#FFE7EA',
              }}
            >
              A
            </Avatar>

            <Avatar
              className="da-text-color-black-100"
              style={{
                backgroundColor: '#F0F3F5',
              }}
              icon={<User set="curved" className="remix-icon" size={22} />}
            />

            <Avatar
              className="da-text-color-info-1"
              style={{
                backgroundColor: '#EAFCFF',
              }}
            >
              W
            </Avatar>

            <Avatar
              className="da-text-color-warning-1"
              style={{
                backgroundColor: '#FFF9E9',
              }}
            >
              X
            </Avatar>

            <Avatar
              className="da-text-color-danger-1"
              style={{
                backgroundColor: '#FFE7EA',
              }}
            >
              M
            </Avatar>

            <Avatar
              className="da-text-color-secondary-1"
              style={{
                backgroundColor: '#FDEFFC',
              }}
            >
              Y
            </Avatar>
          </Avatar.Group>

          <Button className="da-mt-16" type="primary" block>
            Join Meeting
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
