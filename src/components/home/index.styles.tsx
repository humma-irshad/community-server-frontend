import {
  Box,
  Button,
  ButtonProps,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { LinkProps } from "next/link";

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 650,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
    marginLeft: "16rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.3rem",
    marginLeft: "16rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.6  rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.3rem",
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    marginLeft: "20rem",
    alignItems: "center",
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: "16rem",
    alignItems: "center",
  },
}));

export const DeptBox = styled(Box)(({ theme }) => ({
  marginTop: "8rem",
  marginLeft: "20rem",
  [theme.breakpoints.up("md")]: {
    width: "67%",
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
  marginBottom: "2.6rem",
  [theme.breakpoints.up("md")]: {
    width: "80",
  },
  [theme.breakpoints.down("md")]: {
    width: "40",
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
  marginTop: "4rem",
  border: "15px solid ",
  width: "12.5rem",
  borderRadius: "2rem",
  backgroundColor: "black",
}));
