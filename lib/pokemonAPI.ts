const POKEMON_API = "https://pokeapi.co/api/v2/";
interface Pokemon {
  name: string;
}

// Get 151 Pokémon list with images
export async function getPokemonList(): Promise<{ name: string, image: string }[]> {
  const response = await fetch(POKEMON_API + "pokemon?limit=150&offset=0");
  const data = await response.json();
  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: Pokemon) => {
      const pokemonData = await getPokemon(pokemon.name);
      return {
        name: pokemon.name,
        image: pokemonData.sprites.other["official-artwork"].front_default,
      };
    })
  );
  return pokemonDetails;
}

// Get each Pokémon
export async function getPokemon(name: string) {
  const response = await fetch(POKEMON_API + "pokemon/" + name);
  const data = await response.json();
  return data;
}
