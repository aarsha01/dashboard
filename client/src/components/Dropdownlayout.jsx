import  {Outlet} from 'react-router-dom'
import DropdownComponent from "./dropdown"
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Marqueefn from './Marquee';
  function DropdownLayout({ children, setFilterQuery }) {

    return (
      <Box overflow='auto' width='100%'>
        <Marqueefn/>
        <DropdownComponent setQuery={setFilterQuery} />
        
        <Outlet />
      </Box>
    );
  }
  
export default DropdownLayout