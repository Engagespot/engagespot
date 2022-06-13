import { OrdersActionTypes } from './ordersTypes';

const INITIAL_STATE = {
  page: 1,
  items: [],
  loading: false,
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrdersActionTypes.ChangePgaeSuccess: {
      return {
        ...state,
        page: action.page,
        error: null,
      };
    }
    case OrdersActionTypes.Set: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case OrdersActionTypes.Update: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case OrdersActionTypes.Error: {
      state.error = { message: action.payload.message || action.payload.stack };
      return {
        ...state,
      };
    }
    case OrdersActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
