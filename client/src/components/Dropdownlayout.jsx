import  {Outlet} from 'react-router-dom'
import DropdownComponent from "./dropdown"
import React from 'react';
  function DropdownLayout({ children }) {
    return (
      <div>
        <DropdownComponent />
        <Outlet/>
      </div>
    );
  }
  
export default DropdownLayout