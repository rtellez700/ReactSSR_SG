import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './components/Header';
import { fetchCurrentUser } from './actions';

// react-router-config returns route as a prop
const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
