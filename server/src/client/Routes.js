import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';

/*
    Since using react-router config to help with SSR,
      we can no longer use the following standard structure
      for formatting routes. Instead need to define as an array of objects

      i.e.,

      <div>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UsersList} />
      </div>

      destructuring pages' component allows for each component to have
        their own loadData function
*/

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
