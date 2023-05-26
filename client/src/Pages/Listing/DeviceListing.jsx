import React, { useEffect, useState } from 'react'
import callApi from '../../helper/callApi'
import { Box, Typography } from '@mui/material'
import ListGen from '../../components/ListGen'

function DeviceListing() {

  const [devices, setDevices] = useState([])
  useEffect(() => {
    fetchDevices()
  }, [])

  const fetchDevices = async ()=>{
    const devices = await callApi('device/getAll')
    setDevices(devices.data)
  }
  
  return (
    <Box padding={5}>
      <Typography  variant="h1" color="primary" textAlign='start'>Device Details</Typography>
      <ListGen listItems={devices} headers={Object.keys(devices[0]||{})} />
    </Box>
  )
}

export default DeviceListing