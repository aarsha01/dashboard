import  {Outlet} from 'react-router-dom'
import DropdownComponent from "./dropdown"
import React from 'react';
import { Box } from '@mui/material';
import Marqueefn from './Marquee';
  function DropdownLayout({ children }) {
    return (
      <Box overflow='auto' width='100%'>
        <DropdownComponent />
        <Marqueefn/>
        <Outlet/>
      </Box>
    );
  }
  
export default DropdownLayout