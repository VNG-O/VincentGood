import { useState } from 'react';
import { darkTheme } from '../theme';
import { AppBar, Toolbar, Container, Box, Typography, Button, IconButton, makeStyles, Link, Tabs, Tab } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    nav: {
        backgroundColor: darkTheme.palette.background.paper,
    },

    navBox: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
    },
    
    navButton: {
        textTransform: "none",
        fontSize: "17",

        "&:hover": {
            textDecoration: "none",
        },

        "&:focus": darkTheme.palette.action.focus,
    },
  })

const Navbar = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        // center navtabs
        <AppBar className={classes.nav} position="fixed">
            <Box className={classes.navBox}>
                <Toolbar>
                    
                    {/* <Container > */}
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered>
                        <Tab
                        className={classes.navButton}
                        component={Link}
                        href="#home"
                        label=
                        {<Typography variant="body1">
                            Home
                        </Typography>} />
                        <Tab
                        className={classes.navButton}
                        component={Link}
                        href="#aboutMe"
                        label=
                        {<Typography variant="body1">
                            About me
                        </Typography>} />
                    </Tabs>

                    {/* <IconButton edge="end" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    
                </Toolbar>
            </Box>
        </AppBar>
    )
}

export default Navbar

// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { darkTheme } from '../theme';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`nav-tabpanel-${index}`}
//       aria-labelledby={`nav-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `nav-tab-${index}`,
//     'aria-controls': `nav-tabpanel-${index}`,
//   };
// }

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// const useStyles = makeStyles({
//   root: {
//     // flexGrow: 1,
//     backgroundColor: darkTheme.palette.background.paper,
//   },
// });

// export default function NavTabs() {
//   const classes = useStyles();
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Tabs
//           variant="fullWidth"
//           value={value}
//           onChange={handleChange}
//           aria-label="nav tabs example"
//         >
//           <LinkTab label="Home" href="/drafts" {...a11yProps(0)} />
//           <LinkTab label="About me" href="/trash" {...a11yProps(1)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         Page One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Page Two
//       </TabPanel>
//     </div>
//   );
// }
