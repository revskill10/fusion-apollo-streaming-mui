// @flow
import registerPlugins from './plugins/registerPlugins.js';
import registerApolloClient from './plugins/registerApolloClient.js';
import registerRouter from './plugins/registerRouter.js';
import registerStreaming from './plugins/registerStreaming.js';
import registerHelmet from './plugins/registerHelmet.js';
import registerTheme from './plugins/registerTheme.js';
import registerFetch from './plugins/registerFetch.js';
import registerRedux from './plugins/registerRedux.js';
import registerI18n from './plugins/registerI18n.js';
import {app, initialState, reducer, handlers} from './app.js';

const plugins = [
  registerI18n(),
  registerRedux(initialState, reducer, handlers),
  registerStreaming(),
  registerTheme(),
  registerHelmet(),
  registerApolloClient(),
  registerRouter(),
  registerFetch(),
]

export default registerPlugins(app, plugins);
