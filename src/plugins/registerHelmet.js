import HelmetPlugin from 'fusion-plugin-react-helmet-async';

const registerHelmet = () => (app) => {
  app.register(HelmetPlugin);
  return app;
}

export default registerHelmet;