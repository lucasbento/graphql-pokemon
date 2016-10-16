import fsp from 'fs-promise';

const pokemonDataFile = `${__dirname}/../pokemons/pokemons.json`;

const getPokemonsFromJson = async () =>
  await fsp.readJSON(pokemonDataFile, 'utf8');

export async function getPokemons(args) {
  const searchPokemons = await getPokemonsFromJson();

  const pokemons = searchPokemons.slice(0, args.first);

  // const edges = pokemons.map(pokemon => ({ node: pokemon }));

  return pokemons || null;
}

export async function getPokemonById(pokemonId) {
  const searchPokemons = await getPokemonsFromJson();

  const pokemon = searchPokemons.filter(({ id }) =>
    parseInt(id, 10) === parseInt(pokemonId, 10)
  );

  return pokemon[0] || null;
}

export async function getPokemonByName(pokemonNameSearch) {
  const searchPokemons = await getPokemonsFromJson();

  const pokemonName = pokemonNameSearch.toLowerCase().trim();

  const pokemon = searchPokemons.filter(({ name }) =>
    name.toLowerCase() === pokemonName
  );

  if (pokemon) {
    return pokemon[0];
  }

  return pokemon[0] || null;
}

export async function getPokemonByEvolutions(evolutions) {
  if (!evolutions) {
    return null;
  }

  const searchPokemons = await getPokemonsFromJson();

  const pokemonNames = evolutions.map(evolution =>
    evolution.name.toLowerCase().trim()
  );

  const pokemons = searchPokemons.filter(({ name }) =>
    pokemonNames.indexOf(name.toLowerCase()) !== -1
  );

  return pokemons || null;
}
