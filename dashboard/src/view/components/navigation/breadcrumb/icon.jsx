import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { icon } from './code.js';

import { Card, Row, Col, Breadcrumb, Button } from 'antd';
import {
  RiHome2Line,
  RiApps2Line,
  RiFileListLine,
  RiContactsLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

export default function BreadcrumbWithIcon() {
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
          <h4>With an Icon</h4>
          <p className="da-p1-body">
            The icon should be placed in front of the text.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              <RiHome2Line className="remix-icon" />
            </Breadcrumb.Item>

            <Breadcrumb.Item href="#">
              <RiApps2Line className="remix-icon" />
              <span>Application List</span>
            </Breadcrumb.Item>

            <Breadcrumb.Item href="#">
              <RiFileListLine className="remix-icon" />
              <span>Application List</span>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
              <RiContactsLine className="remix-icon" />
              <span>An Application</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {icon}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
