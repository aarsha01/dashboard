import React from 'react'
import { Outlet } from 'react-router-dom'
import NavSidebar from './NavSidebar'
import Alert from './alert'
import NavbarComp from './Navbar/NavbarComp'

function SidebarLayout({data, open , setOpen}) {
  return (
    <>
      <Alert data={data} open={open} setOpen={setOpen} />
<<<<<<< HEAD
      <NavbarComp />
=======
      {/* <NavSidebar /> */}
>>>>>>> 3a24d316a364550c0ee5996168f35f280de4075d
      <Outlet />
    </>
  )
}

export default SidebarLayout