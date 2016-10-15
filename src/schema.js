import { GraphQLSchema } from 'graphql';

import QueryType from './type/QueryType';

const schema = new GraphQLSchema({
  query: QueryType,
});

export default schema;
