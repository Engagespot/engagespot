import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { confirmation } from './code.js';

import { Card, Row, Col, Button, Modal } from 'antd';
import { RiInformationLine, RiCodeSSlashLine } from 'react-icons/ri';

const { confirm } = Modal;

export default function ConfirmationModal() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function showConfirm() {
    confirm({
      title: (
        <h5 className="da-mb-0 da-font-weight-500">
          Do you Want to delete these items?
        </h5>
      ),
      icon: (
        <span className="remix-icon">
          <RiInformationLine />
        </span>
      ),
      content: <p className="da-p1-body">Some descriptions</p>,
      onOk() {},
      onCancel() {},
    });
  }

  function showPromiseConfirm() {
    confirm({
      title: (
        <h5 className="da-mb-0 da-font-weight-500">
          Do you Want to delete these items?
        </h5>
      ),
      icon: (
        <span className="remix-icon">
          <RiInformationLine />
        </span>
      ),
      content: (
        <p className="da-p1-body">
          When clicked the OK button, this dialog will be closed after 1 second
        </p>
      ),
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }

  function showDeleteConfirm() {
    confirm({
      title: (
        <h5 className="da-mb-0 da-font-weight-500">
          Are you sure delete this task?
        </h5>
      ),
      icon: (
        <span className="remix-icon">
          <RiInformationLine />
        </span>
      ),
      content: <p className="da-p1-body">Some descriptions</p>,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {},
      onCancel() {},
    });
  }

  function showPropsConfirm() {
    confirm({
      title: (
        <h5 className="da-mb-0 da-font-weight-500">
          Are you sure delete this task?
        </h5>
      ),
      icon: (
        <span className="remix-icon">
          <RiInformationLine />
        </span>
      ),
      content: <p className="da-p1-body">Some descriptions</p>,
      okText: 'Yes',
      okType: 'danger',
      okButtonProps: {
        disabled: true,
      },
      cancelText: 'No',
      onOk() {},
      onCancel() {},
    });
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Confirmation modal dialog</h4>
              <p className="da-p1-body">
                Use confirm() to show a confirmation modal dialog. Let
                onCancel/onOk function return a promise object to delay closing
                the dialog.
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
          <Button
            className="da-mb-16 da-mr-16"
            type="primary"
            ghost
            onClick={showConfirm}
          >
            Confirm
          </Button>

          <Button
            className="da-mb-16 da-mr-16"
            type="primary"
            ghost
            onClick={showPromiseConfirm}
          >
            With promise
          </Button>

          <Button
            className="da-mb-16 da-mr-16"
            type="primary"
            ghost
            onClick={showDeleteConfirm}
          >
            Delete
          </Button>

          <Button
            className="da-mb-16 da-mr-16"
            type="primary"
            ghost
            onClick={showPropsConfirm}
          >
            With extra props
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {confirmation}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
