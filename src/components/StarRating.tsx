"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../store/reviewSlice";
import { RootState } from "../store";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarRating: React.FC = () => {
  const dispatch = useDispatch();
  const rating = useSelector((state: RootState) => state.review.rating);

  const handleRating = (value: number) => {
    dispatch(setRating(value));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <Box
          key={value}
          onClick={() => handleRating(value)}
          sx={{ cursor: "pointer" }}
        >
          {value <= rating ? (
            <StarIcon sx={{ color: "yellow", fontSize: "3rem" }} />
          ) : (
            <StarBorderIcon sx={{ color: "yellow", fontSize: "3rem" }} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default StarRating;
