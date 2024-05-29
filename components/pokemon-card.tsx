import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface PokemonCardProps {
  name: string;
  image: string;
}

export function PokemonCard({ name, image }: PokemonCardProps) {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardMedia sx={{ height: 170, width: 300 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/${name}`} passHref>
          <Button size="small" component="a" target="_blank">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
/*
export function PokemonCardContainer() {
  const [pokemon, setPokemon] = useState<{
    name: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await response.json();
      setPokemon({
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
      });
    }

    fetchPokemon();
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return <PokemonCard name={pokemon.name} image={pokemon.image} />;
}
*/
