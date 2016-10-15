import fsp from 'fs-promise';

const pokemonDataFile = `${__dirname}/../pokemons/pokemons.json`;

const getPokemons = async () => await fsp.readJSON(pokemonDataFile, 'utf8');

export async function getPokemonById(pokemonId) {
  const searchPokemons = await getPokemons();

  const pokemon = searchPokemons.filter(({ id }) =>
    parseInt(id, 10) === parseInt(pokemonId, 10)
  );

  if (pokemon) {
    return pokemon[0];
  }

  return null;
}

export async function getPokemonByName(pokemonNameSearch) {
  const searchPokemons = await getPokemons();

  const pokemonName = pokemonNameSearch.toLowerCase().trim();

  const pokemon = searchPokemons.filter(({ name }) =>
    name.toLowerCase() === pokemonName
  );

  if (pokemon) {
    return pokemon[0];
  }

  return null;
}

export async function getPokemonByEvolutions(evolutions) {
  if (!evolutions) {
    return null;
  }

  const searchPokemons = await getPokemons();

  const pokemonNames = evolutions.map(evolution =>
    evolution.name.toLowerCase().trim()
  );

  const pokemons = searchPokemons.filter(({ name }) =>
    pokemonNames.indexOf(name.toLowerCase()) !== -1
  );

  if (pokemons) {
    return pokemons;
  }

  return null;
}
