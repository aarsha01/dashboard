import  {Outlet} from 'react-router-dom'
import DropdownComponent from "./dropdown"
import React from 'react';
import { Box } from '@mui/material';
  function DropdownLayout({ children }) {
    return (
      <Box overflow='auto'>
        <DropdownComponent />
        <Outlet/>
      </Box>
    );
  }
  
export default DropdownLayout