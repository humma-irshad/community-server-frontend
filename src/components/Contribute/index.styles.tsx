import { Box, Button, Divider, Grid, Typography, styled } from "@mui/material";
import Image from "next/image";

export const JobImage = styled(Image)(() => ({
  alignItems: "right",
  marginLeft: "45rem",
  width: "80%",
  height: "25rem",
  borderRadius: "3rem",
  zIndex: "1",
}));

export const TitleText = styled(Typography)(() => ({
  zIndex: "1",
  marginLeft: "20rem",
  textAlign: "center",
  position: "absolute",
  marginTop: "1rem",
  fontFamily: "Roboto,Helvetica,Aria,sans-serif",
}));

export const BodyText = styled(Typography)(() => ({
  zIndex: "1",
  textAlign: "center",
  marginLeft: "20rem",
  position: "absolute",
  marginTop: "7rem",
  width: "30%",
  fontFamily: "Roboto,Helvetica,Aria,sans-serif",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  zIndex: "-1",
  "&::before": {
    content: '""',
    height: "100%",
    position: "absolute",
    top: "-26%",
    left: 0,
    right: 0,
    background: `linear-gradient(to right, transparent,#9F73AB)`,
    transform: "skewY(-5deg)",
    transformOrigin: "top left",
  },
}));
