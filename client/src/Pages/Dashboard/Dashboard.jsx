import React from 'react'
import './Dashboard.css'
import Chart from '../../components/Chart'
import BatChart from '../../components/battery.jsx'
import DayChart from '../../components/daymode'
import NightChart from '../../components/nightmode'
import DonutChart from '../../components/donutchart'
import ConnChart from '../../components/Connectivity'
// import DropdownComponent from '../../components/dropdown'
function Dashboard() {
  return (
    <div className='dashboard-top'>
      
      <div className="chart-box-top">
        {/* <DropdownComponent/> */}
        <Chart />
        <DonutChart/>
        <BatChart/>
        
        <div className="widgets">
          <DayChart type="user" />
          <NightChart type="user" />
          <ConnChart type="user" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard