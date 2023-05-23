import React from 'react';
import { Box, Button, Grid } from '@mui/material';

const MyPage = () => {
  const handleButtonClick = (boxNumber) => {
    console.log(`Button clicked in Box ${boxNumber}`);
    // Add your custom logic here for handling the button click
  };

  return (
    <div style={{ padding: '50px' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              width: '100%',
              height: '200px',
              bgcolor: 'primary.main',
              color: 'white',
              p: 2,
            }}
          >
            First Box
            device id
            <Button variant="contained" onClick={() => handleButtonClick(1)}>
              Button 1
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              width: '100%',
              height: '200px',
              bgcolor: 'secondary.main',
              color: 'white',
              p: 2,
            }}
          >
            Second Box
            <Button variant="contained" onClick={() => handleButtonClick(2)}>
              Button 2
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              width: '100%',
              height: '200px',
              bgcolor: 'info.main',
              color: 'white',
              p: 2,
            }}
          >
            Third Box
            <Button variant="contained" onClick={() => handleButtonClick(3)}>
              Button 3
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyPage;
