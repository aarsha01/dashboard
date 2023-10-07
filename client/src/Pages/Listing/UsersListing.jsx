import React, { useEffect, useState } from 'react'
import callApi from '../../helper/callApi'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ListGen from '../../components/ListGen';

function MarqueeListing() {



  const [users, setusers] = useState([])
  const nav = useNavigate()
  useEffect(() => {
    fetchusers()
  }, [])

  const fetchusers = async ()=>{
    const users = await callApi('user/fetch_users')
    setusers(users.data)
  }

  const handleMarqueeEdit = (user)=>{
    nav(`/user_form/${user._id}`) 
  }

  return (
    <Box padding={5}>
      <Typography  variant="h1" color="primary" textAlign='start'>Marquee Details</Typography>
      <ListGen listItems={users} headers={headers} buttons={[{label:'Edit',onSubmit:handleMarqueeEdit}]}/>
    </Box>
  )
}

export default MarqueeListing