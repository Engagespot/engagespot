import { UniversityActionTypes } from './universityTypes';

const INITIAL_STATE = {
  page: 1,
  items: [],
  loading: false,
  error: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UniversityActionTypes.ChangePgaeSuccess: {
      return {
        ...state,
        page: action.page,
        error: null,
      };
    }
    case UniversityActionTypes.Set: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case UniversityActionTypes.Update: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case UniversityActionTypes.Error: {
      state.error = { message: action.payload.message || action.payload.stack };
      return {
        ...state,
      };
    }
    case UniversityActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
