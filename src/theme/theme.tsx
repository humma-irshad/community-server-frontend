'use client';

import {createTheme} from '@mui/material';

// module augmentation - TS concept
declare module '@mui/material/styles' {
  interface Theme {
    devs: {
      main: string;
    };
  }
  interface ThemeOptions {
    devs: {
      main: React.CSSProperties['color'];
    };
  }
}

export const theme = createTheme({
  devs: {
    main: '#f5dce0',
  },
  palette: {
    primary: {
      main: '#000',
      light: '#474242',
      contrastText: '#fff',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        positionFixed: true,
        root: {
          width: `calc(100% - 240px)`,
          ml: `240px`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          border: '0.5px #857777 inset',
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        variant: 'permanent',
        anchor: 'left',
      },
      styleOverrides: {
        root: {
          width: 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            marginBottom: 34,
            backgroundColor: '#000',
            color: '#fff',
            width: 240,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            boxSizing: 'border-box',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&: hover': {backgroundColor: '#474242'},
          '&: active': {backgroundColor: '#474242'},
        },
      },
    },
  },
});
