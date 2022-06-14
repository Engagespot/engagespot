import axios from 'axios';

const ListAllApps = clientId => {
  return axios.get(`/api/v1/clients/${clientId}/apps`);
};
const ListAllClients = () => {
  return axios.get('/api/v1/clients');
};
const ListAppConfig = appId => {
  return axios.get(`/api/v1/apps/${appId}`);
};
const AddApps = (clientId, data) => {
  return axios.post(`/api/v1/clients/${clientId}/apps`, data);
};
const TokenAuthentication = (appId, data) => {
  return axios.put(`/api/v1/apps/${appId}`, data);
};
const ListUserApps = () => {
  return axios.get(`/api/v1/apps`);
};

export {
  ListAllApps,
  ListAppConfig,
  AddApps,
  TokenAuthentication,
  ListUserApps,
  ListAllClients,
};
