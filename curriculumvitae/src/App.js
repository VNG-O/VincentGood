import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, makeStyles } from '@material-ui/core';
import { darkTheme } from './theme';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

const useStyles = makeStyles({
  root: {
    scrollBehavior: "smooth",
  },

  section: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",

    [darkTheme.breakpoints.down('sm')]: {
      marginTop: "10rem",
    },
  },
})

function App() {
const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar/>
      <Banner className={classes.section} id="home"/>
      <AboutMe id="aboutMe"/>
      <Skills className={classes.section} />
    </ThemeProvider>
  );
}

export default App;
