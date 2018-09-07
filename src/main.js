// @flow
import App, {
  ApolloClientToken,
  CustomThemeOptionsToken,
} from './plugins/fusion-apollo';
import ApolloClient, {
  ApolloClientEndpointToken
} from './plugins/apollo-client';

import React from 'react';
import Router, {
  Route, Switch 
}from 'fusion-plugin-react-router';

import I18n, {
  I18nToken,
  I18nLoaderToken,
  createI18nLoader,
} from 'fusion-plugin-i18n-react';

import {FetchToken} from 'fusion-tokens';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
import KoaHelmet from './plugins/koa-helmet';
import unfetch from 'unfetch';
import theme from './plugins/customTheme';
import Root from './root.js';
// https://github.com/ramda/ramda/issues/2322
import * as R from 'ramda';

const createApp = (Root) => (App) => {
  return new App(
    <Switch>
      <Route path="/" component={Root} />
    </Switch>
  );
}

const registerI18n = () => (app) => {
  app.register(I18nToken, I18n);
  __NODE__
    ? app.register(I18nLoaderToken, createI18nLoader())
    : app.register(FetchToken, unfetch);
  return app;
}

const registerKoaHelmet = () => (app) => {
  (__NODE__ && !__DEV__)  && app.register(KoaHelmet);
  return app;
}

const registerFetch = () => (app) => {
  __NODE__ && app.register(FetchToken, unfetch);
  __BROWSER__ && app.register(FetchToken, window.fetch);
  return app;
}

const registerTheme = (theme) => (app) => {
  app.register(CustomThemeOptionsToken, theme);
  return app;
}

const registerRouter = () => (app) => {
  app.register(Router);
  return app;
}

const registerApolloClient = (
    endpoint = 'https://kms1.herokuapp.com/v1alpha1/graphql'
  ) => (app) => {
    app.register(ApolloClientToken, ApolloClient);
    app.register(ApolloClientEndpointToken, endpoint);
    return app;
  }

const registerHelmet = () => (app) => {
  app.register(HelmetPlugin);
  return app;
}


const plugins = [
  registerTheme(theme),
  registerHelmet(),
  registerApolloClient(),
  registerRouter(),
  registerFetch()
]

const registerPlugins_ = (compose) => (app) => (plugins) => () =>
  compose(
    ...plugins
  )(app);
const registerPlugins = (app, plugins) => {
  return registerPlugins_(R.compose)(app)(plugins);
}

export default registerPlugins(createApp(Root)(App), plugins);