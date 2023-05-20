import React from 'react';
import {useState} from 'react'
import {deviceFormInputs } from '../../Constants/deviceFormInput';
import './Form.css'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box, Grid, Stack, TextField } from '@mui/material';
import callApi from '../../helper/callApi';
const DeviceForm =()=> {
  const [values,setValues]=useState({});


  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents refresh of page on submmission.
    const data= new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
    const res = await callApi('/device/add',Object.fromEntries(data.entries()))
    alert(res.message)
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
        <Typography  variant="h1" color="primary">Device Details</Typography>
        <Stack component='form' onSubmit={handleSubmit} alignItems='center' >
            <Grid width='80%' container spacing={2}>
              {deviceFormInputs.map((inputs,i)=>(
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
                  />
                </Grid>
              )
              )}
            </Grid>
            <Button variant="contained" color="primary" type='submit'>Save</Button>
        </Stack>
        
      </Stack>
    </Box>
  );
}; 

export default DeviceForm;