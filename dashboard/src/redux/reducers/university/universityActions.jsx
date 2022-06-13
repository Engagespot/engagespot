import { UniversityActionTypes } from './universityTypes';

export const ProductChangePage = value => {
  return {
    type: UniversityActionTypes.ChangePgae,
    payload: { page: value },
  };
};
export const ProductChangePageSuccess = value => {
  return {
    type: UniversityActionTypes.ChangePgaeSuccess,
    payload: { page: value },
  };
};
export const ProductFetchSuccess = values => {
  return {
    type: UniversityActionTypes.Set,
    payload: values,
  };
};
export const ProductFetchError = values => {
  return {
    type: UniversityActionTypes.Error,
    payload: values,
  };
};
export const ProductUpdateSuccess = values => {
  return {
    type: UniversityActionTypes.Update,
    payload: values,
  };
};
export const ProductClearValues = value => {
  return {
    type: UniversityActionTypes.Clear,
  };
};
export const ProductToggleLoader = value => {
  return {
    type: UniversityActionTypes.ToggleLoader,
    payload: { loading: value },
  };
};
