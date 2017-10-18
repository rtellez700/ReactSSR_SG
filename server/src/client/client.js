// typically named "index.js" -- client entry point
// start up location for the client application

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

/*
  using hydrate() vs render()
    -- done so since we already obtained initial html from server
      and are trying to update it again with react
*/
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
