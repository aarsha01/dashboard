import React, { useEffect } from 'react';
import { useState } from 'react'
import { userFormInputs } from '../../Constants/userFormInput';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import callApi from '../../helper/callApi';
import { userSelect } from '../../Constants/configVariables';
const UserForm = () => {
  const [values, setValues] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents refresh of page on submmission.
    const user = await callApi('/user/add', values)
    if (user) {
      alert('User added succesfully!')
    }
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
        <Stack width='80%' component='form' onSubmit={handleSubmit} alignItems='center' >
          <Grid container spacing={2}>
            {userFormInputs.map((inputs, i) => (
              <Grid item xs={4} key={inputs.id}>
                <TextField
                  fullWidth
                  variant='filled'
                  {...inputs}
                  name={inputs.name.replaceAll(' ', '_')}
                  autoComplete={inputs.name}
                  onChange={onChange}
                  error={values[inputs.name.replaceAll(' ', '_')] === ""}
                  helperText={values[inputs.name.replaceAll(' ', '_')] === "" ? 'Empty field!' : ' '}
                  sx={{ fieldset: { borderColor: 'white' } }}
                  autoFocus={i === 0 && true}
                  value={values[inputs.name.replaceAll(' ', '_')] || ''}
                />
              </Grid>
            )
            )}
            <Grid item xs={4}>
              <FormControl variant="filled" sx={{ minWidth: '100%' }}>
                <InputLabel id="branch-name-code">Role</InputLabel>
                <Select
                  labelId='role'
                  value={values['role'] || ''}
                  onChange={onChange}
                  name='role'
                >
                  {userSelect.map((user, i) => <MenuItem key={i} value={user}>{user}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type='submit'>Submit</Button>
        </Stack>

      </Stack>
    </Box>
  );
};

export default UserForm;