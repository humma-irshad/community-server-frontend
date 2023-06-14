"use client";
import departmnets from "../../lib/DeptNames.json";
import "./index.module.css";
import { Typography, Button } from "@mui/material";
import { Box, Grid } from "@mui/material";
import MiddleSection from "./middleSection";
import TopSection from "./topSection";

export default function Home() {
  const departmentNames = departmnets.results.map(
    (department) => department.name
  );

  return (
    <main>
      <Typography marginLeft={20} align={"center"} variant="h2" gutterBottom>
        Community App
      </Typography>
      <TopSection />
      <MiddleSection />
    </main>
  );
}
