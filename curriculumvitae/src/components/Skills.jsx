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
        icon: <LaptopMacIcon viewBox="0 -7 24 24" style={{fontSize: "3rem" }}/>,
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
        icon: <GroupIcon />,
        info: [
            "Managed a restaurant alone regularly, in the absence of the manager",
            "House prefect at Pretoria Boys High School",
            "Tutored mathematics to school students",
            "Captain of the TuksUltimate Team",
            ]
    },
    {
        title: "Interests",
        icon: <BeachAccessIcon />,
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
                <Card title={[item.icon, item.title]} md={3} key={index}>

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
    )
}

export default Skills
