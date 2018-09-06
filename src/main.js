// @flow
import App, {
  ApolloClientToken,
  CustomThemeOptionsToken,
} from './plugins/fusion-apollo';
import React from 'react';
import Router, {
  Route, Switch 
}from 'fusion-plugin-react-router';
import Root from './root.js';
import {FetchToken} from 'fusion-tokens';

import ApolloClient, {
  ApolloClientEndpointToken
} from 'fusion-apollo-universal-client';

import unfetch from 'unfetch';

import theme from './plugins/customTheme';

export default () => {
  const Wrapped = (
    <Switch>
      <Route path="/" component={Root} />
    </Switch>
  )
  const app = new App(Wrapped);
  app.register(CustomThemeOptionsToken, theme);
  app.register(Router);
  app.register(ApolloClientToken, ApolloClient);
  app.register(ApolloClientEndpointToken, 'https://kms1.herokuapp.com/v1alpha1/graphql');
  __NODE__ && app.register(FetchToken, unfetch);
  __BROWSER__ && app.register(FetchToken, window.fetch);
  
  return app;
};
