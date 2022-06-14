import { Col } from 'antd';
import React from 'react';

function TermsAndPrivacyPolicy() {
  return (
    <>
      <Col className="da-other-links da-mt-24">
        <a
          href="https://engagespot.co/privacy-policy"
          target="_blank"
          rel="noreferrer"
          className="da-text-color-black-80 da-text-color-dark-40"
        >
          Privacy Policy
        </a>
        <a
          href="https://engagespot.co/terms"
          className="da-text-color-black-80 da-text-color-dark-40"
          style={{ marginLeft: '10px' }}
          target="_blank"
          rel="noreferrer"
        >
          Term of use
        </a>
      </Col>
    </>
  );
}

export default TermsAndPrivacyPolicy;
