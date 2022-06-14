import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { collapse } from './code.js';

import { Card, Row, Col, Collapse, Tag, Button } from 'antd';
import {
  RiBasketballLine,
  RiArrowRightSLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

const { Panel } = Collapse;

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.';

export default function CollapseCard() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function callback() {}

  const genExtra = () => (
    <RiArrowRightSLine
      size={24}
      className="da-collapse-arrow da-text-color-black-60"
    />
  );

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Collapse</h4>
              <p className="da-p1-body">
                By default, any number of panels can be expanded at a time. The
                first panel is expanded in this example.
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
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel
              header={
                <p className="da-d-flex-center da-p1-body da-mb-0">
                  <RiBasketballLine
                    size={24}
                    className="remix-icon da-text-color-primary-1 da-mr-18"
                  />
                  <span>Lorem Ipsum Collapse Title</span>
                  <Tag className="da-ml-16" color="blue">
                    Tag
                  </Tag>
                </p>
              }
              key="1"
              showArrow={false}
              extra={genExtra()}
            >
              <p className="da-p1-body">{text}</p>
            </Panel>

            <Panel
              header={
                <p className="da-d-flex-center da-p1-body da-mb-0">
                  <RiBasketballLine
                    size={24}
                    className="remix-icon da-text-color-primary-1 da-mr-18"
                  />
                  <span>Lorem Ipsum Collapse Title</span>
                  <Tag className="da-ml-16" color="blue">
                    Tag
                  </Tag>
                </p>
              }
              key="2"
              showArrow={false}
              extra={genExtra()}
            >
              <p className="da-p1-body">{text}</p>
            </Panel>

            <Panel
              header={
                <p className="da-d-flex-center da-p1-body da-mb-0">
                  <RiBasketballLine
                    size={24}
                    className="remix-icon da-text-color-primary-1 da-mr-18"
                  />
                  <span>Lorem Ipsum Collapse Title</span>
                  <Tag className="da-ml-16" color="blue">
                    Tag
                  </Tag>
                </p>
              }
              key="3"
              showArrow={false}
              extra={genExtra()}
            >
              <p className="da-p1-body">{text}</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {collapse}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
