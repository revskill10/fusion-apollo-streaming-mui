import Router from 'fusion-plugin-react-router';

const registerRouter = () => (app) => {
  app.register(Router);
  return app;
}

export default registerRouter;