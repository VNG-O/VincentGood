import React from 'react'
import { Box, Container, Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Headshot from '../assets/headshot.jpg'
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
    headshot: {
        width: "100%",
        borderRadius: "50%",
        border: "2px solid #000",
    },
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
        fontSize: 25,
        padding: "0.5rem",
    },
  });

const Banner = () => {
    const classes = useStyles();

    const openInNewTab = (url) => {
        window.open(url, "_blank")
      }

    return (
        // center align in mobile not wokring
        <Box className={classes.root}>
            <Container>
                <Grid container justifyContent="center" alignItems="center">

                    <Grid item container direction="column" sm={12} md={5}>

                        <Grid item>
                            <Typography variant="h1">
                                Vincent Good
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="h3">
                                Industrial Enginner
                            </Typography>
                        </Grid>

                        <Grid item containter direction="column">

                            {socials.map((item, index) => (
                                <Grid item container key={index} alignItems="center">
                                    {<item.icon className={classes.socialIcon} />}
                                    <Typography variant="body1">
                                        {item.info}
                                    </Typography>
                                </Grid>
                            ))}

                            <Grid item>
                                <Button className={classes.socialButton} onClick={() => openInNewTab("https://www.linkedin.com/in/vincent-good")}>
                                    <LinkedInIcon className={classes.socialIcon} />
                                </Button>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item align="center" sm={12} md={4}>
                        <img className={classes.headshot} src={Headshot} alt="headShot" />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default Banner
