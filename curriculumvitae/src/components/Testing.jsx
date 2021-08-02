import { Typography, Box, SvgIcon, Tooltip, IconButton, ClickAwayListener } from '@material-ui/core';
import { darkTheme } from '../theme';
import CustomTooltip from './CustomTooltip';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PowerBI from '../assets/PowerBi';
import Python from '../assets/Python';
import RLogo from '../assets/RLogo';
import Logo from '../assets/R_logo.svg'
import { useState } from 'react';

const data = [
    {name: "python", level: 0.85},
    {name: "R Code", level: 0.5},
    {name: "Random", level: 0.6},
]

const Testing = () => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
      <Box display="flex" justifyContent="center" pb='10rem'>
            
          <Box padding="1rem">
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                arrow
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                    <Box>
                        <Typography variant="h4" color="primary" >
                            Power BI
                        </Typography>
                        <Typography variant="body1" >
                            some stuff about python
                        </Typography>
                      </Box>
                    }>
                    <IconButton onClick={handleTooltipOpen} color="primary" style={{ boxShadow: '0 0 10px 3px ${darkTheme.palette.primary.main}' }} >
                      <PowerBI fontSize="5rem" />
                    </IconButton>
                </Tooltip>
              </div>
            </ClickAwayListener>
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

      </Box>
  )
}

export default Testing