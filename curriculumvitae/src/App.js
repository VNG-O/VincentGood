import './App.css';
import { ThemeProvider, Paper } from '@material-ui/core';
import { theme } from './theme';
import Banner from './components/Banner';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Paper backgroundColor={theme.palette.primary} style={{ height:"100vh" }}>
        <Banner />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
