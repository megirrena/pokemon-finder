import { PokemonGrid } from "@/components/pokemon-grid";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  const pokemonList = await getPokemonList();
  console.log("pokemon_list", pokemonList);

  return <PokemonGrid pokemonList={pokemonList} />;
}
