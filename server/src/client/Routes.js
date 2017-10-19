import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';
/*
    Since using react-router config to help with SSR,
      we can no longer use the following standard structure
      for formatting routes. Instead need to define as an array of objects

      i.e.,

      <div>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UsersList} />
      </div>
*/

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData: loadData,
    path: '/users',
    component: UsersList
  }
];
