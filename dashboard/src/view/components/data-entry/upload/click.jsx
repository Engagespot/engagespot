import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { click } from './code.js';

import { Card, Row, Col, Upload, message, Button } from 'antd';
import {
  RiUpload2Line,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

export default function ClickUpload() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        //console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success({
          content: `${info.file.name} file uploaded successfully.`,
          icon: <RiCheckboxCircleLine className="remix-icon" />,
        });
      } else if (info.file.status === 'error') {
        message.error({
          content: `${info.file.name} file upload failed.`,
          icon: <RiCloseCircleLine className="remix-icon" />,
        });
      }
    },
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Upload by Clicking</h4>
              <p className="da-p1-body">
                Classic mode. File selection dialog pops up when upload button
                is clicked.
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
          <Upload {...props}>
            <Button
              type="primary"
              icon={<RiUpload2Line className="remix-icon" />}
            >
              Click to Upload
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
          {click}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
