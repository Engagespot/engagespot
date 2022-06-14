import React, { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './assets/icons/remixicon.css';
import './assets/less/yoda-theme.less';
import {
  SplashScreenProvider,
  LayoutSplashScreen,
} from './layout/splashScreen';
import App from './App';
import { setupAxios } from './services/setupAxios';
setupAxios(axios, store);

ReactDOM.render(
  <Suspense fallback="loading">
    <SplashScreenProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </SplashScreenProvider>
  </Suspense>,
  document.getElementById('root')
);
