import { Button, Col, Form, Input, Row, Spin } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { handlePromise } from '../../../helpers/helpers';
import { PasswordResetRequest } from '../../../services/auth.service';
import { Toaster } from '../../../services/toaster.service';
import { EMAIL_PATTERN, MOBILE_PATTERN } from '../../../services/utlis';
import LeftContent from './leftContent';
import TermsAndPrivacyPolicy from './termsAndPrivacyPolicy';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [operationFinish, setOperationFinish] = useState(false);

  const onFinish = async values => {
    setLoading(true);

    let obj = {};
    if (values.email.match(EMAIL_PATTERN)) obj['email'] = values.email;

    let [result, error] = await handlePromise(() => PasswordResetRequest(obj));

    if (error) {
      return setLoading(false);
    }

    setLoading(false);

    const toaster = new Toaster('success');
    toaster.title = 'Success';
    toaster.message = 'Password Reset Instructions To Email';
    toaster.open();

    setOperationFinish(true);
  };

  const onFinishFailed = error => {
    //console.log(error);
  };

  return (
    <>
      <Row
        gutter={[32, 0]}
        className="da-authentication-page"
        style={{ height: '100%' }}
      >
        <LeftContent />

        <Col lg={12} span={24} className="da-py-sm-0 da-py-md-64">
          <Row className="da-h-100" align="middle" justify="center">
            <Col
              xxl={11}
              xl={15}
              lg={20}
              md={20}
              sm={24}
              className="da-px-sm-8 da-pt-24 da-pb-48"
            >
              <h1 className="da-mb-sm-0">Forgot Password</h1>
              <p className="da-mt-sm-0 da-mt-8 da-text-color-black-60">
                Recieve instructions to reset your password via email
              </p>
              <Form
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
                className="da-mt-sm-16 da-mt-32"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  className="da-mb-16"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email',
                    },
                    ({ getFieldValue }) => ({
                      validator: (_, value) => {
                        if (!value || value === '') return Promise.resolve();

                        if (value.match(MOBILE_PATTERN))
                          return Promise.resolve();
                        else if (value.match(EMAIL_PATTERN))
                          return Promise.resolve();
                        else return Promise.reject(new Error('Invalid email'));
                      },
                      message: 'Invalid email',
                    }),
                  ]}
                >
                  <Input id="auth-email" />
                </Form.Item>

                <Form.Item
                  className='da-mt-16 da-mb-8<div className="da-mb-16__"></div>
                        '
                >
                  <Button
                    disabled={loading}
                    block
                    type="primary"
                    htmlType="submit"
                  >
                    {loading ? <Spin /> : 'Send Password Reset Instructions'}
                  </Button>
                </Form.Item>
              </Form>

              {operationFinish && (
                <Col className="da-form-info">
                  <p className="csm-blue-color">
                    Please check your email inbox to find instructions to reset
                    your password
                  </p>
                </Col>
              )}

              <Col className="da-form-info">
                <span className="da-text-color-black-80 da-text-color-dark-40 da-caption da-mr-4">
                  Don't need to change password ? Return to
                </span>

                <Link
                  className="da-text-color-primary-1 da-text-color-dark-primary-2 da-caption"
                  to="/auth/login"
                >
                  Login
                </Link>
              </Col>

              <TermsAndPrivacyPolicy />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
