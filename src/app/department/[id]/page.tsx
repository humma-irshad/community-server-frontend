"use client";

import { Typography } from "@mui/material";

const wrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
};

const messageStyle = {
  fontSize: "3rem",
  fontWeight: "bold",
  textAlign: "center",
  color: "#ff5722",
};

const IndexPage = () => {
  return (
    <div style={wrapperStyle}>
      <Typography variant="h1" sx={messageStyle}>
        We will be back
      </Typography>
    </div>
  );
};

export default IndexPage;
