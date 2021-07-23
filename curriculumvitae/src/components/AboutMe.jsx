import { Box, Container, Grid, Typography, makeStyles } from '@material-ui/core';

const aboutTile = [
    {
        title: "My story",
        text: "As an Industrial Engineer, I enjoy using my problem-solving ability and technical skills to tackle tasks head-on. My academic background, industrial placements, and work experience have given me the ability to assess a situation and adapt my approach accordingly in a high-stress environment. This also further developed my attention to detail, team management and interpersonal communication skills. \n \n Having travelled to England, Southern Africa, and South-East Asia, I am accustomed to adapting to my surroundings and bringing a unique perspective to others. Africa is my continent, and I believe in helping grow it to its full potential.",
    },
    {
        title: "Values",
        text: "The people in my life hold a special place in my heart.",
    },
  ]

const AboutMe = (props) => {

    return (
        <Box className={props.className} textAlign="justify">
            <Container >
                <Typography variant="h2" align="center" style={{ paddingBottom: "3rem"}}>
                    A little bit about me...
                </Typography>

                <Grid container justifyContent="center" spacing={10}>

                    {aboutTile.map((item, index) => (

                        <Grid item key={index} md={4}>
                            <Typography variant="h3" align="center">
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
