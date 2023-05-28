import  {Outlet} from 'react-router-dom'
import DropdownComponent from "./dropdown"
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Marquee from './Marquee';
  function DropdownLayout({ children }) {

    const [filterQuery, setQuery] = useState({key:null,value:null})
    return (
      <Box overflow='auto' width='100%'>
        <DropdownComponent setQuery={setQuery} />
        <Marquee/>
        <Outlet context={filterQuery} />
      </Box>
    );
  }
  
export default DropdownLayout