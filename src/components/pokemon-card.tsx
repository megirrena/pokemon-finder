"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface PokemonCardProps {
  name: string;
  image: string;
}

export function PokemonCard({ name, image }: PokemonCardProps) {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <Link href={`/${name}`} passHref>
        <CardMedia
          sx={{ height: 290, width: 300 }}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
        </CardContent>
      </Link>
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
