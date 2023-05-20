import React from 'react'
import './Dashboard.css'
import Chart from '../../components/Chart'
import BatChart from '../../components/battery.jsx'
import DonutChart from '../../components/donutchart'
import { Grid } from '@mui/material'
import BoxWidget from '../../components/BoxWidget'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WifiIcon from '@mui/icons-material/Wifi';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import BluetoothSearchingIcon from '@mui/icons-material/BluetoothSearching';

import ConnChart from '../../components/Connectivity'
// import DropdownComponent from '../../components/dropdown'
function Dashboard() {
  return (
    // <DashboardLayout>
    <div className='dashboard-top'>

      <div className="chart-box-top">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Chart />
          </Grid>
          <Grid item container xs={6} spacing={2} >
            <Grid item xs={4}>
              <BoxWidget endpoint='data/fetch_daydata' metaData={[{title:'Day Mode', Icon:WbSunnyIcon}]} />
            </Grid>
            <Grid item xs={4}>
              <BoxWidget endpoint='data/fetch_nightdata' metaData={[{title:'Night Mode', Icon:DarkModeIcon}]} />
            </Grid>
            <Grid item xs={4}>
              <BatChart/>
            </Grid>
            <Grid item xs={12}>
              <BoxWidget 
                endpoint='data/fetch_dataconn' 
                metaData={[
                  {title:'Wifi', Icon:WifiIcon},
                  {title:'Ethernet', Icon:SettingsInputHdmiIcon},
                  {title:'Bluetooth', Icon:BluetoothSearchingIcon},
                ]} 
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <DonutChart/>
          </Grid>
        </Grid>
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