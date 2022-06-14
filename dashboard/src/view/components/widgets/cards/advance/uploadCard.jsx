import React from 'react';

import { Card, Row, Col, Progress, Upload, message } from 'antd';
import {
  RiMoreFill,
  RiFileWordLine,
  RiFileZipLine,
  RiFilePptLine,
  RiAddLine,
} from 'react-icons/ri';

export default function UploadCard() {
  const { Dragger } = Upload;

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        //console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      //console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Card className="da-border-color-black-40 da-card-6">
      <Row>
        <Col span={24}>
          <Row justify="space-between" className="da-mb-32">
            <Col>
              <Row align="middle">
                <h5 className="da-mb-0 da-mr-8">Card Title</h5>
                <p className="da-mb-0 da-badge-text">Subtitle</p>
              </Row>
            </Col>

            <RiMoreFill size={24} className="da-text-color-dark-0" />
          </Row>

          <Dragger
            {...props}
            className="da-bg-color-black-0 da-bg-color-dark-100 da-h-auto"
          >
            <RiAddLine size={24} className="da-mt-8" />

            <p className="da-mb-8 da-placeholder-text da-text-color-black-80 da-text-color-dark-30">
              Drop files here <br /> or click to upload.
            </p>
          </Dragger>

          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row>
                <RiFileWordLine
                  size={36}
                  className="da-mr-8 da-text-color-dark-0"
                />

                <Col sm={19} xs={16}>
                  <h5 className="da-mb-0 da-placeholder">Progress Title</h5>
                  <Progress percent={100} strokeWidth={4} />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row>
                <RiFileZipLine
                  size={36}
                  className="da-mr-8 da-text-color-dark-0"
                />

                <Col sm={19} xs={16}>
                  <h5 className="da-mb-0 da-placeholder">Progress Title</h5>
                  <Progress percent={30} strokeWidth={4} />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row>
                <RiFilePptLine
                  size={36}
                  className="da-mr-8 da-text-color-dark-0"
                />

                <Col sm={19} xs={16}>
                  <h5 className="da-mb-0 da-placeholder">Progress Title</h5>
                  <Progress percent={50} strokeWidth={4} status="exception" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
