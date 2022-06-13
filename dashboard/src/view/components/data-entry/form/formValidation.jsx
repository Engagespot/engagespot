import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { formvalidation } from './code.js';

import { Card, Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function FormValidation() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const onFinish = values => {
    //console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    //console.log("Failed:", errorInfo);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Form Validation</h4>
          <p className="da-p1-body">
            Basic Form data control. Includes layout, initial values, validation
            and submit.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col xl={12} xs={24}>
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
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {formvalidation}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
