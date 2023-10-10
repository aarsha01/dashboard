import React, { useEffect } from 'react';
import { useState } from 'react'
import { userFormInputs } from '../../Constants/userFormInput';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import callApi from '../../helper/callApi';
import { userSelect } from '../../Constants/configVariables';
import { useNavigate, useParams } from 'react-router-dom';
const UserForm = () => {
  const [values, setValues] = useState({});
  const { id } = useParams()
  const nav = useNavigate()

  useEffect(() => {
    if (id && Object.keys(values).length === 0) {
      fetchUser()
    }
  }, [])

  const fetchUser = async () => {
    const user = await callApi('/user/getById', { id: id })
    setValues(user.data)

  }
  const handleSave = async () => {
    const data = values
    const res = await callApi('/user/add', Object.fromEntries(data.entries()))
    alert(res.message)
    setValues({})
  };

  const handleEdit = async () => {
    const res = await callApi('/user/edit', values)
    alert(res.message)
    setValues({})
    nav('/allUsers')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? handleEdit() : handleSave()
  }

// njn verum mandana
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