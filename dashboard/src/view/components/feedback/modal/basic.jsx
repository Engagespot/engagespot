import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { basic } from './code.js';

import { Card, Row, Col, Button, Modal } from 'antd';
import { RiCloseFill, RiCodeSSlashLine } from 'react-icons/ri';

export default function BasicModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Basic Modal</h4>
              <p className="da-p1-body">Basic modal.</p>
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
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>

          <Modal
            title={<h5 className="da-mb-0">Basic Modal</h5>}
            width={416}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={
              <>
                <Button type="text" key="back" onClick={handleCancel}>
                  Cancel
                </Button>

                <Button type="primary" onClick={handleOk}>
                  Confirm
                </Button>
              </>
            }
            closeIcon={
              <RiCloseFill
                className="remix-icon da-text-color-black-100 da-text-color-dark-0"
                size={24}
              />
            }
          >
            <p className="da-p2-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vestibulum risus velit, ut placerat diam imperdiet nec. Aenean ex
              turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse.
            </p>
          </Modal>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {basic}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
