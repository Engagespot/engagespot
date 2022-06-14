import axios from 'axios';

const EnableWebPush = (appId, data) => {
  return axios.put(`/api/v1/apps/${appId}`, data);
};

const changePassword = (clientId, data) => {
  return axios.put(`/api/v1/clientUsers/${clientId}/password`, data);
};

const ListUserDetails = () => {
  return axios.get(`/api/v1/auth/me`);
};

const ProfileUpdate = (clientId, data) => {
  return axios.patch(`/api/v1/clientUsers/${clientId}`, data);
};

export { EnableWebPush, changePassword, ListUserDetails, ProfileUpdate };
