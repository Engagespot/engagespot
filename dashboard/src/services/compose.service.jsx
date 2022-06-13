import axios from 'axios';

const ListRecipients = (appId, identifier) => {
  return axios.get(`/api/v1/apps/${appId}/users?identifier=${identifier}`);
};

const ComposeNotification = (appId, data) => {
  return axios.post(`/api/v1/apps/${appId}/notifications`, data);
};

export { ListRecipients, ComposeNotification };
