import { Typography, Box, SvgIcon, Tooltip, Icon } from '@material-ui/core';
import { darkTheme } from '../theme';
import CustomTooltip from './CustomTooltip';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PowerBI from '../assets/PowerBi';
import Python from '../assets/Python';
import RLogo from '../assets/RLogo';
import Logo from '../assets/R_logo.svg'

const data = [
    {name: "python", level: 0.85},
    {name: "R Code", level: 0.5},
    {name: "Random", level: 0.6},
]

const Testing = () => {

    return (
        <Box display="flex" justifyContent="center" pb='10rem'>

              {/* <Tooltip title={
                  <Typography variant="body1" >
                      Python
                  </Typography>
              } >
                    
              </Tooltip> */}

            <Box padding="1rem">
              <Tooltip title="teseting">
                {/* <PowerBI fontSize="5rem" /> */}
                <Typography variant="body1">this is a div</Typography>
              </Tooltip>
            </Box>

            <Box padding="1rem">
              <Tooltip title={
                    <Typography variant="body1" >
                        Python
                    </Typography>
                }>
                <Python fontSize="5rem" />
              </Tooltip>
            </Box>

            <Box padding="1rem">
              <Tooltip title={
                    <Typography variant="body1" >
                        Python
                    </Typography>
                }>
                <RLogo fontSize="5rem"/>
              </Tooltip>
            </Box>

            <Icon>
              <img src="../assets/R_logo.svg" />
            </Icon>

        </Box>
    )
}

export default Testing