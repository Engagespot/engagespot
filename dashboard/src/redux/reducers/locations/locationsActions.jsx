import { LocationsActionTypes } from './locationsTypes';

export const ProductChangePage = value => {
  return {
    type: LocationsActionTypes.ChangePgae,
    payload: { page: value },
  };
};
export const ProductChangePageSuccess = value => {
  return {
    type: LocationsActionTypes.ChangePgaeSuccess,
    payload: { page: value },
  };
};
export const ProductFetchSuccess = values => {
  return {
    type: LocationsActionTypes.Set,
    payload: values,
  };
};
export const ProductFetchError = values => {
  return {
    type: LocationsActionTypes.Error,
    payload: values,
  };
};
export const ProductUpdateSuccess = values => {
  return {
    type: LocationsActionTypes.Update,
    payload: values,
  };
};
export const ProductClearValues = value => {
  return {
    type: LocationsActionTypes.Clear,
  };
};
export const ProductToggleLoader = value => {
  return {
    type: LocationsActionTypes.ToggleLoader,
    payload: { loading: value },
  };
};
