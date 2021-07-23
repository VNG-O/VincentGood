import { darkTheme } from '../theme';
import { AppBar, Toolbar, Container, Box, Typography, Button, IconButton, makeStyles, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    navTabs: {
        flexGrow: "1",
        display: "flex",
        justifyContent: "center",
    },
  })

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" position="fixed">
            <Toolbar>

                    <Box className={classes.navTabs} justifyContent="center">
                        <Container style={{ marginLeft: 0 }}>
                            <Button component={Link} href="#home">
                                <Typography variant="body1">
                                    Home
                                </Typography>
                            </Button>
                            <Button component={Link} href="#aboutMe">
                                <Typography variant="body1">
                                    About me
                                </Typography></Button>
                        </Container>
                    </Box>

                    <IconButton edge="end" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
