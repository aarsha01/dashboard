import React from 'react'
import { Divider, Paper, Stack, Typography } from "@mui/material";

const BoxWidget = ({ data=[], metaData = [], title }) => {

  return (
    <Paper variant="chartBox">
      <Stack direction='column' height={'100%'} justifyContent={'space-between'} overflow={'hidden'}>
        <Typography variant='chartTitle' flex={'10%'}>
          {title}
        </Typography>
        {metaData.map((Icon, i) => (
          <>
            {/* {i > 0 && <Divider orientation="horizontal" flexItem />} */}
            <Stack direction='row' justifyContent='space-between' alignItems={'center'} flex={'30%'} gap={2}>
              <Icon sx={{ flex:'50%',width:'50%', height:'50%' }} color="primary" />
              <Typography flex={'50%'} fontSize={{sm:'18px',lg:'40px',md:'30px'}} fontWeight='bold' color='black' textAlign={'center'}>{data[i]||0}</Typography>
            </Stack>
          </>
        ))}
      </Stack>

    </Paper>

  );
};

export default BoxWidget;






