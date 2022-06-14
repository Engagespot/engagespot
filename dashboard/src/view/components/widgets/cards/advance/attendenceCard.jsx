import React from 'react';

import { Card, Row, Col, Button, Avatar } from 'antd';
import { RiGhostSmileLine } from 'react-icons/ri';
import { User } from 'react-iconly';

import userImg from '../../../../../assets/images/memoji/memoji-1.png';

export default function AttendenceCard() {
  return (
    <Card className="da-border-color-black-40 da-card-1">
      <Row>
        <Col span={24} className="da-mb-16">
          <Row align="top">
            <RiGhostSmileLine
              className="da-text-color-primary-1 da-mr-8"
              size={24}
            />

            <h5 className="da-mb-0">Attendence</h5>
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

            <Button className="da-float-right" size="small" type="text">
              View details
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
