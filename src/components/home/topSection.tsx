"use client";
import "./index.module.css";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/material";

export default function TopSection() {
  return (
    <main>
      <Box
        sx={{
          marginLeft: "23rem",
          alignItems: "center",
          marginTop: "7rem",
        }}
      >
        <Typography paragraph={true} variant="h3">
          Your destination for free <br /> study material and notes
        </Typography>
        <Typography
          paragraph={true}
          width={"35rem"}
          fontWeight={"lighter"}
          variant="subtitle1"
        >
          IUST Student Community is created to help students to get better
          grades in their final examinations by providing Course lectures,
          Graded Assignment Solutions, Workshops and Internships.
        </Typography>
      </Box>
    </main>
  );
}
