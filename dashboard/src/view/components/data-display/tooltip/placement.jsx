import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { placement } from './code.js';

import { Card, Row, Col, Tooltip, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function TooltipPlacement() {
  const text = <span>This is tooltip</span>;
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  // Rtl
  const direction = useSelector(state => state.customise.direction);

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Placement</h4>
          <p className="da-p1-body">
            There are 12 placement options available.
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
          <div className="da-placement">
            <div
              style={
                direction == 'rtl'
                  ? { marginRight: 90, whiteSpace: 'nowrap' }
                  : { marginLeft: 90, whiteSpace: 'nowrap' }
              }
            >
              <Tooltip
                placement="topLeft"
                title={text}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary">TL</Button>
              </Tooltip>

              <Tooltip
                placement="top"
                title={text}
                okText="Yes"
                cancelText="No"
                className="da-ml-8"
              >
                <Button type="primary">Top</Button>
              </Tooltip>

              <Tooltip
                placement="topRight"
                title={text}
                okText="Yes"
                cancelText="No"
                className="da-ml-8"
              >
                <Button type="primary">TR</Button>
              </Tooltip>
            </div>
            <div
              style={
                direction == 'rtl'
                  ? { width: 90, float: 'right' }
                  : { width: 90, float: 'left' }
              }
            >
              <Tooltip
                placement="leftTop"
                title={text}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary">LT</Button>
              </Tooltip>

              <Tooltip
                placement="left"
                title={text}
                okText="Yes"
                cancelText="No"
                className="da-mt-8"
              >
                <Button type="primary">Left</Button>
              </Tooltip>

              <Tooltip
                placement="leftBottom"
                title={text}
                okText="Yes"
                cancelText="No"
                className="da-mt-8"
              >
                <Button type="primary">LB</Button>
              </Tooltip>
            </div>
            <div
              style={
                direction == 'rtl'
                  ? { width: 90, marginRight: 358 }
                  : { width: 90, marginLeft: 358 }
              }
            >
              <Tooltip
                placement="rightTop"
                title={text}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary">RT</Button>
              </Tooltip>

              <Tooltip
                placement="right"
                title={text}
                okText="Yes"
                cancelText="No"
                className="da-mt-8"
              >
                <Button type="primary">Right</Button>
              </Tooltip>

              <Tooltip
                placement="rightBottom"
                title={text}
                okText="Yes"
                cancelText="No"
                className="da-mt-8"
              >
                <Button type="primary">RB</Button>
              </Tooltip>
            </div>
            <div
              style={
                direction == 'rtl'
                  ? { marginRight: 90, clear: 'both', whiteSpace: 'nowrap' }
                  : { marginLeft: 90, clear: 'both', whiteSpace: 'nowrap' }
              }
            >
              <Tooltip
                placement="bottomLeft"
                title={text}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary">BL</Button>
              </Tooltip>

              <Tooltip
                placement="bottom"
                title={text}
                okText="Yes"
                cancelText="No"
                className="da-ml-8"
              >
                <Button type="primary">Bottom</Button>
              </Tooltip>

              <Tooltip
                placement="bottomRight"
                title={text}
                okText="Yes"
                cancelText="No"
                className="da-ml-8"
              >
                <Button type="primary">BR</Button>
              </Tooltip>
            </div>
          </div>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {placement}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
