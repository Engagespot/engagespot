import { FeedActionTypes } from './feedTypes';

const INITIAL_STATE = {
  page: 1,
  data: {},
  loading: false,
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FeedActionTypes.ChangePgaeSuccess: {
      return {
        ...state,
        page: action.page,
        error: null,
      };
    }
    case FeedActionTypes.Set: {
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    }
    case FeedActionTypes.Update: {
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    }
    case FeedActionTypes.Error: {
      state.error = { message: action.payload.message || action.payload.stack };
      return {
        ...state,
      };
    }
    case FeedActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
