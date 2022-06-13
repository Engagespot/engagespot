import { UsersActionTypes } from './usersTypes';

export const UsersChangePage = value => {
  return {
    type: UsersActionTypes.ChangePgae,
    payload: { user_type: value },
  };
};
export const UsersChangePageSuccess = value => {
  return {
    type: UsersActionTypes.ChangePgaeSuccess,
    payload: { user_type: value },
  };
};
export const UsersFetchSuccess = values => {
  return {
    type: UsersActionTypes.Set,
    payload: values,
  };
};
export const UsersFetchError = values => {
  return {
    type: UsersActionTypes.Error,
    payload: values,
  };
};
export const UsersUpdateSuccess = values => {
  return {
    type: UsersActionTypes.Update,
    payload: values,
  };
};
export const UsersClearValues = value => {
  return {
    type: UsersActionTypes.Clear,
  };
};
export const UsersToggleLoader = value => {
  return {
    type: UsersActionTypes.ToggleLoader,
    payload: { loading: value },
  };
};
