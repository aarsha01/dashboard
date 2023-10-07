import React, { useEffect, useState } from 'react'
import callApi from '../../helper/callApi'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ListGen from '../../components/ListGen';

function UsersListing() {

  const headers = ['username', 'email', 'role', 'Actions']

  const [users, setusers] = useState([])
  const nav = useNavigate()
  useEffect(() => {
    fetchusers()
  }, [])

  const fetchusers = async () => {
    const users = await callApi('user/fetch_users')
    setusers(users.data)
  }

  const handleMarqueeEdit = (user) => {
    nav(`/user_form/${user._id}`)
  }

  return (
    <Box padding={5}>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} pb={2}>
        <Typography variant="h1" color="primary" textAlign='start'>User Details</Typography>
        <Button variant="contained" onClick={() => { nav(`/user_form`) }}>Add</Button>
      </Stack>
      <ListGen listItems={users} headers={headers} buttons={[{ label: 'Edit', onSubmit: handleMarqueeEdit }]} />
    </Box>
  )
}

export default UsersListing