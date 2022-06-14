import { Alert, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import testImage from '../../../assets/images/illustrations/newsletter-1.svg';
import { StoreUserEmail } from '../../../redux/reducers/auth/authActions';
import { handleResendVerificationEmail } from './../../../helpers/helpers';
import LeftContent from './leftContent';

export default function Verify() {
  const { auth } = useSelector(
    ({ auth }) => ({
      auth,
    }),
    shallowEqual
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!auth.userEmail) {
      history.push('/auth/login');
    }

    return () => {
      dispatch(StoreUserEmail(''));
    };
  }, [auth.userEmail, dispatch, history]);

  const handleResend = () => {
    handleResendVerificationEmail({
      setLoading,
      loading,
      email: auth.userEmail,
    });
  };

  return (
    <Row
      gutter={[32, 0]}
      className="da-authentication-page"
      style={{ height: '100%' }}
    >
      <LeftContent />
      <Col lg={12} span={24} className="da-py-sm-0 da-py-md-64">
        <Row className="da-h-100" align="middle" justify="center">
          <Col
            xxl={11}
            xl={15}
            lg={20}
            md={20}
            sm={24}
            className="da-px-sm-8 da-pt-24 da-pb-48"
          >
            <h1 className="da-mb-sm-0">Verify Your Email</h1>

            <Alert
              banner="true"
              message="Your account has been created. Check your mail for a verification email from Engagespot."
              type="success"
            />

            <p className="da-mt-sm-0 da-mt-16 da-text-color-black">
              Check your email
              <span className="da-text-color-secondary-1">{` ${auth.userEmail} `}</span>
              for an email from Engagespot to complete your signup. Be sure to
              check your spam folders.
            </p>

            <Col>
              <img
                alt="example"
                src={testImage}
                height={345}
                className="da-img-cover"
              />
            </Col>

            <Col className="da-form-info">
              <span className="da-mt-sm-0 da-mt-8 da-text-color-black">
                Haven't received an email?
              </span>{' '}
              <button
                onClick={handleResend}
                type="submit"
                className="button-reset-all-styles da-text-color-primary-1 da-text-color-dark-primary-2"
              >
                Resend
              </button>
            </Col>

            <Col className="da-form-info da-mt-24">
              <span className="da-text-color-black-80 da-text-color-dark-40 da-caption da-mr-4">
                Already have an account?
              </span>

              <Link
                className="da-text-color-primary-1 da-text-color-dark-primary-2 da-caption"
                to="/auth/login"
              >
                Sign in
              </Link>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
