// pokemonName = "pikachu" -> show the Pikachu page
export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemon();

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">Pikachu</h1>
    </>
  );
}
