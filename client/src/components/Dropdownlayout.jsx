import { Outlet } from 'react-router-dom'
import DropdownComponent from "./dropdown"
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Marqueefn from './Marquee';
function DropdownLayout({ children, setFilterQuery, filterQuery }) {
  return (
    <>
      <Box width='100%' height={'11vh'} position={'relative'}>
        <Marqueefn />
        <DropdownComponent filterQuery={filterQuery} setQuery={setFilterQuery} />


      </Box>
      <Outlet />
    </>
  );
}

export default DropdownLayout