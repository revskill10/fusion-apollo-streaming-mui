import UniversalEvents, {UniversalEventsToken} from 'fusion-plugin-universal-events';
import Redux, {ReduxToken, ReducerToken, EnhancerToken, GetInitialStateToken} from 'fusion-plugin-react-redux';
import RPC, {RPCToken, RPCHandlersToken} from 'fusion-plugin-rpc-redux-react';
import {reactorEnhancer} from 'redux-reactors';
import {FetchToken} from 'fusion-tokens';
import fetch from 'unfetch';

export default (initialState, reducer, handlers) => app => {
  app.register(RPCToken, RPC);
  app.register(UniversalEventsToken, UniversalEvents);
  
  app.register(RPCToken, RPC);
  __NODE__
    ? app.register(RPCHandlersToken, handlers)
    : app.register(FetchToken, fetch);

  app.register(ReduxToken, Redux);
  app.register(ReducerToken, reducer);
  app.register(EnhancerToken, reactorEnhancer);
  __NODE__ && app.register(GetInitialStateToken, initialState);
  
  return app;
};
