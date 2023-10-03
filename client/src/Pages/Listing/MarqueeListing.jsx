import React, { useEffect, useState } from 'react'
import callApi from '../../helper/callApi'
import { Box, Typography } from '@mui/material'
import ListMarquee from '../../components/ListMarquee'
import { useNavigate } from 'react-router-dom';

function MarqueeListing() {

  const [marquees, setMarquees] = useState([])
  const nav = useNavigate()
  useEffect(() => {
    fetchMarquees()
  }, [])

  const fetchMarquees = async ()=>{
    const marquees = await callApi('marquee/fetch')
    // console.log('marquees')
    // console.log(marquees.data[0]._id)
    setMarquees(marquees.data)
  }

  const handleMarqueeEdit = (marquee)=>{
    nav(`/marquee_form/${marquee._id}`) 
  }
  
  return (
    <Box padding={5}>
      <Typography  variant="h1" color="primary" textAlign='start'>Marquee Details</Typography>
      <ListMarquee listItems={marquees} buttons={[{label:'Edit',onSubmit:handleMarqueeEdit}]}/>
       {/* headers={Object.keys(devices[0]||{})} buttons={[{label:'Edit',onSubmit:handleDeviceEdit}]} /> */}
    </Box>
  )
}

export default MarqueeListing