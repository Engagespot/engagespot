import { combineReducers } from 'redux';

import customiseReducer from './reducers/customise/customiseReducer';
import authReducer from './reducers/auth/authReducer';
import coustomerTypeReducer from './reducers/customer-type/customerTypeReducer';
import additionalFetchReducer from './reducers/additional-fetch/additionalFetchReducer';
import loaderReducer from './reducers/loader/loaderReducer';
import universityReducer from './reducers/university/universityReducer';
import documentReducer from './reducers/documents/documentsReducer';
import locationsReducer from './reducers/locations/locationsReducer';
import feedReducer from './reducers/feed/feedReducer';
import usersReducer from './reducers/users/usersReducer';
import ordersReducer from './reducers/orders/ordersReducer';
import billingReducer from './reducers/billing/billingReducer';
import university_serviceReducer from './reducers/uni-services/serviceReducer';
import order_docsReducer from './reducers/order-docs/orderDocsReducer';
import { authActionTypes } from './reducers/auth/authTypes';

const appReducer = combineReducers({
  customise: customiseReducer,
  auth: authReducer,
  coustomerTypes: coustomerTypeReducer,
  apiLoader: loaderReducer,
  additionalFetch: additionalFetchReducer,
  university: universityReducer,
  documents: documentReducer,
  university_services: university_serviceReducer,
  order_docs: order_docsReducer,
  locations: locationsReducer,
  orders: ordersReducer,
  users: usersReducer,
  feed: feedReducer,
  billing: billingReducer,
});

const rootReducer = (state, action) => {
  if (action.type === authActionTypes.Logout) {
    localStorage.clear();
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
