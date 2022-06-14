import { CustomerTypeActionTypes } from './customerTypeTypes';

export const CustomerTypeFetchSuccess = values => {
  return {
    type: CustomerTypeActionTypes.Set,
    payload: values,
  };
};
export const CustomerTypeUpdateSuccess = values => {
  return {
    type: CustomerTypeActionTypes.Update,
    payload: values,
  };
};
export const CustomerTypeClearValues = value => {
  return {
    type: CustomerTypeActionTypes.Clear,
  };
};
