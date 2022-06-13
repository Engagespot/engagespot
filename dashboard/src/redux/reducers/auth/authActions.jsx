import { authActionTypes } from './authTypes';

export const LoginSuccess = value => {
  return {
    type: authActionTypes.Login,
    payload: value,
  };
};
export const LogoutSuccess = value => {
  return {
    type: authActionTypes.Logout,
    payload: value,
  };
};
export const Register = value => {
  return {
    type: authActionTypes.Register,
    payload: value,
  };
};
export const StoreUserEmail = value => {
  return {
    type: authActionTypes.StoreUserEmail,
    payload: value,
  };
};
