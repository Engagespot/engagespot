import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { position } from './code.js';

import { Card, Row, Col, Button, Modal } from 'antd';
import { RiCloseFill, RiCodeSSlashLine } from 'react-icons/ri';

export default function PositionModal() {
  const [modal1Visible, setIsModal1Visible] = useState(false);
  const [modal2Visible, setIsModal2Visible] = useState(false);
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function setModal1Visible(modal1Visible) {
    setIsModal1Visible(modal1Visible);
  }

  function setModal2Visible(modal2Visible) {
    setIsModal2Visible(modal2Visible);
  }

  return (
    <Card className="da-border-color-black-40">
      <Row>
        <Col className="da-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>To customize the position of modal</h4>
              <p className="da-p1-body">
                You can use centered,style.top or other styles to set position
                of modal dialog.
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
          <Col>
            <Button type="primary" onClick={() => setModal1Visible(true)}>
              Modal dialog at 20px to Top
            </Button>

            <Modal
              title={<h5 className="da-mb-0">20px to Top</h5>}
              style={{ top: 20 }}
              visible={modal1Visible}
              onOk={() => setModal1Visible(false)}
              onCancel={() => setModal1Visible(false)}
              closeIcon={
                <RiCloseFill
                  className="remix-icon da-text-color-black-100 da-text-color-dark-0"
                  size={24}
                />
              }
            >
              <p className="da-p2-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                vestibulum risus velit, ut placerat diam imperdiet nec. Aenean
                ex turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse.
              </p>
            </Modal>
          </Col>

          <Col className="da-mt-16">
            <Button type="primary" onClick={() => setModal2Visible(true)}>
              Vertically centered modal dialog
            </Button>

            <Modal
              title={
                <h5 className="da-mb-0">Vertically centered modal dialog</h5>
              }
              centered
              visible={modal2Visible}
              onOk={() => setModal2Visible(false)}
              onCancel={() => setModal2Visible(false)}
              closeIcon={
                <RiCloseFill
                  className="remix-icon da-text-color-black-100 da-text-color-dark-0"
                  size={24}
                />
              }
            >
              <p className="da-p2-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                vestibulum risus velit, ut placerat diam imperdiet nec. Aenean
                ex turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse.
              </p>
            </Modal>
          </Col>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code da-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {position}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
