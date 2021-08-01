import { Paper, Typography, Box, Grid } from '@material-ui/core'
import PropTypes from 'prop-types';

const Card = ({ title, children, paper, grid, md, ...props }) => {

    if (paper && grid) {
        return (
            <Grid item md={md}>

                <Paper style={{ padding: "2.5rem" }}>

                    <Box {...props}>

                        { title != undefined &&
                        <Box textAlign={{ xs: "center", md: "left" }}>
                            <Typography variant="h3">
                                {title}
                            </Typography>
                        </Box> }

                        {children}

                    </Box>

                </Paper>
                
            </Grid>
        )
    }

    return (
        <Grid item md={md}>

            <Box {...props}>

                { title != undefined &&
                <Box textAlign={{ xs: "center", md: "left" }}>
                    <Typography variant="h3">
                        {title}
                    </Typography>
                </Box> }

                {children}

            </Box>

        </Grid>
    )
}

export default Card

Card.defaultProps = {
    paper: false,
    grid: true,
}
Card.propTypes = {
    title: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
    paper: PropTypes.bool,
    children: PropTypes.node,
    grid: PropTypes.bool,
    md: PropTypes.number,
}