import {
  AutoComplete,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Spin,
} from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { listTimeZones } from 'timezone-support';
import { UsersChangePage } from '../../../redux/reducers/users/usersActions';
import { ProfileUpdate } from '../../../services/profile.service';

export default function InfoProfile() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const listOfTimeZones = useMemo(() => listTimeZones(), []);
  const timezoneValues = listOfTimeZones.map(timezone => {
    return { value: timezone };
  });

  const [filteredTimeZones, setFilteredTimeZones] = useState(timezoneValues);
  const dividerClass = 'da-border-color-black-40 da-border-color-dark-80';

  const { users } = useSelector(
    ({ users }) => ({
      users: users,
    }),
    shallowEqual
  );

  const onFinish = async values => {
    setLoading(true);

    //console.log('Success:', values);

    const clientId = users.items.clientUser.id;
    try {
      await ProfileUpdate(clientId, values);
    } catch (e) {
      console.warn(e);
    } finally {
      form.setFieldsValue({
        firstName: values.firstName,
        lastName: values.lastName,
        timezone: values.timezone,
      });

      setLoading(false);
      dispatch(UsersChangePage());
    }
  };

  const onFinishFailed = errorInfo => {
    //console.log('Failed:', errorInfo);
  };

  const onSearch = search => {
    const filtered = listOfTimeZones.filter(timezones => {
      let timezoneInLowerCase = timezones.toLowerCase();
      let searchinLowerCaseWithoutWhiteSpace = search
        .toLowerCase()
        .replace(/ /g, '');
      return timezoneInLowerCase.includes(searchinLowerCaseWithoutWhiteSpace);
    });

    const searchedTimeZones = filtered.map(timezone => {
      return { value: timezone };
    });

    setFilteredTimeZones(searchedTimeZones);
  };

  return (
    <Row>
      <Col span={24}>
        <h2>Profile</h2>

        <Divider className={dividerClass} />
      </Col>

      <Col xxl={5} xl={10} md={15} span={24}>
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          name="profile"
          initialValues={{
            firstName: users.items.clientUser.firstName,
            lastName: users.items.clientUser.lastName,
            timezone: users.items.clientUser.timezone,
          }}
        >
          <Form.Item
            label={
              <span className="da-input-label da-text-color-black-100 da-text-color-dark-0">
                First Name :
              </span>
            }
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Please enter your first name!',
              },
            ]}
          >
            <Input placeholder="enter your first name" />
          </Form.Item>

          <Form.Item
            label={
              <span className="da-input-label da-text-color-black-100 da-text-color-dark-0">
                Last Name :
              </span>
            }
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Please enter your last name!',
              },
            ]}
          >
            <Input placeholder="enter your last name" />
          </Form.Item>

          <Form.Item
            label={
              <span className="da-input-label da-text-color-black-100 da-text-color-dark-0">
                TimeZone :
              </span>
            }
            name="timezone"
            rules={[
              {
                required: true,
                message: 'Please enter your timezone!',
              },
            ]}
          >
            <AutoComplete
              options={filteredTimeZones}
              onSearch={onSearch}
              placeholder="select a timezone"
            />
          </Form.Item>

          <Form.Item>
            <Button disabled={loading} block type="primary" htmlType="submit">
              {loading ? <Spin /> : 'Save Changes'}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
