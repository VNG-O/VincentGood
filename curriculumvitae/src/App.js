import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from '@material-ui/core';
import { darkTheme } from './theme';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Banner />
      <AboutMe />
    </ThemeProvider>
  );
}

export default App;
