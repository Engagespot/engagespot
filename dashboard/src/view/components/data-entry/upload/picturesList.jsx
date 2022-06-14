import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { picturesList } from './code.js';

import { Card, Row, Col, Upload, Button } from 'antd';
import { RiUpload2Line, RiCodeSSlashLine } from 'react-icons/ri';

import images from '../../../../assets/images/memoji/memoji-1.png';

export default function PicturesListUpload() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const fileList = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: images,
      thumbUrl: images,
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error',
    },
  ];

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Pictures with List Style</h4>
              <p className="da-p1-body">
                If uploaded file is a picture, the thumbnail can be shown.
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
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            defaultFileList={[...fileList]}
          >
            <Button
              type="primary"
              icon={<RiUpload2Line className="remix-icon" />}
            >
              Upload
            </Button>
          </Upload>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {picturesList}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
