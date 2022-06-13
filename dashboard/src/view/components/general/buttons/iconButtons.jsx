import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { iconButton } from './code.js';

import { Card, Row, Col, Button, Tooltip } from 'antd';
import { RiSearchLine, RiCodeSSlashLine } from 'react-icons/ri';

export default function IconButtons() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-pb-16" lg={12} span={20}>
          <h4>Icon Button</h4>
          <p className="da-p1-body">
            Button components can contain an Icon. This is done by setting the
            icon property or placing an Icon component within the Button.
          </p>
        </Col>

        <Col lg={12} span={4} className="da-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="da-text-color-black-80" />}
          />
        </Col>

        <Row>
          <Col xl={15} md={18} span={24}>
            <Tooltip title="search">
              <Button
                className="da-mr-16 da-mb-16"
                type="primary"
                shape="circle"
                icon={<RiSearchLine className="remix-icon" />}
              />
            </Tooltip>

            <Button className="da-mr-16 da-mb-16" type="primary" shape="circle">
              Y
            </Button>

            <Button
              className="da-mr-16 da-mb-16"
              type="primary"
              icon={<RiSearchLine className="remix-icon" />}
            >
              Search
            </Button>

            <Tooltip title="search">
              <Button
                className="da-mr-16 da-mb-16"
                shape="circle"
                icon={<RiSearchLine className="remix-icon" />}
              />
            </Tooltip>

            <Button
              className="da-mr-16 da-mb-16"
              icon={<RiSearchLine className="remix-icon" />}
            >
              Search
            </Button>

            <Tooltip title="search">
              <Button
                className="da-mr-16 da-mb-16"
                shape="circle"
                icon={<RiSearchLine className="remix-icon" />}
              />
            </Tooltip>

            <Button
              className="da-mr-16 da-mb-16"
              icon={<RiSearchLine className="remix-icon" />}
            >
              Search
            </Button>

            <Tooltip title="search">
              <Button
                className="da-mr-16 da-mb-16"
                type="dashed"
                shape="circle"
                icon={<RiSearchLine className="remix-icon" />}
              />
            </Tooltip>

            <Button
              className="da-mr-16 da-mb-16"
              type="dashed"
              icon={<RiSearchLine className="remix-icon" />}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {iconButton}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
