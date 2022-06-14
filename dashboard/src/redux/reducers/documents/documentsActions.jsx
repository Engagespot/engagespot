import { DocumentActionTypes } from './documentTypes';

export const ProductChangePage = value => {
  return {
    type: DocumentActionTypes.ChangePgae,
    payload: { page: value },
  };
};
export const ProductChangePageSuccess = value => {
  return {
    type: DocumentActionTypes.ChangePgaeSuccess,
    payload: { page: value },
  };
};
export const ProductFetchSuccess = values => {
  return {
    type: DocumentActionTypes.Set,
    payload: values,
  };
};
export const ProductFetchError = values => {
  return {
    type: DocumentActionTypes.Error,
    payload: values,
  };
};
export const ProductUpdateSuccess = values => {
  return {
    type: DocumentActionTypes.Update,
    payload: values,
  };
};
export const ProductClearValues = value => {
  return {
    type: DocumentActionTypes.Clear,
  };
};
export const ProductToggleLoader = value => {
  return {
    type: DocumentActionTypes.ToggleLoader,
    payload: { loading: value },
  };
};
