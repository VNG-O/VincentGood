import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, makeStyles } from '@material-ui/core';
import { darkTheme } from './theme';
import Navbar from './components/Navbar';

const useStyles = makeStyles({
  section: {
    marginTop: "15%",
  },
})

function App() {
const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar/>
      <Banner className={classes.section}/>
      <AboutMe className={classes.section}/>
    </ThemeProvider>
  );
}

export default App;
