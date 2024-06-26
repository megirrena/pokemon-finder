"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import StarRating from "./StarRating";

const AboutPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2rem",
        paddingBottom: "6rem",
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom align="center">
          About Pokémon
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Pokémon is a Japanese media franchise consisting of video games,
          animated series and films, a trading card game, and other related
          media. The franchise takes place in a shared universe in which humans
          co-exist with creatures known as Pokémon, a large variety of species
          endowed with special powers. The franchise's target audience is
          children aged 5 to 12, but it is known to attract people of all ages.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <img src="./pikachu.jpeg" width={200} height={200} alt="Pikachu" />
        </Box>
        <Typography variant="h4" align="center" sx={{ marginTop: "4rem" }}>
          How do you like Pokémon?
        </Typography>
        <StarRating />
      </Container>
    </Box>
  );
};

export default AboutPage;
