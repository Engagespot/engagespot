export const basic = `
import React, { useState } from "react";
import { Drawer, Button } from "antd";

const [visible, setVisible] = useState(false);

const showDrawer = () => {
  setVisible(true);
};

const onClose = () => {
  setVisible(false);
};

return (
  <>
    <Button type="primary" onClick={showDrawer}>
      Open
    </Button>

    <Drawer
      title={<h5 className="da-mb-0">Basic Drawer</h5>}
      placement="right"
      width={346}
      closable={false}
      onClose={onClose}
      visible={visible}
      className="da-drawer-mobile"
    >
      <p className="da-p1-body">Some contents...</p>
      <p className="da-p1-body">Some contents...</p>
      <p className="da-p1-body">Some contents...</p>
    </Drawer>
  </>
);
`;

export const custom = `
import React, { useState } from "react";
import { Drawer, Button, Radio, Space } from "antd";

const [visible, setVisible] = useState(false);
const [placement, setPlacement] = useState("left");

const showDrawer = () => {
  setVisible(true);
};

const onClose = () => {
  setVisible(false);
};

const onChange = (e) => {
  setPlacement(e.target.value);
};

return (
  <>
    <Space>
      <Radio.Group defaultValue={placement} onChange={onChange}>
        <Radio className="da-mr-sm-16 da-mb-lg-8" value="top">
          top
        </Radio>

        <Radio className="da-mr-sm-16 da-mb-lg-8" value="right">
          right
        </Radio>

        <Radio className="da-mr-sm-16 da-mb-lg-8" value="bottom">
          bottom
        </Radio>

        <Radio className="da-mr-sm-16 da-mb-lg-8" value="left">
          left
        </Radio>
      </Radio.Group>

      <Button className="da-mb-lg-8" type="primary" onClick={showDrawer}>
        Open
      </Button>
    </Space>

    <Drawer
      title={<h5 className="da-mb-0">Basic Drawer</h5>}
      placement={placement}
      closable={false}
      onClose={onClose}
      visible={visible}
      key={placement}
      className="da-drawer-mobile"
    >
      <p className="da-p1-body">Some contents...</p>
      <p className="da-p1-body">Some contents...</p>
      <p className="da-p1-body">Some contents...</p>
    </Drawer>
  </>
);
`;

export const submit = `
import React, { useState } from "react";

import {
  Row,
  Col,
  Drawer,
  Form,
  Button,
  Input,
  Select,
  DatePicker,
} from "antd";
import { RiCloseFill, RiAddLine } from "react-icons/ri";

const { Option } = Select;

const [visible, setVisible] = useState(false);

const showDrawer = () => {
  setVisible(true);
};

const onClose = () => {
  setVisible(false);
};

return (
  <>
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
            textAlign: "right",
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
                { required: true, message: "Please enter user name" },
              ]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>

          <Col md={12} span={24}>
            <Form.Item
              name="url"
              label="Url"
              rules={[{ required: true, message: "Please enter url" }]}
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
                { required: true, message: "Please select an owner" },
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
                { required: true, message: "Please choose the type" },
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
                { required: true, message: "Please choose the approver" },
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
                { required: true, message: "Please choose the dateTime" },
              ]}
            >
              <DatePicker.RangePicker
                className="da-w-100"
                getPopupContainer={(trigger) => trigger.parentElement}
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
                  message: "please enter url description",
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
  </>
);
`;

export const multi = `
import React, { useState } from "react";
import { Drawer, Button } from "antd";

const [visible, setVisible] = useState(false);
const [childrenDrawer, setChildrenDrawer] = useState(false);

const showDrawer = () => {
  setVisible(true);
};

const onClose = () => {
  setVisible(false);
};

const showChildrenDrawer = () => {
  setChildrenDrawer(true);
};

const onChildrenDrawerClose = () => {
  setChildrenDrawer(false);
};

return (
  <>
    <Button type="primary" onClick={showDrawer}>
      Open drawer
    </Button>

    <Drawer
      title={<h5 className="da-mb-0">Multi-level drawer</h5>}
      width={520}
      closable={false}
      onClose={onClose}
      visible={visible}
      className="da-drawer-mobile"
    >
      <Button type="primary" onClick={showChildrenDrawer}>
        Two-level drawer
      </Button>

      <Drawer
        title={<h5 className="da-mb-0">Two-level Drawer</h5>}
        width={320}
        closable={false}
        onClose={onChildrenDrawerClose}
        visible={childrenDrawer}
      >
        <p className="da-p1-body">This is two-level drawer</p>
      </Drawer>
    </Drawer>
  </>
);
`;
