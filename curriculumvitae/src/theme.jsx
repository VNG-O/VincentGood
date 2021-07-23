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