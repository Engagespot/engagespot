import { BillingActionTypes } from './billingTypes';

const INITIAL_STATE = {
  page: 1,
  plans: [],
  invoices: [],
  paymentDetails: {},
  loading: false,
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BillingActionTypes.ChangePgaeSuccess: {
      return {
        ...state,
        page: action.page,
        error: null,
      };
    }
    case BillingActionTypes.ChangePlansSuccess: {
      return {
        ...state,
        plans: action.payload,
        error: null,
      };
    }
    case BillingActionTypes.ChangeInvoicesSuccess: {
      return {
        ...state,
        invoices: action.payload,
        error: null,
      };
    }
    case BillingActionTypes.ChangePaymentDetailsSuccess: {
      return {
        ...state,
        paymentDetails: action.payload,
        error: null,
      };
    }
    case BillingActionTypes.Update: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case BillingActionTypes.Error: {
      state.error = { message: action.payload.message || action.payload.stack };
      return {
        ...state,
      };
    }
    case BillingActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
