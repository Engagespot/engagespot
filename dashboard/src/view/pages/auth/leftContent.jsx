import React from 'react';

import { useSelector } from 'react-redux';

import { Row, Col } from 'antd';

import bg from '../../../assets/images/pages/auth/authentication-bg.svg';
import bgDark from '../../../assets/images/pages/auth/authentication-bg-dark.svg';
import logo from '../../../assets/images/logo/logo-vector-blue.png';
import EngageSpotLogo from '../../../assets/images/logo/engageSpotLogo.png';
import HomeLogo from '../../../assets/images/logo/home.svg';
import logoDark from '../../../assets/images/logo/logo-vector.svg';
import { Link } from 'react-router-dom';

export default function LeftContent() {
  // Redux
  const theme = useSelector(state => state.customise.theme);

  return (
    <Col
      style={{ backgroundClip: '#5350F6' }}
      lg={12}
      span={24}
      className="da-bg-color-primary-4 da-bg-color-dark-90 da-position-relative"
    >
      <Row className="da-image-row da-h-100 da-px-sm-8 da-px-md-16 da-pb-sm-32 da-pt-md-96 da-pt-md-32">
        <Col
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          span={24}
          className="da-logo-item da-m-sm-16 da-m-md-32 da-m-24"
        >
          <img src={HomeLogo} alt="Logo" />
        </Col>
      </Row>
    </Col>
  );
}
