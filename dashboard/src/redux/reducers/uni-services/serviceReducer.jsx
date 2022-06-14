import { UniversityServiceActionTypes } from './servicesTypes';

const INITIAL_STATE = {
  page: 1,
  items: [],
  loading: false,
  error: null,
  university: {},
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UniversityServiceActionTypes.ChangePgaeSuccess: {
      return {
        ...state,
        page: [action.page],
        error: null,
      };
    }
    case UniversityServiceActionTypes.StoreUniversity: {
      return {
        ...state,
        university: action.payload,
      };
    }
    case UniversityServiceActionTypes.Set: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case UniversityServiceActionTypes.Update: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case UniversityServiceActionTypes.Error: {
      state.error = { message: action.payload.message || action.payload.stack };
      return {
        ...state,
      };
    }
    case UniversityServiceActionTypes.ToggleLoader: {
      state.loading = action.payload.loading;
      return {
        ...state,
      };
    }
    case UniversityServiceActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
