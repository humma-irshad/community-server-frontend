"use client";
import { Typography, Button } from "@mui/material";
import { Box, Grid } from "@mui/material";
import img1 from "../../assests/img1.jpeg";
import img2 from "../../assests/img2.jpeg";
import Image from "next/image";

import Link from "next/link";
import departmnets from "../../lib/DeptNames.json";

export default function MiddleSection() {
  const departmentNames = departmnets.results.map(
    (department) => department.name
  );

  return (
    <main>
      <Box //box for dept wise explore
        sx={{
          marginTop: "5rem",
          marginLeft: "18rem",
          width: "50rem",
        }}
      >
        <Typography ml={"17rem"} paragraph={true} variant="h4" fontWeight={800}>
          Explore Department-Wise
        </Typography>

        <Grid width={"65rem"} container>
          {departmentNames.map((name, index) => (
            <Grid ml={"5rem"} item key={index}>
              <Box
                sx={{
                  transition: "transform 0.6s",
                  "&:hover": {
                    transform: "translateY(-20px)",
                    borderColor: "white",
                  },
                  textAlign: "center",
                  p: "2rem",
                  marginTop: "2rem",
                  border: "15px solid ",
                  width: "10rem",
                  borderRadius: "2rem",
                  backgroundColor: "black",
                }}
                key={index}
              >
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  href={`/department/${encodeURIComponent(name.toLowerCase())}`}
                >
                  {name}
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          marginLeft: "23rem",
          marginTop: "10rem",
          alignItems: "left",
          textAlign: "left",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image style={{ borderRadius: "2rem" }} src={img1} alt="image" />
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
        <Image style={{ borderRadius: "2rem" }} src={img2} alt="image" />
      </Box>
    </main>
  );
}
