import App from './plugins/fusion-apollo';
import Root from './root.js';

import React from 'react';
import {
  Route, 
  Switch,
} from 'fusion-plugin-react-router';


const createApp = (Root) => (App) => {
  return new App(
    <Switch>
      <Route path="/" component={Root} />
    </Switch>
  );
}

export const app = createApp(Root)(App);

export {reducer} from './redux/index.js';

export {initialState} from './redux/initialState';
export {handlers} from './rpc/index.js';
