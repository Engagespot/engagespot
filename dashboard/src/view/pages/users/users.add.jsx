import { Button, Col, Form, Input, Row, Select } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UniversityLanguagesFetchSuccess } from '../../../redux/reducers/additional-fetch/additionalFetchActions';
import { GetLocations } from '../../../services/common-api.service';
import { ParseError } from '../../../services/parse-api-error.service';
import { Toaster } from '../../../services/toaster.service';
import { UpdateAccountStatus, ListUsersTypes } from './api.users.service';

export const ProductsAdd = ({ saveBtn, onClose, selectedItem, addNewItem }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const account_status = ['Active', 'Disabled'];

  const onFinish = async values => {
    try {
      let obj = {
        account_status: values.account_status,
      };

      if (selectedItem !== null) {
        updateItem(obj, selectedItem.id);
        return;
      }
    } catch (e) {
      //console.log(e)
      let parser = new ParseError(e);
      parser.show();
    }
  };

  const updateItem = async (values, id) => {
    await UpdateAccountStatus(values, id);
    let toaster = new Toaster('success');
    toaster.title = 'Success';
    toaster.message = 'Account Status successfully updated';
    toaster.open();
    form.resetFields();
    addNewItem();
  };

  const onFinishFailed = async error => {
    const { values } = error;
  };

  useEffect(() => {
    form.resetFields();
    if (selectedItem !== null) {
      let obj = {
        account_status: selectedItem.account_status,
      };
      form.setFieldsValue(obj);
    }
  }, [selectedItem, form]);

  return (
    <div className="da-p-sm-16 da-p-24   da-bg-color-black-0 da-bg-color-dark-100 da-bg-color-black-0">
      <Form
        layout="vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Row gutter={[16]}>
          <Col span={24}>
            <Form.Item
              label="Account Status"
              name="account_status"
              rules={[{ required: true, message: 'Name is required' }]}
            >
              <Select>
                {selectedItem &&
                  account_status &&
                  account_status.map((item, index) => (
                    <Select.Option
                      disabled={item === selectedItem.account_status}
                      value={item}
                      key={'account_status-' + index}
                    >
                      {item}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>

          <Button htmlType="submit" ref={saveBtn} hidden>
            {selectedItem !== null ? 'Update' : 'Save'}
          </Button>
        </Row>
      </Form>
    </div>
  );
};
