import { createTheme } from '@material-ui/core';

export const theme = createTheme({
    palette: {
        primary: {
          main: '#181D27',
        },
        secondary: {
          main: '#C0330C',
        },
      },

    typography: {
      fontSize: 9,

      body1: {
          fontSize: 13,
      },
    },
  });