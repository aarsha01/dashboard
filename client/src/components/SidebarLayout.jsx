import React from 'react'
import { Outlet } from 'react-router-dom'
import NavSidebar from './NavSidebar'
import Alert from './alert'
import NavbarComp from './Navbar/NavbarComp'

function SidebarLayout({data, open , setOpen}) {
  return (
    <>
      {/* <Alert data={data} open={open} setOpen={setOpen} /> */}
      <NavbarComp />
      <Outlet />
    </>
  )
}

export default SidebarLayout