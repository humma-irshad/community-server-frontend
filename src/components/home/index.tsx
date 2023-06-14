"use client";
import Link from "next/link";
import departmnets from "../../lib/DeptNames.json";
import "./index.module.css";
import { Typography, Button } from "@mui/material";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const departmentNames = departmnets.results.map(
    (department) => department.name
  );

  return (
    <main>
      <Typography marginLeft={20} align={"center"} variant="h2" gutterBottom>
        Community App
      </Typography>
      <Box
        sx={{
          marginLeft: 40,
          alignItems: "center",
        }}
      >
        <Typography paragraph={true} mt={15} variant="h3">
          Your destination for free <br /> study material and notes
        </Typography>
        <Typography
          paragraph={true}
          width={520}
          fontWeight={"light"}
          variant="subtitle1"
        >
          IUST Student Community is created to help students to get better
          grades in their final examinations by providing Course lectures,
          Graded Assignment Solutions, Workshops and Internships.
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 15,
          marginLeft: 40,
          width: 900,
        }}
      >
        <Typography
          textAlign={"center"}
          paragraph={true}
          variant="h4"
          fontWeight={800}
        >
          Explore Department-Wise
        </Typography>

        <Grid width={1000} container>
          {departmentNames.map((name, index) => (
            <Grid ml={10} item key={index}>
              <Box
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-20px)",
                    borderColor: "white",
                  },
                  textAlign: "center",
                  p: 4,
                  marginTop: 5,
                  border: "15px solid ",
                  width: 200,
                  borderRadius: 10,
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
    </main>
  );
}
