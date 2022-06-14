import { LogoutSuccess } from '../redux/reducers/auth/authActions';
import { ApiConfig } from './api.config';

export function setupAxios(axios, store) {
  const baseURL = ApiConfig.AUTH_API;
  axios.defaults.baseURL = baseURL;

  axios.interceptors.request.use(
    config => {
      const authToken = localStorage.getItem('access_token');
      if (authToken) {
        config.headers.Authorization = `bearer ${authToken}`;
      }
      return config;
    },
    err => Promise.reject(err)
  );
  axios.interceptors.response.use(
    res => {
      let response = res.data;
      return response;
    },
    err => {
      if (err.response) {
        if (120301 === err.response.status) {
          const retryOriginalRequest = new Promise((resolve, reject) => {
            const originalRequest = err.config;
            const newAuthToken = err.response.data.token;
            localStorage.setItem('access_token', newAuthToken);
            originalRequest.headers['Authorization'] = `bearer ${newAuthToken}`;
            resolve(axios(originalRequest));
          });

          return retryOriginalRequest;
        }
      }

      let errResponse = JSON.stringify(err.response);
      let error = new Error(errResponse);
      throw error;
    }
  );
}
