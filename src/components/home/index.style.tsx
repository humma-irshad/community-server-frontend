import { Box, Button, Divider, Grid, Typography, styled } from "@mui/material";
import { LinkProps } from "next/link";

export const ImageStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  width: 330,
  height: 330,
};

export const StyledTitle = styled(Typography)(({ theme }) => ({
  marginTop: "-2rem",
  textAlign: "center",
  fontFamily: "Roboto,Helvetica,Aria,sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
    marginLeft: "16rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.3rem",
    marginLeft: "16rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.6rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.3rem",
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    marginLeft: "20rem",
    marginTop: "6rem",
    alignItems: "center",
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: "16rem",
    alignItems: "center",
  },
}));

export const StyledDivider = styled(Divider)(() => ({
  border: "0.5px #857777 inset",
  width: "55rem",
}));

export const DeptBox = styled(Box)(({ theme }) => ({
  marginTop: "6rem",
  marginLeft: "21rem",
  [theme.breakpoints.up("md")]: {
    width: "68%",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "22rem",
    width: "18%",
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: "22rem",
    width: "14%",
  },
}));

export const DeptGrid = styled(Grid)(({ theme }) => ({
  marginBottom: "2rem",
  [theme.breakpoints.up("md")]: {
    width: "70",
  },
  [theme.breakpoints.down("md")]: {
    width: "38",
  },
}));

export const StyledDeptButton = styled(Button)<LinkProps>(() => ({
  display: "flex",
  justifyContent: "center",
  color: "white",
  textDecoration: "none",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "translateY(-20px)",
    borderColor: "white",
    backgroundColor: "#000",
  },
  padding: "30px",
  marginTop: "3.5rem",
  border: "15px solid ",
  width: "12.5rem",
  borderRadius: "2rem",
  backgroundColor: "black",
}));
