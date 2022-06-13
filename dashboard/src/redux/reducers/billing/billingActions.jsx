import { BillingActionTypes } from './billingTypes';

export const BillingChangePage = value => {
  return {
    type: BillingActionTypes.ChangePgae,
    payload: { user_type: value },
  };
};
export const BillingChangePageSuccess = value => {
  return {
    type: BillingActionTypes.ChangePgaeSuccess,
    payload: { user_type: value },
  };
};
export const BillingFetchPlansSuccess = values => {
  return {
    type: BillingActionTypes.ChangePlansSuccess,
    payload: values,
  };
};
export const BillingFetchInvoicesSuccess = values => {
  return {
    type: BillingActionTypes.ChangeInvoicesSuccess,
    payload: values,
  };
};
export const BillingFetchPaymentDetailsSuccess = values => {
  return {
    type: BillingActionTypes.ChangePaymentDetailsSuccess,
    payload: values,
  };
};
export const BillingFetchError = values => {
  return {
    type: BillingActionTypes.Error,
    payload: values,
  };
};
export const BillingUpdateSuccess = values => {
  return {
    type: BillingActionTypes.Update,
    payload: values,
  };
};
export const BillingClearValues = value => {
  return {
    type: BillingActionTypes.Clear,
  };
};
export const BillingToggleLoader = value => {
  return {
    type: BillingActionTypes.ToggleLoader,
    payload: { loading: value },
  };
};
