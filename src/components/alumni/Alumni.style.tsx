import { List, ListItemButton, Pagination, styled } from "@mui/material";

export const AlumniList = styled(List)(({ theme }) => ({
  padding: "1rem",
  margin: "auto",
  backgroundColor: "#f5dce0",
  borderRadius: "24px",
  [theme.breakpoints.up("md")]: {
    marginLeft: "27rem",
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
