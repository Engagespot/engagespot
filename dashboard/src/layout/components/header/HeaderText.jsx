import { Col } from 'antd';
import { Document, Upload } from 'react-iconly';

export default function HeaderText() {
  return (
    <Col span={12} className="da-header-left-text da-d-flex-center">
      <Document
        set="curved"
        size="large"
        className="remix-icon da-update-icon da-text-color-primary-1 da-text-color-dark-0 da-p-4 da-bg-color-primary-4 da-bg-color-dark-70"
      />
    </Col>
  );
}
