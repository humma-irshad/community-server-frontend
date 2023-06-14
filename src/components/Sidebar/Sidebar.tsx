"use client";

import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Box>
      <CssBaseline />
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: 200,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
          },
        }}
      >
        <Toolbar />
        <List>
          {["Home", "Notes", "Contribute"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                LinkComponent={Link}
                href={text.toLowerCase() === "home" ? "/" : text.toLowerCase()}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["About Us", "Developers", "Privacy Policy"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton LinkComponent={Link} href={text.toLowerCase()}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box> */}
    </Box>
  );
}
