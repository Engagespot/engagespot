import { ListAppConfig } from '../../services/feed.service';
import {
  FeedChangePageSuccess,
  FeedFetchError,
  FeedFetchSuccess,
  FeedToggleLoader,
} from '../reducers/feed/feedActions';
import { FeedActionTypes } from '../reducers/feed/feedTypes';

export const FeedMiddleWare =
  ({ dispatch }) =>
  next =>
  async action => {
    switch (action.type) {
      case FeedActionTypes.ChangePgae: {
        dispatch(FeedChangePageSuccess(action.payload));
        dispatch(FeedToggleLoader(true));
        ListAppConfig(action.payload)
          .then(_response => {
            dispatch(FeedToggleLoader(false));
            dispatch(FeedFetchSuccess(_response));
          })
          .catch(err => {
            dispatch(FeedToggleLoader(false));
            dispatch(FeedFetchError(err));
          });
        return;
      }

      default:
        break;
    }

    next(action);
  };

export default FeedMiddleWare;
