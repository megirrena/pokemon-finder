"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

interface PokemonImageProps {
  image: string;
  name: string;
}

export function PokemonImage({ image, name }: PokemonImageProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingBottom: "100%",
        overflow: "hidden",
      }}
    >
      <Image
        src={image}
        alt={`Picture of ${name}`}
        priority
        layout="fill"
        objectFit="contain"
        style={{ transition: "opacity 2s", opacity: 0 }}
        onLoadingComplete={(img) => (img.style.opacity = "1")}
      />
    </Box>
  );
}
