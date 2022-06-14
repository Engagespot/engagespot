import { Col, Divider, Row } from 'antd';
import React from 'react';

export default function DeleteAccount() {
  const dividerClass = 'da-border-color-black-40 da-border-color-dark-80';

  return (
    <Row>
      <Col span={24}>
        <h2>Delete Account</h2>
        <Divider className={dividerClass} />
      </Col>

      <Col span={24}>
        <p>
          To delete your account, please contact{' '}
          <a href="#">support@engagespot.co.</a>
        </p>
      </Col>
    </Row>
  );
}
