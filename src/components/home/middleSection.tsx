"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import departmnets from "../../lib/DeptNames.json";
import MidImageOne from "@/assests/boy.jpeg";
import MidImageTwo from "@/assests/grad.jpeg";
import {
  DeptBox,
  DeptGrid,
  MidImageStyle,
  StyledDeptButton,
} from "./index.style";

export default function MiddleSection() {
  const departmentNames = departmnets.results.map(
    (department) => department.name
  );

  return (
    <>
      <DeptBox>
        <Typography
          align="center"
          paragraph={true}
          variant="h4"
          fontWeight={800}
        >
          Explore Department-Wise
        </Typography>

        <DeptGrid container>
          {departmentNames.map((name, index) => (
            <Grid ml={"4rem"} item key={index}>
              <StyledDeptButton
                href={`/department/${encodeURIComponent(name.toLowerCase())}`}
                key={index}
              >
                {name}
              </StyledDeptButton>
            </Grid>
          ))}
        </DeptGrid>
      </DeptBox>
      <Box
        sx={{
          marginLeft: "20.4rem",
          marginTop: "10rem",
          alignItems: "left",
          textAlign: "left",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          style={MidImageStyle}
          src={MidImageOne}
          alt="A boy reading a book"
        />
        <Box
          sx={{
            marginTop: "1rem",
            marginLeft: "2rem",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "left" }}>
            Quiz End-Term Revision
          </Typography>
          <br />
          <Typography
            sx={{
              fontSize: "1rem",
              width: "35rem",
              fontWeight: "bold",
            }}
          >
            We provide video lectures for explanation of all the concepts and
            detailed videos on solution of Graded Assignments. Short and
            effective End term video lectures for quick revision to perform well
            in exams.
          </Typography>
        </Box>
      </Box>
      {/* ------------------------------ */}
      <Box
        sx={{
          marginTop: "8rem",
          display: "flex",
          flexDirection: "row",
          marginLeft: "23rem",
          marginBottom: "8rem",
        }}
      >
        <Box
          sx={{
            marginTop: "1rem",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "left" }}>
            Personality Development
          </Typography>
          <br />
          <Typography
            sx={{
              fontSize: "1rem",
              width: "35rem",
              fontWeight: "bold",
            }}
          >
            Exclusive members-only videos.Members-only live chats( Course
            Duration 6 months. Members-only live streams. Members-only chat
            rooms. PRE BOOK- LIMITED SEATS AVAILABLE.
          </Typography>
        </Box>
        <Image
          style={MidImageStyle}
          src={MidImageTwo}
          alt="personality development"
        />
      </Box>
    </>
  );
}
