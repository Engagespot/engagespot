import { LocationsActionTypes } from './locationsTypes';

const INITIAL_STATE = {
  page: 1,
  items: [],
  loading: false,
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LocationsActionTypes.ChangePgaeSuccess: {
      return {
        ...state,
        page: action.page,
        error: null,
      };
    }
    case LocationsActionTypes.Set: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case LocationsActionTypes.Update: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case LocationsActionTypes.Error: {
      state.error = { message: action.payload.message || action.payload.stack };
      return {
        ...state,
      };
    }
    case LocationsActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
