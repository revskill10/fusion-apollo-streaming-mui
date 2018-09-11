// @flow
import {ApolloClientToken} from './fusion-apollo';
import ApolloClient, {
  ApolloClientEndpointToken,
} from 'fusion-apollo-universal-client';

export default (
  endpoint = 'https://kms1.herokuapp.com/v1alpha1/graphql'
) => (app) => {
  app.register(ApolloClientToken, ApolloClient);
  app.register(ApolloClientEndpointToken, endpoint);
  return app;
};
