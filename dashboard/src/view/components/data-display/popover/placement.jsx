import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { placement } from './code.js';

import { Card, Row, Col, Popover, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function PopoverPlacements() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const text = <span>Popover Title</span>;
  const content = (
    <div>
      <p>Content</p>
    </div>
  );

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
          <Col>
            <div className="da-placement">
              <div
                style={
                  direction == 'rtl'
                    ? { marginRight: 90, whiteSpace: 'nowrap' }
                    : { marginLeft: 90, whiteSpace: 'nowrap' }
                }
              >
                <Popover
                  placement="topLeft"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary">TL</Button>
                </Popover>

                <Popover
                  placement="top"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary" className="da-mx-8">
                    Top
                  </Button>
                </Popover>

                <Popover
                  placement="topRight"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary">TR</Button>
                </Popover>
              </div>

              <div
                style={
                  direction == 'rtl'
                    ? { width: 90, float: 'right' }
                    : { width: 90, float: 'left' }
                }
              >
                <Popover
                  placement="leftTop"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary">LT</Button>
                </Popover>

                <Popover
                  placement="left"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary" className="da-my-8">
                    Left
                  </Button>
                </Popover>

                <Popover
                  placement="leftBottom"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary">LB</Button>
                </Popover>
              </div>

              <div
                style={
                  direction == 'rtl'
                    ? { width: 90, marginRight: 358 }
                    : { width: 90, marginLeft: 358 }
                }
              >
                <Popover
                  placement="rightTop"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary">RT</Button>
                </Popover>

                <Popover
                  placement="right"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary" className="da-my-8">
                    Right
                  </Button>
                </Popover>

                <Popover
                  placement="rightBottom"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary">RB</Button>
                </Popover>
              </div>

              <div
                style={
                  direction == 'rtl'
                    ? { marginRight: 90, clear: 'both', whiteSpace: 'nowrap' }
                    : { marginLeft: 90, clear: 'both', whiteSpace: 'nowrap' }
                }
              >
                <Popover
                  placement="bottomLeft"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary">BL</Button>
                </Popover>

                <Popover
                  placement="bottom"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary" className="da-mx-8">
                    Bottom
                  </Button>
                </Popover>

                <Popover
                  placement="bottomRight"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button type="primary">BR</Button>
                </Popover>
              </div>
            </div>
          </Col>
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
