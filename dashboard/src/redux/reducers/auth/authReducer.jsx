import { authActionTypes } from './authTypes';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const INITIAL_STATE = {
  user: {},
  authToken: undefined,
  userEmail: '',
};

export const reducer = persistReducer(
  { storage, key: 'GROWCOMS-AU', whitelist: ['user', 'authToken'] },
  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case authActionTypes.Login: {
        const { authToken, user } = action.payload;
        return { authToken, user: user };
      }

      case authActionTypes.Register: {
        const { authToken } = action.payload;

        return { authToken, user: undefined };
      }

      case authActionTypes.StoreUserEmail: {
        return { ...state, userEmail: action.payload };
      }

      case authActionTypes.UserLoaded: {
        const { user } = action.payload;
        return { ...state, user };
      }

      default:
        return state;
    }
  }
);

export default reducer;
