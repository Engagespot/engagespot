import { AdditionalFetchActionTypes } from './productCategoryTypes';

export const ProductCategoryFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.Set,
    payload: values,
  };
};

export const UniversityLanguagesFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetUniversityLanguages,
    payload: values,
  };
};

export const OrderStatusFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetOrderStatus,
    payload: values,
  };
};

export const UniversityServicesFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetUniversityServices,
    payload: values,
  };
};

export const ServicesDocumentsFetchSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.SetServicesDocuments,
    payload: values,
  };
};

export const ProductCategoryUpdateSuccess = values => {
  return {
    type: AdditionalFetchActionTypes.Update,
    payload: values,
  };
};

export const ProductCategoryClearValues = value => {
  return {
    type: AdditionalFetchActionTypes.Clear,
  };
};
