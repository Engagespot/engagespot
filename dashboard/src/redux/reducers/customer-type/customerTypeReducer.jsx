import { CustomerTypeActionTypes } from './customerTypeTypes';

const INITIAL_STATE = [];

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CustomerTypeActionTypes.Set: {
      return action.payload;
    }
    case CustomerTypeActionTypes.Update: {
      return action.payload;
    }
    case CustomerTypeActionTypes.Clear: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;
