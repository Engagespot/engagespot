import { OrderDocsActionTypes } from './orderDocsTypes';

const INITIAL_STATE = {
  page: 1,
  items: [],
  loading: false,
  error: null,
  selected_order: {},
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderDocsActionTypes.ChangePgaeSuccess: {
      return {
        ...state,
        page: [action.page],
        error: null,
      };
    }
    case OrderDocsActionTypes.SelectedOrder: {
      return {
        ...state,
        selected_order: action.payload,
      };
    }
    case OrderDocsActionTypes.Set: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case OrderDocsActionTypes.Update: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case OrderDocsActionTypes.Error: {
      state.error = { message: action.payload.message || action.payload.stack };
      return {
        ...state,
      };
    }
    case OrderDocsActionTypes.ToggleLoader: {
      state.loading = action.payload.loading;
      return {
        ...state,
      };
    }
    case OrderDocsActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
