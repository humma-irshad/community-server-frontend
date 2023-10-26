'use client';

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
} from '@mui/material';
import {ThemeProvider} from '@emotion/react';
import Link from 'next/link';

import {theme} from '@/theme/theme';

export default function Sidebar() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <Drawer>
          <Toolbar />
          <Divider />
          <List>
            {['Home', 'Alumni', 'Contribute To Community App', 'Internships'].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  LinkComponent={Link}
                  href={
                    text.toLowerCase() === 'home'
                      ? '/'
                      : text.toLowerCase() === 'contribute to community app'
                      ? '/ContributeLogin'
                      : `/${text.toLowerCase().replace(' ', '-')}`
                  }
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Discussion Forum', 'Developers', 'About Us'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  LinkComponent={Link}
                  href={`/${text.toLowerCase().replace(' ', '-')}`}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component='main' sx={{flexGrow: 1, bgcolor: 'background.default'}}>
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
