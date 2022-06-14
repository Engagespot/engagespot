import { Button, Col, Form, Input, Row, Spin } from 'antd';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { handlePromise, openToaster } from '../../../helpers/helpers';
import { PasswordReset } from '../../../services/auth.service';
import LeftContent from './leftContent';
import TermsAndPrivacyPolicy from './termsAndPrivacyPolicy';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [operationFinish, setOperationFinish] = useState(false);
  const location = useLocation();

  const onFinish = async values => {
    setLoading(true);

    let obj = {};

    const path = location.pathname.split('/');
    const PasswordResetHash = path[path.length - 1];

    obj['passwordResetHash'] = PasswordResetHash;
    obj['newPassword'] = values.newPassword;

    let [result, error] = await handlePromise(() => PasswordReset(obj));

    if (error) {
      return setLoading(false);
    }

    setLoading(false);

    openToaster({
      type: 'success',
      title: 'Success',
      message: 'Password Reset Successfully',
    });

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
              <h1 className="da-mb-sm-0">Reset Password</h1>
              <p className="da-mt-sm-0 da-mt-8 da-text-color-black-60">
                Reset your password here
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
                  label="New Password"
                  className="da-mb-16"
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your new password!',
                    },
                    {
                      min: 5,
                      message: 'Password must be minimum 5 characters.',
                    },
                    {
                      max: 20,
                      message: 'Password must not exceed 20 characters.',
                    },
                  ]}
                  hasFeedback
                >
                  <Input id="auth-email" />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  className="da-mb-16"
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            'The two passwords that you entered do not match!'
                          )
                        );
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input id="confirm-auth-email" />
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
                    {loading ? <Spin /> : 'Save Password'}
                  </Button>
                </Form.Item>
              </Form>

              {operationFinish && (
                <Col className="da-form-info">
                  <p className="">
                    Your password has been updated. Now you can login with your
                    new password. Return to{' '}
                    <Link className="" to="/auth/login">
                      Login
                    </Link>
                  </p>
                </Col>
              )}

              <TermsAndPrivacyPolicy />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
