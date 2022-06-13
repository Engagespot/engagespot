import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { standAlone } from './code.js';

import { Card, Row, Col, Badge, Switch, Space, Button } from 'antd';
import { RiTimeLine, RiCodeSSlashLine } from 'react-icons/ri';

export default function BadgeStandAlone() {
  const [show, setShow] = useState(true);
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  // Redux
  const customise = useSelector(state => state.customise);

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Standalone</h4>
          <p className="da-p1-body">
            Used in standalone when children is empty.
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
          <Row gutter={[16, 16]}>
            <Col>
              <Switch
                checked={show}
                onChange={() => {
                  setShow(!show);
                }}
              />
            </Col>

            <Col>
              <Badge count={show ? 25 : 0} />
            </Col>

            <Col>
              <Badge
                count={
                  show ? (
                    <RiTimeLine
                      className="remix-icon da-text-color-danger-1"
                      size={24}
                    />
                  ) : (
                    0
                  )
                }
              />
            </Col>

            <Col>
              <Badge count={show ? 4 : 0} className="site-badge-count-4" />
            </Col>

            <Col>
              <Badge
                className="site-badge-count-109"
                count={show ? 109 : 0}
                style={
                  customise.theme == 'dark'
                    ? { backgroundColor: '#474747' }
                    : { backgroundColor: '#B2BEC3' }
                }
              />
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
          {standAlone}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
