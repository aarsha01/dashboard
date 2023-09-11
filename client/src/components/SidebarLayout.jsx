import React from 'react'
import { Outlet } from 'react-router-dom'
import NavSidebar from './NavSidebar'
import Alert from './alert'

function SidebarLayout({data, open , setOpen}) {
  return (
    <>
      {/* <Alert data={data} open={open} setOpen={setOpen} /> */}
      <NavSidebar />
      <Outlet />
    </>
  )
}

export default SidebarLayout