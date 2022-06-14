import { Checkbox, Col, Form, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { handlePromise } from '../../../helpers/helpers';
import {
  LoginSuccess,
  StoreUserEmail,
} from '../../../redux/reducers/auth/authActions';
import { SetLoading } from '../../../redux/reducers/loader/loaderReducerActions';
import {
  Invitations,
  Register as EngageSpotRegister,
} from '../../../services/auth.service';
import { Toaster } from '../../../services/toaster.service';
import { EMAIL_PATTERN } from '../../../services/utlis';
import { SubmintButton } from '../../components/custom/submitButtten';
import { SetClientId } from './../../../redux/reducers/additional-fetch/additionalFetchActions';
import LeftContent from './leftContent';
import TermsAndPrivacyPolicy from './termsAndPrivacyPolicy';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const search = useLocation().search;
  const invitationCode = new URLSearchParams(search).get('invitationCode');
  const [organisationInvitedTo, setOrganisationInvitedTo] = useState(null);

  useEffect(() => {
    const checkInvitations = async () => {
      if (invitationCode) {
        let [result, error] = await handlePromise(() =>
          Invitations(invitationCode)
        );
        if (error) return;

        const clientId = result.invitedTo.id;

        dispatch(SetClientId(clientId));
        setOrganisationInvitedTo(result);
      }
    };

    checkInvitations();
  }, [invitationCode, dispatch]);

  const onFinish = async values => {
    dispatch(SetLoading(true));
    let obj = {};

    if (organisationInvitedTo !== null) {
      obj['email'] = organisationInvitedTo.email;
      obj['invitationCode'] = organisationInvitedTo.code;
    } else {
      if (values.email.match(EMAIL_PATTERN)) obj['email'] = values.email;
    }

    obj.firstName = values.first_name;
    obj.password = values.password;
    obj.agree_tos = values.agree_tos === true ? 1 : 0;
    obj.marketing_optin = values.marketing_optin === true ? 1 : 0;

    let [result, error] = await handlePromise(() => EngageSpotRegister(obj));

    if (error) {
      return dispatch(SetLoading(false));
    }

    const access_token = result.token;
    localStorage.setItem('access_token', access_token);
    const toaster = new Toaster('success');
    toaster.title = 'Registration Success';

    toaster.message =
      organisationInvitedTo !== null
        ? `Successfully joined ${organisationInvitedTo.invitedTo.name} workspace`
        : 'Please verify email and continue';

    toaster.open();
    dispatch(StoreUserEmail(values.email));

    if (organisationInvitedTo !== null && access_token) {
      let payload = { authToken: access_token, user: 'authenticated' };
      dispatch(LoginSuccess(payload));

      history.push('/feed');
      return dispatch(SetLoading(false));
    }

    history.push('/auth/verify');
    dispatch(SetLoading(false));
  };

  const onFinishFailed = error => {
    //console.log(error);
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
            <h1 className="da-mb-sm-0">Create account</h1>

            {organisationInvitedTo !== null ? (
              <p className="da-mt-sm-0 da-mted-8 da-text-color-black-60">
                Enter your details to join
                <span className="csm-highlighted-text">
                  {' '}
                  {organisationInvitedTo.invitedTo.name}{' '}
                </span>{' '}
                workspace.
              </p>
            ) : (
              <p className="da-mt-sm-0 da-mt-8 da-text-color-black-60">
                Enter your details and start journey with us.
              </p>
            )}

            <Form
              layout="vertical"
              name="basic"
              initialValues={{ agree_tos: true, marketing_optin: true }}
              className="da-mt-sm-16 da-mt-32"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                className="da-mb-16"
                name="first_name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name',
                  },
                  {
                    validator: (_, value) => {
                      if (!value || value === '') return Promise.resolve();
                      if (value.length < 100) return Promise.resolve();
                      else
                        return Promise.reject(
                          new Error('Maximum charactor limit is 100')
                        );
                    },
                    message: 'Maximum charactor limit is 100',
                  },
                ]}
              >
                <Input id="auth-name" />
              </Form.Item>

              {organisationInvitedTo === null && (
                <Form.Item
                  label="Email"
                  className="da-mb-16"
                  name="email"
                  rules={[
                    {
                      required: organisationInvitedTo !== null ? false : true,
                      message: 'Please input your email',
                    },
                    {
                      validator: (_, value) => {
                        if (organisationInvitedTo !== null)
                          return Promise.resolve();
                        if (!value || value === '') return Promise.resolve();
                        else if (value.match(EMAIL_PATTERN))
                          return Promise.resolve();
                        else return Promise.reject(new Error('Invalid email'));
                      },
                      message: 'Invalid email',
                    },
                  ]}
                >
                  <Input id="auth-email" />
                </Form.Item>
              )}

              <Form.Item
                label="Password"
                className="da-mb-16"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password',
                  },
                  {
                    validator: (_, value) => {
                      if (!value || value === '') return Promise.resolve();
                      if (value.length < 25) return Promise.resolve();
                      else
                        return Promise.reject(
                          new Error('Maximum charactor limit is 25')
                        );
                    },
                    message: 'Maximum charactor limit is 25',
                  },
                ]}
              >
                <Input.Password id="auth-password" />
              </Form.Item>

              <Form.Item
                rules={[
                  {
                    required: true,
                    type: 'boolean',
                    transform: value => value || undefined,
                    message: 'Please accept terms and conditions',
                  },
                ]}
                className="da-mb-0"
                name="agree_tos"
                valuePropName="checked"
              >
                <Checkbox>
                  I accept
                  <a
                    className="login-form-forgot"
                    href="https://engagespot.co/terms"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' Terms and Conditions'}
                  </a>
                </Checkbox>
              </Form.Item>

              <Form.Item name="marketing_optin" valuePropName="checked">
                <Checkbox>
                  Opt-in for email newsletters and other marketing emails from
                  Engagespot
                </Checkbox>
              </Form.Item>

              <Form.Item className="da-mt-16 da-mb-8">
                <SubmintButton block type="primary" htmlType="submit">
                  Sign up
                </SubmintButton>
              </Form.Item>
            </Form>

            <Col className="da-form-info">
              <span className="da-text-color-black-80 da-text-color-dark-40 da-caption da-mr-4">
                Do you have an account?
              </span>

              <Link
                className="da-text-color-primary-1 da-text-color-dark-primary-2 da-caption"
                to="/auth/login"
              >
                Sign in
              </Link>
            </Col>

            <TermsAndPrivacyPolicy />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
