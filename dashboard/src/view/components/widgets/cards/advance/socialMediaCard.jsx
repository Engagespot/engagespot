import React from 'react';

import { Card, Row, Col, Progress } from 'antd';
import {
  RiMoreFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from 'react-icons/ri';
import { SiTiktok } from 'react-icons/si';

export default function SocailMediaCard() {
  return (
    <Card className="da-border-color-black-40 da-card-6">
      <Row>
        <Col span={24}>
          <Row justify="space-between">
            <Row align="middle" className="da-mb-32">
              <h5 className="da-mb-0 da-mr-8">Subscribe Goal</h5>
              <p className="da-mb-0 da-badge-text">Social Media</p>
            </Row>

            <RiMoreFill className="da-text-color-dark-0" size={24} />
          </Row>

          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row align="middle" className="da-mr-16">
                <div className="da-social-media-logo-wrapper da-bg-primary-2 da-mr-16">
                  <RiLinkedinFill
                    size={16}
                    className="da-text-color-black-0 da-social-media-logo "
                  />
                </div>

                <Col sm={19} xs={16}>
                  <h5 className="da-mb-0 da-placeholder">Linkedin</h5>
                  <Progress
                    percent={30}
                    strokeWidth={4}
                    strokeColor={'#0063F7'}
                  />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" className="da-mr-16">
                <div className="da-social-media-logo-wrapper da-bg-primary-1 da-mr-16">
                  <RiFacebookFill
                    size={16}
                    className="da-text-color-black-0 da-social-media-logo "
                  />
                </div>

                <Col sm={19} xs={16}>
                  <h5 className="da-mb-0 da-placeholder">Facebook</h5>
                  <Progress percent={30} strokeWidth={4} />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" className="da-mr-16">
                <div className="da-social-media-logo-wrapper da-bg-danger-1 da-mr-16">
                  <RiInstagramFill
                    size={16}
                    className="da-text-color-black-0 da-social-media-logo "
                  />
                </div>

                <Col sm={19} xs={16}>
                  <h5 className="da-mb-0 da-placeholder">Instagram</h5>
                  <Progress
                    percent={30}
                    strokeWidth={4}
                    strokeColor="#FF455E"
                  />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" className="da-mr-16">
                <div className="da-social-media-logo-wrapper da-bg-info-1 da-mr-16">
                  <RiTwitterFill
                    size={16}
                    className="da-text-color-black-0 da-social-media-logo "
                  />
                </div>

                <Col sm={19} xs={16}>
                  <h5 className="da-mb-0 da-placeholder">Twitter</h5>
                  <Progress
                    percent={30}
                    strokeWidth={4}
                    strokeColor="#1BE7FF"
                  />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" className="da-mr-16">
                <div className="da-social-media-logo-wrapper da-bg-black-80 da-mr-16">
                  <SiTiktok
                    size={16}
                    className="da-text-color-black-0 da-social-media-logo "
                  />
                </div>

                <Col sm={19} xs={16}>
                  <h5 className="da-mb-0 da-placeholder">TikTok</h5>
                  <Progress
                    percent={30}
                    strokeWidth={4}
                    strokeColor="#636E72"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
