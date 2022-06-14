import { UsersActionTypes } from './usersTypes';

const INITIAL_STATE = {
  page: 1,
  items: {},
  loading: false,
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.ChangePgaeSuccess: {
      return {
        ...state,
        page: action.page,
        error: null,
      };
    }
    case UsersActionTypes.Set: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case UsersActionTypes.Update: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case UsersActionTypes.Error: {
      state.error = { message: action.payload.message || action.payload.stack };
      return {
        ...state,
      };
    }
    case UsersActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
