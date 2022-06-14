import { AutoComplete, Button, Col, Form, Input, Row, Spin } from 'antd';
import React, { useCallback, useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { shallowEqual, useSelector } from 'react-redux';
import { handlePromise } from '../../../helpers/helpers';
import { AddImagesToServerAndGetUrl } from '../../../services/common-api.service';
import {
  ComposeNotification,
  ListRecipients,
} from '../../../services/compose.service';
import { Toaster } from '../../../services/toaster.service';
import ImageDropBox from '../../components/custom/imageDropBox';

export default function Compose() {
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const [image, setImage] = useState({ data: null, loading: false });
  const [timer, setTimer] = useState(null);
  const [users, setUsers] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [searchLoader, setSearchLoader] = useState(false);

  const [autoCompleteValue, setAutoCompleteValue] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const { additionalFetch, feed } = useSelector(
    ({ additionalFetch, feed }) => ({
      additionalFetch: additionalFetch,
      feed: feed,
    }),
    shallowEqual
  );

  const onFinish = async values => {
    if (image.loading === true) return;
    let imageUrl;

    setUploading(true);

    if (image.data !== null) {
      const imageFormData = new FormData();
      imageFormData.append('image', image.data);

      let [response, error] = await handlePromise(() =>
        AddImagesToServerAndGetUrl(imageFormData)
      );

      if (error) {
        return setUploading(false);
      }

      imageUrl = response.url;
    }

    const notificationData = {
      ...values,
      icon: imageUrl,
    };

    if (selectedUsers.length !== 0) {
      notificationData['identifiers'] = selectedUsers;
    }

    Object.keys(notificationData).forEach(key => {
      if (notificationData[key] === undefined) {
        delete notificationData[key];
      }
    });

    const appId = additionalFetch.appId;

    await handlePromise(() => ComposeNotification(appId, notificationData));

    form.resetFields();
    setSelectedUsers([]);
    setImage({ data: null, loading: false });
    setUploading(false);

    const toaster = new Toaster('success');
    toaster.title = 'Success';
    toaster.message = 'Notification Send Successfully';
    toaster.open();
  };

  const onFinishFailed = errorInfo => {
    //console.log('Failed:', errorInfo);
  };

  const onSelect = data => {
    form.setFields([
      {
        name: 'identifiers',
        errors: [],
      },
    ]);

    if (selectedUsers.includes(data)) return;

    setSelectedUsers([...selectedUsers, data]);
    setAutoCompleteValue('');
  };

  const optimisedOnSearch = useCallback(
    text => {
      setAutoCompleteValue(text);
      setSearchLoader(true);

      const onSearch = async searchText => {
        const appId = additionalFetch.appId;
        let [users, error] = await handlePromise(() =>
          ListRecipients(appId, searchText)
        );
        if (error) return;

        const recepientsName = users.map(user => {
          return {
            value: user.identifier,
          };
        });

        setSearchLoader(false);
        if (users.includes(recepientsName)) return;
        setUsers([...recepientsName]);
      };

      if (timer !== null) {
        clearTimeout(timer);
      }

      let searchTimer = setTimeout(() => {
        onSearch(text);
      }, 500);

      setTimer(searchTimer);
    },
    [timer, additionalFetch.appId]
  );

  const removeFromSelectedUsers = indexToRemove => {
    const filteredUsers = selectedUsers.filter(
      (selected, index) => index !== indexToRemove
    );
    setSelectedUsers([...filteredUsers]);
  };

  return (
    <Row gutter={[32, 0]}>
      <Col span={24}>
        <Row align="middle">
          <Col md={12} span={12}>
            <h4>Compose a notification</h4>
          </Col>
        </Row>
      </Col>

      <Col className="da-mt-32 csm-bill-cover">
        <div className="csm-bill-parent">
          <Form
            layout="vertical"
            name="notification"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            form={form}
          >
            <Form.Item
              label="Recipients"
              name="identifiers"
              rules={[
                {
                  validator: (_, value) => {
                    if (selectedUsers.length !== 0) return Promise.resolve();
                    else
                      return Promise.reject(
                        new Error('Atleast one recipient must be selected !')
                      );
                  },
                  message: 'Atleast one recipient must be selected !',
                },
              ]}
            >
              <div
                className={`custom_selected_user-container
                      ${selectedUsers.length !== 0 ? 'csm-mb-15' : ''}`}
              >
                {selectedUsers.length !== 0 &&
                  selectedUsers.map((selected, index) => {
                    return (
                      <div className="custom_selected_user" key={index}>
                        <div className="csm-mr-10">{selected}</div>
                        <RiCloseCircleLine
                          onClick={() => removeFromSelectedUsers(index)}
                          className="remix-icon test-icon"
                        />
                      </div>
                    );
                  })}
              </div>

              <div className="csm-pos-rel">
                <AutoComplete
                  options={users}
                  value={autoCompleteValue}
                  style={{
                    width: '100%',
                  }}
                  onSelect={onSelect}
                  onSearch={optimisedOnSearch}
                  className="csm-input-padding-right"
                  placeholder="Provide an email id"
                />

                {searchLoader && (
                  <Spin className="csm-pos-abs csm-recipient-loader" />
                )}
              </div>
            </Form.Item>

            <Form.Item
              label="Notification title"
              name="title"
              requiredMark={'optional'}
              rules={[
                {
                  required: true,
                  message: 'Please Enter Notification title !',
                },
              ]}
            >
              <Input placeholder="short and descriptive" />
            </Form.Item>

            <Form.Item label="Content" name="message">
              <TextArea
                autoSize={{ minRows: 5, maxRows: 10 }}
                maxLength={5000}
                rows={5}
                placeholder="message you want to convey"
              />
            </Form.Item>

            <Form.Item label="Image" name="icon">
              <ImageDropBox setImage={setImage} />
            </Form.Item>

            <Form.Item label="Action url" name="url">
              <Input placeholder="https://example.com" />
            </Form.Item>

            <Form.Item>
              <Button disabled={uploading} type="primary" htmlType="submit">
                {uploading ? <Spin /> : 'Submit'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
