import React from 'react'
import { Divider, Paper, Stack, Typography } from "@mui/material";

const BoxWidget = ({ data=[], metaData = [], title }) => {

  return (
    <Paper sx={{ width: 'auto', height: '100%', padding: '15px' }} variant="outlined">
      <Stack direction='column' height={'100%'} justifyContent={'space-between'} gap={2}>
        <Typography>
          {title}
        </Typography>
        {metaData.map((Icon, i) => (
          <>
            {i > 0 && <Divider orientation="horizontal" flexItem />}
            <Stack direction='row' justifyContent='space-between' alignItems={'center'}>
              <Icon sx={{ fontSize: '40px' }} color="primary" />
              <Typography fontSize='30px' fontWeight='bold' color='secondary'>{data[i]||0}</Typography>
            </Stack>
          </>
        ))}
      </Stack>

    </Paper>

  );
};

export default BoxWidget;






