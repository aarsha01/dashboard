import React, { useEffect, useState } from 'react'
import callApi from '../../helper/callApi'
import { Box, Button, Stack, Typography } from '@mui/material'
import ListGen from '../../components/ListGen'
import { useNavigate } from 'react-router-dom';

function DeviceListing() {

  const headers = [
    'Device ID',
    'Hardware Version',
    'Software Version',
    'IP Address',

    'Branch Name',
    'Branch Code',
    'Actions',
  ];

  const [devices, setDevices] = useState([])
  const nav = useNavigate()
  useEffect(() => {
    fetchDevices()
  }, [])

  const fetchDevices = async () => {
    const devices = await callApi('device/getAll')
    setDevices(devices.data)
  }

  const handleDeviceEdit = (device) => {
    nav(`/device_form/${device.Device_ID}`)
  }

  return (
    <Box padding={5}>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} pb={2}>
        <Typography variant="h1" color="primary" textAlign='start'>Device Details</Typography>
        <Button variant="contained" onClick={() => { nav(`/device_form`) }}>Add</Button>
      </Stack>
      <ListGen listItems={devices} headers={headers} buttons={[{ label: 'Edit', onSubmit: handleDeviceEdit }]} />
    </Box>
  )
}

export default DeviceListing