import {
  List,
  ListItemButton,
  Pagination,
  styled,
  Box,
  Grid,
  Typography,
} from "@mui/material";

export const AlumniList = styled(List)(({ theme }) => ({
  padding: "1rem",
  margin: "auto",
  backgroundColor: "#f5dce0",
  borderRadius: "24px",
  [theme.breakpoints.up("md")]: {
    width: "100%",
    maxWidth: 620,
  },
}));

export const AlumniListItemButton = styled(ListItemButton)(() => ({
  marginRight: "1rem",
  maxWidth: "min-content",
  borderRadius: "10px",
  backgroundColor: "#000",
  color: "#fff",
  justifyContent: "center",
  "&: hover": {
    backgroundColor: "#383535",
  },
}));

export const AlumniPagination = styled(Pagination)(() => ({
  paddingTop: "1rem",
}));

export const NewsBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    marginLeft: "5rem",
    marginTop: "2rem",
    alignItems: "center",
    borderStyle: "solid",
    borderRadius: "10px",
    width: "18rem",
    height: "20rem",
    transition: "transform 0.63s",
    "&:hover": {
      transform: "translateY(-20px) ",
      border: "#fff",
    },
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: "16rem",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
}));

export const NewsGrid = styled(Grid)(({ theme }) => ({
  marginBottom: "2rem",
  [theme.breakpoints.up("md")]: {
    width: "70",
    padding: "1rem",
  },
  [theme.breakpoints.down("md")]: {
    width: "38",
  },
}));

export const StyledBodyText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  varaint: "body2",
  marginLeft: "0.1rem",
  fontFamily: "Roboto,Helvetica,Aria,sans-serif",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const ImageStyled: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  width: "90%",
  marginLeft: "1rem",
  marginTop: "0.3rem",
  height: "10rem",
};

export const StyledTitleOne = styled(Typography)(({ theme }) => ({
  varaint: "h3",
  marginBottom: "2rem",
}));

export const StyledTitleTwo = styled(Typography)(({ theme }) => ({
  varaint: "h3",
  marginTop: "2rem",
  fontFamily: "Roboto,Helvetica,Aria,sans-serif",
}));
