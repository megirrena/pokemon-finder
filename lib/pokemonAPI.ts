
const POKEMON_API = "https://pokeapi.co/api/v2/";

//get 151 pokemin list
export async function getPokemonList() {
  const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
  const data = await response.json();
  console.log("details", data)
  return data.results;
}
//get each pokemin
export async function getPokemon(name: string) {
  const response = await fetch(POKEMON_API + "pokemon/" + name);
  const data = await response.json();
  console.log(data)
  return data;
}
/*
//get each pokemon image
export async function getPokemonImages(image:string){
  const response = await fetch (POKEMON_API+"pokemon/"+ image)
  const data = await response.json();
  return data;
}
*/

// Get image of each Pokémon by name
export async function getPokemonImage(name: string) {
  const pokemon = await getPokemon(name);
  return pokemon.sprites.front_default;
}



