import React from 'react'
import { Outlet } from 'react-router-dom'
import NavSidebar from './NavSidebar'

function SidebarLayout() {
  return (
    <>
      <NavSidebar />
      <Outlet />
    </>
  )
}

export default SidebarLayout