// import Skill from "./Skill";
import { Box, Typography, Grid, Container, List, ListItemIcon, ListItem, ListItemText } from "@material-ui/core"
import { darkTheme } from "../theme";
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import GroupIcon from '@material-ui/icons/Group';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const skills = [
    {
        title: "Technology",
        icon: <LaptopMacIcon style={
                                                        {
                                                            fontSize: "4.5rem",
                                                            position: "absolute",
                                                            zIndex: "1",
                                                            top: "-15px",
                                                            left: "0"
                                                        }
                                                    } />,
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

const Skills = (props) => {
    return (
        // <Box>
        //     <Container>

        //         <Typography variant="h2" align="center" style={{ paddingBottom: "3rem"}}>
        //             Skills
        //         </Typography>

        //         <Grid container justifyContent="center" spacing={10}>

        //             {skills.map((item, index) => (
        //                 <Grid item key={index} md={4}>
        //                     <Skill skill={item}/>
        //                 </Grid>
        //             ))}

        //         </Grid>

        //     </Container>
        // </Box>

        <Box className={props.className} textAlign="justify" id={props.id} pt="8rem">
            <Container>
                
                <Typography variant="h2" align="center" style={{ paddingBottom: "3rem"}}>
                    Skills
                </Typography>

                <Grid container justifyContent="center" spacing={10}>

                    {skills.map((item, index) => (

                        <Grid item key={index} md={4}>
                            <Typography variant="h3" align="center">
                                {item.title}
                            </Typography>

                            <List dense={true}>

                            {item.info.map((item, index) => (
                                <ListItem key={index}>

                                    <ListItemIcon>
                                        <FiberManualRecordIcon />
                                    </ListItemIcon>

                                    <ListItemText 
                                    primary={
                                    <Typography variant="body1">
                                        {item}
                                    </Typography>} />

                    </ListItem>
                ))}

            </List>
                        </Grid>

                    ))}

                </Grid>

            </Container>
        </Box>
    )
}

export default Skills
