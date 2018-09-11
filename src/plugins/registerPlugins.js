import * as R from 'ramda';
// https://github.com/ramda/ramda/issues/2322
const registerPlugins_ = (compose) => (app) => (plugins) => () =>
  compose(
    ...plugins
  )(app);

export default (app, plugins) => {
  return registerPlugins_(R.compose)(app)(plugins);
};
