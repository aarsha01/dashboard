import React from 'react';
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box, Grid, Stack, TextField } from '@mui/material';
import callApi from '../../helper/callApi';
const Zoneform = () => {
  const [values, setValues] = useState({});


  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents refresh of page on submmission.
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
    const res = await callApi('/zone/add', Object.fromEntries(data.entries()))
    alert(res.message)
    setValues({})
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box padding={5} overflow='auto' width='100%'>
      <Stack alignItems='center' gap={3}>
        <Typography variant="h1" color="primary">Register</Typography>
        <Stack component='form' onSubmit={handleSubmit} alignItems='center' width='100%' >
          <Grid width='80%' container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant='filled'
                name='Zone_name'
                onChange={onChange}
                error={values['Zone_name'] === ""}
                helperText={values['Zone_name'] === "" ? 'Empty field!' : ' '}
                sx={{ fieldset: { borderColor: 'white' } }}
                autoFocus={true}
                value={values['Zone_name'] || ''}
                type="text"
                label="Zone Name"
                required={true}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant='filled'
                name='Status'
                onChange={onChange}
                error={values['Status'] === ""}
                helperText={values['Status'] === "" ? 'Empty field!' : ' '}
                sx={{ fieldset: { borderColor: 'white' } }}
                autoFocus={true}
                value={values['Status'] || ''}
                type="text"
                label="Status"
                required={true}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type='submit'>Save</Button>
        </Stack>

      </Stack>
    </Box>
  );
};

export default Zoneform;


