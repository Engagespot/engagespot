import React from 'react';

import { Card, Row, Col, Avatar } from 'antd';
import { RiArrowRightLine } from 'react-icons/ri';
import { User } from 'react-iconly';

import userImg from '../../../../../assets/images/memoji/memoji-1.png';

export default function ApplicationCard() {
  return (
    <Card className="da-border-color-black-40 da-mb-32 da-card-1">
      <Row>
        <Col span={24} className="da-mb-4">
          <Row align="top" justify="space-between">
            <h2 className="da-mb-0">18 Application</h2>
          </Row>
        </Col>

        <Col span={24}>
          <Row align="middle" justify="space-between">
            <Avatar.Group
              size="small"
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
                icon={<User set="curved" className="remix-icon" size={14} />}
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

            <RiArrowRightLine className="da-text-color-primary-1" size={24} />
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
