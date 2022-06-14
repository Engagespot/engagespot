import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { customize } from './code.js';

import { Card, Row, Col, Rate, Button } from 'antd';
import {
  RiEmotionLine,
  RiEmotionUnhappyLine,
  RiEmotionNormalLine,
  RiEmotionHappyLine,
  RiEmotionLaughLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

export default function RateCustomizeCharacter() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const customIcons = {
    1: <RiEmotionUnhappyLine size={24} />,
    2: <RiEmotionNormalLine size={24} />,
    3: <RiEmotionHappyLine size={24} />,
    4: <RiEmotionLine size={24} />,
    5: <RiEmotionLaughLine size={24} />,
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" lg={12} span={20}>
          <h4>Customize character</h4>
          <p className="da-p1-body">
            Can customize each character using (RateProps) => ReactNode.
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
          <Rate defaultValue={2} character={({ index }) => index + 1} />
          <br />
          <br />
          <Rate
            defaultValue={3}
            character={({ index }) => customIcons[index + 1]}
          />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {customize}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
