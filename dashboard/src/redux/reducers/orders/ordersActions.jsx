import { OrdersActionTypes } from './ordersTypes';

export const ProductChangePage = value => {
  return {
    type: OrdersActionTypes.ChangePgae,
    payload: { page: value },
  };
};
export const ProductChangePageSuccess = value => {
  return {
    type: OrdersActionTypes.ChangePgaeSuccess,
    payload: { page: value },
  };
};
export const ProductFetchSuccess = values => {
  return {
    type: OrdersActionTypes.Set,
    payload: values,
  };
};
export const ProductFetchError = values => {
  return {
    type: OrdersActionTypes.Error,
    payload: values,
  };
};
export const ProductUpdateSuccess = values => {
  return {
    type: OrdersActionTypes.Update,
    payload: values,
  };
};
export const ProductClearValues = value => {
  return {
    type: OrdersActionTypes.Clear,
  };
};
export const ProductToggleLoader = value => {
  return {
    type: OrdersActionTypes.ToggleLoader,
    payload: { loading: value },
  };
};
