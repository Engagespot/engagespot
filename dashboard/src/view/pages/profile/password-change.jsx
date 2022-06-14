import React from 'react';

import { Row, Col, Divider, Form, Input, Button } from 'antd';
import { changePassword } from '../../../services/profile.service';
import { useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';
import { useState } from 'react';
import { Spin } from 'antd';

export default function PasswordProfile() {
  const dividerClass = 'da-border-color-black-40 da-border-color-dark-80';
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { users } = useSelector(
    ({ additionalFetch, users }) => ({
      users: users,
    }),
    shallowEqual
  );

  const onFinish = async ({ currentPassword, newPassword }) => {
    setLoading(true);

    const data = {
      currentPassword,
      newPassword,
    };

    //console.log('Success:', data);

    const clientId = users.items.clientUser.id;
    try {
      await changePassword(clientId, data);
    } catch (e) {
      console.warn(e);
    } finally {
      form.resetFields();
      setLoading(false);
    }
  };

  const onFinishFailed = errorInfo => {
    //console.log('Failed:', errorInfo);
  };

  return (
    <Row>
      <Col span={24}>
        <h2>Change Password</h2>
        <Divider className={dividerClass} />
      </Col>

      <Col xxl={5} xl={10} md={15} span={24}>
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          name="password-reset"
        >
          <Form.Item
            label={
              <span className="da-input-label da-text-color-black-100 da-text-color-dark-0">
                Old Password :
              </span>
            }
            name="currentPassword"
            rules={[
              {
                required: true,
                message: 'Please input your old password!',
              },
            ]}
            hasFeedback
          >
            <Input placeholder="enter your old password" />
          </Form.Item>

          <Form.Item
            label={
              <span className="da-input-label da-text-color-black-100 da-text-color-dark-0">
                New Password :
              </span>
            }
            name="newPassword"
            rules={[
              {
                required: true,
                message: 'Please input your new password!',
              },
              { min: 5, message: 'Password must be minimum 5 characters.' },
              { max: 20, message: 'Password must not exceed 20 characters.' },
            ]}
            hasFeedback
          >
            <Input placeholder="enter your new password" />
          </Form.Item>

          <Form.Item
            label={
              <span className="da-input-label da-text-color-black-100 da-text-color-dark-0">
                Confirm New Password :
              </span>
            }
            name="confirmNewPassword"
            dependencies={['newPassword']}
            hasFeedback
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
          >
            <Input placeholder="re-enter your new password" />
          </Form.Item>

          <Form.Item>
            <Button disabled={loading} block type="primary" htmlType="submit">
              {loading ? <Spin /> : 'Change Password'}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
