import { Button, Col, Form, Input, Modal, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  handlePromise,
  handleResendVerificationEmail,
} from '../../../helpers/helpers';
import { SetLoading } from '../../../redux/reducers/loader/loaderReducerActions';
import {
  Login as EngageSpotLogin,
  LoginWithGithub,
} from '../../../services/auth.service';
import { EMAIL_PATTERN, MOBILE_PATTERN } from '../../../services/utlis';
import { SubmintButton } from '../../components/custom/submitButtten';
import { LoginSuccess } from './../../../redux/reducers/auth/authActions';
import LeftContent from './leftContent';
import { RiGithubFill } from 'react-icons/ri';
import TermsAndPrivacyPolicy from './termsAndPrivacyPolicy';

export default function Login() {
  let history = useHistory();
  const githubClientId = import.meta.env.VITE_REACT_APP_GITHUB_APP_CLIENT_ID;
  const githubRedirectUrl = import.meta.env
    .VITE_REACT_APP_GITHUB_APP_REDIRECT_URL;
  const search = useLocation().search;
  const githubCode = new URLSearchParams(search).get('code');
  const dispatch = useDispatch();
  const ramdomString = (Math.random() + 1).toString(36).substring(7) + 'rdm';
  const [githubLoading, setGithubLoading] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [verificationModalVisible, setVerficationModalVisible] =
    useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if any error and user revisits everything should be reset
    localStorage.clear();
  }, []);

  useEffect(() => {
    const githubLogin = async () => {
      if (!githubCode) return;
      setGithubLoading(true);

      const data = {
        code: githubCode,
      };

      let [result, error] = await handlePromise(() => LoginWithGithub(data));
      if (error) return;

      const access_token = result.token;
      localStorage.setItem('access_token', access_token);

      let payload = { authToken: access_token, user: 'authenticated' };
      dispatch(LoginSuccess(payload));
      history.push('/feed');
      setGithubLoading(false);
    };

    githubLogin();
  }, [githubCode, dispatch, history]);

  const onFinish = async values => {
    dispatch(SetLoading(true));
    let obj = {};
    if (values.email.match(EMAIL_PATTERN)) obj['email'] = values.email;
    if (values.email.length > 4) obj['password'] = values.password;

    let [result, error] = await handlePromise(() => EngageSpotLogin(obj));

    if (error) {
      let _error = JSON.parse(error.message);

      if (_error.status === 403) {
        if (values.email.match(EMAIL_PATTERN)) setSelectedEmail(values.email);
        setVerficationModalVisible(true);
      }

      return dispatch(SetLoading(false));
    }

    const access_token = result.token;
    localStorage.setItem('access_token', access_token);

    let payload = { authToken: access_token, user: 'authenticated' };
    dispatch(LoginSuccess(payload));
    history.push('/feed');
    dispatch(SetLoading(false));
  };

  const onFinishFailed = error => {
    //console.log(error);
  };

  const verificationModalClose = () => {
    setVerficationModalVisible(false);
  };

  const handleResend = () => {
    handleResendVerificationEmail({
      setLoading,
      loading,
      email: selectedEmail,
    });

    verificationModalClose();
  };

  return (
    <>
      <Modal
        title={'Email Not Verified'}
        width={370}
        centered
        visible={verificationModalVisible}
        onCancel={verificationModalClose}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form
          onFinish={handleResend}
          layout="vertical"
          name="basic"
          initialValues={{}}
        >
          <p className="csm-word-break-all">
            Your email is not verified. Please verify your email. Click here to{' '}
            <button
              type="submit"
              className="csm-a-link button-reset-all-styles"
            >
              resend verification mail
            </button>
          </p>
        </Form>
      </Modal>

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
              <h1 className="da-mb-sm-0">Login</h1>
              <p className="da-mt-sm-0 da-mt-8 da-text-color-black-60">
                Welcome back, please login to your account.
              </p>
              <Form
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
                className="da-mt-sm-16 da-mt-32"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  className="da-mb-16"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email',
                    },
                    ({ getFieldValue }) => ({
                      validator: (_, value) => {
                        if (!value || value === '') return Promise.resolve();

                        if (value.match(MOBILE_PATTERN))
                          return Promise.resolve();
                        else if (value.match(EMAIL_PATTERN))
                          return Promise.resolve();
                        else return Promise.reject(new Error('Invalid email'));
                      },
                      message: 'Invalid email',
                    }),
                  ]}
                >
                  <Input id="auth-email" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  className="da-mb-8"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password id="auth-password" />
                </Form.Item>

                <Col
                  span={24}
                  className="csm-forgot da-text-color-primary-1 da-text-color-dark-primary-2 da-caption"
                >
                  <Link to="/auth/forgot-password">Forgot Password ?</Link>{' '}
                </Col>

                <Form.Item className="da-mt-8 da-mb-8">
                  <SubmintButton block type="primary" htmlType="submit">
                    Login
                  </SubmintButton>
                </Form.Item>
              </Form>

              <Col className="da-form-info">
                <span className="da-text-color-black-80 da-text-color-dark-40 da-caption da-mr-4">
                  Don’t have an account?
                </span>

                <Link
                  className="da-text-color-primary-1 da-text-color-dark-primary-2 da-caption"
                  to="/auth/register"
                >
                  Create an account
                </Link>
              </Col>

              <Button
                disabled={githubLoading}
                className={'csm-github-login'}
                block
                htmlType="submit"
              >
                <a
                  href={`https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${githubRedirectUrl}&scope=user:email&state=${ramdomString}`}
                >
                  {githubLoading ? (
                    <Spin />
                  ) : (
                    <span className="csm-github-login-btn">
                      <RiGithubFill size={20} className="csm-mr-10" />
                      Login with Github
                    </span>
                  )}
                </a>
              </Button>

              <TermsAndPrivacyPolicy />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
