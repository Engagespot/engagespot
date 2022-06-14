import { FeedActionTypes } from './feedTypes';

export const FeedChangePage = value => {
  return {
    type: FeedActionTypes.ChangePgae,
    payload: value,
  };
};

export const FeedChangePageSuccess = value => {
  return {
    type: FeedActionTypes.ChangePgaeSuccess,
    payload: { page: value },
  };
};
export const FeedFetchSuccess = values => {
  return {
    type: FeedActionTypes.Set,
    payload: values,
  };
};
export const FeedFetchError = values => {
  return {
    type: FeedActionTypes.Error,
    payload: values,
  };
};
export const FeedUpdateSuccess = values => {
  return {
    type: FeedActionTypes.Update,
    payload: values,
  };
};
export const FeedClearValues = value => {
  return {
    type: FeedActionTypes.Clear,
  };
};
export const FeedToggleLoader = value => {
  return {
    type: FeedActionTypes.ToggleLoader,
    payload: { loading: value },
  };
};
