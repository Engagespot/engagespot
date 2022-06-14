import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { yoda } from './code.js';

import { Card, Row, Col, Form, Input, Checkbox, Button, Modal } from 'antd';
import { RiCloseFill, RiMailAddLine, RiCodeSSlashLine } from 'react-icons/ri';

import popUpImage from '../../../../assets/images/modal/pop-up.svg';

export default function YodaModal() {
  const [PopupModalVisible, setPopupModalVisible] = useState(false);
  const [PopupWidthModalVisible, setPopupWidthModalVisible] = useState(false);
  const [FormModalVisible, setFormModalVisible] = useState(false);
  const [FormWidthModalVisible, setFormWidthModalVisible] = useState(false);
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  //--

  const showPopupModal = () => {
    setPopupModalVisible(true);
  };

  const showPopupWidthModal = () => {
    setPopupWidthModalVisible(true);
  };

  const showFormModal = () => {
    setFormModalVisible(true);
  };

  const showFormWidthModal = () => {
    setFormWidthModalVisible(true);
  };

  //--

  const handlePopupOk = () => {
    setPopupModalVisible(false);
  };

  const handlePopupWidthOk = () => {
    setPopupWidthModalVisible(false);
  };

  const handleFormOk = () => {
    setFormModalVisible(false);
  };

  const handleFormWidthOk = () => {
    setFormWidthModalVisible(false);
  };

  //--

  const handlePopupCancel = () => {
    setPopupModalVisible(false);
  };

  const handlePopupWidthCancel = () => {
    setPopupWidthModalVisible(false);
  };

  const handleFormCancel = () => {
    setFormModalVisible(false);
  };

  const handleFormWidthCancel = () => {
    setFormWidthModalVisible(false);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Yoda Modal</h4>
              <p className="da-p1-body">Special modals.</p>
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
          <Button
            className="da-mb-16 da-mr-16"
            type="primary"
            ghost
            onClick={showPopupModal}
          >
            Pop-up
          </Button>

          <Button
            className="da-mb-16 da-mr-16"
            type="primary"
            ghost
            onClick={showPopupWidthModal}
          >
            Pop-up Width
          </Button>

          <Button
            className="da-mb-16 da-mr-16"
            type="primary"
            ghost
            onClick={showFormModal}
          >
            Form
          </Button>

          <Button
            className="da-mb-16 da-mr-16"
            type="primary"
            ghost
            onClick={showFormWidthModal}
          >
            Form Width
          </Button>

          <Modal
            width={416}
            visible={PopupModalVisible}
            onCancel={handlePopupCancel}
            footer={false}
            closable={false}
            className="popup-modal"
          >
            <div className="da-text-center">
              <img src={popUpImage} alt="Pop-up" />
              <h3 className="da-text-color-dark-bg">Pop-up Title</h3>
              <p className="da-p2-body">
                Curabitur varius purus sed congue consectetur. Donec a leo
                malesuada,
              </p>
              <Button
                block
                className="da-mt-16"
                type="primary"
                icon={<RiMailAddLine className="remix-icon" />}
                onClick={handlePopupOk}
              >
                Subscribe
              </Button>
            </div>
          </Modal>

          <Modal
            width={1000}
            visible={PopupWidthModalVisible}
            onCancel={handlePopupWidthCancel}
            footer={false}
            closable={false}
            className="popup-modal"
          >
            <Col className="da-text-center">
              <img src={popUpImage} alt="Pop-up" />
              <Row justify="center">
                <Col md={14}>
                  <h3 className="da-text-color-dark-bg">Pop-up Title</h3>
                  <p className="da-p2-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc, urna arcu mattis sagittis ut velit ornare scelerisque.
                    Justo eget eleifend sed urna, risus. Augue ornare sit non
                    auctor consectetur. Amet.
                  </p>
                </Col>
              </Row>

              <Row className="da-mt-16">
                <Col span={12}>
                  <Button
                    block
                    type="primary"
                    ghost
                    onClick={handlePopupWidthCancel}
                  >
                    Cancel
                  </Button>
                </Col>

                <Col span={12} className="da-pl-8">
                  <Button
                    block
                    type="primary"
                    icon={<RiMailAddLine className="remix-icon" />}
                    onClick={handlePopupWidthOk}
                  >
                    Subscribe
                  </Button>
                </Col>
              </Row>
            </Col>
          </Modal>

          <Modal
            title={<h5 className="da-mb-0">Basic Modal</h5>}
            width={416}
            visible={FormModalVisible}
            onCancel={handleFormCancel}
            footer={
              <Button block type="primary" ghost onClick={handleFormOk}>
                Signup
              </Button>
            }
            closeIcon={
              <RiCloseFill
                className="remix-icon da-text-color-black-100 da-text-color-dark-0"
                size={24}
              />
            }
          >
            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  onClick={handleFormOk}
                >
                  Button
                </Button>
              </Form.Item>
            </Form>

            <Button block type="text" onClick={handleFormCancel}>
              Cancel
            </Button>
          </Modal>

          <Modal
            title={<h5 className="da-mb-0">Basic Modal</h5>}
            width={1000}
            visible={FormWidthModalVisible}
            onCancel={handleFormWidthCancel}
            footer={
              <Row gutter={[8, 8]} justify="end">
                <Col>
                  <Button type="primary" ghost>
                    Delete
                  </Button>
                </Col>

                <Col>
                  <Button type="test" onClick={handleFormWidthCancel}>
                    Cancel
                  </Button>
                </Col>

                <Col>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleFormWidthOk}
                  >
                    Confirm
                  </Button>
                </Col>
              </Row>
            }
            closeIcon={
              <RiCloseFill
                className="remix-icon da-text-color-black-100 da-text-color-dark-0"
                size={24}
              />
            }
          >
            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
            >
              <Row>
                <Col md={12} span={24}>
                  <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your firstname!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col md={12} span={24}>
                  <Form.Item
                    className="da-pl-sm-0 da-pl-16"
                    label="Last Name"
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your lastname!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col md={12} span={24}>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      { required: true, message: 'At least 6 Character' },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>

                <Col md={12} span={24}>
                  <Form.Item
                    className="da-pl-sm-0 da-pl-16"
                    label="Zip Code"
                    name="zipcode"
                    rules={[{ required: true, message: '1234' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'St. 200 etc.' }]}
                  >
                    <Input.TextArea />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {yoda}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
