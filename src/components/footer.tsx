"use client";
import React from "react";
import { Container, Grid, IconButton, Link } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

export default function FooterApp() {
  return (
    <footer className="bg-dark text-center text-white">
      <Container className="p-4 pb-0">
        <Grid container justifyContent="center" spacing={1}>
          <Grid item>
            <IconButton component={Link} href="#!" color="inherit">
              <Facebook />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton component={Link} href="#!" color="inherit">
              <Twitter />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton component={Link} href="#!" color="inherit">
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton component={Link} href="#!" color="inherit">
              <LinkedIn />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton component={Link} href="#!" color="inherit">
              <GitHub />
            </IconButton>
          </Grid>
        </Grid>
      </Container>

      <div className="text-center p-3">POKEON API</div>

      <div>
        <Link
          className="text-white"
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://pokeapi.co/
        </Link>
      </div>
    </footer>
  );
}
