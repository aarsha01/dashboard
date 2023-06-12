import React from 'react'
import { Outlet } from 'react-router-dom'
import Alert from './alert'

function AlertLayout({data, open , setOpen}) {
  return (
    <>
      <Alert data={data} open={open} setOpen={setOpen} />
      <Outlet />
    </>
  )
}

export default AlertLayout