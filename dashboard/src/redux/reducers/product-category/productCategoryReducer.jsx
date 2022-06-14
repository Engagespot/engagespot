import { AdditionalFetchActionTypes } from './additionalFetchTypes';

const INITIAL_STATE = {
  languages: [],
  services: [],
  documents: [],
  order_status: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdditionalFetchActionTypes.SetUniversityLanguages: {
      return { ...state, languages: action.payload };
    }
    case AdditionalFetchActionTypes.SetUniversityServices: {
      return { ...state, services: action.payload };
    }
    case AdditionalFetchActionTypes.SetServicesDocuments: {
      return { ...state, documents: action.payload };
    }
    case AdditionalFetchActionTypes.SetOrderStatus: {
      return { ...state, order_status: action.payload };
    }
    case AdditionalFetchActionTypes.Update: {
      return action.payload;
    }
    case AdditionalFetchActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
