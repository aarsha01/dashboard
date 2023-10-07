import React, { useEffect, useState } from 'react'
import callApi from '../../helper/callApi'
import { Box, Button, Stack, Typography } from '@mui/material'
import ListGen from '../../components/ListGen'
import { useNavigate } from 'react-router-dom';

function BranchListing() {
  const headers = [
    'Branch Name', 'Code', 'Region', 'Building Name', 'Pin Code', 'Connectivity Type', 'Device Id', 'Actions'
  ];
  const [branches, setBranches] = useState([])
  const nav = useNavigate()
  useEffect(() => {
    fetchBranches()
  }, [])

  const fetchBranches = async () => {
    const branches = await callApi('branch/getAll')
    setBranches(branches.data)
  }


  const handleBranchEdit = (branch) => {
    nav(`/branch_form/${branch.Code}`)
  }

  return (
    <Box padding={5}>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} pb={2}>
        <Typography variant="h1" color="primary" textAlign='start'>Branch Details</Typography>
        <Button variant="contained" onClick={() => {nav(`/branch_form`)}}>Add</Button>
      </Stack>
      <ListGen listItems={branches} headers={headers} buttons={[{ label: 'Edit', onSubmit: handleBranchEdit }]} />

    </Box>
  )
}

export default BranchListing