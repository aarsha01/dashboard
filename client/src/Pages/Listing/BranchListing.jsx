import React, { useEffect, useState } from 'react'
import callApi from '../../helper/callApi'
import { Box, Typography } from '@mui/material'
import ListGen from '../../components/ListGen'
import { useNavigate } from 'react-router-dom';

function BranchListing() {
  const headers = [
    'Branch_Name',	'Code', 'Region','Building_Name', 	'Pin_Code', 'Connectivity_Type',	'Device_Id', 'Actions'
  ];
  const [branches, setBranches] = useState([])
  const nav = useNavigate()
  useEffect(() => {
    fetchBranches()
  }, [])

  const fetchBranches = async ()=>{
    const branches = await callApi('branch/getAll')
    setBranches(branches.data)
  }


  const handleBranchEdit = (branch)=>{
    nav(`/branch_form/${branch.Code}`) 
  }
  
  return (
    <Box padding={5}>
      <Typography  variant="h1" color="primary" textAlign='start'>Branch Details</Typography>
      <ListGen listItems={branches} headers={headers} buttons={[{ label: 'Edit', onSubmit: handleBranchEdit }]} />

    </Box>
  )
}

export default BranchListing