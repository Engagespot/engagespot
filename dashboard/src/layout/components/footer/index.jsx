import { Col, Layout, Row } from 'antd';
const { Footer } = Layout;

export default function MenuFooter() {
  const version = import.meta.env.VITE_REACT_APP_VERSION;
  const currentYear = new Date().getFullYear();

  return (
    <Footer className="da-bg-color-black-10 da-bg-color-dark-100">
      <Row align="middle" justify="space-between">
        <Col md={12} span={24}>
          <p className="da-badge-text da-mb-0 da-text-color-dark-30">
            COPYRIGHT ©{currentYear} Engagespot, All rights Reserved
          </p>
        </Col>

        <Col
          md={12}
          span={24}
          className="da-mt-sm-8 da-text-sm-center da-text-right"
        >
          <span className="da-badge-text da-text-color-dark-30">
            Version: {version}
          </span>
        </Col>
      </Row>
    </Footer>
  );
}
