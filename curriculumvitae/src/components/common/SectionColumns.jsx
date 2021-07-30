import { Typography, Box, makeStyles, Grid } from '@material-ui/core';
import { cloneElement } from 'react';
import { Children } from 'react';

const useStyles = makeStyles({
    section: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    },
})

const SectionColumns = ({ children, title, md, ...props }) => {
    const classes = useStyles()

    return (
        <Box className={classes.section} {...props}>

            { title != undefined && 
            <Typography variant="h2" style={{ paddingBottom: "3rem"}}>
                {title}
            </Typography> }
            
            <Grid container justifyContent="center" spacing={10}>

                {children}
                
            </Grid> 

        </Box>
    )
}

export default SectionColumns