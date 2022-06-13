import axios from 'axios';

const AddImagesToServerAndGetUrl = data => {
  return axios.post(`/api/v1/files`, data);
};

export { AddImagesToServerAndGetUrl };
