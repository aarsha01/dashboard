import React from 'react'
import BatteryGauge from 'react-battery-gauge'
import { Paper, Stack, Typography } from '@mui/material'
import BatteryFullIcon from '@mui/icons-material/BatteryFull';


function BatteryChart({ data }) {

  const styles = {
    batteryBody: {
      strokeWidth: 1,
      cornerRadius: 3,
      fill: 'none',
      strokeColor: 'brown',
      orientation:'vertical'
    },
    batteryCap: {
      fill: 'none',
      strokeWidth: 1,
      strokeColor: 'brown',
      cornerRadius: 2,
      capToBodyRatio: 0.3
    },
    batteryMeter: {
      fill: 'rgba(36, 255, 0, 0.75)',
       lowBatteryValue: 0,
       lowBatteryFill: 'red',
    
      outerGap: 1,
      noOfCells: 10, // more than 1, will create cell battery
      interCellsGap: 2
    },
    readingText: {
      lightContrastColor: 'brown',
      darkContrastColor: 'brown',
    //  lowBatteryColor: 'red',
      fontFamily: 'inherit',
      fontSize: 14,
      showPercentage: false
    },
 
  }
  
  return  (
    <Paper sx={{width:'100%',height:'100%',padding:'20px'}} variant="outlined">
      <Stack direction='row' justifyContent='space-between'>
        <Typography fontSize='large' fontWeight='bold' color='primary'>Battery Level</Typography>
        <BatteryFullIcon fontSize="large" color="primary"/>
      </Stack>
      <BatteryGauge 
        value={data}
        padding={10}
        size = {'auto'}
        aspectRatio={0.56}
        orientation='horizontal'
        customization={styles}
      />
    </Paper>
  )
}

export default BatteryChart