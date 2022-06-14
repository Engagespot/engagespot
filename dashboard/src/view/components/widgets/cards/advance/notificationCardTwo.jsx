import React from 'react';

import { Card, Row, Col, Switch } from 'antd';
import { RiShieldKeyholeLine } from 'react-icons/ri';

export default function NotificationCardTwo() {
  return (
    <Card className="da-border-color-black-40 da-card-5">
      <Row>
        <Col span={24}>
          <h5 className="da-mb-32">Notification</h5>

          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row align="middle" justify="space-between">
                <Col>
                  <Row align="middle">
                    <RiShieldKeyholeLine
                      size={24}
                      className="da-text-color-primary-1 da-mr-16"
                    />

                    <Col>
                      <h5 className="da-mb-0">Security Setting</h5>
                      <p className="da-mb-0 da-badge-text da-font-weight-400">
                        Secured by Hypeople
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Switch defaultChecked />
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" justify="space-between">
                <Col>
                  <Row align="middle">
                    <RiShieldKeyholeLine
                      size={24}
                      className="da-text-color-primary-1 da-mr-16"
                    />

                    <Col>
                      <h5 className="da-mb-0">Wi-Fi</h5>
                      <p className="da-mb-0 da-badge-text da-font-weight-400">
                        Hypeople
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Switch />
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" justify="space-between">
                <Col>
                  <Row align="middle">
                    <RiShieldKeyholeLine
                      size={24}
                      className="da-text-color-primary-1 da-mr-16"
                    />

                    <Col>
                      <h5 className="da-mb-0">Finger Pring</h5>
                      <p className="da-mb-0 da-badge-text da-font-weight-400">
                        Touch ID
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Switch />
              </Row>
            </Col>

            <Col span={24}>
              <Row align="middle" justify="space-between">
                <Col>
                  <Row align="middle">
                    <RiShieldKeyholeLine
                      size={24}
                      className="da-text-color-primary-1 da-mr-16"
                    />

                    <Col>
                      <h5 className="da-mb-0">Lock</h5>
                      <p className="da-mb-0 da-badge-text da-font-weight-400">
                        Not recommended
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Switch defaultChecked />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
