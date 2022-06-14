import { applyMiddleware, compose, createStore } from 'redux';
import createDebounce from 'redux-debounced';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import FeedMiddleware from './middlewares/feed-middleware';
import UsersMiddleware from './middlewares/user-middleware';
import rootReducer from './rootReducer';

const middleware = [thunk, createDebounce(), FeedMiddleware, UsersMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);

export default store;
