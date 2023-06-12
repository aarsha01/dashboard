import React from 'react'
import { Divider, Paper, Stack, Typography } from "@mui/material";

const BoxWidget = ({data, metaData=[]}) => {

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






