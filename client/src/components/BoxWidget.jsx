import React from 'react'
import { Divider, Paper, Stack, Typography } from "@mui/material";

const BoxWidget = ({ data=[], metaData = [], title }) => {

  return (
    <Paper variant="chartBox">
      <Stack direction='column' height={'100%'} justifyContent={'space-between'} gap={2}>
        <Typography variant='chartTitle'>
          {title}
        </Typography>
        {metaData.map((Icon, i) => (
          <>
            {i > 0 && <Divider orientation="horizontal" flexItem />}
            <Stack direction='row' justifyContent='space-between' alignItems={'center'}>
              <Icon sx={{ fontSize: '40px' }} color="primary" />
              <Typography fontSize='30px' fontWeight='bold' color='black'>{data[i]||0}</Typography>
            </Stack>
          </>
        ))}
      </Stack>

    </Paper>

  );
};

export default BoxWidget;






