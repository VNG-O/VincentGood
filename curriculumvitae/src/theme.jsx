import { createTheme } from '@material-ui/core';

export const darkTheme = createTheme({
  palette: {
    type: "dark",

    background: {
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

  // shadows[2]: "0px 3px 1px -2px rgba(70, 84, 114, 0.2), 0px 2px 2px 0px rgba(70, 84, 114, 0.14), 0px 1px 5px 0px rgba(70, 84, 114, 0.12)",

  typography: {
    fontSize: 10,

    h3: {
      marginBottom: "2rem",
    },

    body1: {
      fontSize: 17,
    },
  },
});