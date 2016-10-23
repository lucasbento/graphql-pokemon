import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import {
  fromGlobalId,
} from 'graphql-relay';

import PokemonType from './PokemonType';

import {
  getPokemons,
  getPokemonById,
  getPokemonByName,
} from '../service/Pokemon';


const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Query any Pokémon by number or name',
  fields: () => ({
    query: {
      type: QueryType,
      resolve: (...args) => args,
    },
    pokemons: {
      type: new GraphQLList(PokemonType),
      args: {
        first: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: async (obj, args) => await getPokemons(args),
    },
    pokemon: {
      type: PokemonType,
      args: {
        id: {
          type: GraphQLString,
        },
        name: {
          type: GraphQLString,
        },
      },
      resolve: async (obj, { id, name }) => {
        if (id) {
          return await getPokemonById(fromGlobalId(id).id);
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

export default QueryType;
