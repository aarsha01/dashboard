import React from 'react'
import { Divider, Paper, Stack, Typography } from "@mui/material";

const BoxWidget = ({data, metaData=[],title}) => {

  return (
    <Paper sx={{width:'auto',height:'100%',padding:'15px'}} variant="outlined">
      <Typography>
        {title}
      </Typography>
      <Stack direction='column' justifyContent={'space-between'} gap={2}>
        {metaData.map((Icon,i) =>(
          <>
          {i > 0 && <Divider orientation="vertical" flexItem />}
          <Stack direction='row' justifyContent='space-between' alignItems={'center'}>
            <Icon sx={{fontSize:'40px'}} color="primary"/>
            <Typography fontSize='30px' fontWeight='bold' color='secondary'>{data[i]}</Typography>
          </Stack>
          </>
        ))}
      </Stack>
     
    </Paper>
   
  );
};

export default BoxWidget;






