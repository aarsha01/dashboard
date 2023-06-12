import React, { useEffect, useState } from 'react'
import callApi from '../../helper/callApi'
import { Box, Typography } from '@mui/material'
import ListGen from '../../components/ListGen'
import { useNavigate } from 'react-router-dom';

function DeviceListing() {

  const [devices, setDevices] = useState([])
  const nav = useNavigate()
  useEffect(() => {
    fetchDevices()
  }, [])

  const fetchDevices = async ()=>{
    const devices = await callApi('device/getAll')
    setDevices(devices.data)
  }

  const handleDeviceEdit = (device)=>{
    nav(`/device_form/${device.Device_ID}`) 
  }
  
  return (
    <Box padding={5}>
      <Typography  variant="h1" color="primary" textAlign='start'>Device Details</Typography>
      <ListGen listItems={devices} headers={Object.keys(devices[0]||{})} buttons={[{label:'Edit',onSubmit:handleDeviceEdit}]} />
    </Box>
  )
}

export default DeviceListing