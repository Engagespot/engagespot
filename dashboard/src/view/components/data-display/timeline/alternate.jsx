import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { alternate } from './code.js';

import { Row, Col, Card, Timeline, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function AlternateTimeline() {
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
          <h4>Alternate</h4>
          <p className="da-p1-body da-text-color-dark-30 da-mb-24">
            Alternate timeline.
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
          <Timeline mode="alternate">
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>

            <Timeline.Item color="green">
              Solve initial network problems 2015-09-01
            </Timeline.Item>

            <Timeline.Item dot={<i className="ri-time-line ri-lg" />}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Timeline.Item>

            <Timeline.Item color="red">
              Network problems being solved 2015-09-01
            </Timeline.Item>

            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>

            <Timeline.Item dot={<i className="ri-time-line ri-lg" />}>
              Technical testing 2015-09-01
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {alternate}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
