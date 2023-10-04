import React, { useEffect } from 'react';
import {useState} from 'react'
import { marqueeFormInput } from '../../Constants/marqueeFormInput';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box, Grid, Stack, TextField } from '@mui/material';
import callApi from '../../helper/callApi';
import { useNavigate, useParams } from 'react-router-dom';
const MarqueeForm =()=> {
  const [values,setValues]=useState({});
  const {id} = useParams()
  const nav = useNavigate()

  useEffect(() => {
    if(id && Object.keys(values).length === 0){
      fetchMarqueeData()
    }

    // eslint-disable-next-line
  }, [])

  const fetchMarqueeData = async ()=>{
    const marquee = await callApi('/marquee/getById',{id:id})
    if(marquee){
      marquee.data.EndDate = new Date(marquee.data.EndDate).toISOString().slice(0, 10)
      setValues(marquee.data)
    }
  }

  const handleSave = async () => {
    const data= values
    const res = await callApi('/marquee/add',Object.fromEntries(data.entries()))
    alert(res.message)
    setValues({})
  };

  const handleEdit = async ()=>{
    const res = await callApi('/marquee/edit',values)
    alert(res.message)
    setValues({})
    nav('/allMarquee')
  }

  const handleSubmit = (e)=>{
    console.log('sdkmkm');
    e.preventDefault();
    id ? handleEdit() : handleSave()
  }
  

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box padding={5} overflow='auto' sx={{width:'100%'}}>
      <Stack alignItems='center' gap={3}>
        <Typography  variant="h1" color="primary">MARQUEE TEXT </Typography>
        <Stack width='80%' component='form' onSubmit={handleSubmit} alignItems='center' >
            <Grid width='100%' container spacing={2}>
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
            <Button variant="contained" color="primary" type='submit'>SAVE</Button>
        </Stack>
        
      </Stack>
    </Box>
  );
}; 

export default MarqueeForm;
