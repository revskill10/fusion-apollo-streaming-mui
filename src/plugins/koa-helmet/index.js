import {createPlugin} from 'fusion-core'

export default () => createPlugin({
    middleware: () => {
      const helmet = require('koa-helmet')();
      return async (ctx, next) => {
        await helmet(ctx, () => Promise.resolve());
        await next();
      }
    }
  });
