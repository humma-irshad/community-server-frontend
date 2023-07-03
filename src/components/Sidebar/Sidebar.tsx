"use client";

import {
  Typography,
  AppBar,
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
import { ThemeProvider } from "@emotion/react";
import Link from "next/link";

import { theme } from "@/theme/theme";

export default function Sidebar() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <Drawer>
          <Toolbar />
          <Divider />
          <List>
            {["Home", "Alumni", "Discussion Forum"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  LinkComponent={Link}
                  href={
                    text.toLowerCase() === "home"
                      ? "/"
                      : `/${text.toLowerCase().replace(" ", "-")}`
                  }
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
                <ListItemButton
                  LinkComponent={Link}
                  href={`/${text.toLowerCase().replace(" ", "-")}`}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default" }}
        >
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
