import React from 'react'
import { Outlet } from 'react-router-dom'
import Alert from './alert'

function AlertLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default AlertLayout