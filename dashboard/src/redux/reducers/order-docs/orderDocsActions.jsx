import { OrderDocsActionTypes } from './orderDocsTypes';

export const ServiceChangePage = value => {
  return {
    type: OrderDocsActionTypes.ChangePgae,
    payload: { page: value },
  };
};

export const SelectedOrder = value => {
  return {
    type: OrderDocsActionTypes.SelectedOrder,
    payload: value,
  };
};

export const ServiceChangePageSuccess = value => {
  return {
    type: OrderDocsActionTypes.ChangePgaeSuccess,
    payload: { page: value },
  };
};
export const ServiceFetchSuccess = values => {
  return {
    type: OrderDocsActionTypes.Set,
    payload: values,
  };
};
export const ServiceFetchError = values => {
  return {
    type: OrderDocsActionTypes.Error,
    payload: values,
  };
};
export const ServiceUpdateSuccess = values => {
  return {
    type: OrderDocsActionTypes.Update,
    payload: values,
  };
};
export const ServiceClearValues = value => {
  return {
    type: OrderDocsActionTypes.Clear,
  };
};
export const ServiceToggleLoader = value => {
  return {
    type: OrderDocsActionTypes.ToggleLoader,
    payload: { loading: value },
  };
};
