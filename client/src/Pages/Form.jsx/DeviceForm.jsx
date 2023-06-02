import React, { useEffect } from 'react';
import {useState} from 'react'
import {deviceFormInputs } from '../../Constants/deviceFormInput';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import callApi from '../../helper/callApi';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-dropdown/style.css';
import ReactDropdown from 'react-dropdown';

  
const DeviceForm =()=> {
  const [values,setValues]=useState({});
  const [branchoptions,setBranchoptions]=useState([]);
  const [zoneoptions,setZoneoptions]=useState([]);
  const {id} = useParams()
  const nav = useNavigate()

  useEffect(() => {
    if(branchoptions.length === 0){
      fetchBranchOptions()
    }
    if(id && Object.keys(values).length === 0){
      fetchDeviceData()
    }

    if(zoneoptions.length === 0){
      fetchZoneOptions()
    }
    // eslint-disable-next-line
  }, [])

  const fetchBranchOptions = async ()=>{
    const branches = await callApi('/branch/fetchBranchOptions')
    setBranchoptions(branches.data)
  } 

  const fetchZoneOptions = async()=>{
    const zones = await callApi('/device/fetchZones')
    setZoneoptions(zones.data)
  }


  const fetchDeviceData = async ()=>{
    const device = await callApi('/device/getById',{Device_ID:id})
    if(device){
      device.Date_of_Installation = new Date(device.Date_of_Installation).toISOString().slice(0, 10)
      device.Warranty_Period = new Date(device.Warranty_Period).toISOString().slice(0, 10)
      device.Last_Updated = new Date(device.Last_Updated).toISOString().slice(0, 10)
      setValues(device)
    }
  }
  


  const handleSave = async () => {
    let data= values
    let branch = branchoptions.find(obj => obj.Code === data.Branch_Code)
    data.Branch_Name = branch.Branch_Name
    const res = await callApi('/device/add',data)
    alert(res.message)
    setValues({})
  };

  const handleEdit = async ()=>{
    const res = await callApi('/device/edit',values)
    alert(res.message)
    setValues({})
    nav('/allDevices')
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
  const device_options = [
    { value: 'active', label: 'Active',className:'Active'},
    { value: 'bypassed', label: 'Bypassed',className:'Bypassed'},
    { value: 'disabled', label: 'Disabled',className:'Disabled'},
  ];

  return (
    <Box padding={5} overflow='auto'>
      <Stack alignItems='center' gap={3} component='form' onSubmit={handleSubmit}>
        <Typography  variant="h1" color="primary">Device Details</Typography>
          <Stack  alignItems='flex-start' direction='row' gap={5}>
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
                    <MenuItem value={values['Branch_Code'] || {}}>
                      {(values['Branch_Code'] && values['Branch_Name']) ? `${values['Branch_Code']} - ${values['Branch_Name']}` : ''}
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
