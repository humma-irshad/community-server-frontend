"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

import { ImageStyle, StyledBox, StyledDivider } from "./index.style";

import TopImage from "@/assests/study.jpeg";

export default function TopSection() {
  return (
    <>
      <Box display="flex" alignItems="center" marginTop={6}>
        <StyledBox>
          <Typography paragraph={true} variant="h3">
            Your destination for free <br /> study material and notes
          </Typography>
          <Typography paragraph={true} width={"35rem"} variant="subtitle1">
            IUST Student Community is created to help students to get better
            grades in their final examinations by providing Course lectures,
            Graded Assignment Solutions, Workshops and Internships.
          </Typography>
        </StyledBox>
        <Image
          src={TopImage}
          style={ImageStyle}
          alt="A young-adult boy reading a book"
          loading="lazy"
        />
      </Box>
      <StyledBox>
        <StyledDivider />
      </StyledBox>
    </>
  );
}
