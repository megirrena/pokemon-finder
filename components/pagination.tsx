"use client";
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationProps {
  count: number;
  page: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PokemonPagination = ({ count, page, onPageChange }: PaginationProps) => {
  return (
    <Stack spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
      <Pagination
        count={count}
        page={page}
        onChange={onPageChange}
        color="primary"
        showFirstButton
        showLastButton
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
          },
          "& .Mui-selected": {
            color: "white",
          },
          "& .MuiPaginationItem-icon": {
            color: "white",
          },
        }}
      />
    </Stack>
  );
};

export default PokemonPagination;
