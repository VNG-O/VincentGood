import { createTheme } from '@material-ui/core';

export const darkTheme = createTheme({
    palette: {
      type: "dark",

      background: {
        default: "#181D27",
      },

      primary: {
        main: '#C0330C',
      },

      secondary: {
        main: '#04724D',
      },

      text: {
        primary: "#FFFBF5",
      },
    },

    typography: {
      fontSize: 9,

      body1: {
          fontSize: 13,
      },
    },
  });