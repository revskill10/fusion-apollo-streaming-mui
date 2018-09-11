import {FetchToken} from 'fusion-tokens';
import fetch from 'unfetch';

const registerFetch = () => (app) => {
  __NODE__ && app.register(FetchToken, fetch);
  __BROWSER__ && app.register(FetchToken, window.fetch);
  return app;
};

export default registerFetch;
