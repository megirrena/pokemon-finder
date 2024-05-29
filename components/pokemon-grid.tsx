"use client";
import { PokemonCard } from "./pokemon-card";
import { useState } from "react";
import { Typography, Grid, Box, TextField } from "@mui/material";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PokemonGridProps {
  pokemonList: any;
}
//filter the text
export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");
  console.log(pokemonList);

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <Box sx={{ p: 3, color: "white" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Search for your Pokemon
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Pokemon Name"
            type="text"
            autoComplete="off"
            value={searchText}
            id="pokemonName"
            placeholder="Charizard, Pikachu, etc."
            onChange={(e) => setSearchText(e.target.value)}
            InputLabelProps={{
              style: { color: "white" },
            }}
            inputProps={{
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "white",
                opacity: 1,
              },
            }}
          />
        </Grid>
      </Grid>
      <Typography variant="h4" align="center" gutterBottom sx={{ pt: 6 }}>
        Pokemon Collection
      </Typography>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        {filteredPokemonList.map((pokemon: any) => {
          return <PokemonCard name={pokemon.name} image={""} />;
        })}
      </div>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </Box>
  );
}
