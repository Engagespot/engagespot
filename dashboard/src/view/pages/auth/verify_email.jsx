import { Alert, Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import successImage from '../../../assets/images/illustrations/growth.svg';
import { StoreUserEmail } from '../../../redux/reducers/auth/authActions';
import LeftContent from './leftContent';
import { useState } from 'react';
import { handleError, handlePromise } from '../../../helpers/helpers';
import {
  ResendVerficationEmail,
  VerifyAccount,
} from '../../../services/auth.service';
import { Toaster } from '../../../services/toaster.service';
import { handleResendVerificationEmail } from './../../../helpers/helpers';
import { useLocation } from 'react-router-dom';
import { SetGlobalLoader } from '../../../redux/reducers/additional-fetch/additionalFetchActions';

export default function VerifyEmail() {
  const { auth } = useSelector(
    ({ auth }) => ({
      auth,
    }),
    shallowEqual
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const verifyYourAccount = async () => {
      // start loader
      dispatch(SetGlobalLoader(true));

      const path = location.pathname.split('/');
      const verificationCode = path[path.length - 1];

      if (!verificationCode) {
        return history.push('/auth/login');
      }

      try {
        await VerifyAccount(verificationCode);
      } catch (e) {
        history.push('/auth/login');
        const toaster = new Toaster('error');
        toaster.title = 'Error';
        toaster.message = 'Account Verification Failed';
        toaster.open();

        return dispatch(SetGlobalLoader(false));
      }

      // close loader after 0.8 seconds
      setTimeout(() => {
        const toaster = new Toaster('success');
        toaster.title = 'Success';
        toaster.message = 'Account Verification Success';
        toaster.open();

        dispatch(SetGlobalLoader(false));
      }, 700);
    };

    verifyYourAccount();
  }, [location.pathname, dispatch, history]);

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
            <h1 className="da-mb-sm-0">Account Verification </h1>
            <p className="da-mt-sm-0 da-mt-8 da-text-color-black-60">
              Your account has been evaluted and verified
            </p>

            <Alert banner="true" message="Account Verified " type="success" />

            <Col>
              <img
                alt="example"
                src={successImage}
                height={345}
                className="da-img-cover"
              />
            </Col>

            <p className="da-mt-sm-0 da-mt-16 da-text-color-black">
              Verification successful.Please
              <Link className="csm-ml-3" to="/auth/login">
                login!
              </Link>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
