import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/pokemon-image";
import { Typography, Box, LinearProgress } from "@mui/material";
// pokemonName = "pikachu" -> show the Pikachu page
export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName);
  console.log(pokemonObject);

  return (
    <Box sx={{ p: 3, color: "text.primary" }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontWeight: "bold", pt: 4, color: "white" }}
      >
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </Typography>
      <Box sx={{ m: 4, position: "relative", width: 250, height: 250 }}>
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
      </Box>
      <Typography variant="h3" component="h3" sx={{ color: "white" }}>
        Weight: {pokemonObject.weight}
      </Typography>
      <Box sx={{ flexDirection: "column" }}>
        {pokemonObject.stats.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;

          return (
            <Box
              key={statName}
              sx={{ display: "flex", alignItems: "stretch", width: 500, mb: 2 }}
            >
              <Typography sx={{ p: 3, width: "50%", color: "white" }}>
                {statName}: {statValue}
              </Typography>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  ml: 2,
                }}
              >
                <LinearProgress
                  variant="determinate"
                  value={statValue}
                  sx={{ width: "100%" }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
