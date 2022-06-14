import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { submit } from './code.js';

import {
  Card,
  Row,
  Col,
  Drawer,
  Form,
  Button,
  Input,
  Select,
  DatePicker,
} from 'antd';
import { RiCloseFill, RiAddLine, RiCodeSSlashLine } from 'react-icons/ri';

const { Option } = Select;

export default function SubmitDrawer() {
  const [visible, setVisible] = useState(false);
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Submit form in drawer</h4>
              <p className="da-p1-body">
                Use a form in Drawer with a submit button.
              </p>
            </Col>

            <Col lg={12} span={4} className="da-text-right">
              <Button
                onClick={toggleChecked}
                type="text"
                icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Button type="primary" onClick={showDrawer}>
            <RiAddLine className="remix-icon" size={16} />
            New account
          </Button>

          <Drawer
            className="da-drawer-submit"
            title={<h5 className="da-mb-0">Create a new account</h5>}
            width={false}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
            closeIcon={
              <RiCloseFill
                className="remix-icon da-text-color-black-80 da-text-color-dark-30"
                size={24}
              />
            }
            footer={
              <div
                style={{
                  textAlign: 'right',
                }}
              >
                <Button
                  onClick={onClose}
                  type="text"
                  style={{ marginRight: 8 }}
                >
                  Cancel
                </Button>

                <Button onClick={onClose} type="primary">
                  Submit
                </Button>
              </div>
            }
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col md={12} span={24}>
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                      { required: true, message: 'Please enter user name' },
                    ]}
                  >
                    <Input placeholder="Please enter user name" />
                  </Form.Item>
                </Col>

                <Col md={12} span={24}>
                  <Form.Item
                    name="url"
                    label="Url"
                    rules={[{ required: true, message: 'Please enter url' }]}
                  >
                    <Input
                      addonBefore="http://"
                      addonAfter=".com"
                      placeholder="Please enter url"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col md={12} span={24}>
                  <Form.Item
                    name="owner"
                    label="Owner"
                    rules={[
                      { required: true, message: 'Please select an owner' },
                    ]}
                  >
                    <Select placeholder="Please select an owner">
                      <Option value="xiao">Xiaoxiao Fu</Option>
                      <Option value="mao">Maomao Zhou</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col md={12} span={24}>
                  <Form.Item
                    name="type"
                    label="Type"
                    rules={[
                      { required: true, message: 'Please choose the type' },
                    ]}
                  >
                    <Select placeholder="Please choose the type">
                      <Option value="private">Private</Option>
                      <Option value="public">Public</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col md={12} span={24}>
                  <Form.Item
                    name="approver"
                    label="Approver"
                    rules={[
                      { required: true, message: 'Please choose the approver' },
                    ]}
                  >
                    <Select placeholder="Please choose the approver">
                      <Option value="jack">Jack Ma</Option>
                      <Option value="tom">Tom Liu</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col md={12} span={24}>
                  <Form.Item
                    name="dateTime"
                    label="DateTime"
                    rules={[
                      { required: true, message: 'Please choose the dateTime' },
                    ]}
                  >
                    <DatePicker.RangePicker
                      className="da-w-100"
                      getPopupContainer={trigger => trigger.parentElement}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                      {
                        required: true,
                        message: 'please enter url description',
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder="please enter url description"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Drawer>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {submit}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
