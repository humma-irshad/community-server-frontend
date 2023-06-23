"use client";

import departmnets from "../../lib/DeptNames.json";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const IndexPage = () => {
  const router = useRouter();
  const SemesterCount = departmnets.results.map(
    (department) => department.SemCount
  );

  const departmentName = departmnets.results.map(
    (department) => department.name
  );

  const [currentUrl, setCurrentUrl] = useState("");

  const reDirect = (number: number) => {
    router.push(`/department/${currentUrl}/Semester${number}`);
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    const urlText = pathname.substring(pathname.lastIndexOf("/") + 1);
    setCurrentUrl(urlText);
  }, [currentUrl]);

  const index = departmentName.indexOf(currentUrl.toUpperCase());
  const numberofButtons = SemesterCount[index];
  const buttons = [];
  for (let i = 1; i <= numberofButtons; i++) {
    buttons.push(
      <Button
        key={`${i}`}
        onClick={() => {
          const number = i;
          reDirect(number);
        }}
      >
        {` Sem ${i}`}
      </Button>
    );
  }
  return (
    <Box
      sx={{
        ml: 32,
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
};

export default IndexPage;
