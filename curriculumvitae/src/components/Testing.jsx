import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Box, SvgIcon } from '@material-ui/core';
import MuiTooltip from '@material-ui/core/Tooltip'
import { darkTheme } from '../theme';
import CustomTooltip from './CustomTooltip'
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PowerBI from '../assets/PowerBi'
import Python from '../assets/Python'
import RLogo from '../assets/RLogo'

const data = [
    {name: "python", level: 0.85},
    {name: "R Code", level: 0.5},
    {name: "Random", level: 0.6},
]

const Testing = () => {

    return (
        <Box display="flex">
            <BarChart
              width={500}
              height={300}
              data={data}
              layout="vertical"
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis type="number" tick={null} label={null}/>
              <YAxis type="category"
              dataKey="name" />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "none" }}/>
              <Legend />
              <Bar dataKey="level" fill={darkTheme.palette.secondary.main} />
            </BarChart>

              {/* <MuiTooltip title={
                  <Typography variant="body1" >
                      Python
                  </Typography>
              } >
                    
              </MuiTooltip> */}

            <PowerBI fontSize="5rem" />
            <Python fontSize="5rem" />
            <RLogo fontSize="5rem" />

        </Box>
    )
}

export default Testing