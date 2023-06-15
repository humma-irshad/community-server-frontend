"use client";

import { Typography } from "@mui/material";

import { StyledBox, StyledDivider } from "./index.style";

export default function TopSection() {
  return (
    <>
      <StyledBox>
        <Typography paragraph={true} variant="h3">
          Your destination for free <br /> study material and notes
        </Typography>
        <Typography paragraph={true} width={"35rem"} variant="subtitle1">
          IUST Student Community is created to help students to get better
          grades in their final examinations by providing Course lectures,
          Graded Assignment Solutions, Workshops and Internships.
        </Typography>
        <StyledDivider />
      </StyledBox>
    </>
  );
}
