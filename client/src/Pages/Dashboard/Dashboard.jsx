import React from 'react'
import './Dashboard.css'
import Chart from '../../components/Chart'
import BatChart from '../../components/battery.jsx'
import DayChart from '../../components/daymode'
import NightChart from '../../components/nightmode'
import DonutChart from '../../components/donutchart'
import ConnChart from '../../components/Connectivity'
import { DashboardLayout } from '../../navbar/Layout'

function Dashboard() {
  return (
    <DashboardLayout>
    <div className='dashboard-top'>

      <div className="chart-box-top">

        <Chart />
        <DonutChart />
        <BatChart />

        <div className="widgets">
          <DayChart type="user" />
          <NightChart type="user" />
          <ConnChart type="user" />
        </div>
      </div>
    </div>
    </DashboardLayout>
  )
}

export default Dashboard