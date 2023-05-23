import React, { useEffect } from 'react';
import {useState} from 'react'
import {deviceFormInputs } from '../../Constants/deviceFormInput';
import './Form.css'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import callApi from '../../helper/callApi';
import 'react-dropdown/style.css';
import ReactDropdown from 'react-dropdown';

  
const DeviceForm =()=> {
  const [values,setValues]=useState({});
  const [branchoptions,setBranchoptions]=useState([]);

  useEffect(() => {
    if(branchoptions.length === 0){
      fetchBranchOptions()
    }
    // eslint-disable-next-line
  }, [])

  const fetchBranchOptions = async ()=>{
    const branches = await callApi('/branch/fetchBranchOptions')
    setBranchoptions(branches.data)
  } 
  


  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents refresh of page on submmission.
    let data= Object.fromEntries(new FormData(e.target).entries())
    let branch = branchoptions.find(obj => obj.Code === data.Branch_Code)
    data.Branch_Name = branch.Branch_Name
    const res = await callApi('/device/add',data)
    alert(res.message)
    setValues({})
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const device_options = [
    { value: 'active', label: 'Active' },
    { value: 'bypssed', label: 'Bypssed' },
    { value: 'disabled', label: 'Disabled' },

  ];

  return (
    <Box padding={5} overflow='auto'>
      <Stack alignItems='center' gap={3}>
        <Typography  variant="h1" color="primary">Device Details</Typography>
        <Stack component='form' onSubmit={handleSubmit} alignItems='flex-start' direction='row' gap={5}>
            {/* left grid */}
            <Grid container spacing={2}>
              {deviceFormInputs.leftFields.map((inputs,i)=>(
                <Grid item xs={12} key={inputs.id}>
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
              <Grid item xs={12}>
                <FormControl variant="filled" sx={{ minWidth: '100%' }}>
                  <InputLabel id="branch-name-code">Branch Name Code</InputLabel>
                  <Select
                    labelId="branch-name-code"
                    value={values['Branch_Code'] || ''}
                    onChange={onChange}
                    name='Branch_Code'
                  >
                    <MenuItem value={{}}>
                      <em>None</em>
                    </MenuItem>
                    {branchoptions.map((branch,i)=><MenuItem key={i} value={branch.Code}>{branch.Branch_Name} - {branch.Code}</MenuItem>)}
                  </Select>
                </FormControl>
                </Grid>
              
            </Grid>

          
            {/* right grid */}
            
            <Grid container>
            {deviceFormInputs.rightFields.map((inputs,i)=>(
                <Grid item xs={12} key={inputs.id}>
                  <Stack alignItems='center' gap={3} direction='row'>
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
                  <ReactDropdown

                  options={device_options}
                  placeholder="select"
                  
                  
                  

                  
                  />
                  </Stack>
                  
                 
                </Grid>
              )
              )}
            </Grid>
        </Stack>
        <Button variant="contained" color="primary" type='submit'>Save</Button>
        
      </Stack>
    </Box>
  );
}; 

export default DeviceForm;
