import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} from 'graphql';

const AttackType = new GraphQLObjectType({
  name: 'Attack',
  description: 'Represents a Pokémon\'s attack types',
  fields: {
    name: {
      type: GraphQLString,
      description: 'The name of this Pokémon attack',
      resolve: obj => obj.name,
    },
    type: {
      type: GraphQLString,
      description: 'The type of this Pokémon attack',
      resolve: obj => obj.type,
    },
    damage: {
      type: GraphQLInt,
      description: 'The damage of this Pokémon attack',
      resolve: obj => obj.damage,
    },
  },
});

export default new GraphQLObjectType({
  name: 'PokemonAttack',
  description: 'Represents a Pokémon\'s attack types',
  fields: () => ({
    fast: {
      type: new GraphQLList(AttackType),
      description: 'The fast attacks of this Pokémon',
      resolve: obj => obj.fast,
    },
    special: {
      type: new GraphQLList(AttackType),
      description: 'The special attacks of this Pokémon',
      resolve: obj => obj.special,
    },
  }),
});
