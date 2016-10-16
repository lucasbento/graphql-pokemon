import { GraphQLObjectType } from 'graphql';

import ViewerType from './ViewerType';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'Query any Pokémon by number or name',
  fields: () => ({
    viewer: {
      type: ViewerType,
      resolve: (...obj) => obj,
    },
  }),
});
