import KoaHelmet from './koa-helmet';

const registerKoaHelmet = () => (app) => {
  (__NODE__ && !__DEV__)  && app.register(KoaHelmet);
  return app;
}

export default registerKoaHelmet;
