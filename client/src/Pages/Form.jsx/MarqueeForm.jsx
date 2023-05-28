import React from 'react';
import {useState} from 'react'
import { marqueeFormInput } from '../../Constants/marqueeFormInput';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box, Grid, Stack, TextField } from '@mui/material';
import callApi from '../../helper/callApi';
const MarqueeForm =()=> {
  const [values,setValues]=useState({});


  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents refresh of page on submmission.
    const data= new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
    const res = await callApi('/marquee/add',Object.fromEntries(data.entries()))
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
    <Box padding={5} overflow='auto'>
      <Stack alignItems='center' gap={3}>
        <Typography  variant="h1" color="primary">Register</Typography>
        <Stack component='form' onSubmit={handleSubmit} alignItems='center' >
            <Grid width='80%' container spacing={2}>
              {marqueeFormInput.map((inputs,i)=>(
                <Grid item xs={4} key={inputs.id}>
                  <TextField
                    fullWidth
                    variant='filled'
                    {...inputs} 
                    name={inputs.name.replaceAll(' ','_')}
                    autoComplete={inputs.name}
                    onChange={onChange}
                    error={values[inputs.name.replaceAll(' ','_')] === ""}
                    helperText={values[inputs.name.replaceAll(' ','_')] === "" ? 'Empty field!' : ' '}
                    sx={{fieldset:{borderColor:'white'}}}
                    autoFocus={i===0 && true}
                    value={values[inputs.name.replaceAll(' ','_')] || ''}
                  />
                </Grid>
              )
              )}
            </Grid>
            <Button variant="contained" color="primary" type='submit'>Submit</Button>
        </Stack>
        
      </Stack>
    </Box>
  );
}; 

export default MarqueeForm;
