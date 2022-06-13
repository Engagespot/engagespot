import axios from 'axios';

const Login = data => {
  return axios.post('/api/v1/auth', data);
};
const Register = data => {
  return axios.post('/api/v1/auth/signup', data);
};
const LoginWithGithub = data => {
  return axios.post('/api/v1/auth/github', data);
};
const Invitations = invitationCode => {
  return axios.get(`/api/v1/invitations/${invitationCode}`);
};
const ResendVerficationEmail = data => {
  return axios.post(`/api/v1/auth/resendVerificationEmail`, data);
};
const VerifyAccount = verificationCode => {
  return axios.post(`/api/v1/auth/verify/${verificationCode}`, {});
};
const PasswordResetRequest = data => {
  return axios.post(`/api/v1/auth/passwordResetRequests`, data);
};
const PasswordReset = data => {
  return axios.post(`/api/v1/auth/resetPassword`, data);
};

export {
  Login,
  Register,
  LoginWithGithub,
  Invitations,
  ResendVerficationEmail,
  VerifyAccount,
  PasswordResetRequest,
  PasswordReset,
};
