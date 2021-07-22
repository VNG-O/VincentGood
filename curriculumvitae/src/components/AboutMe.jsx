import { Box, Container, Grid, Typography, makeStyles } from '@material-ui/core'
import Headshot from '../assets/headshot.jpg'

const aboutTile = [
    {
        title: "Our story",
        text: "We are a small team of glasses wearing nerds that have a passion for sharing people's stories. In today's modern world there is no better platform than a clean and beautiful website.",
    },
    {
        title: "Mission",
        text: "We want to develop a close relationship with our clients to ensure that you get the product you deserve.",
    },
  ]

  const useStyles = makeStyles({
    headshot: {
        width: "300px",
        borderRadius: "50%",
    },
  });

const AboutMe = () => {
    const classes = useStyles();

    return (
        <Box>
            <Container>
                <Typography variant="h2">
                    A little bit about me...
                </Typography>

                <Grid container>

                    <Grid item align="center" xs={12} md={4}>
                        <img className={classes.headshot} src={Headshot} alt="headShot" />
                    </Grid>

                    {aboutTile.map((item, index) => (

                        <Grid item key={index} xs={12} md={4}>
                            <Typography variant="h3">
                                {item.title}
                            </Typography>
                            <Typography variant="body1">
                                {item.text}
                            </Typography>
                        </Grid>

                    ))}

                </Grid>

            </Container>
        </Box>
    )
}

export default AboutMe
