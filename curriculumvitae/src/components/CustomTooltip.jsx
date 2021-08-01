import { Typography, Paper } from "@material-ui/core";
import createTypography from "@material-ui/core/styles/createTypography";
import { darkTheme } from "../theme";

function getIntroOfPage(label){
    if (label === 'python') {
      return "cool python stuff";
    } if (label === 'R Code') {
      return "cool R stuff";
    } if (label === 'Random') {
      return "cool random stuff";
  }
}

const CustomTooltip = ({ payload, label, active }) => {
    
    if (active) {
      return (
        <Paper style={{ padding: "0.5rem", color: darkTheme.palette.primary.main  }}>
            <Typography variant="h5">
                {`${label} : ${payload[0].value}`}
            </Typography>
            <Typography variant="body2">
                {getIntroOfPage(label)}
            </Typography>
        </Paper>
      );
    }
  
    return null;
}

export default CustomTooltip
