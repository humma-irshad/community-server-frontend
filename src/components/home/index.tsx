"use client";
import Link from "next/link";
import departmnets from "../../lib/DeptNames.json";
import "./index.module.css";
import { Typography, Button } from "@mui/material";
import { Box, Grid } from "@mui/material";
import Student from "../../assests//Student.jpeg";
import Image from "next/image";

export default function Homee() {
  const departmentNames = departmnets.results.map(
    (department) => department.name
  );

  return (
    <main>
      <Typography ml={20} align={"center"} variant="h2" gutterBottom>
        Community App
      </Typography>
      <Typography paragraph={true} ml={45} mt={20} variant="h3">
        Your destination for free <br /> study material and notes
      </Typography>
      {/* <Grid mt={-15} container justifyContent="right">
        <Image src={Student} alt="hii" />
      </Grid> */}

      <Typography
        paragraph={true}
        ml={45}
        fontWeight={"light"}
        mt={3}
        width={600}
        variant="subtitle1"
      >
        IUST Student Community is created to help students to get better grades
        in their final examinations by providing Course lectures, Graded
        Assignment Solutions, Workshops and Internships.
      </Typography>

      <Typography
        paragraph={true}
        variant="h4"
        fontWeight={800}
        ml={75}
        mt={10}
      >
        Explore Department-Wise
      </Typography>

      <Grid justifyContent={"center"} width={1000} container mt={6} ml={45}>
        {departmentNames.map((name, index) => (
          <Grid mr={10} item key={index}>
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
    </main>
  );
}
