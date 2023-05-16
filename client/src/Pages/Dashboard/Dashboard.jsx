import React from 'react'
import './Dashboard.css'
import Chart from '../../components/Chart'

function Dashboard() {
  return (
    <div className='dashboard-top'>
      <h1>Dashboard :)</h1>
      <div className="chart-box-top">
        <Chart />
        <Chart />
        <Chart />
      </div>
    </div>
  )
}

export default Dashboard