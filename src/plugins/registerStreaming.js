import {StreamingToken} from 'fusion-core';

const registerStreaming = () => (app) => {
  __NODE__ && app.register(StreamingToken, true);
  return app;
}

export default registerStreaming;