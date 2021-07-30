import SectionColumns from "./common/SectionColumns";
import Card from "./common/Card";
import { Box, Typography, Grid, Container, List, ListItemIcon, ListItem, ListItemText, makeStyles, Paper } from "@material-ui/core"
import { darkTheme } from "../theme";
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import GroupIcon from '@material-ui/icons/Group';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const skills = [
    {
        title: "Technology",
        icon: <LaptopMacIcon style={{
            fontSize: 40,
            paddingTop: "0.5rem",
            paddingRight: "0.5rem",
            paddingLeft: 0,
            paddingBottom: "0.5rem",
            color: darkTheme.palette.primary.main,
        }} />,
        info: [
            "Programming (Python, R)",
            "MySQL Database Service",
            "Power BI",
            "Microsoft Office suite",
            "Comfortable in Linux",
            "Anylogic: Simulation Modelling Software",
            ]
    },
    {
        title: "Leadership",
        icon: <GroupIcon style={
                                                    {
                                                        fontSize: "4.5rem",
                                                        position: "absolute",
                                                        zIndex: "1",
                                                        top: "-15px",
                                                        left: "0"
                                                    }
                                                } />,
        info: [
            "Managed a restaurant alone regularly, in the absence of the manager",
            "House prefect at Pretoria Boys High School",
            "Tutored mathematics to school students",
            "Captain of the TuksUltimate Team",
            ]
    },
    {
        title: "Interests",
        icon: <BeachAccessIcon style={
                                                        {
                                                            fontSize: "4.5rem",
                                                            position: "absolute",
                                                            zIndex: "1",
                                                            top: "-15px",
                                                            left: "0"
                                                        }
                                                    } />,
        info: [
            "Technology – Across the board, from computers through materials and engineering",
            "Woodworking – Have made and sold home décor items",
            "Travel – Travelled to Europe, South East Asia and through Southern Africa",
            "Photography – Have done commercial assignments",
            ]
    },
]

const useStyles = makeStyles({
    socialIcon: {
        fontSize: 40,
        paddingTop: "0.5rem",
        paddingRight: "0.5rem",
        paddingLeft: 0,
        paddingBottom: "0.5rem",
        color: darkTheme.palette.primary.main,
    },
})

const Skills = (props) => {
    const classes = useStyles()

    return (
        <SectionColumns title="Skills">

            {skills.map((item, index) => (
                <Card title={item.title} md={3} key={index}>
                    <LaptopMacIcon style={{ color: darkTheme.palette.primary.main, fontSize: "4.5rem", position: "absolute", zIndex: "1", top: "-15px", left: "0" }} />

                    <List dense={true}>

                    {item.info.map((skill, i) => (
                        <ListItem key={i}>

                            <ListItemIcon>
                                <FiberManualRecordIcon />
                            </ListItemIcon>

                            <ListItemText 
                            primary={
                            <Typography variant="body1">
                                {skill}
                            </Typography>} />

                        </ListItem>
                    ))}

                    </List>
                </Card>
            ))}

        </SectionColumns>


        // <Box className={props.className} textAlign="justify" id={props.id} pt="8rem">
        //     <Container>
                
        //         <Typography variant="h2" align="center" style={{ paddingBottom: "3rem"}}>
        //             Skills
        //         </Typography>

        //         <Grid container justifyContent="center" spacing={10}>

        //             {skills.map((item, index) => (

        //                 <Grid item key={index} md={4}>
                            

                            // <LaptopMacIcon style={{ color: darkTheme.palette.primary.main, fontSize: "4.5rem", position: "absolute", zIndex: "1", top: "-15px", left: "0" }} />

                            // <Typography variant="h3" align="center" style={{ position: "relative" }}>
                            //     {item.icon}
                            //     {item.title}
                            // </Typography>
                            
                            // <Box display="flex" align="center">
                            //     {item.icon}
                            //     <Typography variant="h3">
                            //         {item.title}
                            //     </Typography>
                            // </Box>

                            // <List dense={true}>

                            //     {item.info.map((item, index) => (
                            //         <ListItem key={index}>

                            //             <ListItemIcon>
                            //                 <FiberManualRecordIcon />
                            //             </ListItemIcon>

                            //             <ListItemText 
                            //             primary={
                            //             <Typography variant="body1">
                            //                 {item}
                            //             </Typography>} />

                            //         </ListItem>
                            //     ))}

                            // </List>
        //                 </Grid>
                        

        //             ))}

        //         </Grid>

        //     </Container>
        // </Box>
    )
}

export default Skills
