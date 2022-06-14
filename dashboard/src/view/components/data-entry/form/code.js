export const basic = `
import { Form, Input, Button, Checkbox } from "antd";

const onFinish = (values) => {
  //console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  //console.log("Failed:", errorInfo);
};

return (
  <Form
    layout="vertical"
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        { required: true, message: "Please input your username!" },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        { required: true, message: "Please input your password!" },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
`;

export const formlayout = `
import React, {useState} from "react";

import { Form, Input, Button, Checkbox, Radio } from "antd";

const [form] = Form.useForm();
const [formLayout, setFormLayout] = useState('horizontal');

const onFormLayoutChange = ({ layout }) => {
  setFormLayout(layout);
};

return (
  <Form
    layout={formLayout}
    form={form}
    initialValues={{
      layout: formLayout,
    }}
    onValuesChange={onFormLayoutChange}
  >
    <Form.Item label="Form Layout" name="layout">
      <Radio.Group value={formLayout} className={formLayout === 'inline' ? 'da-mb-24' : ""}>
        <Radio.Button value="horizontal">Horizontal</Radio.Button>
        <Radio.Button value="vertical">Vertical</Radio.Button>
        <Radio.Button value="inline">Inline</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item label="Field A">
      <Input placeholder="input placeholder" className={formLayout === 'inline' ? 'da-mb-24' : ""} />
    </Form.Item>

    <Form.Item label="Field B" className="da-mb-0">
      <Input placeholder="input placeholder" />
    </Form.Item>

    <Form.Item className="da-mt-24">
      <Button type="primary">Submit</Button>
    </Form.Item>
  </Form>
);
`;

export const formsizes = `
import React, { useState } from "react";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

const [componentSize, setComponentSize] = useState('default');

const onFormLayoutChange = ({ size }) => {
  setComponentSize(size);
};

return (
  <Form
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 18,
    }}
    layout="horizontal"
    initialValues={{
      size: componentSize,
    }}
    onValuesChange={onFormLayoutChange}
    size={componentSize}
  >
    <Form.Item label="Form Size" name="size">
      <Radio.Group>
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
    </Form.Item>
    
    <Form.Item label="Input">
      <Input />
    </Form.Item>

    <Form.Item label="Select">
      <Select>
        <Select.Option value="demo">Demo</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item label="TreeSelect">
      <TreeSelect
        treeData={[
          {
            title: 'Light',
            value: 'light',
            children: [
              {
                title: 'Bamboo',
                value: 'bamboo',
              },
            ],
          },
        ]}
      />
    </Form.Item>

    <Form.Item label="Cascader">
      <Cascader
        options={[
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
              },
            ],
          },
        ]}
      />
    </Form.Item>

    <Form.Item label="DatePicker">
      <DatePicker />
    </Form.Item>

    <Form.Item label="InputNumber">
      <InputNumber />
    </Form.Item>

    <Form.Item label="Switch">
      <Switch />
    </Form.Item>

    <Form.Item label="Button">
      <Button>Button</Button>
    </Form.Item>
  </Form>
);
`;

export const formvalidation = `
import React, { useState } from "react";

import { Form, Input, Button, Checkbox, Radio } from "antd";

const onFinish = (values) => {
  //console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  //console.log("Failed:", errorInfo);
};

return (
  <Form
    layout="vertical"
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Username"
      validateStatus="error"
      help="This are required"
    >
      <Input placeholder="Placeholder Text" id="error" />
    </Form.Item>
    
    <Form.Item
      label="Email"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Input
        placeholder="I'm the content is being validated"
        id="validating"
      />
    </Form.Item>

    <Form.Item
      label="Password"
      help="This are required"
      validateStatus="warning"
    >
      <Input.Password placeholder="Warning" id="warning2" />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
`;
