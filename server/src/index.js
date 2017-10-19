import 'babel-polyfill'; // will define some helper function so that we can use async await
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);

// treat public directly as a public dir
app.use(express.static('public'));

// catch all and let react-router handle routing
app.get('*', (req, res) => {
  // pass in req -- will include cookie as well
  const store = createStore(req);

  // figure out what components would have rendered (based on URL)
  // will return components that are about to render
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    // Call a 'loadData' method attached to each of those components
    // then, pass store to loadData()
    return route.loadData ? route.loadData(store) : null;
  });

  // detect if promises have been resolved?
  Promise.all(promises).then(() => {
    // now sending store full of data from api to the user
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
