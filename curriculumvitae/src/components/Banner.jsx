import { darkTheme } from '../theme';
import { Box, Grid, Typography, Button, makeStyles, IconButton, Link } from '@material-ui/core';
import Headshot from '../assets/headshot.jpg';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CakeIcon from '@material-ui/icons/Cake';
import EmailIcon from '@material-ui/icons/Email';
import GetAppIcon from '@material-ui/icons/GetApp';

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
    headshot: {
        width: "250px",
        borderRadius: "50%",
    },

    // bannerButton: {
    //     padding: "0",
    //     margin: "0",

    //     '&:hover': {
    //         cursor: "pointer",
    //         color: "#fff555",
    //     },
    // },

    iconButton: {
        fontSize: 50,
        borderRadius: darkTheme.shape.borderRadius,
        color: "#0a66c2",
        padding: 0,
        margin: "1rem",
        boxShadow: darkTheme.shadows[2],
        transition: darkTheme.transitions.easing.easeInOut,
        transitionDuration: darkTheme.transitions.duration.short,

        '&:hover': {
            color: "#063D74",
        },
    },

    socialIcon: {
        fontSize: 40,
        paddingTop: "0.5rem",
        paddingRight: "0.5rem",
        paddingLeft: 0,
        paddingBottom: "0.5rem",
        color: darkTheme.palette.primary.main,
    },
  });

const Banner = (props) => {
    const classes = useStyles();

    const openInNewTab = (url) => {
        window.open(url, "_blank")
      }

    return (
        <Box className={props.className} textAlign={{ xs: "center", md: "left" }} id="home">
            <Grid container spacing={10} alignItems="center" justifyContent="center">

                <Grid item>
                    
                    <Typography variant="h1">
                        Vincent Good
                    </Typography>
                    <Typography variant="h3">
                        Industrial Enginner
                    </Typography>
                        {socials.map((item, index) => (
                            <Box key={index} display="flex" alignItems="center" justifyContent={{ xs: "center", md: "left" }}>
                                {<item.icon className={classes.socialIcon}/>}
                                <Typography variant="body1">
                                    {item.info}
                                </Typography>
                            </Box>
                        ))}
                    
                    <Box display="flex" alignItems="center" justifyContent={{xs: "center", md: "left"}}>

                        {/* <Link className={classes.bannerButton} onClick={() => openInNewTab("https://www.linkedin.com/in/vincent-good")} aria-label="linkedIn"> */}
                            {/* <LinkedInIcon className={classes.iconButton}/> */}
                        {/* </Link> */}

                        {/* <SvgIcon className={classes.iconButton} component={ LinkedInIcon } viewBox="0 0 24 24" /> */}

                        <IconButton className={classes.iconButton} component={Link} onClick={() => openInNewTab("https://www.linkedin.com/in/vincent-good")} aria-label="linkedIn">
                            <LinkedInIcon style={{ fontSize: 38, width: "100%" }} viewBox="3 3 18 18"/>
                        </IconButton>

                        <Button
                        component={Link}
                        variant="contained"
                        color="primary"
                        startIcon={<GetAppIcon />}
                        download="VincentGood_cv.pdf"
                        href="/VincentGood_cv.pdf"
                        aria-label="cvDownload">
                            <Typography variant="body1" >
                                CV
                            </Typography>
                        </Button>

                    </Box>

                </Grid>

                <Grid item>
                    <img className={classes.headshot} src={Headshot} alt="headShot" />
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default Banner
