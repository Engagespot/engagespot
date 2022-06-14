import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { status } from './code.js';

import { Card, Row, Col, Tag, Button } from 'antd';
import {
  RiCheckboxCircleLine,
  RiRefreshLine,
  RiCloseCircleLine,
  RiErrorWarningLine,
  RiTimeLine,
  RiIndeterminateCircleLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

export default function TagStatus() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Status Tag</h4>
          <p className="da-p1-body">
            We preset five different colors, you can set color property such as
            success,processing,error,default and warning to indicate specific
            status.
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
          <h5 className="da-mb-16">Without Icon</h5>

          <Row gutter={[0, 16]}>
            <Col className="da-mr-16">
              <Tag color="success">success</Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag color="processing">processing</Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag color="error">error</Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag color="warning">warning</Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag color="default">default</Tag>
            </Col>
          </Row>

          <h5 className="da-mt-24 da-mb-16">Without Icon</h5>

          <Row gutter={[0, 16]}>
            <Col className="da-mr-16">
              <Tag
                icon={<RiCheckboxCircleLine className="remix-icon" />}
                color="success"
              >
                Success
              </Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag
                icon={<RiRefreshLine className="remix-icon remix-icon-spin" />}
                color="processing"
              >
                Processing
              </Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag
                icon={<RiCloseCircleLine className="remix-icon" />}
                color="error"
              >
                Error
              </Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag
                icon={<RiErrorWarningLine className="remix-icon" />}
                color="warning"
              >
                Warning
              </Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag icon={<RiTimeLine className="remix-icon" />} color="default">
                Waiting
              </Tag>
            </Col>

            <Col className="da-mr-16">
              <Tag
                icon={<RiIndeterminateCircleLine className="remix-icon" />}
                color="default"
              >
                Stop
              </Tag>
            </Col>
          </Row>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {status}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
