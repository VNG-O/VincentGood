import { createTheme } from '@material-ui/core';

export const darkTheme = createTheme({
  palette: {
    type: "dark",

    background: {
      paper: "#272F3F",
      default: "#181D27",
    },

    primary: {
      main: '#C0330C',
      contrastText: '#FFFBF5',
    },

    secondary: {
      main: '#04724D',
      contrastText: '#FFFBF5',
    },

    text: {
      primary: '#FFFBF5',
    },
  },
  
  typography: {
    fontFamily: ["Roboto Mono", "monospace", "Roboto", "sans-serif"],
    fontSize: 10,

    h1: {
      fontFamily: "Roboto",
    },

    h3: {
      fontFamily: "Roboto",
      marginBottom: "2rem",
    },

    body1: {
      fontSize: 17,
    },
  },
});