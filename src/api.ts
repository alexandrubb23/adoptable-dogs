import { GraphQLClient } from 'graphql-request';
import { QueryClient } from 'react-query';

import { getSdk } from '../src/generated/graphql';
import { API_URL } from '../src/config/constants';
console.log({ API_URL });
const gqlClient = new GraphQLClient(`${API_URL}/graphql`);
export const { getDogs, dogByName } = getSdk(gqlClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
