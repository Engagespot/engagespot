import { UniversityServiceActionTypes } from './servicesTypes';

export const ServiceChangePage = value => {
  return {
    type: UniversityServiceActionTypes.ChangePgae,
    payload: { page: value },
  };
};

export const ServiceStoreUniversity = value => {
  return {
    type: UniversityServiceActionTypes.StoreUniversity,
    payload: value,
  };
};

export const ServiceChangePageSuccess = value => {
  return {
    type: UniversityServiceActionTypes.ChangePgaeSuccess,
    payload: { page: value },
  };
};
export const ServiceFetchSuccess = values => {
  return {
    type: UniversityServiceActionTypes.Set,
    payload: values,
  };
};
export const ServiceFetchError = values => {
  return {
    type: UniversityServiceActionTypes.Error,
    payload: values,
  };
};
export const ServiceUpdateSuccess = values => {
  return {
    type: UniversityServiceActionTypes.Update,
    payload: values,
  };
};
export const ServiceClearValues = value => {
  return {
    type: UniversityServiceActionTypes.Clear,
  };
};
export const ServiceToggleLoader = value => {
  return {
    type: UniversityServiceActionTypes.ToggleLoader,
    payload: { loading: value },
  };
};
