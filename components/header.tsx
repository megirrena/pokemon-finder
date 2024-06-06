"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#0D47A1" }}>
        <Toolbar
          sx={{
            zIndex: 10,
            width: "100%",
            maxWidth: "5xl",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            padding: { xs: "0 1rem", sm: "0 2rem" },
          }}
        >
          <img src="./pokemon.svg.png" width={150} height={150} />
          <Link href="/" passHref>
            <Typography
              variant="h6"
              component="a"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontSize: { xs: "1.5rem", sm: "2rem" },
                fontWeight: "bold",
              }}
            >
              Pokemon Finder
            </Typography>
          </Link>
          <Link href={"/about"}>
            <Button color="inherit">About</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
