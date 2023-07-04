import { Box, styled } from "@mui/material";

export const FooterBox = styled(Box)(({ theme }) => ({
  "&::before": {
    zIndex: "-1",
    content: '""',
    height: "60vh",
    position: "absolute",
    marginTop: "1rem",
    left: 0,
    right: 0,
    background: `linear-gradient(to left, transparent,#EAB2A0)`,
    transform: "skewY(2deg)",
    transformOrigin: "top left",
    borderRadius: "3rem",
  },
  marginBottom: "2rem",
  [theme.breakpoints.up("md")]: {
    marginLeft: "20rem",
    marginTop: "4rem",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "20rem",
    marginTop: "4rem",
    alignItems: "center",
  },
}));

export const FooterBoxContentRow = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginTop: "4rem",
    display: "flex",
    flexDirection: "row",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "4rem",
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
