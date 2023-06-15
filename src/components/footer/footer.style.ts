import { Box, styled } from "@mui/material";

export const FooterBox = styled(Box)(({ theme }) => ({
  marginBottom: "2rem",
  [theme.breakpoints.up("md")]: {
    marginLeft: "20rem",
    marginTop: "6rem",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "20rem",
    marginTop: "6rem",
    alignItems: "center",
  },
}));

export const FooterBoxContentRow = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginTop: "2.6rem",
    display: "flex",
    flexDirection: "row",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "2.6rem",
    display: "flex",
    flexDirection: "row",
  },
}));

export const FooterBoxContentColumn = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "7rem",
    textAlign: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "7rem",
    textAlign: "center",
  },
}));
