import React, { useEffect, useState } from 'react'
import callApi from '../../helper/callApi'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ListGen from '../../components/ListGen';

function MarqueeListing() {

  const headers = [
    'Title',
    'Description',
    'EndDate',
    'Actions',
  ];

  const [marquees, setMarquees] = useState([])
  const nav = useNavigate()
  useEffect(() => {
    fetchMarquees()
  }, [])

  const fetchMarquees = async () => {
    const marquees = await callApi('marquee/fetchAll')
    setMarquees(marquees.data)
  }

  const handleMarqueeEdit = (marquee) => {
    nav(`/marquee_form/${marquee._id}`)
  }

  return (
    <Box padding={5}>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} pb={2}>
        <Typography variant="h1" color="primary" textAlign='start'>Marquee Details</Typography>
        <Button variant="contained" onClick={() => { nav(`/marquee_form`) }}>Add</Button>
      </Stack>
      <ListGen listItems={marquees} headers={headers} buttons={[{ label: 'Edit', onSubmit: handleMarqueeEdit }]} />
    </Box>
  )
}

export default MarqueeListing