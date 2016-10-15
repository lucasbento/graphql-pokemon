import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import PokemonType from './PokemonType';
import { getPokemonById, getPokemonByName } from '../service/Pokemon';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'Query any Pokémon by ID or name',
  fields: () => ({
    pokemon: {
      type: PokemonType,
      args: {
        id: {
          type: GraphQLInt,
        },
        name: {
          type: GraphQLString,
        },
      },
      resolve: async (obj, { id, name }) => {
        if (id) {
          return await getPokemonById(id);
        }

        if (name) {
          return await getPokemonByName(name);
        }

        throw new Error(
          'You need to specify either the ID or name of the Pokémon'
        );
      },
    },
  }),
});
