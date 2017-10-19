// typically named "index.js" -- client entry point
// start up location for the client application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import reducers from './reducers';
import Routes from './Routes';

/*
  using hydrate() vs render()
    -- done so since we already obtained initial html from server
      and are trying to update it again with react

  + browser router does not work on the server since it needs a DOM
*/

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Routes /> */}
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
