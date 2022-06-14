import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { drag } from './code.js';

import { Card, Row, Col, Upload, message, Button } from 'antd';
import {
  RiUploadCloud2Line,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

const { Dragger } = Upload;

export default function DragUpload() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
      }
      if (status === 'done') {
        message.success({
          content: `${info.file.name} file uploaded successfully.`,
          icon: <RiCheckboxCircleLine className="remix-icon" />,
        });
      } else if (status === 'error') {
        message.error({
          content: `${info.file.name} file upload failed.`,
          icon: <RiCloseCircleLine className="remix-icon" />,
        });
      }
    },
    onDrop() {},
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Drag and Drop</h4>
              <p className="da-p1-body">
                You can drag files to a specific area, to upload. Alternatively,
                you can also upload by selecting.
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

        <Col span={24} className="da-upload-dragger-col">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <RiUploadCloud2Line className="remix-icon" />
            </p>

            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>

            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {drag}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
