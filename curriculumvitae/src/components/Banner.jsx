import React from 'react'
import { darkTheme } from '../theme';
import { Box, Container, Grid, Typography, Button, makeStyles } from '@material-ui/core'
// import Headshot from '../assets/headshot.jpg'
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CakeIcon from '@material-ui/icons/Cake';
import EmailIcon from '@material-ui/icons/Email';

const socials = [
    {
        icon: PhoneIcon,
        info: "(+27)79 887 2395",
    },
    {
        icon: EmailIcon,
        info: "vincent.nick.good@gmail.com",
    },
    {
        icon: LocationOnIcon,
        info: "Pretoria, South Africa",
    },
    {
        icon: CakeIcon,
        info: "16 February 1997",
    },
]

const useStyles = makeStyles({
    root: {
        paddingTop: "10%",
    },
    // headshot: {
    //     width: "300px",
    //     borderRadius: "50%",
    // },   
    socialButton: {
        padding: "0",
        margin: "0",
        minWidth: "0",

        '&:hover': {
            color: "#fff",
            backgroundColor: "#000",
        },
    },
    socialIcon: {
        fontSize: 40,
        padding: "0.5rem",
        color: darkTheme.palette.primary.main,
    },
  });

const Banner = () => {
    const classes = useStyles();

    const openInNewTab = (url) => {
        window.open(url, "_blank")
      }

    return (
        // center align in mobile not wokring 
        // {{xs: "center", md: "left"}}
            <Box display="flex" flexDirection="column" alignItems={{xs: "center", md: "left"}}>

                    <Typography variant="h1">
                        Vincent Good
                    </Typography>

                    <Typography variant="h3">
                        Industrial Enginner
                    </Typography>

                    {socials.map((item, index) => (
                        <Box key={index} display="flex" alignItems="center">
                            {<item.icon className={classes.socialIcon} />}
                            <Typography variant="body1">
                                {item.info}
                            </Typography>
                        </Box>
                    ))}

                    <Button className={classes.socialButton} onClick={() => openInNewTab("https://www.linkedin.com/in/vincent-good")}>
                        <LinkedInIcon className={classes.socialIcon} style={{ color: "#0a66c2" }}/>
                    </Button>

            </Box>
                

            //     {/* <Box className={classes.root}>
            //     <Grid container justifyContent="center" alignItems="center">

            //         <Grid item container direction="column" xs={12} md={5}>

            //             <Grid item>
            //                 <Typography variant="h1">
            //                     Vincent Good
            //                 </Typography>
            //             </Grid>

            //             <Grid item>
            //                 <Typography variant="h3">
            //                     Industrial Enginner
            //                 </Typography>
            //             </Grid>

            //             <Grid item align={{ xs: "center", md: "left" }}>
            //                 {socials.map((item, index) => (
            //                     <Grid item container key={index} alignItems="center">
            //                         {<item.icon className={classes.socialIcon} />}
            //                         <Typography variant="body1">
            //                             {item.info}
            //                         </Typography>
            //                     </Grid>
            //                 ))}
            //             </Grid>

            //             <Grid item>
            //                 <Button className={classes.socialButton} onClick={() => openInNewTab("https://www.linkedin.com/in/vincent-good")}>
            //                     <LinkedInIcon className={classes.socialIcon} style={{ color: "#0a66c2" }}/>
            //                 </Button>
            //             </Grid>

            //         </Grid>

            //     </Grid>
            // </Container>
            // </Box> */}
    )
}

export default Banner
