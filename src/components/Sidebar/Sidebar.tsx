"use client";

import {
  AppBar,
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Box>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Community App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer>
        <Toolbar />
        <Divider />
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
