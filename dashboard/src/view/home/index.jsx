import React, { useEffect } from 'react';

import { Card, Col, Row } from 'antd';

import PageTitle from '../../layout/components/content/page-title';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.push('/feed');
  }, [history]);

  return (
    <Row gutter={[32, 32]}>
      <PageTitle pageTitle="Home Page" />

      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <Card className="da-border-color-black-40 da-border-color-dark-80">
              <h4>Let's get started 🚀</h4>

              <Row>
                <Col md={12} span={24}>
                  <p className="da-p1-body">
                    Are you ready? Please read our{' '}
                    <a
                      className="da-text-color-primary-1 da-text-color-dark-primary-2 da-hover-text-color-primary-3 da-hover-text-color-dark-0 da-transition"
                      href="https://hypeople-studio.gitbook.io/yoda-admin-template/"
                      target="_blank"
                    >
                      Documentation
                    </a>{' '}
                    to understand the technical details of the project to use
                    the template.
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={24}>
            <Card className="da-border-color-black-40">
              <h4>Would you like to browse the components? 👀</h4>

              <Row>
                <Col md={12} span={24}>
                  <p className="da-p1-body">
                    Everything is in the details. So why wouldn't you want to
                    take a look at the{' '}
                    <a
                      className="da-text-color-primary-1 da-text-color-dark-primary-2 da-hover-text-color-primary-3 da-hover-text-color-dark-0 da-transition"
                      href="https://yoda.hypeople.studio/yoda-admin-template/react/components/components-page"
                      target="_blank"
                    >
                      components
                    </a>{' '}
                    from the preview page? Enjoy!
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
