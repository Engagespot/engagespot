import { LoaderActionTypes } from './loaderReducerActions';

const INITIAL_STATE = false;

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoaderActionTypes.Set: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
