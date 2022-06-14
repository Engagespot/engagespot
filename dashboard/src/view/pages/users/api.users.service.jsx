import axios from 'axios';
import { ApiConfig } from '../../../services/api.config';

const baseURL = ApiConfig.COMMON_API;

export const UpdateAccountStatus = (data, id) => {
  let url = baseURL + `/api/users/${id}/change-status`;
  return axios.post(url, data);
};

export const DeleteUser = id => {
  let url = baseURL + '/api/users/' + id;
  return axios.delete(url, {});
};

export const ListUsers = (user_type_id = null) => {
  let url = baseURL + `/api/users`;
  let params = {
    user_type_id,
  };

  return axios.get(url, { params });
};

export const ListUsersTypes = () => {
  let url = baseURL + `/api/usertypes`;
  return axios.get(url);
};
