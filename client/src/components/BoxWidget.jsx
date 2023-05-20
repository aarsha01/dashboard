import React, { useEffect, useState } from 'react'
import callApi from '../helper/callApi'
import { Divider, Paper, Stack, Typography } from "@mui/material";

const BoxWidget = ({endpoint, metaData=[]}) => {

    const [data, setData] = useState([])

    useEffect(() => {
      fetchData()
      // eslint-disable-next-line
    }, [])
  
    const fetchData = async ()=>{
      const data = await callApi(endpoint)
      setData(data?.data)
    }

  return (
    <Paper sx={{width:'100%',height:'100%',padding:'20px'}} variant="outlined">
      <Stack direction='row' height='100%' gap={2}>
        {metaData.map(({title, Icon},i) =>(
          <>
          {i > 0 && <Divider orientation="vertical" flexItem />}
          <Stack flex={1} justifyContent='space-between' height='100%' gap={3}>
            <Stack direction='row' justifyContent='space-between'>
              <Typography fontSize='large' fontWeight='bold' color='primary'>{title}</Typography>
              <Icon fontSize="large" color="primary"/>
            </Stack>
            <Typography fontSize='40px' fontWeight='bold' color='secondary'>{data[i]}</Typography>
          </Stack>
          </>
        ))}
      </Stack>
     
    </Paper>
   
  );
};

export default BoxWidget;






