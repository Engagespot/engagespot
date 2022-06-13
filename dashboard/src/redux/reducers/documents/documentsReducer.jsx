import { DocumentActionTypes } from './documentTypes';

const INITIAL_STATE = {
  page: 1,
  items: [],
  loading: false,
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DocumentActionTypes.ChangePgaeSuccess: {
      return {
        ...state,
        page: action.page,
        error: null,
      };
    }
    case DocumentActionTypes.Set: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case DocumentActionTypes.Update: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case DocumentActionTypes.Error: {
      state.error = { message: action.payload.message || action.payload.stack };
      return {
        ...state,
      };
    }
    case DocumentActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
