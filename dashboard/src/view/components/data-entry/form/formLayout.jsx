import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { formlayout } from './code.js';

import { Card, Row, Col, Form, Input, Button, Radio } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function FormLayout() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Form Layout</h4>
          <p className="da-p1-body">
            There are three layout for form: horizontal, vertical, inline.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Form
            layout={formLayout}
            form={form}
            initialValues={{
              layout: formLayout,
            }}
            onValuesChange={onFormLayoutChange}
          >
            <Form.Item label="Form Layout" name="layout" className="da-w-100">
              <Radio.Group
                value={formLayout}
                className={formLayout === 'inline' ? 'da-mb-24' : ''}
              >
                <Radio.Button value="horizontal">Horizontal</Radio.Button>
                <Radio.Button value="vertical">Vertical</Radio.Button>
                <Radio.Button value="inline">Inline</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Row className="da-w-100">
              <Col xl={12} xs={24}>
                <Form.Item label="Field A">
                  <Input
                    placeholder="input placeholder"
                    className={formLayout === 'inline' ? 'da-mb-24' : ''}
                  />
                </Form.Item>

                <Form.Item label="Field B" className="da-mb-0">
                  <Input placeholder="input placeholder" />
                </Form.Item>

                <Form.Item className="da-mt-24">
                  <Button type="primary">Submit</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {formlayout}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
