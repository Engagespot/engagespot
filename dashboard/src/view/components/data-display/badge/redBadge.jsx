import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { redBadge } from './code.js';

import { Card, Row, Col, Badge, Button } from 'antd';
import { RiNotificationLine, RiCodeSSlashLine } from 'react-icons/ri';

export default function BadgeRed() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  // RTL
  const direction = useSelector(state => state.customise.direction);

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Red badge</h4>
          <p className="da-p1-body">
            This will simply display a red badge, without a specific count. If
            count equals 0, it won't display the dot.
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
              <Badge dot offset={[-2, 5]}>
                <RiNotificationLine
                  className="remix-icon da-text-color-dark-0"
                  size={24}
                />
              </Badge>
            </Col>

            <Col>
              <Badge count={0} dot offset={[-2, 5]}>
                <RiNotificationLine
                  className="remix-icon da-text-color-dark-0"
                  size={24}
                />
              </Badge>
            </Col>

            <Col>
              <Badge dot offset={direction == 'rtl' ? [-4, 3] : [4, 3]}>
                <a href="#">Link something</a>
              </Badge>
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
          {redBadge}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
