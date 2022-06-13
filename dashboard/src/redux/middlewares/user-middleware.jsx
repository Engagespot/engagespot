import { ListUserDetails } from '../../services/profile.service';
import {
  UsersChangePageSuccess,
  UsersFetchError,
  UsersFetchSuccess,
  UsersToggleLoader,
} from '../reducers/users/usersActions';
import { UsersActionTypes } from '../reducers/users/usersTypes';

export const UsersMiddleWare =
  ({ dispatch }) =>
  next =>
  async action => {
    switch (action.type) {
      case UsersActionTypes.ChangePgae: {
        dispatch(UsersChangePageSuccess(action.payload));
        dispatch(UsersToggleLoader(true));
        ListUserDetails()
          .then(_response => {
            dispatch(UsersToggleLoader(false));
            dispatch(UsersFetchSuccess(_response));
          })
          .catch(err => {
            dispatch(UsersToggleLoader(false));
            dispatch(UsersFetchError(err));
          });
        return;
      }

      default:
        break;
    }

    next(action);
  };

export default UsersMiddleWare;
